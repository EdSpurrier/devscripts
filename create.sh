#!/bin/bash

echo "Git Repo - jc-s-prototype"

# Display menu
echo "Please choose an option:"
echo "1. Create a Component"
echo "2. Create a Section"
echo "3. Create a Page"

# Read user input
read -p "Enter your choice (1-3): " choice

boilerplate_folder="./devscripts/boilerplate/"
destination_app_folder="./apps/web/"

case $choice in
    1)
        # Option 1: Create a Component

        # Define the source folder
        source_folder="${boilerplate_folder}BoilerPlateComponent"

        # Prompt the user to enter the destination folder name
        read -p "Enter the new component name: " new_component_name

        # Construct the destination folder path
        destination_folder="${destination_app_folder}/components/${new_component_name}"

        # Check if the destination folder already exists
        if [ -d "$destination_folder" ]; then
            echo "Destination folder already exists. Exiting..."
            exit 1
        fi

        # Create the destination folder
        mkdir "$destination_folder"


        # Copy the source folder to the destination
        cp -R "$source_folder"/* "$destination_folder"

        # Change text within the files using sed
        sed -i "s/BoilerPlateComponent/${new_component_name}/g" "$destination_folder"/*.*

        # Rename files within the destination folder
        for file in "$destination_folder"/*; do
            new_name="${file//BoilerPlateComponent/$new_component_name}"
            mv "$file" "$new_name"
        done

        # Append a component to index.ts
        echo "export * from './${new_component_name}'" >> ${destination_app_folder}/components/index.ts
        ;;
    2)
        # Option 2: Create a Section
        echo "Create a Section => Currently Disabled. Exiting..."
        exit 1
        ;;
    3)
        # Option 3: Create a Section
        echo "Create a Page => Currently Disabled. Exiting..."
        exit 1       
        ;;
    *)
        echo "Invalid choice. Exiting..."
        exit 1
        ;;
esac
