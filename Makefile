# Define variables
SCRIPT := PalestineTV.py

# Define phony targets
.PHONY: all clean

# Default target
all: _data/OdooTV.yaml _data/NamurTV.yaml

# Target to generate OdooTV.yaml
OdooFILES := $(shell find . -type f -name 'Odoo*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/OdooTV.yaml: $(OdooFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@

# Target to generate NamurTV.yaml
NamurFILES := $(shell find . -type f -name 'ЭхоМосквы*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/NamurTV.yaml: $(NamurFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@
