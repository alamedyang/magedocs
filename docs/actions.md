# Actions

- **Bytecode action**: a single bytecode instruction. These are the basic scripting unit of the Mage Game Engine.
- **Action phrase**: a phrase of multiple words or sub-patterns that produce one or more bytecode instructions when compiled.
	- Action phrases are used inside a [script block](scripts).
	- They must end with a semicolon.

For dictionary entry syntax information, see: [Jargon and Syntax](jargon_and_syntax) and [Primitive Types](primitive_types). Also see [Action Param Expansions](action_param_expansions).

This list of action phrases is not exhaustive. Some are included in pages relevant to the data types they manipulate, such as with [commands](commands) and [arrays](arrays), or are built into an element of more complex structures, like [expressions](expressions_and_operators).

## Quick Links

- Game Control
	- [Save Slot](#save-slot)
	- [Load Slot](#load-slot)
	- [Erase Slot](#erase-slot)
	- [Non-Blocking Delay](#nonblocking-delay)
	- [Blocking Delay](#blocking-delay)
	- [Load Map](#load-map)
- Dialog Management
	- [Show Dialog](#show-dialog)
	- [Close Dialog](#close-dialog)
	- [Show Serial Dialog](#show-serial-dialog)
	- [Concat Serial Dialog](#concat-serial-dialog)
	- [Close Serial Dialog](#close-serial-dialog)
- Script Control
	- [Run Script](#run-script)
	- [Pause or Unpause Script](#pause-or-unpause-script)
	- [Jump to Action Index](#jump-to-action-index)
	- [Jump to Label](#jump-to-label)
	- [Copy Script](#copy-script)
- Choreography
	- [Position Assignment](#position-assignment)
	- [Position Over Time](#position-over-time)
	- [Play Entity Animation](#play-entity-animation)
	- [Fade Camera In or Out](#fade-camera-in-or-out)
	- [Shake Camera](#shake-camera)
- [Assign a Value](#assign-a-value)
	- [Assign Int Value](#assign-int-value)
	- [Change Int Value](#change-int-value)
	- [Assign Bool Value](#assign-bool-value)
	- [Assign String Value](#assign-string-value)
	- [Assign Script Value](#assign-script-value)
	- [Assign Direction Value](#assign-direction-value)
- [Command Actions](commands#command-actions)
- [Array Actions](arrays#array-action-phrases)
- [Expressions](expressions_and_operators)
	- [Int Expressions](expressions_and_operators#int-expressions)
	- [Bool Expressions](expressions_and_operators#bool-expressions)

## Save Slot

Saves the current [save data](state#save-data) into the last-loaded save slot. It is not possible to write save data into an arbitrary slots, nor is it possible to copy data from one save slot into another.

```
save slot;
```

Bytecode action: `SLOT_SAVE`

## Load Slot

Brings the [save data](state#save-data) associated with that slot into RAM.

```
load slot <number[]>;
```

Bytecode action: `SLOT_LOAD`

## Erase Slot

Clears all the [save data](state#save-data) in the given slot.

This action displays a [dialog card](dialogs) reporting that the save was erased. This introduces a player-timed barrier which prevents ROM burnout in the event that a player set an an [`on_tick`](scripts#on_tick) script slot to a script that contains this action.

```
erase slot <number[]>;
```

Bytecode action: `SLOT_ERASE`

## Non-Blocking Delay

This pauses the current [script](scripts) while allowing all other aspects of the game to continue unimpeded. Use this if you want to pad the actions an entity is performing so they don't all occur on the same game tick.

For cinematic cutscenes, you will almost certainly need to [disable](#assign-bool-value) [player control](#bool-setables) before using this action, otherwise the player will be able to walk away in the middle. (Don't forget to turn it on again when finished.)

```
wait <duration[]>;
```

Bytecode action: `NON_BLOCKING_DELAY`

## Blocking Delay

This pauses the entire game, including all other scripts and animations, for the given duration. As this might make the game appear broken, you should probably use a [Non-Blocking Delay](#nonblocking-delay) instead.

```
block <duration[]>;
```

Bytecode action: `BLOCKING_DELAY`

## Load Map

For most normal door behavior, you will probably want to [set](#assign-string-value) the [Warp State String](state#warp-state-string) before using the this action. See [Map Loads](maps#map-loads) for what happens when a map is (re)loaded.

```
load map <string[]>;
```

Bytecode action: `LOAD_MAP`

## Show Dialog

Plays the named [dialog](dialogs). While a dialog card is showing, the player can only advance to the next dialog message or choose a [multiple choice option](dialogs#dialog-option) within that dialog (if any); the player cannot hack, interact with another [entity](entities), move, etc.

```
show dialog <string[]>;
// OR
show dialog <dialog literal>;
```

- **Dialog literal**: see [Dialog Literal](dialogs#dialog-literal)

Bytecode action: `SHOW_DIALOG`

## Close Dialog

Ends any open [dialog](dialogs).

Use this action when you want to trigger a dialog that may potentially interrupt a dialog in progress. Otherwise, the two dialogs may collide, which can result in a soft lock.

```
close dialog;
```

Bytecode action: `CLOSE_DIALOG`

## Show Serial Dialog

Outputs the named [serial dialog](serial_dialogs#serial-dialog) to a connected [serial console](terminal).

Using this action, each serial dialog message will get a newline added to the end. (To avoid this, use the concat variant.)

```
show serial_dialog <string[]>;
// OR
show serial_dialog <serial dialog literal>;
```

- **Serial dialog literal**: see [Serial Dialog Literal](serial_dialogs#serial-dialog-literal)

Bytecode action: `SHOW_SERIAL_DIALOG`

## Concat Serial Dialog

Like [Show Serial Dialog](#show-serial-dialog) in every way, except the these serial dialogs will *not* be printed with a newline at the end. This is the only way to build up single-line strings from multiple pieces.

```
concat serial_dialog <string[]>;
// OR
concat serial_dialog <serial dialog literal>;
```

- **Serial dialog literal**: see [Serial Dialog Literal](serial_dialogs#serial-dialog-literal)

Bytecode action: `SHOW_SERIAL_DIALOG`

## Close Serial Dialog

Ends any [serial dialog](serial_dialogs) that is awaiting user input.

```
close serial_dialog;
```

Bytecode action: `CLOSE_SERIAL_DIALOG`

## Run Script

Immediately switches the current [script](scripts) [slot](scripts#script-slots) to the named [script](scripts), which begins execution immediately.

If you want to replace the script in the current slot without immediately executing it, you should use [Assign Script Value](#assign-script-value) instead.

```
goto <"script"?> <string[]>;
```

Bytecode action: `RUN_SCRIPT`

## Pause or Unpause Script

Pauses or unpauses a [script](scripts). This is most useful for temporarily pausing an [entity](entities)'s `on_tick` script during an [`on_interact`](scripts#on_interact) event.

```
// pause
pause <entity or map identifier[]> <script slot[]>;

// unpause
unpause <entity or map identifier[]> <script slot[]>;
```

- **Entity or map identifier**: two choices:
	- The keyword `map`
	- An [entity identifier](identifiers#entity-identifier)
- [**Script slot**](scripts#script-slots):
	- For entities: `on_tick`, `on_interact`, `on_look`
	- For maps: `on_load`, `on_tick`, `on_command`

Bytecode action: `SET_SCRIPT_PAUSE`

## Jump to Action Index

Jumps to the nth bytecode instruction in the currently-executing [script](scripts). As these indices are near impossible to know ahead of time, using this action is not recommended. Instead, use [Jump to Label](#jump-to-label).

```
goto index <number[]>;
```

Bytecode action: `GOTO_ACTION_INDEX`

## Jump to Label

Jumps to the named label in the currently-executing [script](scripts).

```
goto label <string[]>;
```

Bytecode action:

- No longer uses a bytecode action; now these are baked before the JSON step.
- The old encoder ("natlang") used `GOTO_ACTION_INDEX` but with a string value instead of a number for the param `action_index`. (This had some unpleasant consequences.)

## Copy Script

See: [Macros > Copy Script](macros#copy-script)

## Position Assignment

This action phrase instantly teleports a "[movable](#movable-assignment)" to a "[coordinate](#coordinate-assignment)."

```
<movable[]> = <coordinate[]>;
```

- **Movable**: see [Movable (Assignment)](#movable-assignment)
- **Coordinate**: see [Coordinate (Assignment)](#coordinate-assignment)

Bytecode actions:

- `TELEPORT_ENTITY_TO_GEOMETRY`
- `SET_CAMERA_TO_FOLLOW_ENTITY`
- `TELEPORT_CAMERA_TO_GEOMETRY`
- (Teleporting an entity to another entity is done with a bytecode sequence, not a specific bytecode action.)

### Movable (Assignment)

```
camera
// OR
<entity identifier>
```

- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)

### Coordinate (Assignment)

```
<entity identifier> position
// OR
<geometry identifier>
```

- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- **Geometry identifier**: see [Geometry Identifier](identifiers#geometry-identifier)

## Position Over Time

This action phrase moves a "[movable](#movable-over-time)" to a "[coordinate](#coordinate-over-time)" over time.

```
<movable[] -> <coordinate[]> over <duration[]> <"forever"?>;
```

- **Movable**: see [Movable (Assignment)](#movable-assignment)
- **Coordinate**: see [Coordinate (Assignment)](#coordinate-assignment)
- **Forever**: see [Forever](#forever)

Bytecode actions:

- `WALK_ENTITY_TO_GEOMETRY`
- `WALK_ENTITY_ALONG_GEOMETRY`
- `LOOP_ENTITY_ALONG_GEOMETRY`
- `PAN_CAMERA_TO_ENTITY`
- `PAN_CAMERA_TO_GEOMETRY`
- `PAN_CAMERA_ALONG_GEOMETRY`
- `LOOP_CAMERA_ALONG_GEOMETRY`

###  Movable (Over Time)

```
camera
// OR
<entity identifier>
```

- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)

### Coordinate (Over Time)

Coordinates for this action phrase need to have the `origin` or `length` specified, as walking over time to a polygon's origin is not the same as walking along a polygon's length. See [Vector Origins](vector_objects#vector-origins).

```
<entity identifier> position
// OR
entity_path <"origin" OR "length">
// OR
<geometry identifier> <"origin" OR "length">
```

- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- **Geometry identifier**: see [Geometry Identifier](identifiers#geometry-identifier)

### Forever

`forever` is optional.

- If `forever` is used, then the script will loop this action forever and will not execute any further items.
- `forever` cannot be used with:
	- Entities as the destination coordinate.
	- `origin` (i.e. single points) as the destination coordinate.

## Play Entity Animation

The [entity](entities) will play the given [animation](animations) the given number of times, then will return to the default animation for the entity's current movement status ([standing](animations#idle), [walking](animations#walking)).

No other [script items](scripts#script-body-items) will execute in that script until the animation count is fulfilled.

If an entity is compelled to move around on the [map](maps), it will abort this animation playback.

To change an entity's animation indefinitely, use the [Assign Int Value](#assign-int-value) action phrase for the entity's [`current_animation`](entities#entity-properties).

```
<entity identifier[]> animation -> <animation: number[]> <play count: quantity[]>;
```

- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- **Animation**: the nth animation defined in [`entity_types.json`](what_youll_need#entity_types.json) for the entity's [type](entity_types#character-entity).

Bytecode action: `PLAY_ENTITY_ANIMATION`

## Fade Camera In or Out

Transitions the screen from (or to) the specified color. Fades are slow on the real hardware, so use sparingly.

```
// fade in
camera fade in -> <color[]> over <duration[]>;

// fade out
camera fade out -> <color[]> over <duration[]>;
```

Bytecode actions: `SCREEN_FADE_IN` and `SCREEN_FADE_OUT`

## Shake Camera

Shakes the camera a certain distance (`amplitude`) at a certain speed (`frequency`) and for a certain length of time (`duration`)

```
camera shake -> <frequency: duration[]> <amplitude: distance[]> over <duration[]>;
```

Bytecode action: `SET_SCREEN_SHAKE`

## Assign a Value

An [assignment operation](expressions_and_operators#assignment-operation) is a binary [expression](expressions_and_operators) that sets the left-hand side (**LHS**) to the value of the right-hand side (**RHS**).

```
<LHS> = <RHS>;
```

Action phrases using this pattern:

- [Assign Int Value](actions#assign-int-value)
- [Assign Bool Value](actions#assign-bool-value)
- [Assign String Value](actions#assign-string-value)
- [Assign Script Value](actions#assign-script-value)
- [Register Command](commands#register-command)
- [Register Alias](commands#aliases)
- [Create New Array](arrays#create)
- [Assign Array Value at Index](arrays#assign-array-value-at-index)
- Script assignments within [Dialog Options](dialogs#dialog-option) and [Serial Dialog Options](serial_dialogs#serial-dialog-option)

[Position Over Time](#position-over-time) is similar, but uses a `->` instead of `=` to indicate that the action will take time to execute.

## Assign Int Value

::: warning Ambiguity Warning
If the RHS and the LHS of any evaluated expansion are both bare identifiers, they will be handled as integer variables. To silence the ambiguity warning, use an "invisible operation" (e.g. `*1` or `+0`) to coerce the RHS to an int expression.
:::

```
<int setable[]> = <int expression[]>;
```

- **Int setable**: see [Int Setables](#int-setables)
- **Int expression**: see [Int Expressions](expressions_and_operators#int-expressions)

### Int Setables

::: tip NOTE
Not all int setables are [int getables](expressions_and_operators#int-operands) and vice versa.
:::

- [Variable identifiers](identifiers) ([integers](state#integer-variables))
- [Array value at index](arrays#assign-array-value-at-index) (e.g. `array[i]`)
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

Bytecode actions:

- `COPY_VARIABLE`
- `MUTATE_VARIABLE`
- `MUTATE_VARIABLES`
- `SET_ENTITY_X`
- `SET_ENTITY_Y`
- `SET_ENTITY_PRIMARY_ID_TYPE`
- `SET_ENTITY_PRIMARY_ID`
- `SET_ENTITY_SECONDARY_ID`
- `SET_ENTITY_CURRENT_ANIMATION`
- `SET_ENTITY_CURRENT_FRAME`
- `SET_ENTITY_MOVEMENT_RELATIVE`

## Change Int Value

Similar to [Assign Int Value](#assign-int-value). It assigns a value to an [int setable](#int-setable), but it also changes it by the operation in the "op equals" operator.

```mgs
_ {
	var_name += 5;
	// is the same as
	var_name = var_name + 5;
}
```

Relative entity turns cannot be made with [int expressions](expressions_and_operators#int-expressions); these must take [number literals](primitive_types#number-literal). These relative turns (+1, -1) correspond to a 90º rotation. The value is modulo 4, so +1 is the same as +5.

See [Assign Direction Value](#assign-direction-value) for turning an entity toward something specific on the map.

```
// plus and minus-equals only:
<entity identifier[]> direction += <number[]>;
//OR
<entity identifier[]> direction -= <number[]>;

// any op-equals:
<int setable[]> <op equals> <int expression[]>;
```

- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- **Int setable**: see [Int Setables](#int-setables)
- **Op equals**:
	- `+=`: add
	- `-=`: subtract
	- `*=`: multiply
	- `/=`: divide
	- `%=`: modulo
	- `?=`: RNG roll, exclusive (see [RNG Macro](macros#rng))
- **Int expression**: see [Expressions](expressions_and_operators#expressions)

Bytecode actions:

- `SET_ENTITY_DIRECTION_RELATIVE`
- `MUTATE_VARIABLE`
- `MUTATE_VARIABLES`

## Assign Bool Value

::: warning Ambiguity Warning
If the RHS and the LHS of any evaluated expansion are both bare identifiers, they will be handled as integer variables. To coerce the RHS to a bool expression, attach `!!` to the identifier in the RHS, or use the `flag` sigil to the LHS and/or the RHS identifier.
:::

```
<bool setable[]> = <bool expression[]>;
```

- **Bool setable**: see [Bool Setables](#bool-setables)
- **Bool expression**: see [Bool Expressions](expressions_and_operators#bool-expressions)

### Bool Setables

::: tip NOTE
Not all bool setables are [bool getables](expressions_and_operators#bool-operands) and vice versa.
:::

- [Boolean literals](primitive_types#boolean) e.g. `true`, `false`
- [Variable identifiers](identifiers) ([flags](state#save-flags))
- [Setable engine flags](state#setable-engine-flags):
	- `player_control`
	- `lights_control`
	- `hex_editor`
	- `hex_dialog_mode`
	- `hex_control`
	- `hex_clipboard`
	- `serial_control`
- [Entity bool properties](entities#entity-properties):
    - `<entity identifier> glitched`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- Light states
	- `light <string[]>`
	- See [light names](#light-names)
	
Bytecode actions:

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

### Lights

This includes all 8 bit lights underneath the screen and the 4 lights on either side of the screen.

Gaining control of the lights does not clear the light state; you will need to turn all the lights off yourself.

::: warning
If you turn a light off and on again on the same game tick, the light will appear to flicker.
:::

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

## Assign String Value

```
<string setable[]> = <string[]>;
```

- **String setable**: see [String Setables](#string-setables)

### String Setables

::: warning NOTE
There are no string getables, only [string checkables](expressions_and_operators#string-checkables). (Can check for equality, but cannot extract their value to store elsewhere, not can be used in an [expression](expressions_and_operators).)

Like the other setables, not all string setables are string checkables and vice versa.
:::

Note some string values use the more specific action phrases [Assign Script Value](#assign-script-value) or [Assign Direction Value](#assign-direction-value).

- `warp_state` (the [Warp State String](state#warp-state-string))
- `serial_connect`: the default serial message printed upon game launch
- [Entity string properties](entities#entity-properties):
	- `<entity identifier[]> name`
	- `<entity identifier[]> type`
	- `<entity identifier[]> path`
	- **Entity identifier**: See [entity identifier](identifiers#entity-identifier)

Bytecode actions:

- `SET_WARP_STATE`
- `SET_CONNECT_SERIAL_DIALOG`
- `SET_ENTITY_NAME`
- `SET_ENTITY_TYPE`
- `SET_ENTITY_PATH`

## Assign Script Value

```
<script setable[]> <script slot> = <string[]>;
```

- **Script setable**: see [Script Setables](#script-setables)
- **[Script slot](scripts#script-slots)**:
	- For maps:
		- `on_tick`
		- `on_look`
	- For entities:
		- `on_interact`
		- `on_tick`
		- `on_look`

Bytecode actions:

- `SET_MAP_TICK_SCRIPT`
- `SET_MAP_LOOK_SCRIPT`
- `SET_ENTITY_INTERACT_SCRIPT`
- `SET_ENTITY_TICK_SCRIPT`
- `SET_ENTITY_LOOK_SCRIPT`

### Script Setables

- The keyword `map`
- An [entity identifier](identifiers#entity-identifier)

## Assign Direction Value

Makes an [entity](entities) face the target. To make relative turns (e.g. 90º CCW) see [Change Int Value](#change-int-value).

```
<entity identifier> direction = <direction target>;
```

- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- **Direction target**:
	- `<geometry identifier>` (See [Geometry Identifier](identifiers#geometry-identifier))
	- `<entity identifier>` (See [Entity Identifier](identifiers#entity-identifier))
	- `north`, `south`, `east`, or `west`

Bytecode actions:

- `SET_ENTITY_DIRECTION_TARGET_GEOMETRY`
- `SET_ENTITY_DIRECTION_TARGET_ENTITY`
- `SET_ENTITY_DIRECTION`
