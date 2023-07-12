#!/bin/bash

base_port=${1:-3000}
host="localhost"
start_port=$base_port
end_port=3100

for ((port=start_port; port<=end_port; port++))
do
    (</dev/tcp/"$host"/"$port") >/dev/null 2>&1
    if [ $? -ne 0 ]; then
        echo "$port"
        exit 0
    fi
done
