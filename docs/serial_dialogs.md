# Serial Dialogs

[Project scope](syntax_scopes#project-scope).

Serial dialogs contain text meant to be shown via the [serial console terminal](terminal). They are called serial "dialogs" because they are similar to [dialogs](dialogs) in many respects, but they are made up of text alone (as opposed to being accompanied by images and labels) and needn't be used for dialog specifically.

## Serial Dialog Definition

Defined at [root level of the file](syntax_scopes#syntax-contexts).

```
serial_dialog <serial dialog name: string> { <serial dialog> }
```

## Serial Dialog Literal

Serial dialogs can be defined at the point of use with serial dialog literals. If a name is not provided, one will be generated based on the file name and line number.

```
{ <serial dialog> }
// OR
<name: string> { <serial dialog> }
```

NOTE: Unlike [dialogs](dialogs), serial dialog blocks cannot have more than one serial dialog.

## Serial Dialog

The following sequence:

1. [Serial dialog parameter](#serial-dialog-parameter): 0+
2. [Serial dialog messages](#serial-dialog-message): 1+
3. [Serial dialog option](#serial-dialog-option): 0+

### Serial Dialog Parameter

```mgs{2}
serial_dialog sample {
  wrap messages to 60
  "Hey, can anyone hear me? Hello?"
  # "Yes, I can hear you." = sample_yes
  # "What did you say?" = sample_no
}
```

Serial dialog parameters are a serial dialog property and value pair. Multiple serial dialog parameters can occur back-to-back in a single serial dialog block or a [serial dialog settings block](dialog_and_serial_dialog_settings).

- `wrap <number>`
	- The number of characters or columns to wrap the serial dialog messages.
	- 80 is default.
		- NOTE: in the [web build](web_build), the console emulator is smaller than this. We wrap to 60 most of the time, but we go as high as 70 or 75 for set pieces involving larger ASCII art.

### Serial Dialog Message

Serial dialog messages are text that is to be printed in the serial console.

```mgs{3}
serial_dialog sample {
  wrap messages to 60
  "Hey, can anyone hear me? Hello?"
  # "Yes, I can hear you." = sample_yes
  # "What did you say?" = sample_no
}
```

- Wrapped in quotes.
- Each serial dialog message will get a newline added to the end unless [Concat Serial Dialog](actions#concat-serial-dialog) is used when showing the dialog.
- To maximize compatibility, best to limit these to ASCII characters.
- These strings are auto-wrapped and have other abilities and attributes, including [variable value insertion](dialog_and_serial_dialog_strings#printing-current-values), [sanitization](dialog_and_serial_dialog_strings#sanitization), and [ANSI styles](dialog_and_serial_dialog_strings#ansi-escape-sequences). See [Dialog and Serial Dialog Strings](dialog_and_serial_dialog_strings).

### Serial Dialog Option

- A single serial dialog can only use one of the two types of option (multiple choice or free response). The MGS parser will interpret all options within the block using the type of the first option if the types are mixed.
- Unlike [dialog options](dialogs#dialog-option), the option quantity for serial dialogs is unlimited.

```
<cursor style> <label: serial dialog string> = <script: string[]>
// OR
<cursor style> <label: serial dialog string> = <script literal>
```

- **Cursor style**: one of the following:
	- `#`: [Multiple choice](#multiple-choice).
	- `_`: [Free response](#free-response).
	- **Labels** are [styleable](dialog_and_serial_dialog_strings).

### Multiple Choice

- The console will display a numbered list of the option labels. If the player types the number of one of the options, the given script will run in the current script slot.
- The player cannot proceed until they enter a valid number, at which point the game will jump to the corresponding [script](scripts). Failure results in a repeat of the same serial dialog again. That means this type of option will *always* result in a script jump.

```mgs{4-5}
serial_dialog sample {
  wrap messages to 60
  "Hey, can anyone hear me? Hello?"
  # "Yes, I can hear you." = sample_yes
  # "What did you say?" = sample_no
}
```

The above example becomes:

```
Hey, can anyone hear me? Hello?
  0: Yes, I can hear you.
  1: What did you say?

>_
```

### Free Response

- At the prompt, the player types in whatever they like. If what they typed matches the label, the given script will run in the current [script slot](scripts#script-slots).
- If they did not type something valid, the next action (underneath the show or concat serial dialog action) will execute. This is the only type of dialog option that will fall through.
- The user's response is case insensitive. (The label `"CAT"` will match the user input of `cat`.)

```mgs{5-6}
serial_dialog sphinx {
  "When you arrive at the Sphinx,"
  "it speaks in a slow, monotone voice:"
  "WHEN DO THE FLYING TOASTERS COME OUT?"
  _ "after dark" = sphinxSuccess
  _ "before dark" = sphinxWTF
}
```

The above example becomes:

```
When you arrive at the Sphinx,
it speaks in a slow, monotone voice:
WHEN DO THE FLYING TOASTERS COME OUT?

>_
```
