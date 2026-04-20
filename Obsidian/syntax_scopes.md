# MGS Syntax Scopes

MGS files and their data structures interact with each other according to their scope. The most important of these is the distinction between [[#Project Scope|project scope]] (where everything always exists) and [[#File Scope|file scope]] (where definitions must happen before use, and only in the same file).

## Project Scope

- All [[what_youll_need#`scenario_source_files/`|game data]] and [[state|game state]]:
    - [[scripts|scripts]]
    - [[dialogs|dialogs]]
    - [[serial_dialogs|serial dialogs]]
    - [[state#Save Flags|save flags]] (boolean variables)
    - [[state#Integer Variables|integer variables]]
- These are all global references and may be accessed freely from any file at any time, even before definition.
- No need to initialize or define variables before using them; they are all pre-allocated in engine and always available. (No `let` or `var` or `const`, just use the bare variable name right away.)
- Scripts/dialogs/serial dialogs cannot be defined more than once.
- The current values of save flags and integer values can be printed inside [[dialog_and_serial_dialog_strings|dialog and serial dialog strings]].
- Each of the above categories have their own namespace.
    - This means flags and variables can have identical names. The type of the variable name is determined by where (and how) the variable is used in an MGS [[expressions_and_operators|operation]] (e.g. [[expressions_and_operators#Int Expressions|int expression]], [[expressions_and_operators#Assign Bool Value|bool assignment]]).
    - Ambiguous expressions will be interpreted as [[state#Integer Variables|ints]] by default, and will generate a compiler warning.

```mgs
_ {
	// ambiguous (ints? bools?)
	left = right;
	
	// To silence the warning, coerce the LHS
	// or RHS to a specific type of expression:
	
	// coerce to bools
	flag left = right; // sigil on the LHS
	// or
	left = !!right; // bool expression on the RHS
	
	// coerce to ints
	left = right *1; // int expression on the RHS
	left = right +0; // int expression on the RHS
}
```

## Map Scope

- Things placed on a [[maps|Tiled map]]:
    - [[entities]]
    - [[vector_objects|geometries]]
- Starting from the first map in `maps.json`, the encoder crawls that map's [[scripts#Script Slots|script slots]], all that map's entities, and those entities' script slots for encoding.
    - [[scripts|Scripts]] not referenced by anything the encoder has crawled will be ignored.
    - [[tilesets|Tilesets]] the encoder has not encountered on a map will be ignored.
    - All scripts will reference entities based on the map the script was encountered on; a script cannot reference an entity absent on the script's map.
	- The MGS parser cannot detect these relationships, so errors are handled at the encoder level.
- All [[entities#Entity Properties|entity properties]], excluding the player name, are reset upon a new map load, as are registered commands and aliases.

## File Scope

- Any syntax unique to MGS
    - [[constants|Compile-time constants]]
    - [[fns#Fn Definition|Fn definitions]]
    - [[dialog_and_serial_dialog_settings|Dialog and serial dialog settings]]
    - [[template_strings|Template strings]]
- These structures are collected and applied as they are encountered in the file, top to bottom.
    - After the MGS parser is done, these structures will have been fully applied and no longer exist. They are scripting conveniences and shortcuts, and are not "real" as far as the game engine is concerned.
- These cannot be referenced before their definition, and cannot be redefined.
- To use these definitions in multiple files you must use the [[macros#Include|Include Macro]], which will copy the whole (parsed) contents of the target file into place.

## Session Scope

- Only one thing: [[arrays|arrays]].
    - When arrays are [[arrays#Create|created]], they're not destroyed or lost until the game is turned off.
    - Arrays are not included in the [[state#Save Data|save data]].
    - Arrays are not lost upon a fresh [[maps#Map Loads|map load]].

## Syntax Contexts

Some units of grammar are only valid in certain contexts (i.e. inside certain blocks). This is not scoping in the same way as everything else discussed. Common contexts:

- Root level (aka top of document)
- [[scripts|Script block]] (or script body)
- [[script_control_flow|Looping block]] (the same as a script body, but with a few extra keywords like `return` or `break`)
- [[dialogs#Dialog|Dialog]] (or dialog body)
- [[serial_dialogs#Serial Dialog|Serial dialog]] (or serial dialog body)
- [[dialog_and_serial_dialog_settings|Dialog / serial dialog settings]]
