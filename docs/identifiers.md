# Identifiers

An identifier is a string that refers to another data structure, e.g. a variable name or script name. These are generally strings you choose yourself, as opposed to language keywords (`if`, `while`, `camera`, `debug_mode`, etc.).

## Sigils

Sigils are used when context cannot disambiguate the context of a string. For strings that need sigils, the sigil plus the string make up the identifier, e.g. the entity identifier `entity Bob`.

Example multi-word identifiers:

- `entity Bob`
- `geometry door`
- `map town`
- `button MEM0`

All categories of identifiers are different namespaces. E.g. a [script](scripts) and a [dialog](dialogs) may have the same name. This is why sigils are necessary.

## Vs Strings

Unlike in most other languages, identifiers and strings are not distinguished by [token type](primitive_types); most languages use quoted strings for string values, and barewords for identifiers.

- Barewords can often be used for string values, e.g. `entity Bob` instead of `entity "Bob"`.
- Similarly, quoted strings are allowed as single-word identifiers in all cases, e.g. `"variable name" = 100;`
- Keywords are not allowed as bareword string values, such as bare script names or variable names, e.g. `if = 10;`. There are two fixes:
    - Wrap the identifier in quotes so it's no longer a bareword, e.g. `"if" = true;`.
    - Add a sigil if you can, e.g. `flag if = true;`.

## Identifier Categories

These are also the sigils used for associated string values.

- `alias`
- `array`
- `command`
- `dialog`
- `entity` (see [below](#entity-identifier))
- `flag`: Sigil is optional, but may help tell [bool and int expressions](expressions_and_operators) apart
- `geometry` (see [below](#geometry-identifier))
- `map`
- `script`: Sigil optional, and it is recommended to omit it
- `serial_dialog`
- `variable`: Cannot be used with a sigil

### Entity Identifier

Note: the shorthands `player` and `self` are only valid as params inside [action phrases](actions), and are not valid for [dialogs](dialogs) (e.g. for a [dialog identifier](dialogs#dialog-identifier)) or [dialog or serial dialog settings](dialog_and_serial_dialog_settings).

- `entity <name: string>`
	- The named entity
- `player`
	- The player entity
	- Short for `entity "%PLAYER%"`
- `self`
	- The entity running the current script
	- Short for `entity "%SELF%"`

### Geometry Identifier

- `geometry <name: string>`
	- The named geometry
- `entity_path`
	- The assigned path of the  `self` entity
	- Short for `entity "%ENTITY_PATH%"`
