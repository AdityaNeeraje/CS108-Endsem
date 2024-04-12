#!/bin/bash

input="$1"
declare -a array=()
array+=(1)
array+=(1)

function catalan() {
    if [[ ! -n ${array["$1"]} ]]; then        
    input=$1
    catalan $((input - 1))
    input=$1
    result=0
    for (( i=0; i < $input; i++)); do
        val1=${array[i]}
        val2=${array[$((input-i-1))]}
        val2=$(echo "$val1 * $val2" | bc)
        result=$((result+val2))
    done
    array["$1"]=$result
    fi
}

catalan "$1"
echo ${array["$1"]}