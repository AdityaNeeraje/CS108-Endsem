#!/bin/bash

IFS=" "
declare -A arr=()
while read -a array; do
    for i in "${array[@]}"; do
        arr["$i"]=$((arr["$i"]+1))
    done
done < "$1"

for i in "${!arr[@]}"; do
    echo "$i: ${arr["$i"]}"
done