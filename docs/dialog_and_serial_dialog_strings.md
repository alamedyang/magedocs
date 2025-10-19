# Dialog and Serial Dialog Strings

[Dialog](dialogs) and [serial dialog](serial_dialogs) [strings](primitive_types#strings) are [quoted strings](primitive_types#quoted-string) with extra attributes.

Used for:

- [dialog messages](dialogs#dialog-message)
- [labels in dialog options](dialogs#dialog-option)
- [serial dialog messages](serial_dialogs#serial-dialog-message)
- [labels in serial dialog options](serial_dialogs#serial-dialog-option)

## Wrapping

- Both dialogs and serial dialogs are auto-wrapped according to the their `wrap` settings. This means line breaks are introduced whenever an individual line is too long.
- Text wrapping newlines will replace contiguous sequences of spaces and/or tabs.
- Preexisting newlines are left alone.
- Quotes inside the string must be escaped with backslash (e.g. `\"`).
- The values of integer variables and entity names may be inserted into dialog and serial dialog strings. See [Variables > Printing Current Values](state#printing-current-values).

## Sanitization

Dialogs can only print ASCII characters, and serial dialogs *should* only print ASCII characters.

- Smart quotes (`“”‘’`) are changed to normal quotes (`"'`).
- Emdashes (`—`) are changed to two hyphens (`--`).
- Endashes (`–`) are changed to one hyphen (`-`).
- Ellipses (`…`) are changed to three periods (`...`).
- Escaped tabs (`\t`) are changed to real tabs.
- Escaped newlines (`\n`) are changed to real newlines.

## Printing Current Values

The values of integer variables and the current names of any entity can be inserted into dialog and serial dialog strings.

The wrapping character (`$` or `%`) will print if used on its own in any given line, but pairs of them will trigger this value replacement behavior. To force them to print literally, escape them with a backslash (e.g. `\$`).

The current value will always be printed, not the value at the time the dialog or serial dialog was "defined," since dialogs and serial dialogs [always exist](syntax_scopes#project-scope).

### Print Variable Value

Enclose the name of the [variable](state#integer-variables) in dollar signs: `$appleCount$`. When text is wrapped, these inserts always count as 5 characters.

```mgs
_ {
  mutate appleCount = 10;
  show serial dialog { "I have $appleCount$ apples for sale today!" }
}
```

The above script will produce:

```
I have 10 apples for sale today!

>_
```

### Print Entity Name

Wrap an [entity](entities)'s given name (the name assigned to it in Tiled) in percent signs (`%`) to insert the entity's name as it currently exists in RAM: `"Hi, there! My name is %Bob%!"`

- When text is wrapped, these inserts always count as 12 characters.
- `%PLAYER%` always refers to the player entity.
- `%SELF%` always refers to the entity running the current script.

## Ansi Escape Sequences

Serial dialog quoted strings may also use ANSI styling via tags that resemble HTML styling. These tags are replaced by the associated ANSI escape sequence.

The user's color theme affects how styles appear in their serial console, and not all styles are implemented in all themes (or consoles). We therefore recommend using styles for optional flavor only, and not to impart gameplay-critical information.

- **Foreground colors** (letter colors):
	- `<black>` or `<k>`
	- `<red>` or `<r>`
	- `<green>` or `<g>`
	- `<yellow>` or `<y>`
	- `<blue>` or `<b>`
	- `<magenta>` or `<m>`
	- `<cyan>` or `<c>`
	- `<white>` or `<w>`
- **Background colors**:
	- `<bg-black>` or`<bg-k>`
	- `<bg-red>` or`<bg-r>`
	- `<bg-green>` or`<bg-g>`
	- `<bg-yellow>` or`<bg-y>`
	- `<bg-blue>` or`<bg-b>`
	- `<bg-magenta>` or`<bg-m>`
	- `<bg-cyan>` or`<bg-c>`
	- `<bg-white>` or`<bg-w>`
- **Emphasis**:
	- `<bold>` (brighter colors and/or greater font weight)
	- `<dim>`
- **Reset all styles**:
	- `<reset>` or `</>`
	- Styles can only be turned off all at once.
	- Styles will stay "on" until you explicitly turn them "off".
- **Ring the terminal bell**:
	- `<bell>`
	- This isn't a style as such, but it is still available to use.
	- Note that this character may be printed depending on the destination terminal.

You could add custom ansi escape sequences if you wanted. As these strings are Javascript flavor, the escape character is `\u001B`.

### Example

```mgs
serial_dialog grandpa_rambling {
  "That doll is <r>evil</>, I tells ya! <r><bold>EVIL</>!!"
}
```

> That doll is <span style="color:#b00;">evil</span>, I tells ya! <span style="color:#f33;font-weight:bold;">EVIL</span>!!

You can also add styles one at a time, and they will accumulate:

```mgs
serial_dialog accumulation {
  "plain text <r>red text <bold>add bold <bg-b>add blue background</> clear all"
}
```

> plain text <span style="color:#b00;">add red </span><span style="color:#f33;font-weight:bold;">add bold </span><span style="color:#f33;font-weight:bold;background-color:#00b">add blue background</span> clear all
