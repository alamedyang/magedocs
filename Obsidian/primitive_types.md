# Primitive Types

If a value (e.g. an arg or param) is said to be limited to a primitive value, it is usually one of these: string, number, boolean. Sometimes this also includes [[constants]], as those values are swapped out when encountered and will become one of the above three primitive types.

No type coercion for individual values:

- Ints and strings cannot be coerced to bools. (No checking the truthiness of `0`!)
- Strings cannot be converted into other primitive types. (No `parseInt()`!)
- Bools and ints cannot be converted into strings. (No `.toString()`!)

::: tip Exception
The current value of an int may be [[dialog_and_serial_dialog_strings#Print Variable Value|printed]] as part of a [[dialog_and_serial_dialog_strings|dialog or serial dialog string]]. This usage is purely for text that is displayed, and will not result in something of type string to be used where a string is expected.
:::

## String

A **string** can be either a bareword or a quoted string.

Strings cannot be interpreted, constructed, or manipulated in the MGE — only set or matched verbatim. [[template_strings|Template strings]] are an exception, but they can only be constructed at compile time and not while the game is running.

### Bareword

Regex: `/[_a-zA-Z][_a-zA-Z0-9]*/`

- Any number of alphanumeric characters or underscore.
- A number may not be the first character.

```mgs
_ {
	// example ~~~v
	player name = bareword;
}
```

### Quoted String

Regex: `/"(?:[^"\]|\.)*"/`

- Any characters within a pair of double quotes.
- May contain escaped quotes (`\"`).
- Strings requiring special characters (like `%PLAYER%`) or needing to be "escaped" (like identifiers that are keywords, e.g. `if`) will need to be this type.
- [[dialogs|Dialog]] and [[serial_dialogs|serial dialog]] messages are quoted strings, but they have [[dialog_and_serial_dialog_strings|extra attributes]] primarily having to do with styling and auto-wrapping.

```mgs
_ {
	// example ~~~v
	player name = "Quoted String";
}
```


### Template String

See: [[template_strings|Template Strings]]

- Wrapped with backticks.
- They allow insertion of [[syntax_scopes#File Scope|file-scoped]] values at compile time, such as [[fns|fn args]] or [[#Constant|constant]] [[constants|values]].
- These become quoted strings once "baked." This happens immediately when the MGS parser encounters them.
- They are allowed most places a quoted string is allowed.

```mgs
$prefix = "Mr.";

_ {
	// example ~~~v
	player name = `{$prefix} Mage`;
	
	// becomes
	player name = "Mr. Mage";
}
```

## Number

- "Number" usually refers to a [[#Number Literal|number literal]] specifically.
- Number suffixes must be attached to the number itself, i.e. one [[jargon_and_syntax#Token|token]]. Otherwise the suffix would count as a separate [[#Bareword|bareword]].

### Number Literal

- Sometimes called "int" in these docs.
- A `u16`, i.e. any positive whole number up to 65,535.
	- A very few number values are `u8` instead, which is any positive whole number up to 255. These are noted when they occur, but if not indicated, assume it's a `u16`.

```mgs
_ {
	// example ~~~~v
	entity Bob x = 100;
}
```

### Duration

- Any number with optional suffixes `ms` for milliseconds or `s` for seconds.

```mgs
_ {
	// example
	//   v
	wait 1000ms;
	wait 1s;
	wait 200;
}
```

### Distance

- Any number with optional suffixes `pix` or `px` for pixels.

```mgs
_ {
	// example ~~~~~~~~~~v
	camera shake -> 10ms 20px over 3s;
	camera shake -> 40ms 30pix over 5s;
	camera shake -> 90ms 10 over 2s;
}
```

### Quantity

- Any number with optional suffix `x`.
- The words `once`, `twice`, or `thrice`.

```mgs
_ {
	// example ~~~~~~~~~~~v
	player animation -> 2 2x;
	player animation -> 0 once;
	player animation -> 1 4;
}
```

## Color

- Any CSS-style hexadecimal color value (e.g. `#FF0000`) using upper or lowercase letters.
	- These can be 3 or 6 digits (e.g. `#a0b` or `#aa00bb`).
- The words `white`, `black`, `red`, `green`, `blue`, `magenta`, `cyan`, or `yellow`.

```mgs
_ {
	// example ~~~~~~~v
	camera fade in -> yellow over 1s;
	camera fade in -> #FFF over 1s;
	camera fade in -> #00ff00 over 1s;
}
```

## Boolean

- Sometimes called "bools" in these docs.
- `true` and `false` are the traditional values, but other natural language words are allowed because these make certain [[state#Engine Flags|engine flags]] easier to understand when setting them or checking them, e.g. `debug_mode == on`.
- **True values**: `true`, `on`, `open`, and `up`.
- **False values**: `false`, `off`, `closed`, and `down`.

```mgs
_ {
	// example ~~~~~~v
	player_control = true;
	hex_clipboard  = on;
}
```

## Constant

Regex: `/\$[_a-zA-Z0-9]+/`

- A single `$` followed by any number of alphanumeric characters or underscores (`_`).
- This must be a single token, i.e. `$const_name`, not `$ const_name`.

```mgs
// example
// v
$delay = 2s;

_ {
	// and here
	//   v
	wait $delay;
}
```
