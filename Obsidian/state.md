# State

See also: [[entities#Entity Properties|Entity Properties]]

There are only a few variables available for [[scripts|scripts]] to use. All variables are equally accessible to all scripts at all times because they are [[syntax_scopes|project scope]].

No need to initialize or define variables before using them; they are all pre-allocated in engine and always available.

::: warning
This means that typos in variable names can be hard to spot. If you set `birthdayparty` but check `birthday_party`, the encoder will create and store both variables as if they were separate things.

If you find a variable isn't triggering logic checks in the ways you expect, check your spelling!
:::

All variables are persistent between [[maps#Map Loads|map loads]] because all are all included in the save data.

## Warp State String

The `warp_state` string is designated for controlling player spawn behavior on a map's `on_load` script. When you leave a room (or otherwise trigger a new map to load), the `warp_state` string should be set to something that indicates the exit/entrance point so the next map can teleport the player entity to the appropriate spawn point.

See [[primitive_types#String|Primitive Types > String]]

## Integer Variables

These are `uint16_t` values, meaning they can be any whole number between `0` and `65535`. (No negative numbers, no decimal points, no `NaN`.) You may have up to 255 of these.

The default value is `0`.

These may be printed in a [[dialog_and_serial_dialog_strings#Print Variable Value|dialog or serial dialog string]].

See: [[primitive_types#Number Literal|Primitive Types > Number Literal]]

## Save Flags

Save flags are boolean variables. You may have up to 65,536 of these.

Common use cases for save flags include tracking whether the player has:

- heard specific entities' backstories
- seen specific cutscenes
- completed specific puzzles
- found specific secrets

See: [[primitive_types#Boolean|Primitive Types > Boolean]]

## Engine Flags

### Setable Engine Flags

Can be used as the LHS of a [[actions#Assign Bool Value|bool assignment action phrase]].

| MGS keyword       | Description                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `player_control`  | When `true`, the player can move, interact with entities, and use the hex editor (if enabled).                         |
| `lights_control`  | When `true`, the lights around the screen can be controlled manually.                                                  |
| `hex_editor`      | Opens the hex editor when set to `true`.                                                                               |
| `hex_dialog_mode` | When `true`, the number of rows in the hex editor is reduced to make room for dialog boxes. Not currently implemented. |
| `hex_control`     | When `true`, enables the hex editor for player use.                                                                    |
| `hex_clipboard`   | When `true`, the player can use the hex editor clipboard.                                                              |
| `serial_control`  | When `true`, the player can use the serial console.                                                                    |

### Checkable Engine Flags

Can be used as [[expressions_and_operators#Bool Operands|bool operands]] in a bool expression.

| MGS keyword          | Description                                                 |
| -------------------- | ----------------------------------------------------------- |
| `debug_mode`         | See [[debug_tools#Debug Mode\|Debug Mode]].                 |
| `dialog open`        | Checks whether a [[dialogs\|dialog]] is open.               |
| `serial_dialog open` | Checks whether a [[serial_dialogs\|serial dialog]] is open. |

## Save Data

The state that is preserved when a game is saved includes:

- The `warp_state` string
- All save flag values (booleans)
- All integer variable values (ints)
- The player's name (string)
- `MEM` button offsets (the player can change the `MEM` button mapping)
- Hex editor clipboard contents (up to 32 bytes)
- Current map id (NOTE: this is saved, but not currently used upon load; player position is captured and restored manually in the Black Mage Game).

---

[[index|Quick Links]]
