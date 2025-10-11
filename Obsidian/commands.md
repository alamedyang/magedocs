# Commands

- Commands can be registered with [[actions|actions]] inside a [[scripts|script body]], after which the player can type the command into the serial terminal to run a script.
- The first word typed is considered to be the command itself, a.k.a. the **verb**. Everything afterward (even if it's multiple words) is considered to be the command's **argument**.
- All command registrations are reset when a map is loaded.

## Interpretation

- Words are split by whitespace when interpreted. The number of spaces does not matter. `GO      NORTH` is equivalent to `GO NORTH`.
- Case is ignored. `go north` is equivalent to `GO NORTH` and `gO nOrTh`.
- The second word in a command is ignored if it is "AT" or "TO". `LOOK AT BOB` is equivalent to `LOOK BOB`
- Non-ASCII characters are not explicitly handled, so the MGE may interpret complex characters as one (or more) entirely different characters.

## Default Commands

- These commands are built into the MGE.
- Importantly, none of these default command verbs are reserved, so you may register custom arguments, e.g. `GO DENNIS` for a map without a "DENNIS" exit. Just know that these custom registrations will not appear in the list of exits provided by LOOK.
- A map's exits and script slots are defined in the map's `maps.json` definition.
- **`HELP`**: lists all commands that are currently registered, except for commands that have been hidden. Command aliases are not listed.
- **`LOOK`**: Runs the current map's `on_look` script, then prints the names of exits associated with that map.
- **`LOOK` + `<entity's current name>`**: Runs the script in that entity's `on_look` slot.
	- The current name is the entity's name in RAM at the moment, not the entity's original name when the map was first loaded.
- **`GO` + `<name of exit>`**: Runs the script associated with that exit name for that map.
	- Abbreviations of the cardinal directions are built into GO, so `GO N` will try to run `GO NORTH`. This also applies to the diagonals, e.g. `GO SW` for `GO SOUTHWEST`.

## Command Actions

#todo format like the other actions

- **Register**:
	- **Verb**:
		-  `command <verb: string[]> = <script name: string[]>;`
		-  `command <verb: string[]> = <script literal>;`
	- **Argument for verb**:
		-  `command <verb: string[]> + <argument: string[]> = <script name: string[]>;`
		-  `command <verb: string[]> + <argument: string[]> = <script literal>;`
		- Arguments that are multiple words should be wrapped in double quotes.
	- **Fail for verb**: For when an invalid argument is used with that verb.
		-  `command <verb: string[]> fail = <script name[]>;`
		-  `command <verb: string[]> fail = <script literal>;`
- **Unregister**:
	- **Verb**:
		-  `delete command <verb: string[]>;
	- **Argument for verb**:
		-  `delete command <verb: string[]> + <argument: string[]>;`
	- **Fail for verb**:
		-  `delete command <verb: string[]> fail;`
- **Hide or unhide**: hides or unhides a verb from the **`HELP`** list:
	- `hide command <verb: string[]>;`
	- `unhide command <verb: string[]>;`

**Bytecode actions**:

- `REGISTER_SERIAL_DIALOG_COMMAND`
- `UNREGISTER_SERIAL_DIALOG_COMMAND`
- `REGISTER_SERIAL_DIALOG_COMMAND_ARGUMENT`
- `UNREGISTER_SERIAL_DIALOG_COMMAND_ARGUMENT`
- `SET_SERIAL_DIALOG_COMMAND_VISIBILITY`
- `REGISTER_SERIAL_DIALOG_COMMAND_ALIAS`
- `UNREGISTER_SERIAL_DIALOG_COMMAND_ALIAS`

## Aliases

- An alias is an alternative reference to a command registration.
	- Usually these are abbreviations, such as registering the alias `i` for the command verb `inventory`.
- Aliases are not printed in the command list provided by **`HELP`**.
- **Create alias**:
	- `alias <string[]> = <command: string[]>;`
- **Delete alias**:
	- `delete alias <string[]>;`

---

[[index|Quick Links]]
