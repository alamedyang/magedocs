# Actions

- **Bytecode action**: a single bytecode instruction. These are the basic scripting unit of the Mage Game Engine.
- **Action phrase**: a phrase of multiple words or sub-patterns that produce one or more bytecode instructions when compiled.
	- Action phrases are used inside a script block.
	- They must end with a semicolon.

For dictionary entry syntax information, see: [Jargon and Syntax](jargon_and_syntax) and [Primitive Types](primitive_types).

## Game Control

### Save slot

Saves the current [save data](state#save-data) into the last-loaded save slot.

It is not possible to write save data into an arbitrary slots, nor is it possible to copy data from one save slot into another.

- **Syntax**: `save slot;`
- **Bytecode action**: `SLOT_SAVE`

### Load Slot

Brings the [save data](state#save-data) associated with that slot into RAM.

- **Syntax**: `load slot <number[]>;`
- **Bytecode action**: `SLOT_LOAD`

### Erase Slot

Clears all the [save data](state#save-data) in the given slot.

This action creates a dialog card reporting that the save was erased. This introduces a player-timed barrier which prevents ROM burnout in the event that a player set an an `on_tick` script to one that contains this action.

- **Syntax**: `erase slot <number[]>;`
- **Bytecode action**: `SLOT_ERASE

### Non-Blocking Delay

This pauses the current [script](scripts) while allowing all other aspects of the game to continue unimpeded.

Use this if you want to pad the actions an [entity](entities) is performing so they don't all occur on the same game tick.

For cinematic cutscenes, you will almost certainly need to disable player control before using this action, otherwise the player will be able to walk away in the middle. (Don't forget to turn it on again when finished.)

- **Syntax**: `wait <duration[]>;
- **Bytecode action**: `NON_BLOCKING_DELAY`

### Blocking Delay

This pauses the entire game, including all other scripts and animations, for the given duration. As this might make the game appear broken, you should probably use a [undefined](#nonblocking-delay) instead.

- **Syntax**: `block <duration[]>;
- **Bytecode action**: `BLOCKING_DELAY`

### Load Map

For most normal door behavior, you will probably want to set the [Warp State String](state#warp-state-string) before using the this action.

See [Map Loads](maps#map-loads) for information on what state is reset upon map load.

- **Syntax**: `load map <map name: string[]>;`
- **Bytecode action**: `LOAD_MAP`

## Dialogs Management

### Show Dialog

Plays the named [dialog](dialogs). While a dialog card is showing, the player can only advance to the next dialog message or choose a [multiple choice option](dialogs#dialog-option) within that dialog (if any); the player cannot hack, interact with another [entity](entities), move, etc.

Dialogs may be defined in place with a [dialog literal](dialogs#dialog-literal). 

Note that the dialog reference can either be a dialog literal OR an [expandable string](action_param_expansions), not both.

- **Syntax**:
	- `show dialog <dialog name: string[]>;`
	- `show dialog <dialog literal>;`
- **Bytecode action**: `SHOW_DIALOG`

### Close Dialog

Ends any open [dialog](dialogs).

Use this action when you want to trigger a dialog that may potentially interrupt a dialog in progress. Otherwise, the two dialogs may collide, which can result in a soft lock.

- **Syntax**: `close dialog;`
- **Bytecode action**: `CLOSE_DIALOG`

### Show Serial Dialog

Outputs the named [serial dialog](serial_dialogs#serial-dialog) to a connected serial console.

Using this action, each serial dialog message will get a newline added to the end. (To avoid this, use the concat variant.)

Dialogs may be defined in place with a [serial dialog literal](serial_dialogs#serial-dialog-literal). 

Note that the serial dialog reference can either be a serial dialog literal OR an [expandable string](action_param_expansions), not both.

- **Syntax**:
	- `show serial_dialog <serial dialog name: string[]>;`
	- `show serial_dialog <serial dialog literal>;`
- **Bytecode action**: `SHOW_SERIAL_DIALOG`

### Concat Serial Dialog

Like [undefined](#show-serial-dialog) in every way, except the these serial dialogs will *not* be printed with a newline at the end. This is the only way to build up single-line strings from multiple pieces.

- **Syntax**:
	- `concat serial_dialog <serial dialog name: string[]>;`
	- `concat serial_dialog <serial dialog literal>;`
- **Bytecode action**: `SHOW_SERIAL_DIALOG`

### Close Serial Dialog

Ends any [serial dialog](serial_dialogs) that is awaiting user input.

- **Syntax**: `close serial_dialog;`
- **Bytecode action**: `CLOSE_SERIAL_DIALOG`

## Script Control

### Run Script

Immediately switches the current script slot to the named [script](scripts), which begins execution immediately.

If you want to replace the script in the current slot without immediately executing it, you should use a slot assignment action instead.

- **Syntax**: `goto <"script"?> <script name: string[]>`
- **Bytecode action**: `RUN_SCRIPT`

### Pause or Unpause Script Slot

Pauses or unpauses a [script](scripts). This is most useful for temporarily pausing an [entity](entities)'s `on_tick` script during an `on_interact` event.

- **Syntax**: 
	- `pause <entity or map identifier[]> <script slot: string[]>;`
	- `unpause <entity or map identifier[]> <script slot: string[]>;`
	- **Entity or map identifier**:
		- `map`
		- **Entity identifier**: see [Entity identifier](identifiers#entity-identifier)
	- **Script slot**:
		- For entities: `on_tick`, `on_interact`, `on_look`
		- For maps: `on_load`, `on_tick`, `on_command`
- **Bytecode action**: `SET_SCRIPT_PAUSE`

### Jump to Action Index

Jumps to the nth bytecode instruction in the currently-executing [script](scripts). As these indices are practically impossible to know ahead of time, using this action is not recommended. Instead, use label index jumps.

- **Syntax**: `goto index <number[]>;`
- **Bytecode action**: `GOTO_ACTION_INDEX`

### Jump to Label

Jumps to the named label in the currently-executing [script](scripts).

- **Syntax**: `goto index <number[]>;
- **Bytecode action**: n/a
	- The old encoder used `GOTO_ACTION_INDEX` but with a string value instead of a number for the param `action_index`.

### Copy Script

See: [Macros > Copy Script](macros#copy-script)

- **Bytecode action**: `COPY_SCRIPT` 

## Position Assignment

This action phrase instantly teleports a "movable" to a "coordinate."

- **Syntax:** `<movable[] = <coordinate[]>;` 
- **Bytecode actions**:
	- `TELEPORT_ENTITY_TO_GEOMETRY`
	- `SET_CAMERA_TO_FOLLOW_ENTITY`
	- `TELEPORT_CAMERA_TO_GEOMETRY`

### Movable (Assignment)

- **Syntax**:
	- `camera`
	- `<entity identifier>` (See [Entity Identifier](identifiers#entity-identifier))

### Coordinate (Assignment)

- **Syntax**:
	- `<entity identifier> position` (See [Entity Identifier](identifiers#entity-identifier))
	- `<geometry identifier>` (See [Geometry Identifier)](identifiers#geometry-identifier)

## Position Over Time

This action phrase moves a "movable" to a "coordinate" over time.

- **Syntax:** `<movable[] -> <coordinate[]> over <duration[]> <"forever"?>;`
- **Bytecode actions**:
	- `WALK_ENTITY_TO_GEOMETRY`
	- `WALK_ENTITY_ALONG_GEOMETRY`
	- `LOOP_ENTITY_ALONG_GEOMETRY`
	- `PAN_CAMERA_TO_ENTITY`
	- `PAN_CAMERA_TO_GEOMETRY`
	- `PAN_CAMERA_ALONG_GEOMETRY`
	- `LOOP_CAMERA_ALONG_GEOMETRY`

###  Movable (Over Time)

Same as in the action phrase [Position Assignment](#movable-assignment).

### Coordinate (Over Time)

Coordinates for this action phrase need to have the `origin` or `length` specified, as walking over time to a polygon's origin is not the same as walking along a polygon's length. See [Vector Origins](vector_objects#vector-origins).

- **Syntax**:
	- `<entity identifier> position` (See [Entity Identifier](identifiers#entity-identifier))
	- `entity_path <"origin" OR "length">`
	- `<geometry identifier> <"origin" OR "length">` (See [Geometry Identifier](identifiers#geometry-identifier))

### Forever

`forever` is optional.

- `forever` cannot be used with:
	- Entities as the destination coordinate.
	- `origin` (i.e. single points) as the destination coordinate.
- If `forever` is used, then the script will loop this action forever, and will not execute any further items.

## Choreography

See [Assign Direction Value](#assign-direction-value).

### Play Entity Animation

The [entity](entities) will play the given animation the given number of times, then will return to the default animation for the entity's movement status (standing, walking).

No other script items will execute in that script until the animation count is fulfilled.

If an entity is compelled to move around on the map, it will abort this animation playback.

To change an entity's animation indefinitely, use the [undefined](#assign-int-value) action phrase for the entity's `current_animation` property.

- **Syntax**: `<entity identifier[]> animation -> <animation: number[]> <play count: quantity[]>;`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
	- **Animation**: the nth animation defined in `entity_types.json` for the entity's type.
- **Bytecode action**: `PLAY_ENTITY_ANIMATION`

### Fade Camera In or Out

Transitions the screen from (or to) the specified color. Fades are slow on the real hardware, so use sparingly.

- **Syntax**:
	- `camera fade in -> <color[]> over <duration[]>;`
	- `camera fade out -> <color[]> over <duration[]>;
- **Bytecode actions**:
	- `SCREEN_FADE_IN`
	- `SCREEN_FADE_OUT`

### Shake Camera

Shakes the camera a certain distance (`amplitude`) at a certain speed (`frequency`) and for a certain length of time (`duration`)

- **Syntax**: `camera shake -> <frequency: duration[]> <amplitude: distance[]> over <duration[]>;`
- **Bytecode action**: `SET_SCREEN_SHAKE`

## Assign a Value

An [assignment operation](expressions_and_operators#assignment-operation) is a binary [expression](expressions_and_operators) that sets the left-hand side (LHS) to the value of the right-hand side (RHS).

**Syntax**: `<LHS> = <RHS>;`

### Assign Int Value

**Syntax**: `<int setable[]> = <int expression[]>`;

If the RHS and the LHS of any evaluated expansion are both bare identifiers, they will be handled as integer variables. To silence the ambiguity warning, use an "invisible operation" (e.g. `*1` or `+0`) to coerce the RHS to an int expression.

#### Int Setables

- [Variable identifiers](identifiers) ([integers](state#integer-variables))
- [Array value at index](arrays#assign-array-value-at-index)
- [Entity int properties](entities#entity-properties):
	- `<entity identifier> x`
	- `<entity identifier> y`
    - `<entity identifier> primary_id_type` (u8)
    - `<entity identifier> primary_id`
    - `<entity identifier> secondary_id`
    - `<entity identifier> current_animation`(u8)
    - `<entity identifier> animation_frame`(u8)
    - `<entity identifier> strafe`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
	- See [Entity Properties](entities#entity-properties)

**Bytecode actions**:

- `COPY_VARIABLE`
- `MUTATE_VARIABLE`
- `MUTATE_VARIABLES`
- `ARRAY_WRITE_INTO_VARIABLE_INDEX_FROM_VALUE`
- `ARRAY_WRITE_INTO_VARIABLE_INDEX_FROM_VARIABLE`
- `SET_ENTITY_X`
- `SET_ENTITY_Y`
- `SET_ENTITY_PRIMARY_ID_TYPE`
- `SET_ENTITY_PRIMARY_ID`
- `SET_ENTITY_SECONDARY_ID`
- `SET_ENTITY_CURRENT_ANIMATION`
- `SET_ENTITY_CURRENT_FRAME`
- `SET_ENTITY_MOVEMENT_RELATIVE`

### Change Int Value

Similar to [undefined](#assign-int-value). It assigns a value to an [int setable](#int-setable), but it also changes it by the operation in the "op equals" operator.

E.g. `var_name += 5;` is the same as `var_name = var_name + 5;`.

Note that relative entity turns cannot be made with [int expressions](expressions_and_operators#int-expressions); these must take [number literals](primitive_types#number-literal). See [Assign Direction Value](#assign-direction-value) for turning an entity toward something specific on the map.

- **Syntax**:
	- `<entity identifier[]> direction += <number[]>;` 
	- `<entity identifier[]> direction -= <number[]>;` 
	- `<int setable[]> <op equals> <int expression[]>;`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
	- **Int setable**: see [undefined](#int-setables)
	- **Op equals**:
		- `+=`: add
		- `-=`: subtract
		- `*=`: multiply
		- `/=`: divide
		- `%=`: modulo
		- `?=`: RNG roll exclusive
	- **Int expression**: see [Expressions](expressions_and_operators#expressions)

**Bytecode actions**:

- `SET_ENTITY_DIRECTION_RELATIVE`
- `MUTATE_VARIABLE`
- `MUTATE_VARIABLES`

### Assign Bool Value

**Syntax**: `<bool getable[]> = <bool expression[]>;`

Note: if the RHS and the LHS of any evaluated expansion are both bare identifiers, they will be handled as integer variables. To coerce the RHS to a bool expression, attach `!!` to the identifier in the RHS, or use the `flag` sigil to the LHS and/or the RHS identifier.

#### Bool Setables

- [Boolean literals](primitive_types#boolean) e.g. `true`, `false`
- [Variable identifiers](identifiers) ([flags](state#save-flags))
- [Setable engine flags](state#setable-engine-flags):
	- `player_control`
	- `lights_control
	- `hex_editor
	- `hex_dialog_mode
	- `hex_control
	- `hex_clipboard
	- `serial_control
- [Entity bool properties](entities#entity-properties):
    - `<entity identifier> glitched`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- Light states
	- `light <light name: string[]>`
	- See [light names](#light-names)
	
**Bytecode actions**:

- `SET_SAVE_FLAG`
- `SET_PLAYER_CONTROL`
- `SET_LIGHTS_CONTROL`
- `SET_HEX_EDITOR_STATE`
- `SET_HEX_EDITOR_DIALOG_MODE`
- `SET_HEX_EDITOR_CONTROL`
- `SET_HEX_EDITOR_CONTROL_CLIPBOARD`
- `SET_SERIAL_DIALOG_CONTROL`
- `SET_ENTITY_GLITCHED`
- `SET_LIGHTS_STATE`

### Assign String Value

**Syntax**: `<string setable[]> = <string[]>;`

#### String Setables

- The [warp state string](state#warp-state-string)
- `serial_connect`: the default serial message printed upon game launch.
- [Entity string properties](entities#entity-properties):
	- `<entity identifier[]> name`
	- `<entity identifier[]> type`
	- `<entity identifier[]> path`
	- **Entity identifier**: See [entity identifier](identifiers#entity-identifier)

**Bytecode actions**:

- `SET_WARP_STATE`
- `SET_CONNECT_SERIAL_DIALOG`
- `SET_ENTITY_NAME`
- `SET_ENTITY_TYPE`
- `SET_ENTITY_PATH

### Assign Script Value

**Syntax**: `<script setable[]> <script slot> = <script name: string[]>;`

#### Script Setables

- **Syntax**:
	- `map`
	- `<entity identifier>` (See [Entity Identifier](identifiers#entity-identifier))
- **Map script slots**:
	- `on_tick`
	- `on_look`
- **Entity script slots**:
	- `on_interact`
	- `on_tick`
	- `on_look`

**Bytecode actions**:

- `SET_MAP_TICK_SCRIPT`
- `SET_MAP_LOOK_SCRIPT`
- `SET_ENTITY_INTERACT_SCRIPT`
- `SET_ENTITY_TICK_SCRIPT`
- `SET_ENTITY_LOOK_SCRIPT`

### Assign Direction Value

Makes an [entity](entities) face the target. To make relative turns (e.g. 90º CCW) see [undefined](#change-int-value).

- **Syntax**: `<entity identifier> direction = <direction target>;`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
	- **Direction target**:
		- `<geometry identifier>` (See [Geometry Identifier](identifiers#geometry-identifier))
		- `<entity identifier>` (See [Entity Identifier](identifiers#entity-identifier))
		- `north`, `south`, `east`, or `west`
- **Bytecode actions**: 
	- `SET_ENTITY_DIRECTION_TARGET_GEOMETRY`
	- `SET_ENTITY_DIRECTION_TARGET_ENTITY`
	- `SET_ENTITY_DIRECTION`

## Lights Control

- This includes all 8 bit lights underneath the screen and the 4 lights on either side of the screen.
- Gaining control of the lights does not clear the light state; you will need to turn all the lights off yourself.
- If you turn a light off and on again on the same game tick, the light will appear to flicker.

#### Light Names

- `LED_XOR`
- `LED_ADD`
- `LED_SUB`
- `LED_PAGE`
- `LED_BIT128`
- `LED_BIT64`
- `LED_BIT32`
- `LED_BIT16`
- `LED_BIT8`
- `LED_BIT4`
- `LED_BIT2`
- `LED_BIT1`
- `LED_MEM0`
- `LED_MEM1`
- `LED_MEM2`
- `LED_MEM3`
- `LED_HAX` (capacitive touch button on the PCB)
- `LED_USB`
- `LED_SD`
- `LED_ALL` (will turn on/off all the lights)

## Other Actions

#todo put those in this file

- [Array Action Phrases](arrays#array-action-phrases)
- [commands](commands#command-actions)
