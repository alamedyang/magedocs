# MGS Syntax Scopes

MGS files and their data structures interact with each other according to their scope.

## Project Scope

- Everything that exists in the final game data:
    - [scripts](scripts)
    - [dialogs](dialogs)
    - [Serial dialogs](serial_dialogs)
    - [Save flags](state#save-flags) (boolean variables)
    - [Integer variables](state#integer-variables)
- These are all global references and may be accessed freely from any file.
- No ordering concerns; you may refer to a script before it's defined.
- No need to initialize or define variables before using them; they are all pre-allocated in engine and always available.
- Each of the above categories have their own namespace.
    - This means flags and variables can have identical names. The type of the variable name is determined by where (and how) the variable is used in an MGS operation (e.g. int expression, bool assignment). Ambiguous references they will be interpreted as ints by default, but can be easily coerced into bool expressions with `!!` or coerced into int expressions with an invisible operation like `*1` or `+0`. (You might want to do the latter to silence the ambiguity warning.)
- Scripts/dialogs/serial dialogs cannot be defined more than once.

## Map Scope

- Things placed on a Tiled map:
    - entities
    - geometries
- Starting from the first map in `maps.json`, the encoder crawls that map's script slots, all that map's entities, and those entities' script slots for encoding.
    - Scripts not referenced by anything the encoder has crawled will be ignored.
    - Tilesets the encoder has not encountered on a map will be ignored.
    - All scripts will reference entities based on the map the script was encountered on; a script cannot reference an entity absent on the script's map.
	- The MGS parser cannot detect these relationships, so errors are handled at the encoder level.
- All entity properties, excluding the player name, are reset upon a new map load, as are registered commands and aliases.

## File Scope

- Any syntax unique to MGS
    - [Compile-time constants](constants)
    - [Fn definitions](fns#fn-definition)
    - [Dialog and serial dialog settings](dialog_and_serial_dialog_settings)
- These structures are collected and applied as they are encountered in the file, top to bottom.
    - After the MGS parser is done, these structures will have been fully applied and effectively no longer exist. They are scripting conveniences and shortcuts, and are not "real" as far as the game engine is concerned.
- These cannot be referenced before their definition, and cannot be redefined.
- To use these definitions in multiple files you must use the `include` macro, which will copy the whole (parsed) contents of the target file into place.

## Script Scope

- Anything limited to a single [script](scripts) body, or used in reference to another item in the same script body.
	- [Label definitions](script_control_flow#label-definitions)
	- [Control logic](script_control_flow) (if/else, while, etc.)
- Copy script and fn calls can bring other script-scope items into the current script scope.

## Session Scope

- Only one thing: [arrays](arrays).
    - When arrays are [created](arrays#create), they're not destroyed or lost until the game is turned off.
    - Arrays are not included in the save data.
    - Arrays are not lost upon a fresh map load.

## Syntax Contexts

Some units of grammar are only valid in certain contexts (i.e. inside certain blocks). This is not scoping in the same way as everything else discussed. Common contexts:

- Root level (aka top of document)
- [Script block](scripts) (or script body)
- [Looping block](script_control_flow)
- [Dialog](dialogs#dialog) (or dialog body)
- [Serial dialog](serial_dialogs#serial-dialog) (or serial dialog body)
- [Dialog / serial dialog settings](dialog_and_serial_dialog_settings)

---

[Quick Links](index)