# Commands

- Commands can be registered with [actions](actions) inside a [script body](scripts), after which the player can type the command into the [serial terminal](terminal) to run a script.
- The first word typed is considered to be the command itself, a.k.a. the **verb**. Everything afterward (even if it's multiple words) is considered to be the command's **argument**.
- All command registrations are reset when a map is loaded.

## Interpretation

- Words are split by whitespace when interpreted. The number of spaces does not matter.
- Case is ignored. `go north` is equivalent to `GO NORTH` and `gO nOrTh`.
- The second word in a command is ignored if it is "AT" or "TO". `LOOK AT BOB` is equivalent to `LOOK BOB`
- Non-ASCII characters are not explicitly handled, so the MGE may interpret complex characters as one (or more) entirely different characters.

## Default Commands

- These commands are built into the MGE.
	- Importantly, none of these default command verbs are reserved, so you may register custom arguments, e.g. `GO DENNIS` for a map without a "DENNIS" exit. Just know that these custom registrations will not appear in the list of exits provided by `LOOK`.
	- A map's exits and script slots are defined in the map's [`maps.json`](what_youll_need#maps.json) definition.
- **`HELP`**: lists all commands that are currently registered, except for commands that have been hidden. Command aliases are not listed.
- **`LOOK`**: Runs the current map's [`on_look`](scripts#on_look) script, then prints the names of exits associated with that map.
- **`LOOK` + `<entity's current name>`**: Runs the script in that entity's `on_look` slot.
	- The current name is the entity's name in RAM at the moment, not the entity's original name when the map was first loaded.
- **`GO` + `<name of exit>`**: Runs the script associated with that exit name for that map.
	- Abbreviations of the cardinal directions are built into `GO`, so `GO N` will try to run `GO NORTH`. This also applies to the diagonals, e.g. `GO SW` for `GO SOUTHWEST`.

## Command Actions

Arguments that are multiple words should be wrapped in double quotes.

The fail registration is for when an invalid argument is used with that verb.

### Register Command

```
// VERB
command <verb: string[]> = <script name: string[]>;
command <verb: string[]> = <script literal>;

// ARG FOR VERB
command <verb: string[]> + <argument: string[]> = <script name: string[]>;
command <verb: string[]> + <argument: string[]> = <script literal>;

// FAIL FOR VERB
command <verb: string[]> fail = <script name: string[]>;
command <verb: string[]> fail = <script literal>;
```

Bytecode actions:

- `REGISTER_SERIAL_DIALOG_COMMAND`
- `REGISTER_SERIAL_DIALOG_COMMAND_ARGUMENT`

### Unregister Command

Removes a command registration for various arg or fail combinations, or for the verb overall.

```
// VERB
delete command <verb: string[]>;

// ARG FOR VERB
delete command <verb: string[]> + <argument: string[]>;

// FAIL FOR VERB
delete command <verb: string[]> fail;
```

Bytecode actions:

- `UNREGISTER_SERIAL_DIALOG_COMMAND`
- `UNREGISTER_SERIAL_DIALOG_COMMAND_ARGUMENT`

### Hide or Unhide Command

Hides or unhides a verb from the **`HELP`** list.

```
// HIDE
hide command <verb: string[]>;

// UNHIDE
unhide command <verb: string[]>;
```

Bytecode actions:

- `SET_SERIAL_DIALOG_COMMAND_VISIBILITY`

## Aliases

An alias is an alternative reference to a command registration. Usually these are abbreviations, such as registering the alias `i` for the command verb `inventory`.

Aliases are not printed in the command list provided by **`HELP`**.

```
// CREATE
alias <string[]> = <command: string[]>;

// DELETE
delete alias <string[]>;
```

Bytecode actions:

- `REGISTER_SERIAL_DIALOG_COMMAND_ALIAS`
- `UNREGISTER_SERIAL_DIALOG_COMMAND_ALIAS`