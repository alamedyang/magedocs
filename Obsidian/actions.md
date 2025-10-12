# Actions

- **Bytecode action**: a single bytecode instruction. These are the basic scripting unit of the Mage Game Engine.
- **Action phrase**: a phrase of multiple words or sub-patterns that produce one or more bytecode instructions when compiled.
	- Action phrases are used inside a [[scripts|script block]].
	- They must end with a semicolon.

For dictionary entry syntax information, see: [[jargon_and_syntax|Jargon and Syntax]] and [[primitive_types|Primitive Types]].

This list of action phrases is not exhaustive. Some are included in pages relevant to the data types they manipulate, such as with [[commands|commands]] and [[arrays|arrays]].

## Game Control

### Save slot

Saves the current [[state#Save Data|save data]] into the last-loaded save slot.

It is not possible to write save data into an arbitrary slots, nor is it possible to copy data from one save slot into another.

- **Syntax**: `save slot;`
- **Bytecode action**: `SLOT_SAVE`

### Load Slot

Brings the [[state#Save Data|save data]] associated with that slot into RAM.

- **Syntax**: `load slot <number[]>;`
- **Bytecode action**: `SLOT_LOAD`

### Erase Slot

Clears all the [[state#Save Data|save data]] in the given slot.

This action displays a [[dialogs|dialog card]] reporting that the save was erased. This introduces a player-timed barrier which prevents ROM burnout in the event that a player set an an [[scripts#`on_tick`|`on_tick`]] script slot to a script that contains this action.

- **Syntax**: `erase slot <number[]>;`
- **Bytecode action**: `SLOT_ERASE

### Non-Blocking Delay

This pauses the current [[scripts|script]] while allowing all other aspects of the game to continue unimpeded.

Use this if you want to pad the actions an [[entities|entity]] is performing so they don't all occur on the same game tick.

For cinematic cutscenes, you will almost certainly need to [[#Assign Bool Value|disable]] [[#Bool Setables|player control]] before using this action, otherwise the player will be able to walk away in the middle. (Don't forget to turn it on again when finished.)

- **Syntax**: `wait <duration[]>;
- **Bytecode action**: `NON_BLOCKING_DELAY`

### Blocking Delay

This pauses the entire game, including all other scripts and animations, for the given duration. As this might make the game appear broken, you should probably use a [[#Non-Blocking Delay]] instead.

- **Syntax**: `block <duration[]>;
- **Bytecode action**: `BLOCKING_DELAY`

### Load Map

For most normal door behavior, you will probably want to [[#Assign String Value|set]] the [[state#Warp State String|Warp State String]] before using the this action.

See [[maps#Map Loads|Map Loads]] for information on what state is reset upon map load.

- **Syntax**: `load map <map name: string[]>;`
- **Bytecode action**: `LOAD_MAP`

## Dialogs Management

### Show Dialog

Plays the named [[dialogs|dialog]]. While a dialog card is showing, the player can only advance to the next dialog message or choose a [[dialogs#Dialog Option|multiple choice option]] within that dialog (if any); the player cannot hack, interact with another [[entities|entity]], move, etc.

Dialogs may be defined in place with a [[dialogs#Dialog Literal|dialog literal]]. 

Note that the dialog reference can either be a dialog literal OR an [[action_param_expansions|expandable string]], not both.

- **Syntax**:
	- `show dialog <dialog name: string[]>;`
	- `show dialog <dialog literal>;`
- **Bytecode action**: `SHOW_DIALOG`

### Close Dialog

Ends any open [[dialogs|dialog]].

Use this action when you want to trigger a dialog that may potentially interrupt a dialog in progress. Otherwise, the two dialogs may collide, which can result in a soft lock.

- **Syntax**: `close dialog;`
- **Bytecode action**: `CLOSE_DIALOG`

### Show Serial Dialog

Outputs the named [[serial_dialogs#Serial Dialog|serial dialog]] to a connected serial console.

Using this action, each serial dialog message will get a newline added to the end. (To avoid this, use the concat variant.)

Dialogs may be defined in place with a [[serial_dialogs#Serial Dialog Literal|serial dialog literal]]. 

Note that the serial dialog reference can either be a serial dialog literal OR an [[action_param_expansions|expandable string]], not both.

- **Syntax**:
	- `show serial_dialog <serial dialog name: string[]>;`
	- `show serial_dialog <serial dialog literal>;`
- **Bytecode action**: `SHOW_SERIAL_DIALOG`

### Concat Serial Dialog

Like [[#Show Serial Dialog]] in every way, except the these serial dialogs will *not* be printed with a newline at the end. This is the only way to build up single-line strings from multiple pieces.

- **Syntax**:
	- `concat serial_dialog <serial dialog name: string[]>;`
	- `concat serial_dialog <serial dialog literal>;`
- **Bytecode action**: `SHOW_SERIAL_DIALOG`

### Close Serial Dialog

Ends any [[serial_dialogs|serial dialog]] that is awaiting user input.

- **Syntax**: `close serial_dialog;`
- **Bytecode action**: `CLOSE_SERIAL_DIALOG`

## Script Control

### Run Script

Immediately switches the current [[scripts|script]] [[scripts#Script Slots|slot]] to the named [[scripts|script]], which begins execution immediately.

If you want to replace the script in the current slot without immediately executing it, you should use [[#Assign Script Value|Assign Script Value]] instead.

- **Syntax**: `goto <"script"?> <script name: string[]>`
- **Bytecode action**: `RUN_SCRIPT`

### Pause or Unpause Script Slot

Pauses or unpauses a [[scripts|script]]. This is most useful for temporarily pausing an [[entities|entity]]'s `on_tick` script during an [[scripts#`on_interact`|`on_interact`]] event.

- **Syntax**: 
	- `pause <entity or map identifier[]> <script slot: string[]>;`
	- `unpause <entity or map identifier[]> <script slot: string[]>;`
	- **Entity or map identifier**:
		- `map`
		- **Entity identifier**: see [[identifiers#Entity Identifier|Entity identifier]]
	- **Script slot**:
		- For entities: `on_tick`, `on_interact`, `on_look`
		- For maps: `on_load`, `on_tick`, `on_command`
		- See [[scripts#Script Slots|Script Slots]]
- **Bytecode action**: `SET_SCRIPT_PAUSE`

### Jump to Action Index

Jumps to the nth bytecode instruction in the currently-executing [[scripts|script]]. As these indices are near impossible to know ahead of time, using this action is not recommended. Instead, use [[#Jump to Label|Jump to Label]].

- **Syntax**: `goto index <number[]>;`
- **Bytecode action**: `GOTO_ACTION_INDEX`

### Jump to Label

Jumps to the named label in the currently-executing [[scripts|script]].

- **Syntax**: `goto index <number[]>;
- **Bytecode action**: n/a
	- The old encoder used `GOTO_ACTION_INDEX` but with a string value instead of a number for the param `action_index`.

### Copy Script

See: [[macros#Copy Script|Macros > Copy Script]]

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
	- `<entity identifier>` (See [[identifiers#Entity Identifier|Entity Identifier]])

### Coordinate (Assignment)

- **Syntax**:
	- `<entity identifier> position` (See [[identifiers#Entity Identifier|Entity Identifier]])
	- `<geometry identifier>` (See [[identifiers#Geometry Identifier|Geometry Identifier)]]

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

Same as [[#Movable (Assignment)|Movable (Assignment)]].

### Coordinate (Over Time)

Coordinates for this action phrase need to have the `origin` or `length` specified, as walking over time to a polygon's origin is not the same as walking along a polygon's length. See [[vector_objects#Vector Origins|Vector Origins]].

- **Syntax**:
	- `<entity identifier> position` (See [[identifiers#Entity Identifier|Entity Identifier]])
	- `entity_path <"origin" OR "length">`
	- `<geometry identifier> <"origin" OR "length">` (See [[identifiers#Geometry Identifier|Geometry Identifier]])

### Forever

`forever` is optional.

- If `forever` is used, then the script will loop this action forever and will not execute any further items.
- `forever` cannot be used with:
	- Entities as the destination coordinate.
	- `origin` (i.e. single points) as the destination coordinate.

## Choreography

See [[#Assign Direction Value|Assign Direction Value]] for rotating an entity or pointing it at something.

### Play Entity Animation

The [[entities|entity]] will play the given [[animations|animation]] the given number of times, then will return to the default animation for the entity's current movement status ([[animations#Idle|standing]], [[animations#Walking|walking]]).

No other [[scripts#Script Body Items|script items]] will execute in that script until the animation count is fulfilled.

If an entity is compelled to move around on the [[maps|map]], it will abort this animation playback.

To change an entity's animation indefinitely, use the [[#Assign Int Value]] action phrase for the entity's [[entities#Entity Properties|`current_animation`]].

- **Syntax**: `<entity identifier[]> animation -> <animation: number[]> <play count: quantity[]>;`
	- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
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

An [[expressions_and_operators#Assignment Operation|assignment operation]] is a binary [[expressions_and_operators|expression]] that sets the left-hand side (LHS) to the value of the right-hand side (RHS).

**Syntax**: `<LHS> = <RHS>;`

### Assign Int Value

**Syntax**: `<int setable[]> = <int expression[]>`;

If the RHS and the LHS of any evaluated expansion are both bare identifiers, they will be handled as integer variables. To silence the ambiguity warning, use an "invisible operation" (e.g. `*1` or `+0`) to coerce the RHS to an int expression.

#### Int Setables

(NOTE: Not all [[expressions_and_operators#Int Operands|int getables]] are int setables and vice versa.)

- [[identifiers|Variable identifiers]] ([[state#Integer Variables|integers]])
- [[arrays#Assign Array Value at Index|Array value at index]]
- [[entities#Entity Properties|Entity int properties]]:
	- `<entity identifier> x`
	- `<entity identifier> y`
    - `<entity identifier> primary_id_type` (u8)
    - `<entity identifier> primary_id`
    - `<entity identifier> secondary_id`
    - `<entity identifier> current_animation`(u8)
    - `<entity identifier> animation_frame`(u8)
    - `<entity identifier> strafe`
	- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
	- See [[entities#Entity Properties|Entity Properties]]

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

Similar to [[#Assign Int Value]]. It assigns a value to an [[#Int Setable|int setable]], but it also changes it by the operation in the "op equals" operator.

E.g. `var_name += 5;` is the same as `var_name = var_name + 5;`.

Note that relative entity turns cannot be made with [[expressions_and_operators#Int Expressions|int expressions]]; these must take [[primitive_types#Number Literal|number literals]]. See [[#Assign Direction Value|Assign Direction Value]] for turning an entity toward something specific on the map.

- **Syntax**:
	- `<entity identifier[]> direction += <number[]>;` 
	- `<entity identifier[]> direction -= <number[]>;` 
	- `<int setable[]> <op equals> <int expression[]>;`
	- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
	- **Int setable**: see [[#Int Setables]]
	- **Op equals**:
		- `+=`: add
		- `-=`: subtract
		- `*=`: multiply
		- `/=`: divide
		- `%=`: modulo
		- `?=`: RNG roll exclusive
	- **Int expression**: see [[expressions_and_operators#Expressions|Expressions]]

**Bytecode actions**:

- `SET_ENTITY_DIRECTION_RELATIVE`
- `MUTATE_VARIABLE`
- `MUTATE_VARIABLES`

### Assign Bool Value

**Syntax**: `<bool getable[]> = <bool expression[]>;`

Note: if the RHS and the LHS of any evaluated expansion are both bare identifiers, they will be handled as integer variables. To coerce the RHS to a bool expression, attach `!!` to the identifier in the RHS, or use the `flag` sigil to the LHS and/or the RHS identifier.

#### Bool Setables

(NOTE: Not all [[expressions_and_operators#Bool Operands|bool getables]] are bool setables and vice versa.)

- [[primitive_types#Boolean|Boolean literals]] e.g. `true`, `false`
- [[identifiers|Variable identifiers]] ([[state#Save Flags|flags]])
- [[state#Setable Engine Flags|Setable engine flags]]:
	- `player_control`
	- `lights_control
	- `hex_editor
	- `hex_dialog_mode
	- `hex_control
	- `hex_clipboard
	- `serial_control
- [[entities#Entity Properties|Entity bool properties]]:
    - `<entity identifier> glitched`
	- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
- Light states
	- `light <light name: string[]>`
	- See [[#Light Names|light names]]
	
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

#### Lights

- This includes all 8 bit lights underneath the screen and the 4 lights on either side of the screen.
- Gaining control of the lights does not clear the light state; you will need to turn all the lights off yourself.
- If you turn a light off and on again on the same game tick, the light will appear to flicker.

Lights names:

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


### Assign String Value

**Syntax**: `<string setable[]> = <string[]>;`

#### String Setables

(NOTE: Not all [[expressions_and_operators#String Checkables|string checkables]] are string setables and vice versa. There are no string getables.)

Some string values use different action phrases. See [[#Assign Script Value]] and [[#Assign Direction Value]].

- `warp_state` (the [[state#Warp State String|Warp State String]])
- `serial_connect`: the default serial message printed upon game launch.
- [[entities#Entity Properties|Entity string properties]]:
	- `<entity identifier[]> name`
	- `<entity identifier[]> type`
	- `<entity identifier[]> path`
	- **Entity identifier**: See [[identifiers#Entity Identifier|entity identifier]]

**Bytecode actions**:

- `SET_WARP_STATE`
- `SET_CONNECT_SERIAL_DIALOG`
- `SET_ENTITY_NAME`
- `SET_ENTITY_TYPE`
- `SET_ENTITY_PATH

### Assign Script Value

**Syntax**: `<script setable[]> <script slot> = <script name: string[]>;`

#### Script Setable

See [[scripts#Script Slots|Script Slots]]

- **Syntax**:
	- `map`
	- `<entity identifier>` (See [[identifiers#Entity Identifier|Entity Identifier]])
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

Makes an [[entities|entity]] face the target. To make relative turns (e.g. 90º CCW) see [[#Change Int Value]].

- **Syntax**: `<entity identifier> direction = <direction target>;`
	- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
	- **Direction target**:
		- `<geometry identifier>` (See [[identifiers#Geometry Identifier|Geometry Identifier]])
		- `<entity identifier>` (See [[identifiers#Entity Identifier|Entity Identifier]])
		- `north`, `south`, `east`, or `west`
- **Bytecode actions**: 
	- `SET_ENTITY_DIRECTION_TARGET_GEOMETRY`
	- `SET_ENTITY_DIRECTION_TARGET_ENTITY`
	- `SET_ENTITY_DIRECTION`
