#!/bin/bash

echo "Git Repo - management"

# Display menu
echo "Please choose an option:"
echo "1. Add ALL files & changes & commit"
echo "2. Push to remote repository"
echo "3. Add ALL & Commit & Push to remote repository"

# Read user input
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        # Option 1: Add files and commit
        read -p "Enter commit message: " message
        git add .
        git commit -m "$message"
        ;;
    2)
        # Option 2: Push to remote repository
        git push
        ;;
    3)
        # Option 3: Add ALL & Commit & Push to remote repository
        read -p "Enter commit message: " message
        git add .
        git commit -m "$message"
        git push
        ;;
    *)
        echo "Invalid choice. Exiting..."
        exit 1
        ;;
esac
