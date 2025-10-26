# Documentation Jargon and Syntax

## General Language Features

- White space agnostic.
- Comments can be line level (`//` until end of line) or block level (`/*` until `*/`). These can occur anywhere.
- Three types of bracket pairs are used:
    - `()`: [macro](macros)/[fn args](fns) and [condition](script_control_flow) statements
    - `[]`: [arrays](arrays), [action param expansions](action_param_expansions)
    - `{}`: block bodies
- Trailing commas are allowed in [arrays](arrays), [expansions](action_param_expansions), [fn args](fns), etc.
    - They are _not_ allowed in [JSON literals](json_literals).
- [Actions](actions) and other phrases that don't end with a closing bracket (`]`, `)`, `}`) are instead ended with a semicolon (`;`). This helps the parser disambiguate incomplete phrases.
- [Dialog](dialogs), [serial dialog](serial_dialogs), and almost all [script](scripts) references can be defined in place, e.g.
    - `show dialog dialogName;` (bare identifier)
    - `show dialog dialogName { PLAYER "Hi!" };` (identifier and definition)
    - `show dialog { PLAYER "Hi!" };` (anonymous definition)
    - Note that a semicolon is still required in the latter two cases because the "script literal" is part of an action phrase, which still needs to end in a semicolon.

## Style Guide

- Our naming convention for [identifiers](identifiers) is `camel_case` but there is no grammatical requirement for any particular paradigm.
- Keeping identifiers as barewords helps legibility, so is preferred.
    - Barewords may no longer contain hyphen (`-`), a word breaking character, because it made renaming identifiers en masse difficult. (No language server!) Most such cases were replaced with `_` but not all. All remaining cases are wrapped in double quotes at least, which will make it easier to rename them than before.
- Using language keywords like `player` is preferred to the long form (`entity "%PLAYER%"`).

## Jargon

### Token

A unit of text the parser considers to be a single word or word-ish unit.

- Tokens have [types](primitive_types) at the grammar level.
- `entity "Bob" x` = three tokens, all three strings (types [bareword](primitive_types#bareword), [quoted string](primitive_types#quoted-string), [bareword](primitive_types#bareword))
- `#00FF00` = one token, type [color](primitive_types#color)

### Argument

- Also called **arg**.
- A value handed to a [fn](fns) (much like a normal function arg), or the secondary word(s) after a [command verb](commands).

### Parameter

- Also called **param**.
- A unit of data inside an [action phrase](actions).
	- Some params may determine which action is chosen, but most are values given to the final bytecode instruction and will appear in the JSON intermediary step.
- Also a property-value pair for [dialog and serial dialog settings](dialog_and_serial_dialog_settings).

### Block

- Generally what falls inside a pair of matching curly braces (`{}`). Might also include the tokens right before, e.g. the script name in a [script definition](scripts#script-definitions) (`script_name {}`).

### Literal

- A value of a literal type (e.g. `100` is a number literal). Contrast this with a reference like a variable name, which might refer to a number value and could be used in many of the same places as a number, but is not a number _literal_.

## Dictionary Syntax

- I'll use `<>` to indicate "insert item here" in a syntax dictionary entry.
- The insert usually takes the form of `<type>` or  `<purpose: type>`, where the type might be a primitive type (e.g. `number`) or a larger grammatical unit (e.g. `entity identifier`).
- Type suffixes:
	- `[]`: that insert is allowed to be expanded in a [action param expansion](action_param_expansions). (Comma separated, wrapped in brackets.)
		- e.g. `wait <duration[]>;` can become `wait 1;` or `wait [1, 2];`
	- `?`: zero or one
	- `*`: zero or more
	- `+`: one or more
- Anything in the insert wrapped in quotes is a literal word, not a lookup to another pattern. This is done when the word is optional or has other repeat properties.
	- e.g. `<"script"?>` means the word `script` is optional in the pattern.
- All (or almost all) single tokens that are one of the three [primitive types](primitive_types) (number, string, boolean) may be replaced by a constant, even if the dictionary entry doesn't say as much. This only goes for inserted values in the phrase, not keywords.
- For examples in this documentation, sometimes `_` is used for a [script](scripts) name, with or without the `script` [sigil](identifiers#sigils). The `_` is just meant to be an unobtrusive name and has no language significance.