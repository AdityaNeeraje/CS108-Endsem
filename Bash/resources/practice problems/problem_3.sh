#!/bin/bash

declare -a array=()

while [[ $# -gt 0 ]]; do
    array+=("$1")
    shift
done

swap=0

for (( i = 0; i < ${#array[@]}; i++ )); do
    changed=false
    for (( j = $((i+1)); j < ${#array[@]}; j++ )); do
        if [[ ${array[$((j-1))]} -gt ${array[j]} ]]; then
            temp=${array[$((j-1))]}
            array[$((j-1))]=${array[j]}
            array[j]=$temp
            swap=$((swap+1))
            changed=true
        fi
    done
    if [[ ! $changed ]]; then
        break
    fi
done

for i in ${array[@]}; do
    echo -n "$i "
done
echo -ne "\n"
echo "$swap"