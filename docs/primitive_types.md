# Primitive Types

If a value (e.g. an arg or param) is said to be limited to a primitive value, it is usually one of these: string, number, boolean. Sometimes this also includes constants.

No type coercion:

- Ints and strings cannot be coerced to bools. (No checking the truthiness of `0`!)
- Bools and ints cannot be converted into strings. (No `.toString()`!)
	- Exception: the current value of an int may be [printed](dialog_and_serial_dialog_strings#print-variable-value) as part of a [dialog or serial dialog string](dialog_and_serial_dialog_strings).
- Strings cannot be converted into other primitive types. (No `parseInt()`!)

## String

A **string** can be either a bareword or a quoted string.

### Bareword

Regex: `/[_a-zA-Z][_a-zA-Z0-9]*/`

- Any number of alphanumeric characters or underscore.
- A number may not be the first character.

### Quoted String

Regex: `/"(?:[^"\]|\.)*"/`

- Any characters within a pair of double quotes.
- May contain escaped quotes (`\"`).
- [Dialog](dialogs) and [serial dialog](serial_dialogs) messages are quoted strings, but they have [Extra attributes](dialog_and_serial_dialog_strings) primarily having to do with styling and auto-wrapping.

## Number

- "Number" usually refers to a **number literal** specifically.
- Number suffixes must be attached to the number itself, i.e. one token. Otherwise the suffix would count as a separate bareword.

### Number Literal

- Sometimes called "int" in these docs.
- A `u16`, i.e. any positive whole number up to 65535.
	- A very few number values are `u8` instead, which is any positive whole number up to 255. These are noted when they occur, but if not indicated, assume it's a `u16`.

### Duration

- Any number with optional suffixes `ms` for milliseconds or `s` for seconds.

### Distance

- Any number with optional suffixes `pix` or `px` for pixels.

### Quantity

- Any number with optional suffix `x`.
- The words `once`, `twice`, or `thrice`.

### Color

- Any CSS-style hexadecimal color value (e.g. `#FF0000`) using upper or lowercase letters.
	- These can be 3 or 6 digits (e.g. `#a0b` or `#aa00bb`).
- The words `white`, `black`, `red`, `green`, `blue`, `magenta`, `cyan`, or `yellow`.

## Boolean

- Sometimes called "bools" in these docs.
- `true` and `false` are the traditional values, but other natural language words are allowed because these make certain [engine flags](state#engine-flags) easier to understand when setting them or checking them, e.g. `debug_mode == on`.
- **True values**: `true`, `on`, `open`, and `up`.
- **False values**: `false`, `off`, `closed`, and `down`.

## Constant

Regex: `/\$[_a-zA-Z0-9]+/`

- A single `$` followed by any number of alphanumeric characters or underscores (`_`).
- This must be a single token, i.e. `$const_name`, not `$ const_name`.
