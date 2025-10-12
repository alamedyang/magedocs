# State

See also: [Entity Properties](entities#entity-properties)

There are only a few variables available for [scripts](scripts) to use.

All variables are equally accessible to all scripts at all times because they are [project scope](syntax_scopes).

No need to initialize or define variables before using them; they are all pre-allocated in engine and always available.

::: warning
Since all variables always exist, typos in variable names are hard to spot. If you set `birthdayparty` but check `birthday_party`, the encoder will create and store both variables as if they were separate things.

If you find a variable isn't triggering logic checks in the ways you expect, check your spelling.
:::

All variables are persistent between [map loads](maps#map-loads) because all are all included in the [save data](#save-data).

## Warp State String

The Warp State String (`warp_state`) is designated for controlling player spawn behavior on a map's [`on_load`](scripts#on_load) script. When you leave a [room](doors) (or otherwise trigger a new [map load](maps#map-loads)), the Warp State String should be [set](actions#assign-string-value) to something that indicates the exit/entrance point so the next [map](maps)'s `on_load` can [teleport](actions#position-assignment) the [player entity](entities#player) to the appropriate [spawn point](doors#spawn-points).

See [Primitive Types > String](primitive_types#string)

## Integer Variables

These are `uint16_t` values, meaning they can be any whole number between `0` and `65535`. (No negative numbers, no decimal points, no `NaN`.) You may have up to 255 of these.

The default value is `0`.

These may be [printed](dialog_and_serial_dialog_strings#printing-current-values) in a [dialog or serial dialog string](dialog_and_serial_dialog_strings#print-variable-value).

See: [Primitive Types > Number Literal](primitive_types#number-literal)

## Save Flags

Save flags are boolean variables. You may have up to 65,536 of these.

Common use cases for save flags include tracking whether the player has:

- heard specific entities' backstories
- seen specific cutscenes
- completed specific puzzles
- found specific secrets

See: [Primitive Types > Boolean](primitive_types#boolean)

## Engine Flags

### Setable Engine Flags

Can be used as the LHS of a [bool assignment](actions#assign-bool-value).

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

Can be used as [bool operands](expressions_and_operators#bool-operands) in a bool expression.

| MGS keyword          | Description                                                 |
| -------------------- | ----------------------------------------------------------- |
| `debug_mode`         | See [Debug Mode](debug_tools#debug-mode).                 |
| `dialog open`        | Checks whether a [dialog](dialogs) is open.               |
| `serial_dialog open` | Checks whether a [serial dialog](serial_dialogs) is open. |

## Save Data

The state that is preserved when a game is saved includes:

- The [Warp State String](#warp-state-string)
- All [save flag values](#save-flags) (booleans)
- All [integer variable values](#integer-variables) (ints)
- The [player's name](entities#entity-properties) (string)
- `MEM` button offsets for the [hex_editor](hex_editor) (the player can change the `MEM` button mapping)
- Hex editor clipboard contents (up to 32 bytes)
- Current [map](maps) id
	- (NOTE: this is saved, but not currently used upon load; player position is captured and restored manually in the Black Mage Game at this time.)
