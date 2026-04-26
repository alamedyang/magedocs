# Identifiers

An identifier is a [[primitive_types#String|string]] that refers to another data structure, e.g. a variable name or script name. These are generally strings you choose yourself, as opposed to language keywords (`if`, `while`, `camera`, `debug_mode`, etc.).

## Sigils

Sigils are used when context cannot disambiguate the context of an identifier string. For identifiers that need sigils, the sigil plus the string make up the identifier, e.g. the [[#Entity Identifier|entity identifier]] `entity Bob`.

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

All categories of identifiers are different namespaces. E.g. a [[scripts|script]] and a [[dialogs|dialog]] may have the same name. This is why sigils are almost always necessary.

## Vs Strings

Unlike in most other languages, identifiers and strings are not distinguished by [[primitive_types|token type]]; most languages use [[primitive_types#Quoted String|quoted strings]] for string values, and [[primitive_types#Bareword|barewords]] for identifiers, but in MGS, quoted strings and barewords are almost always interchangeable.

Barewords can often be used for strings which traditionally should be wrapped in quotes.

```mgs
_ {
	entity Bob name = Bub;
	entity Bob name = "Bub";
	entity "Bob" name = Bub;
	entity "Bob" name = "Bub";
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

There are two fixes for the above. Either escape the word by making it a quoted string, or add a [[#Sigils|sigil]] if the identifier has one:

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

- `entity` for [[entities]]. See [[#Entity Identifier|below]] for shorthand identifiers.
- `geometry` for [[vector_objects|vector objects]]. See [[#Geometry Identifier|below]] for shorthand identifiers.
- `map` for [[maps]].
- `command` for [[commands]].
- `alias` for [[commands#Aliases|command aliases]].
- `flag` for [[state#Save Flags|save flags (boolean variables)]]. Sigil is optional, but may help tell [[expressions_and_operators|bool and int expressions]] apart.
- `variable` for [[state#Integer Variables|integer variables]]. Cannot be used with a sigil. (This is not entirely intentional but the fix is involved.)
- `array` for [[arrays]].
- `script` for [[scripts]]. Sigil optional. It is recommended to omit it.
- `dialog` for [[dialogs]].
- `serial_dialog` for [[serial_dialogs|serial dialogs]].

### Entity Identifier

- `entity <name: string>`
	- The entity's given name, i.e. the name the entity was given in Tiled.
	- If multiple entities have this name on the same map, the first one found is targeted.
- `player`
	- The player entity (the entity with its [[entities#Player|`is_player` flag]] set).
	- Short for `entity "%PLAYER%"`.
- `self`
	- The entity running the current [[scripts#Script Slots|script slot]].
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
The keywords `player` and `self` are only valid as params inside [[actions|action phrases]] (in a [[scripts|script body]]), and are not valid for [[dialogs|dialogs]] (e.g. for a [[dialogs#Dialog Identifier|dialog identifier]]) or [[dialog_and_serial_dialog_settings|dialog or serial dialog settings]].
:::
### Geometry Identifier

- `geometry <name: string>`
	- The named geometry.
- `entity_path`
	- The assigned path of the  `self` entity, either [[maps|defined within Tiled]] or with an [[actions#String Setables|action]].
	- Short for `entity "%ENTITY_PATH%"`.

Like for entities, it's recommended to use the short version(`entity_path`) for readability.