import sys
import yaml
from collections import defaultdict

def read_markdown_file(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()

    yaml_data = ""
    in_yaml = False
    for line in lines:
        if line.strip() == '---':
            in_yaml = not in_yaml
        elif in_yaml:
            yaml_data += line

    attributes = yaml.safe_load(yaml_data)
    if "Shabbat" not in attributes:
        print(f"Warning: Attribute 'Shabbat' not found in {file_path}. Skipping.", file=sys.stderr)
        return None
    return attributes


def get_file_number(file_name):
    # Extract the number from the file name, or return the file name itself if no number is present
    try:
        return int(file_name.split("Odoo")[1].split(".")[0])
    except ValueError:
        return file_name

def generate_target_file(target_file, input_files):
    # Create new data for each input file
    grouped_files = defaultdict(list)
    for input_file in input_files:
        attributes = read_markdown_file(input_file)
        if attributes is None:
            continue
        secret = attributes.get("Secret", "")
        grouped_files[secret].append((input_file, attributes))

    # Sort files in each group by file number
    for secret, files in grouped_files.items():
        files.sort(key=lambda x: get_file_number(x[0]))

    # Sort groups by group size (number of files) in descending order, moving the group with empty "Secret" value to the end
    sorted_groups = sorted(grouped_files.items(), key=lambda x: (x[0] != "", len(x[1])), reverse=True)

    # Write grouped and sorted data to the target file
    with open(target_file, 'w') as f:
        for secret, files in sorted_groups:
            for input_file, attributes in files:
                f.write(f"\n{input_file}:\n")
                yaml_output = yaml.dump(attributes, default_flow_style=False, allow_unicode=True)
                indented_yaml = "\n".join([" " * 4 + line for line in yaml_output.split("\n")])
                f.write(indented_yaml)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python PalestineTV.py target_file [input_file ...]")
        sys.exit(1)

    target_file = sys.argv[1]
    input_files = sys.argv[2:]

    generate_target_file(target_file, input_files)
