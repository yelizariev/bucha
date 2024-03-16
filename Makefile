# Define variables
SCRIPT := PalestineTV.py

# Define phony targets
.PHONY: all clean

# Default target
all: _data/OdooTV.yaml

# Target to generate OdooTV.yaml
OdooFILES := $(shell find . -type f -name 'Odoo*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/OdooTV.yaml: $(OdooFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@
