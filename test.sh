#!/bin/bash

GITHUB_URL=$1
TOKEN=$2
LANG=${3:-en}
HOMETASK_ID=${4:-null}

REACT_TESTS_SHARED_REPO="https://github.com/kulak91/lecture-react-tests-shared.git"
REACT_TESTS_FOLDER="react-tests"
REACT_TESTS_COMMAND="test:base"
REACT_PORT=3000


CHECK_FOLDER="tmp"
REPO_EXISTS=$(. check-repo.sh "$GITHUB_URL")

# Clean up previous run
if [ -f ./result.json ]; then
  rm ./result.json
fi

if [ -f ./report.json ]; then
  rm ./report.json
fi

if [ -d ./"$CHECK_FOLDER" ]; then
  rm -rf "$CHECK_FOLDER"
fi

if [ -d ./"$REACT_TESTS_FOLDER" ]; then
  rm -rf "$REACT_TESTS_FOLDER"
fi
# ---

echo "Check if the homework repository exists"
if [ "$REPO_EXISTS" == true ]
then
   echo 'Repo exists'
else
   $(. send-error.sh "$HOMETASK_ID" "$TOKEN")
    exit 1
fi

echo "Cloning React Shared Tests Repo.."
mkdir $REACT_TESTS_FOLDER
cd ./$REACT_TESTS_FOLDER
git clone "$REACT_TESTS_SHARED_REPO" .
cp .env.example .env
npm i
cd ../

echo "Cloning student's homework.."
mkdir $CHECK_FOLDER
cd ./$CHECK_FOLDER
git clone "$GITHUB_URL" .
npm i

nc -vz 127.0.0.1 $REACT_PORT

BROWSER=none PORT=$REACT_PORT npx react-scripts start > server.log &

nc -vz 127.0.0.1 $REACT_PORT

echo "Waiting for react to compile.."
while true; do
  if grep -q -E "Compiled successfully!" server.log; then
    echo "React server compiled successfully!"
    break
  elif grep -q -E "Failed to compile" server.log; then
    ERROR_TEXT="React server failed to compile."
    echo "$ERROR_TEXT"
    lsof -i :"$REACT_PORT" | awk 'NR>1 {print $2}' | xargs kill
    $(. send-error.sh "$HOMETASK_ID" "$TOKEN" "$ERROR_TEXT")
    exit 1
  fi

  if grep -q -E "Something is already running on port" server.log; then
    ERROR_TEXT="Another react app is running.."
    echo "$ERROR_TEXT"
    $(sh ./send-error.sh "$HOMETASK_ID" "$TOKEN" "$ERROR_TEXT")
    exit 1
  fi

  sleep 1
done

nc -vz 127.0.0.1 $REACT_PORT

echo "Running Tests.."
cd ../$REACT_TESTS_FOLDER
npm run $REACT_TESTS_COMMAND
node merge.js
cp ./results/report.json ../

echo "Clean Up.."
lsof -i :"$REACT_PORT" | awk 'NR>1 {print $2}' | xargs kill

echo "Creating feedback.."
cd ../
npm run feedback -- "$TOKEN" "$LANG"
