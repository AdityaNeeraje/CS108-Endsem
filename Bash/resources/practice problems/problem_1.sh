#!/bin/bash

input="$1"
shift
while [[ $# -gt 0 ]]; do
    if [[ "$input" == "$1" ]]; then
        echo "YES";
        exit 0;
    fi
    shift
done
echo "NO";
exit 0;
