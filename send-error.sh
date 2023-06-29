#!/bin/bash

REPO_ERROR_CODE=1001
DEFAULT_ERROR_TEXT="Repository isn't accessible"
HOMETASK_ID=$1
TOKEN=${2:-token}
ERROR_TEXT=${3:-$DEFAULT_ERROR_TEXT}

ERROR_CODE=$REPO_ERROR_CODE
ERROR_TEXT=$REPO_ERROR_TEXT

echo "$REPO_ERROR_TEXT"
echo "{ \"userHometaskId\": \"$HOMETASK_ID\", \"token\": \"$TOKEN\", \"errorCode\": $ERROR_CODE, \"errorDescription\": \"$ERROR_TEXT\" }" >> result.json
