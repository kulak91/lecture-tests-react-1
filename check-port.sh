#!/bin/bash

FILENAME=/proc/net/netstat

PORT=${1:-3000}
EMPTY_PORT=$?

function check_port {

case `cat "$FILENAME" | grep "$PORT" >/dev/null; echo $?` in
  0)
    # echo "Port \"$PORT\" is taken. Incrementing.."
    ;;
  1)
    # echo "Port \"$PORT\" is free. Proceeding.."
    EMPTY_PORT=$PORT
    echo "$PORT"
    ;;
  *)
  echo "error"
  exit 0
    ;;
esac

}


while [ $EMPTY_PORT == 0 ]
do
# echo $PORT
check_port
((PORT++))
done





