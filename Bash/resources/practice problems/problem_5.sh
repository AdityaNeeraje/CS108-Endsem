#!/bin/bash

function reformat_date() {
    curr_date="$1"
    day=${1:0:2}
    month=${1:2:2}
    year=${1:4:4}
    echo $(date -d "$month/$day/$year" +%s)
}

current_date=$(reformat_date 26112008)
readarray -d " " files < <(echo -e $(ls -a | grep -E "[a-zA-Z]*[0-9]{8}\.jpg$") " ")
mkdir ./output
for file in "${files[@]}"; do
    file=$(echo -e "$file" | tr -d '\n' | sed 's/ //g')
    if [[ "$file" =~ ^[\s\n]*$ ]]; then
        continue
    fi
    filedate=$(reformat_date ${file: -12:8})
    if [[ $((current_date - filedate)) -lt 0 ]]; then
        continue
    fi
    if [[ $((current_date - filedate)) -lt 86400 ]]; then
        mv "$file" "./output/${file:0: -4}_today.jpg"
    elif [[ $((current_date - filedate)) -lt 691200 ]]; then
        mv "$file" "./output/${file:0: -4}_weekold.jpg"
    else
        mv "$file" "./output/${file:0: -4}_quiteold.jpg"
    fi
done