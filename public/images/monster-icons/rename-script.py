import os

def remove_prefix(filename, prefixes):
    for prefix in prefixes:
        if filename.startswith(prefix):
            return filename[len(prefix):]
    return filename

def main():
    current_directory = os.getcwd()
    prefixes_to_remove = ["MHW_", "MHWI_"]

    # Get the list of files in the current directory
    files = os.listdir(current_directory)

    # Iterate through each file and rename it if needed
    for file in files:
        old_path = os.path.join(current_directory, file)
        new_filename = remove_prefix(file, prefixes_to_remove)
        new_filename = new_filename.lower()
        new_path = os.path.join(current_directory, new_filename)

        # Check if renaming is needed
        if file != new_filename:
            os.rename(old_path, new_path)
            print(f'Renamed: {file} -> {new_filename}')

if __name__ == "__main__":
    main()
