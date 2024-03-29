# Define variables
SCRIPT := PalestineTV.py

# Define phony targets
.PHONY: all clean

# Default target
all: _data/HabibTV.yaml _data/NamurTV.yaml _data/PogodaTV.yaml _data/xFilesTV.yaml

# Target to generate HabibTV.yaml
HabibFILES := $(shell find . -type f -name 'Habib*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/HabibTV.yaml: $(HabibFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@

# Target to generate NamurTV.yaml
NamurFILES := $(shell find . -type f -name 'ЭхоМосквы*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/NamurTV.yaml: $(NamurFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@

# Target to generate PogodaTV.yaml
PogodaFILES := $(shell find . -type f -name 'Brodsky*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/PogodaTV.yaml: $(PogodaFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@

# Target to generate xFilesTV.yaml
xFILES := $(shell find . -type f -name 'xxx*.markdown' -print0 | grep -zv ' ' | tr '\0' ' ')
_data/xFilesTV.yaml: $(xFILES) | $(SCRIPT)
	python3 $(SCRIPT) $@ $^ > $@
