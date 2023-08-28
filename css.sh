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
mapfile -t lint_paths < "$devscripts_directory/lint_paths_css.txt"

# Navigate to the target directory
cd "$target_directory" || exit

paths_with_css=""

# Iterate through the lint paths, add **/*.css, and run the Yarn command
for path in "${lint_paths[@]}"; do
    # Append **/*.css to each path
    path_with_css="$path**/*.css"
    paths_with_css+=" $path_with_css"
    # Run the Yarn command with the lint path and fix option
    
done

yarn lint:css $paths_with_css $fix_option