#!/bin/bash

FILENAME=/proc/net/netstat

PORT=${1:-3000}
host="localhost"
start_port=$PORT
end_port=3100
EMPTY_PORT=$?

for ((port=start_port; port<=end_port; port++))
do
    (</dev/tcp/"$host"/"$port") >/dev/null 2>&1
    if [ $? -ne 0 ]; then
        echo "$port"
        exit 0
    # else
        # echo "$port is in use"
    fi
done


# function check_port {

# case `cat "$FILENAME" | grep "$PORT" >/dev/null; echo $?` in
#   0)
#     # echo "Port \"$PORT\" is taken. Incrementing.."
#     ;;
#   1)
#     # echo "Port \"$PORT\" is free. Proceeding.."
#     EMPTY_PORT=$PORT
#     echo "$PORT"
#     ;;
#   *)
#   echo "error"
#   exit 0
#     ;;
# esac

# }


# while [ $EMPTY_PORT == 0 ]
# do
# # echo $PORT
# check_port
# ((PORT++))
# done





