# Syntax and Jargon

MGS looks and feels very similar to JavaScript or any other modern C-like language. Some specific constructions are instead borrowed from Rust.

Because this language grammar is unusually arbitrary, a lot of these syntax patterns were chosen to take advantage of familiarity with existing languages (i.e. comfort) and not out of necessity.

## General MGS Language Features

- White space agnostic. (Newlines and spaces are ignored syntactically except to separate [[#token|tokens]]. Indentation levels mean nothing.)
- Comments can be line level (`//` until end of line) or block level (`/*` until `*/`). These can occur anywhere.
- Three types of bracket pairs are used:
    - `()`: [[macros|macro]]/[[fns|fn args]], [[script_control_flow|condition]] statements, groups in [[expressions_and_operators|expressions]]
    - `[]`: [[arrays]], [[action_param_expansions|action param expansions]]
    - `{}`: block bodies
- Trailing commas are allowed in [[arrays|arrays]], [[action_param_expansions|expansions]], [[fns|fn args]], etc.
    - They are not allowed in [[json_literals|JSON literals]], as JSON itself does not permit them, and this allows existing coloring or parsing grammars to handle them.
- [[Actions]] and other phrases that don't end with a closing bracket (`]`, `)`, `}`) are instead ended with a semicolon (`;`) to help the parser disambiguate incomplete phrases.
	- Inside script bodies, semicolons are usually permitted after closing brackets (`]`, `)`, `}`) except when it comes to [[script_control_flow|looping or logic control]] structures like `if` and `while`.
- [[dialogs|Dialog]], [[serial_dialogs|serial dialog]], and almost all [[scripts|script]] references can be defined in place, e.g.
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

- Our naming convention for [[identifiers|identifiers]] is `camel_case` but there is no grammatical requirement or enforcement for this.
- Keeping identifiers as [[primitive_types#barewords|barewords]] (alphanumeric with no special characters) helps legibility, so is preferred.
    - Barewords may no longer contain hyphen (`-`), a word breaking character, because it made renaming identifiers en masse difficult. (No language server!) Most such cases in the Black Mage Game codebase were replaced with `_` but not all. All remaining cases are wrapped in double quotes.
- Using language keywords like `player` is preferred to the long form (`entity "%PLAYER%"`).

## Jargon

Syntax terminology that may appear in this documentation:

### Token

A token is unit of text the parser considers to be a single word or word-ish unit. Non-alphanumeric tokens (like brackets or punctuation) need not be separated with whitespace except in special cases

- Tokens have [[primitive_types|types]] at the grammar level.
- `entity "Bob" x` is three tokens, all three of which are strings (types [[primitive_types#Bareword|bareword]], [[primitive_types#Quoted String|quoted string]], [[primitive_types#Bareword|bareword]])
- `#00FF00` is one token, despite having a special character touching alphanumeric characters (type [[primitive_types#Color|color]])
- `1+2` is three tokens, despite containing no spaces (types [[primitive_types#number|number]], [[expressions_and_operators|operator]], [[primitive_types#number|number]])

### Argument

- Also called **arg**.
- A value handed to a [[fns|fn]] (much like a normal function argument). Also the secondary word(s) after a [[commands|command verb]], like `go north` (the argument being `north`, the verb being `go`).

### Parameter

- Also called **param**.
- A unit of data inside an [[actions|action phrase]].
	- Some params may determine which bytecode instruction is chosen, but most are values given to the final bytecode instruction and will appear literally in the JSON intermediary step.
- Also a property-value pair for [[dialog_and_serial_dialog_settings|dialog and serial dialog settings]].

### Block

- Generally what falls inside a pair of matching curly braces (`{}`). Might also include the tokens right before, e.g. the script name in a [[scripts#Script Definitions|script definition]] (`script_name {}`).

### Literal

- A value of a literal type (e.g. `100` is a number literal). Contrast this with a reference like a variable name, which might refer to a number value and could be used in many of the same places as a number, but is not _literally_ a number.

## Dictionary Syntax

- I'll use `<>` to indicate "insert item here" in a syntax dictionary entry.
- The insert usually takes the form of `<type>` or  `<purpose: type>`, where the type might be a primitive type (e.g. `number`) or a larger grammatical unit (e.g. `entity identifier`).
- Type suffixes:
	- `[]`: that insert is allowed to be expanded in a [[action_param_expansions|action param expansion]]. (Comma separated, wrapped in brackets.)
		- e.g. `wait <duration[]>;` can become `wait 1;` or `wait [1, 2];`
	- `?`: zero or one
	- `*`: zero or more
	- `+`: one or more
- Anything in the insert wrapped in quotes is a literal word, not a lookup to another pattern. This is done when the word is optional or has other repeat properties.
	- e.g. `<"script"?>` means the word `script` is optional in the pattern.
- All (or almost all) single tokens that are one of the three [[primitive_types|primitive types]] (number, string, boolean) may be replaced by a constant, even if the dictionary entry doesn't say so. This only goes for inserted values (params) in the action phrase, not keywords.

```mgs
_ {
	player name = $some_value; // allowed
	$some_value name = "Bob"; // not allowed
}
```

- For colored MGS syntax examples given in this documentation, sometimes `_` is used for a bare [[scripts|script]] name. The `_` is just meant to be an unobtrusive name and has no language significance. (See above example for an example.)

::: tip Note
Many internal temporary values are generated with one or more `_` at the beginning of the identifier name. To avoid colliding with these, best avoid starting variable names with `_`.
:::
