#!/bin/bash

# Set the desired directory
target_directory="./apps/web"

# Set the directory containing lint_paths.txt
devscripts_directory="./devscripts"

# Check if the command line argument includes '-fix'
if [[ "$*" == *"-fix"* ]]; then
    fix_option="--fix"
else
    fix_option=""
fi

# Read lint paths from the external file into an array
mapfile -t lint_paths < "$devscripts_directory/lint_paths.txt"

# Navigate to the target directory
cd "$target_directory" || exit

# Run the Yarn command with the lint paths and fix option
yarn lint:js "${lint_paths[@]}" $fix_option
