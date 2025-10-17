# Dialogs

[[syntax_scopes#Project Scope|Project scope]].

Dialogs are a visual novel or RPG-style dialog system for the screen. These include portrait images, dialog box labels, and dialog messages. The entire display is called a dialog card.

Dialogs do nothing on their own. To show them, you must use the [[actions#Show Dialog|Show Dialog]] [[actions|action]] within a [[scripts|script]].

[[scripts|Scripts]] running a dialog cannot simultaneously perform other [[actions|actions]]. If an [[entities|entity]] must change their behavior partway through a dialog, you must split the dialog into multiple pieces and insert those actions between the pieces, or use another [[scripts#Script Slots|script slot]] to control the entity's behavior.

## Dialog Definition

Defined at [[syntax_scopes#Syntax Contexts|root level of the file]].

```
dialog <dialog name: string> { <dialog*> }
```

## Dialog Literal

Dialogs can be defined at the point of use with dialog literals. If a name is not provided, one will be generated based on the file name and line number.

```
<dialog name: string?> { <dialog*> }
```

The dialog name is optional. If you want to refer to the dialog additional places, you should give it a name. However, as this is rarely necessary, best practice is to omit it.

```mgs
// example of a define-in-place dialog
script _ {
  wait 100ms;
  entity Bob direction = player;
  show dialog hello { entity Bob "Hello?" };
}
```

## Dialog

A dialog consists of the following items in this order:

1. [[#Dialog Identifier|Dialog identifier]]: 1+
2. [[#Dialog Parameter|Dialog parameter]]: 0+
3. [[#Dialog Message|Dialog messages]]: 1+
4. [[#Dialog Option|Dialog option]]: 0-4

They are designed to keep superfluous syntax to a minimum; the goal is to resemble a script: a speaker, then the things they say. If you want to use a lot of common [[#Dialog Parameter|dialog parameters]] in your dialogs, maybe prepare some [[dialog_and_serial_dialog_settings|dialog settings]].

### Dialog Identifier

```mgs{2}
dialog sampleDialog {
  SELF
  alignment BOTTOM_RIGHT
  emote 3
  "Messages..."
  "So many messages!"
  "Don't you think?"
  > "Not really." = sample_script_1
  > "Definitely." = sample_script_2
}
```

The dialog identifier is the "speaker" of the dialog messages that immediately follow. For most cases, this will be a specific entity (with option #1 or #2 below), though you could also build up a dialog from its component pieces instead (with option #3).

The three options:

1. `<bareword>`
	- Refers to a dialog label ([[primitive_types#Bareword|bareword]]) that has been defined with [[dialog_and_serial_dialog_settings|dialog settings]].
		- If no dialog label is found, it is assumed to be an entity name instead. This usage also provides the entity name as an `entity` parameter for the dialog.
		- Entity names with spaces or other special characters are not eligible for this usage.
2. `entity <string>`
	- An entity's given name (i.e. the entity's name within the Tiled [[maps|map]]).
	- This usage also provides the entity name as an `entity` parameter for the dialog.
	- The entities `%PLAYER%` and `%SELF%` must use this pattern (and not the bareword pattern) because they contain special characters. As this can be cumbersome, it's probably best to set up a [[dialog_and_serial_dialog_settings|dialog settings]] label for them so you can use a bareword as an identifier instead.
3. `name <string>`
	- The dialog's display name.
	- This usage also provides a `name` parameter for the dialog.
	- If you don't want a name displayed, use an empty quoted string (`name ""`).

### Dialog Parameter

```mgs{3-4}
dialog sampleDialog {
  SELF
  alignment BOTTOM_RIGHT
  emote 3
  "Messages..."
  "So many messages!"
  "Don't you think?"
  > "Not really." = sample_script_1
  > "Definitely." = sample_script_2
}
```

A dialog parameter is a dialog property and value pair. Multiple dialog parameters can occur back-to-back in a single dialog block or a [[dialog_and_serial_dialog_settings|dialog settings block]].

- `entity <string>`
	- The "given name" of the entity (i.e. the entity's name on the Tiled map). (Wrapping this name in `%`s is unnecessary and will in fact confuse the [encoder](encoder).)
		- Can be `%PLAYER%` or `%SELF%`.
	- This property is supplied by the [[#Dialog Identifier|dialog identifier]] if it is an entity identifier.
	- Will automatically supply the `name` property, which is a relative reference; the dialog display label will be whatever that entity's name is at that moment.
	- Will automatically supply the `portrait` property if the referenced entity is a [[entity_types#Character Entity|character entity]] and if there is a portrait defined for that entity in [[what_youll_need#`entity_types.json`|`entity_types.json`]].
- `name <string>`
	- This will be displayed as the label of the dialog card.
	- This property is supplied by the [[#Dialog Identifier|dialog identifier]] if it is a name identifier.
	- Overrides names inherited via the `entity` parameter.
	- This string is fixed, i.e. will not change if an entity name changes. For an entity's current name instead, wrap a specific entity's given name in `%`s.
		- Can be `%PLAYER%` or `%SELF%`, which refers to the player entity or the entity running the script.
	- Should be no more than 12 ASCII characters.
	- If this string is empty (`name ""`), the dialog box label will be absent entirely.
- `portrait <string>`
	- The name of a MGE portrait as defined in `portraits.json`.
	- Overrides portraits inherited via the `entity` parameter.
	- If not provided, the dialog card will not have a portrait box.
- `alignment <string>`
	- Controls which half of the screen the dialog card will be placed, and which side of the screen the portrait image will be placed.
	- [[primitive_types#String|String]]: one of the following:
		- `TR` or `TOP_RIGHT`
		- `BR` or `BOTTOM_RIGHT`
		- `TL` or `TOP_LEFT`
		- `BL` or `BOTTOM_LEFT` (default)
	- In the Mage Game itself, we use `BR` for the player, and `BL` for everyone else. `TOP_` alignments are used sometimes instead when the dialog box position might interfere with choreography.
- `border_tileset <string>`
	- Which tileset to use for the dialog card itself.
	- The `default` tileset defined in `scenario.json` is used if none is provided.
- `emote <number>`
	- The nth "emote" in that entity's entry in `portraits.json`.
	- The first emote (`0`) will display if not specified.
- `wrap <number>`
	- The number of characters or columns to wrap the dialog messages.
	- 42 is default.

### Dialog Message

Each dialog message is a new dialog card in the game.

```mgs{5-7}
dialog sampleDialog {
  SELF
  alignment BOTTOM_RIGHT
  emote 3
  "Messages..."
  "So many messages!"
  "Don't you think?"
  > "Not really." = sample_script_1
  > "Definitely." = sample_script_2
}
```

- Wrapped in quotes.
- Only ASCII characters will be printed.
- These strings are auto-wrapped and have other abilities and attributes, including variable value insertion and sanitization. See [[dialog_and_serial_dialog_strings|Dialog and Serial Dialog Strings]].
- If a message is wrapped to more than 5 lines, it will run off the bottom of the screen; it will not wrap to a new dialog card.
- Best practice: wrap entity names in `%` when referring to them inside a dialog message. This way, the dialog message will reflect their current name (their name in RAM at that moment). See [[dialog_and_serial_dialog_strings#Print Entity Name|Print Entity Name]].

### Dialog Option

```mgs{8-9}
dialog sampleDialog {
  SELF
  alignment BOTTOM_RIGHT
  emote 3
  "Messages..."
  "So many messages!"
  "Don't you think?"
  > "Not really." = sample_script_1
  > "Definitely." = sample_script_2
}
```

```
> <label: dialog string> = <script literal>
// OR
> <label: dialog string> = <script: string[]>
```

- You may have up to 4 dialog options per dialog.
- Dialog options are displayed underneath the final dialog message. Therefore, final dialog message (before any options) should consist of a single line of no more than 42 characters.
- Options result in mandatory [[script_control_flow|script jumps]].
	- Dialogs after a dialog with options will go unseen, and [[actions|actions]] afterward will go unexecuted.
	- The new script will run in the same [[scripts#Script Slots|script slot]].
	- [[scripts#Script Literal|Script literals]] given as jump destinations will dead end because they are their own context, and the original context of the script running the dialog was left behind.
		- If you want dialog option destination scripts to rendezvous, you should add a [[actions#Run Script|Run Script]] action to the end of those scripts, and start a new script.
- The label is the text that will be shown to the player. As the cursor (approximated with `>` in the syntax pattern) takes up some room, assume you will only have 39 characters instead of the usual 42.
	- The label is a [[dialog_and_serial_dialog_strings|dialog string]], meaning it behaves like [[#Dialog Message|dialog messages]] in terms of inserting variables (with `$` or `%`), escaped characters, etc.
	- Must be wrapped in quotes.
