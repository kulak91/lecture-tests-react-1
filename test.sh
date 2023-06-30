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

Check if the homework repository exists
if [ "$REPO_EXISTS" == true ]
then
   echo 'Repo exists'
else
   $(. send-error.sh "$HOMETASK_ID" "$TOKEN")
    exit 1
fi

# echo "Installing Chrome.."
# if [[ $(getconf LONG_BIT) = "64" ]]
# then
#     echo "64bit Detected" &&
#     echo "Installing Google Chrome" &&
#     wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb &&
#     sudo dpkg -i google-chrome-stable_current_amd64.deb &&
#     rm -f google-chrome-stable_current_amd64.deb
# else
#     echo "32bit Detected" &&
#     echo "Installing Google Chrome" &&
#     wget https://dl.google.com/linux/direct/google-chrome-stable_current_i386.deb &&
#     sudo dpkg -i google-chrome-stable_current_i386.deb &&
#     rm -f google-chrome-stable_current_i386.deb
# fi

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
BROWSER=none npx react-scripts start > server.log &


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
    $(. send-error.sh "$HOMETASK_ID" "$TOKEN" "$ERROR_TEXT")
    exit 1
  fi
  # if ! kill -0 "$REACT_SERVER_PID" 2>/dev/null; then
  #   echo "React server process has terminated before the expected message."
  #   kill "$REACT_SERVER_PID"
  #   exit 1
  # fi

  sleep 1
done
# "Failed to compile."
# "Compiled successfully!"

echo "Running Tests.."
cd ../$REACT_TESTS_FOLDER
npm run $REACT_TESTS_COMMAND
node merge.js
cp ./results/report.json ../

echo "Clean Up.."
# lsof -i :"$REACT_PORT" | awk 'NR>1 {print $2}' | xargs kill
PID=$(netstat -tlnp | grep ":$REACT_PORT " | awk '{print $7}' | awk -F '/' '{print $1}')
if [[ -n $PID ]]; then
  echo "Process is running on port $REACT_PORT with PID $PID"
  kill $PID
else
  echo "No process found running on port $REACT_PORT"
fi

# echo "Generating Homework Test Report.."
# npx react-scripts test --watchAll=false --json > report.json

# cd ../

# echo "Installing own dependencies.."
# npm i

# echo "Writing report.."
# npm run report

# echo "Creating feedback.."
# npm run feedback -- "$TOKEN" "$LANG"
