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
    fi
done
