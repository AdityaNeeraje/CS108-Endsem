#!/bin/bash

# Function to convert a number from one base to another
convert_base() {
    local number=$1
    local from_base=$2
    local to_base=$3

    # Convert number to decimal
    local decimal=$(echo "ibase=$from_base; $number" | bc)

    # Convert decimal number to output base
    local output=$(echo "obase=$to_base; $decimal" | bc)

    echo $output
}

# Input number in base 3
input_number="101"

# Convert input number from base 3 to base 12
output_number=$(convert_base $input_number 3 12)

echo "Input Number (Base 3): $input_number"
echo "Output Number (Base 12): $output_number"
