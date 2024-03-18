# Define variables
SCRIPT := PalestineTV.py

# Define phony targets
.PHONY: all clean

# Default target
all: _data/HabibTV.yaml _data/NamurTV.yaml _data/PogodaTV.yaml

# Target to generate HabibTV.yaml
HabibFILES := $(shell find . -type f -name 'Habib*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/HabibTV.yaml: $(HabibFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@

# Target to generate NamurTV.yaml
NamurFILES := $(shell find . -type f -name 'ЭхоМосквы*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/NamurTV.yaml: $(NamurFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@

# Target to generate PogodaTV.yaml
PogodaFILES := $(shell find . -type f -name 'Pogoda*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/PogodaTV.yaml: $(PogodaFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@
