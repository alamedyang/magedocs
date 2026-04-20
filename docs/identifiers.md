# Identifiers

An identifier is a [string](primitive_types#string) that refers to another data structure, e.g. a variable name or script name. These are generally strings you choose yourself, as opposed to language keywords (`if`, `while`, `camera`, `debug_mode`, etc.).

## Sigils

Sigils are used when context cannot disambiguate the context of an identifier string. For identifiers that need sigils, the sigil plus the string make up the identifier, e.g. the [entity identifier](#entity-identifier) `entity Bob`.

```mgs
_ {
	// entity identifiers
	//vvvvvvvv               vvvvvvvvvvvv
	entity Bob x direction = entity Alice;
}
```

Example multi-word identifiers:

- `entity Bob`
- `geometry door`
- `map town`
- `button MEM0`

All categories of identifiers are different namespaces. E.g. a [script](scripts) and a [dialog](dialogs) may have the same name. This is why sigils are necessary most of the time.

## Vs Strings

Unlike in most other languages, identifiers and strings are not distinguished by [token type](primitive_types); most languages use [quoted strings](primitive_types#quoted-string) for string values, and [barewords](primitive_types#bareword) for identifiers, but in MGS, quoted strings and barewords are almost always interchangeable.

Barewords can often be used for strings which traditionally should be wrapped in quotes.

```mgs
_ {
	entity Bob name = Job;
	entity Bob name = "Job";
	entity "Bob" name = Job;
	entity "Bob" name = "Job";
}
```

Similarly, quoted strings are allowed as single-token identifiers in all cases.

```mgs
_ {
	variable_name = 10;
	"variable name" = 10;
}
```

Keywords are not allowed as bareword string values, such as bare script names or variable names.

```mgs
add {} // SYNTAX ERROR
// "add" is a keyword at root level
// cannot be used as a script name

_ {
	if = true; // SYNTAX ERROR
	// "if" is a keyword in a script body
	// cannot be used as variable name
}
```

There are two fixes for the above. Either escape the word by making it a quoted string, or add a [sigil](#sigils) if the identifier has one:

```mgs
"add" {}      // add escaping quotes
script add {} // add sigil "script"

_ {
	"if" = true;      // add escaping quotes
	flag "if" = true; // add sigil "flag"
}
```

## Identifier Categories

These are also the keyword sigils used for their associated string values.

- `entity` for [entities](entities). See [below](#entity-identifier) for shorthand identifiers.
- `geometry` for [vector objects](vector_objects). See [below](#geometry-identifier) for shorthand identifiers.
- `map` for [maps](maps).
- `command` for [commands](commands).
- `alias` for [command aliases](commands#aliases).
- `flag` for [save flags (boolean variables)](state#save-flags). Sigil is optional, but may help tell [bool and int expressions](expressions_and_operators) apart.
- `variable` for [integer variables](state#integer-variables). Cannot be used with a sigil. (This is not entirely intentional but the fix is involved.)
- `array` for [arrays](arrays).
- `script` for [scripts](scripts). Sigil optional. It is recommended to omit it.
- `dialog` for [dialogs](dialogs).
- `serial_dialog` for [serial dialogs](serial_dialogs).

### Entity Identifier

- `entity <name: string>`
	- The entity's given name, i.e. the name the entity was given in Tiled.
	- If multiple entities have this name, the first one found is targeted.
- `player`
	- The player entity (the entity with its [`is_player` flag](entities#entity-properties) set).
	- Short for `entity "%PLAYER%"`.
- `self`
	- The entity running the current [script slot](scripts#script-slots).
	- Short for `entity "%SELF%"`.

```mgs
_ {
	// these are the same:
	entity "%PLAYER%" x = 0;
	player x = 0;
	
	// as are these:
	entity "%SELF%" x = 0;
	self x = 0;
}
```

It's recommended to use the short version of these identifiers (`player`, `self`) for readability.

::: warning Note
The keywords `player` and `self` are only valid as params inside [action phrases](actions) (in a [script body](scripts)), and are not valid for [dialogs](dialogs) (e.g. for a [dialog identifier](dialogs#dialog-identifier)) or [dialog or serial dialog settings](dialog_and_serial_dialog_settings).
:::
### Geometry Identifier

- `geometry <name: string>`
	- The named geometry.
- `entity_path`
	- The assigned path of the  `self` entity, either [defined within Tiled](maps) or with an [action](actions#string-setables).
	- Short for `entity "%ENTITY_PATH%"`.

Like for entities, it's recommended to use the short version(`entity_path`) for readability.