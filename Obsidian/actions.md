# Actions

- **Bytecode action**: a single bytecode instruction. These are the basic scripting unit of the Mage Game Engine.
- **Action phrase**: a phrase of multiple words or sub-patterns that produce one or more bytecode instructions when compiled.
	- Action phrases are used inside a [[scripts|script block]].
	- They must end with a semicolon.

For dictionary entry syntax information, see: [[jargon_and_syntax|Jargon and Syntax]] and [[primitive_types|Primitive Types]]. Also see [[action_param_expansions|Action Param Expansions]].

This list of action phrases is not exhaustive. Some are included in pages relevant to the data types they manipulate, such as with [[commands|commands]] and [[arrays|arrays]], or are built into an element of more complex structures, like [[expressions_and_operators|expressions]].

## Quick Links

- Game Control
	- [[#Save Slot]]
	- [[#Load Slot]]
	- [[#Erase Slot]]
	- [[#Non-Blocking Delay]]
	- [[#Blocking Delay]]
	- [[#Load Map]]
- Dialog Management
	- [[#Show Dialog]]
	- [[#Close Dialog]]
	- [[#Show Serial Dialog]]
	- [[#Concat Serial Dialog]]
	- [[#Close Serial Dialog]]
- Script Control
	- [[#Run Script]]
	- [[#Pause or Unpause Script]]
	- [[#Jump to Action Index]]
	- [[#Jump to Label]]
	- [[#Copy Script]]
- Choreography
	- [[#Position Assignment]]
	- [[#Position Over Time]]
	- [[#Play Entity Animation]]
	- [[#Fade Camera In or Out]]
	- [[#Shake Camera]]
- [[#Assign a Value]]
	- [[#Assign Int Value]]
	- [[#Change Int Value]]
	- [[#Assign Bool Value]]
	- [[#Assign String Value]]
	- [[#Assign Script Value]]
	- [[#Assign Direction Value]]
- [[commands#Command Actions|Command Actions]]
- [[arrays#Array Action Phrases|Array Actions]]
- [[expressions_and_operators|Expressions]]
	- [[expressions_and_operators#Int Expressions|Int Expressions]]
	- [[expressions_and_operators#Bool Expressions|Bool Expressions]]

## Save Slot

Saves the current [[state#Save Data|save data]] into the last-loaded save slot. It is not possible to write save data into an arbitrary slots, nor is it possible to copy data from one save slot into another.

```
save slot;
```

Bytecode action: `SLOT_SAVE`

## Load Slot

Brings the [[state#Save Data|save data]] associated with that slot into RAM.

```
load slot <number[]>;
```

Bytecode action: `SLOT_LOAD`

## Erase Slot

Clears all the [[state#Save Data|save data]] in the given slot.

This action displays a [[dialogs|dialog card]] reporting that the save was erased. This introduces a player-timed barrier which prevents ROM burnout in the event that a player set an an [[scripts#`on_tick`|`on_tick`]] script slot to a script that contains this action.

```
erase slot <number[]>;
```

Bytecode action: `SLOT_ERASE`

## Non-Blocking Delay

This pauses the current [[scripts|script]] while allowing all other aspects of the game to continue unimpeded. Use this if you want to pad the actions an entity is performing so they don't all occur on the same game tick.

For cinematic cutscenes, you will almost certainly need to [[#Assign Bool Value|disable]] [[#Bool Setables|player control]] before using this action, otherwise the player will be able to walk away in the middle. (Don't forget to turn it on again when finished.)

```
wait <duration[]>;
```

Bytecode action: `NON_BLOCKING_DELAY`

## Blocking Delay

This pauses the entire game, including all other scripts and animations, for the given duration. As this might make the game appear broken, you should probably use a [[#Non-Blocking Delay]] instead.

```
block <duration[]>;
```

Bytecode action: `BLOCKING_DELAY`

## Load Map

For most normal door behavior, you will probably want to [[#Assign String Value|set]] the [[state#Warp State String|Warp State String]] before using the this action. See [[maps#Map Loads|Map Loads]] for what happens when a map is (re)loaded.

```
load map <string[]>;
```

Bytecode action: `LOAD_MAP`

## Show Dialog

Plays the named [[dialogs|dialog]]. While a dialog card is showing, the player can only advance to the next dialog message or choose a [[dialogs#Dialog Option|multiple choice option]] within that dialog (if any); the player cannot hack, interact with another [[entities|entity]], move, etc.

```
show dialog <string[]>;
// OR
show dialog <dialog literal>;
```

- **Dialog literal**: see [[dialogs#Dialog Literal|Dialog Literal]]

Bytecode action: `SHOW_DIALOG`

## Close Dialog

Ends any open [[dialogs|dialog]].

Use this action when you want to trigger a dialog that may potentially interrupt a dialog in progress. Otherwise, the two dialogs may collide, which can result in a soft lock.

```
close dialog;
```

Bytecode action: `CLOSE_DIALOG`

## Show Serial Dialog

Outputs the named [[serial_dialogs#Serial Dialog|serial dialog]] to a connected [[terminal|serial console]].

Using this action, each serial dialog message will get a newline added to the end. (To avoid this, use the concat variant.)

```
show serial_dialog <string[]>;
// OR
show serial_dialog <serial dialog literal>;
```

- **Serial dialog literal**: see [[serial_dialogs#Serial Dialog Literal|Serial Dialog Literal]]

Bytecode action: `SHOW_SERIAL_DIALOG`

## Concat Serial Dialog

Like [[#Show Serial Dialog]] in every way, except the these serial dialogs will *not* be printed with a newline at the end. This is the only way to build up single-line strings from multiple pieces.

```
concat serial_dialog <string[]>;
// OR
concat serial_dialog <serial dialog literal>;
```

- **Serial dialog literal**: see [[serial_dialogs#Serial Dialog Literal|Serial Dialog Literal]]

Bytecode action: `SHOW_SERIAL_DIALOG`

## Close Serial Dialog

Ends any [[serial_dialogs|serial dialog]] that is awaiting user input.

```
close serial_dialog;
```

Bytecode action: `CLOSE_SERIAL_DIALOG`

## Run Script

Immediately switches the current [[scripts|script]] [[scripts#Script Slots|slot]] to the named [[scripts|script]], which begins execution immediately.

If you want to replace the script in the current slot without immediately executing it, you should use [[#Assign Script Value|Assign Script Value]] instead.

```
goto <"script"?> <string[]>;
```

Bytecode action: `RUN_SCRIPT`

## Pause or Unpause Script

Pauses or unpauses a [[scripts|script]]. This is most useful for temporarily pausing an [[entities|entity]]'s `on_tick` script during an [[scripts#`on_interact`|`on_interact`]] event.

```
// pause
pause <entity or map identifier[]> <script slot[]>;

// unpause
unpause <entity or map identifier[]> <script slot[]>;
```

- **Entity or map identifier**: two choices:
	- The keyword `map`
	- An [[identifiers#Entity Identifier|entity identifier]]
- [[scripts#Script Slots|**Script slot**]]:
	- For entities: `on_tick`, `on_interact`, `on_look`
	- For maps: `on_load`, `on_tick`, `on_command`

Bytecode action: `SET_SCRIPT_PAUSE`

## Jump to Action Index

Jumps to the nth bytecode instruction in the currently-executing [[scripts|script]]. As these indices are near impossible to know ahead of time, using this action is not recommended. Instead, use [[#Jump to Label|Jump to Label]].

```
goto index <number[]>;
```

Bytecode action: `GOTO_ACTION_INDEX`

## Jump to Label

Jumps to the named label in the currently-executing [[scripts|script]].

```
goto label <string[]>;
```

Bytecode action:

- No longer uses a bytecode action; now these are baked before the JSON step.
- The old encoder ("natlang") used `GOTO_ACTION_INDEX` but with a string value instead of a number for the param `action_index`. (This had some unpleasant consequences.)

## Copy Script

See: [[macros#Copy Script|Macros > Copy Script]]

## Position Assignment

This action phrase instantly teleports a "[[#Movable (Assignment)|movable]]" to a "[[#Coordinate (Assignment)|coordinate]]."

```
<movable[]> = <coordinate[]>;
```

- **Movable**: see [[#Movable (Assignment)|Movable (Assignment)]]
- **Coordinate**: see [[#Coordinate (Assignment)|Coordinate (Assignment)]]

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

- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]

### Coordinate (Assignment)

```
<entity identifier> position
// OR
<geometry identifier>
```

- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
- **Geometry identifier**: see [[identifiers#Geometry Identifier|Geometry Identifier]]

## Position Over Time

This action phrase moves a "[[#Movable (Over Time)|movable]]" to a "[[#Coordinate (Over Time)|coordinate]]" over time.

```
<movable[] -> <coordinate[]> over <duration[]> <"forever"?>;
```

- **Movable**: see [[#Movable (Assignment)]]
- **Coordinate**: see [[#Coordinate (Assignment)]]
- **Forever**: see [[#Forever]]

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

- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]

### Coordinate (Over Time)

Coordinates for this action phrase need to have the `origin` or `length` specified, as walking over time to a polygon's origin is not the same as walking along a polygon's length. See [[vector_objects#Vector Origins|Vector Origins]].

```
<entity identifier> position
// OR
entity_path <"origin" OR "length">
// OR
<geometry identifier> <"origin" OR "length">
```

- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
- **Geometry identifier**: see [[identifiers#Geometry Identifier|Geometry Identifier]]

### Forever

`forever` is optional.

- If `forever` is used, then the script will loop this action forever and will not execute any further items.
- `forever` cannot be used with:
	- Entities as the destination coordinate.
	- `origin` (i.e. single points) as the destination coordinate.

## Play Entity Animation

The [[entities|entity]] will play the given [[animations|animation]] the given number of times, then will return to the default animation for the entity's current movement status ([[animations#Idle|standing]], [[animations#Walking|walking]]).

No other [[scripts#Script Body Items|script items]] will execute in that script until the animation count is fulfilled.

If an entity is compelled to move around on the [[maps|map]], it will abort this animation playback.

To change an entity's animation indefinitely, use the [[#Assign Int Value]] action phrase for the entity's [[entities#Entity Properties|`current_animation`]].

```
<entity identifier[]> animation -> <animation: number[]> <play count: quantity[]>;
```

- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
- **Animation**: the nth animation defined in [[what_youll_need#`entity_types.json`|`entity_types.json`]] for the entity's [[entity_types#Character Entity|type]].

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

An [[expressions_and_operators#Assignment Operation|assignment operation]] is a binary [[expressions_and_operators|expression]] that sets the left-hand side (**LHS**) to the value of the right-hand side (**RHS**).

```
<LHS> = <RHS>;
```

Action phrases using this pattern:

- [[actions#Assign Int Value|Assign Int Value]]
- [[actions#Assign Bool Value|Assign Bool Value]]
- [[actions#Assign String Value|Assign String Value]]
- [[actions#Assign Script Value|Assign Script Value]]
- [[commands#Register Command|Register Command]]
- [[commands#Aliases|Register Alias]]
- [[arrays#Create|Create New Array]]
- [[arrays#Assign Array Value at Index|Assign Array Value at Index]]
- Script assignments within [[dialogs#Dialog Option|Dialog Options]] and [[serial_dialogs#Serial Dialog Option|Serial Dialog Options]]

[[#Position Over Time|Position Over Time]] is similar, but uses a `->` instead of `=` to indicate that the action will take time to execute.

## Assign Int Value

::: warning Ambiguity Warning
If the RHS and the LHS of any evaluated expansion are both bare identifiers, they will be handled as integer variables. To silence the ambiguity warning, use an "invisible operation" (e.g. `*1` or `+0`) to coerce the RHS to an int expression.
:::

```
<int setable[]> = <int expression[]>;
```

- **Int setable**: see [[#Int Setables]]
- **Int expression**: see [[expressions_and_operators#Int Expressions|Int Expressions]]

### Int Setables

::: tip NOTE
Not all int setables are [[expressions_and_operators#Int Operands|int getables]] and vice versa.
:::

- [[identifiers|Variable identifiers]] ([[state#Integer Variables|integers]])
- [[arrays#Assign Array Value at Index|Array value at index]] (e.g. `array[i]`)
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

Similar to [[#Assign Int Value]]. It assigns a value to an [[#Int Setable|int setable]], but it also changes it by the operation in the "op equals" operator.

```mgs
_ {
	var_name += 5;
	// is the same as
	var_name = var_name + 5;
}
```

Relative entity turns cannot be made with [[expressions_and_operators#Int Expressions|int expressions]]; these must take [[primitive_types#Number Literal|number literals]]. These relative turns (+1, -1) correspond to a 90º rotation. The value is modulo 4, so +1 is the same as +5.

See [[#Assign Direction Value|Assign Direction Value]] for turning an entity toward something specific on the map.

```
// plus and minus-equals only:
<entity identifier[]> direction += <number[]>;
//OR
<entity identifier[]> direction -= <number[]>;

// any op-equals:
<int setable[]> <op equals> <int expression[]>;
```

- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
- **Int setable**: see [[#Int Setables]]
- **Op equals**:
	- `+=`: add
	- `-=`: subtract
	- `*=`: multiply
	- `/=`: divide
	- `%=`: modulo
	- `?=`: RNG roll, exclusive (see [[macros#RNG|RNG Macro]])
- **Int expression**: see [[expressions_and_operators#Expressions|Expressions]]

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

- **Bool setable**: see [[#Bool Setables|Bool Setables]]
- **Bool expression**: see [[expressions_and_operators#Bool Expressions|Bool Expressions]]

### Bool Setables

::: tip NOTE
Not all bool setables are [[expressions_and_operators#Bool Operands|bool getables]] and vice versa.
:::

- [[primitive_types#Boolean|Boolean literals]] e.g. `true`, `false`
- [[identifiers|Variable identifiers]] ([[state#Save Flags|flags]])
- [[state#Setable Engine Flags|Setable engine flags]]:
	- `player_control`
	- `lights_control`
	- `hex_editor`
	- `hex_dialog_mode`
	- `hex_control`
	- `hex_clipboard`
	- `serial_control`
- [[entities#Entity Properties|Entity bool properties]]:
    - `<entity identifier> glitched`
	- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
- Light states
	- `light <string[]>`
	- See [[#Light Names|light names]]
	
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

- **String setable**: see [[#String Setables|String Setables]]

### String Setables

::: warning NOTE
There are no string getables, only [[expressions_and_operators#String Checkables|string checkables]]. (Can check for equality, but cannot extract their value to store elsewhere, not can be used in an [[expressions_and_operators|expression]].)

Like the other setables, not all string setables are string checkables and vice versa.
:::

Note some string values use the more specific action phrases [[#Assign Script Value]] or [[#Assign Direction Value]].

- `warp_state` (the [[state#Warp State String|Warp State String]])
- `serial_connect`: the default serial message printed upon game launch
- [[entities#Entity Properties|Entity string properties]]:
	- `<entity identifier[]> name`
	- `<entity identifier[]> type`
	- `<entity identifier[]> path`
	- **Entity identifier**: See [[identifiers#Entity Identifier|entity identifier]]

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

- **Script setable**: see [[#Script Setables]]
- **[[scripts#Script Slots|Script slot]]**:
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
- An [[identifiers#Entity Identifier|entity identifier]]

## Assign Direction Value

Makes an [[entities|entity]] face the target. To make relative turns (e.g. 90º CCW) see [[#Change Int Value]].

```
<entity identifier> direction = <direction target>;
```

- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
- **Direction target**:
	- `<geometry identifier>` (See [[identifiers#Geometry Identifier|Geometry Identifier]])
	- `<entity identifier>` (See [[identifiers#Entity Identifier|Entity Identifier]])
	- `north`, `south`, `east`, or `west`

Bytecode actions:

- `SET_ENTITY_DIRECTION_TARGET_GEOMETRY`
- `SET_ENTITY_DIRECTION_TARGET_ENTITY`
- `SET_ENTITY_DIRECTION`
