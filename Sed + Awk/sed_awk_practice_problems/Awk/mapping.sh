#!/bin/bash

# awk '
#     BEGIN {first_file=0; FS=":"}
#     FNR==1 {
#         first_file=1-first_file
#     }
#     first_file {array[$1]=$2}
#     !first_file {
#         value=$0
#         for (name in array){
#             gsub(/student_name/, name, value)
#             gsub(/roll_no/, array[name], value)
#             print value
#             value=$0
#         }
#     }
# ' ${1:-mapping_input.txt} ${2-paragraph.txt} > output.txt

awk -v input_file=${2-paragraph.txt} '
    BEGIN {FS=":"}
    {
        array[$1]=$2
    }
    END {
        for (name in array){
            print name, array[name]
        }
    }
' ${1:-mapping_input.txt} | while read name roll_no; do sed "s/student_name/$name/g" ${2-paragraph.txt}; echo -e "\n"; done

