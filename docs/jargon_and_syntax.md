# Syntax and Jargon

MGS looks and feels very similar to JavaScript or any other modern C-like language. Some specific constructions are instead borrowed from Rust.

Because this language grammar is unusually arbitrary, a lot of these syntax patterns were chosen to take advantage of familiarity with existing languages (i.e. comfort) and not out of necessity.

## General MGS Language Features

- White space agnostic. (Newlines and spaces are ignored syntactically except to separate [tokens](#token). Indentation levels mean nothing.)
- Comments can be line level (`//` until end of line) or block level (`/*` until `*/`). These can occur anywhere.
- Three types of bracket pairs are used:
    - `()`: [macro](macros)/[fn args](fns), [condition](script_control_flow) statements, groups in [expressions](expressions_and_operators)
    - `[]`: [arrays](arrays), [action param expansions](action_param_expansions)
    - `{}`: block bodies
- Trailing commas are allowed in [arrays](arrays), [expansions](action_param_expansions), [fn args](fns), etc.
    - They are not allowed in [JSON literals](json_literals), as JSON itself does not permit them, and this allows existing coloring or parsing grammars to handle them.
- [Actions](actions) and other phrases that don't end with a closing bracket (`]`, `)`, `}`) are instead ended with a semicolon (`;`) to help the parser disambiguate incomplete phrases.
	- Inside script bodies, semicolons are usually permitted after closing brackets (`]`, `)`, `}`) except when it comes to [looping or logic control](script_control_flow) structures like `if` and `while`.
- [Dialog](dialogs), [serial dialog](serial_dialogs), and almost all [script](scripts) references can be defined in place, e.g.
    - Note that a semicolon is still required in the latter two cases because the "dialog literal" is part of an action phrase, which still needs to end in a semicolon.

```mgs
script triple_dialog {
	// bare identifier
	show dialog dialogName;
	
	// identifier and definition
	show dialog dialogName { PLAYER "Hi!" };
	
	// anonymous definition (preferred)
	show dialog { PLAYER "Hi!" };
}
```

## Style Guide

- Our naming convention for [identifiers](identifiers) is `camel_case` but there is no grammatical requirement or enforcement for this.
- Keeping identifiers as [barewords](primitive_types#barewords) (alphanumeric with no special characters) helps legibility, so is preferred.
    - Barewords may no longer contain hyphen (`-`), a word breaking character, because it made renaming identifiers en masse difficult. (No language server!) Most such cases in the Black Mage Game codebase were replaced with `_` but not all. All remaining cases are wrapped in double quotes.
- Using language keywords like `player` is preferred to the long form (`entity "%PLAYER%"`).

## Jargon

Syntax terminology that may appear in this documentation:

### Token

A token is unit of text the parser considers to be a single word or word-ish unit. Non-alphanumeric tokens (like brackets or punctuation) need not be separated with whitespace except in special cases

- Tokens have [types](primitive_types) at the grammar level.
- `entity "Bob" x` is three tokens, all three of which are strings (types [bareword](primitive_types#bareword), [quoted string](primitive_types#quoted-string), [bareword](primitive_types#bareword))
- `#00FF00` is one token, despite having a special character touching alphanumeric characters (type [color](primitive_types#color))
- `1+2` is three tokens, despite containing no spaces (types [number](primitive_types#number), [operator](expressions_and_operators), [number](primitive_types#number))

### Argument

- Also called **arg**.
- A value handed to a [fn](fns) (much like a normal function argument). Also the secondary word(s) after a [command verb](commands), like `go north` (the argument being `north`, the verb being `go`).

### Parameter

- Also called **param**.
- A unit of data inside an [action phrase](actions).
	- Some params may determine which bytecode instruction is chosen, but most are values given to the final bytecode instruction and will appear literally in the JSON intermediary step.
- Also a property-value pair for [dialog and serial dialog settings](dialog_and_serial_dialog_settings).

### Block

- Generally what falls inside a pair of matching curly braces (`{}`). Might also include the tokens right before, e.g. the script name in a [script definition](scripts#script-definitions) (`script_name {}`).

### Literal

- A value of a literal type (e.g. `100` is a number literal). Contrast this with a reference like a variable name, which might refer to a number value and could be used in many of the same places as a number, but is not _literally_ a number.

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
- All (or almost all) single tokens that are one of the three [primitive types](primitive_types) (number, string, boolean) may be replaced by a constant, even if the dictionary entry doesn't say so. This only goes for inserted values (params) in the action phrase, not keywords.

```mgs
_ {
	player name = $some_value; // allowed
	$some_value name = "Bob"; // not allowed
}
```

- For colored MGS syntax examples given in this documentation, sometimes `_` is used for a bare [script](scripts) name. The `_` is just meant to be an unobtrusive name and has no language significance. (See above example for an example.)

::: tip Note
Many internal temporary values are generated with one or more `_` at the beginning of the identifier name. To avoid colliding with these, best avoid starting variable names with `_`.
:::
