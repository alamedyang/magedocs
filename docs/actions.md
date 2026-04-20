# Actions

- **Bytecode action**: a single bytecode instruction. These are the basic scripting unit of the Mage Game Engine.
- **Action phrase**: a phrase of multiple words or sub-patterns that produce one or more bytecode instructions when compiled.
	- Action phrases are used inside a [script block](scripts).
	- They must end with a semicolon.

For dictionary entry syntax information, see: [Syntax and Jargon](jargon_and_syntax) and [Primitive Types](primitive_types). Also see [Action Param Expansions](action_param_expansions).

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
	- [Copy Script](#copy-script)
	- [Pause or Unpause Script](#pause-or-unpause-script)
	- [Jump to Action Index](#jump-to-action-index)
	- [Jump to Label](#jump-to-label)
- Choreography
	- [Position Assignment](#position-assignment)
	- [Position Over Time](#position-over-time)
	- [Play Entity Animation](#play-entity-animation)
	- [Fade Camera In or Out](#fade-camera-in-or-out)
	- [Shake Camera](#shake-camera)
- [Assignment Operation](expressions_and_operators#assignment-operation)
	- [Assign Int Value](expressions_and_operators#assign-int-value)
	- [Change Int Value](expressions_and_operators#change-int-value)
	- [Assign Bool Value](expressions_and_operators#assign-bool-value)
	- [Assign String Value](expressions_and_operators#assign-string-value)
	- [Assign Script Value](expressions_and_operators#assign-script-value)
	- [Assign Direction](expressions_and_operators#assign-direction)
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

## Load Slot

Brings the [save data](state#save-data) associated with that slot into RAM.

```
load slot <number[]>;
```

## Erase Slot

Clears all the [save data](state#save-data) in the given slot.

This action displays a [dialog card](dialogs) reporting that the save was erased. This introduces a player-timed barrier which prevents ROM burnout in the event that a player set an an [`on_tick`](scripts#on_tick) script slot to a script that contains this action.

```
erase slot <number[]>;
```

## Non-Blocking Delay

This pauses the current [script](scripts) while allowing all other aspects of the game to continue unimpeded. Use this if you want to pad the actions an entity is performing so they don't all occur on the same game tick.

For cinematic cutscenes, you will almost certainly need to [disable](#assign-bool-value) [player control](#bool-setables) before using this action, otherwise the player will be able to walk away in the middle. (Don't forget to turn it on again when finished.)

```
wait <duration[]>;
```

## Blocking Delay

This pauses the entire game, including all other scripts and animations, for the given duration. As this might make the game appear broken, you should probably use a [Non-Blocking Delay](#nonblocking-delay) instead.

```
block <duration[]>;
```

## Load Map

For most normal door behavior, you will probably want to [set](#assign-string-value) the [Warp State String](state#warp-state-string) before using the this action. See [Map Loads](maps#map-loads) for what happens when a map is (re)loaded.

```
load map <string[]>;
```

## Show Dialog

Plays the named [dialog](dialogs). While a dialog card is showing, the player can only advance to the next dialog message or choose a [multiple choice option](dialogs#dialog-option) within that dialog (if any); the player cannot hack, interact with another [entity](entities), move, etc.

```
show dialog <string[]>;
// OR
show dialog <dialog literal>;
```

- **Dialog literal**: see [Dialog Literal](dialogs#dialog-literal)

## Close Dialog

Ends any open [dialog](dialogs).

Use this action when you want to trigger a dialog that may potentially interrupt a dialog in progress. Otherwise, the two dialogs may collide, which can result in a soft lock.

```
close dialog;
```

## Show Serial Dialog

Outputs the named [serial dialog](serial_dialogs#serial-dialog) to a connected [serial console](terminal).

Using this action, each serial dialog message will get a newline added to the end. (To avoid this, use the concat variant.)

```
show serial_dialog <string[]>;
// OR
show serial_dialog <serial dialog literal>;
```

- **Serial dialog literal**: see [Serial Dialog Literal](serial_dialogs#serial-dialog-literal)

## Concat Serial Dialog

Like [Show Serial Dialog](#show-serial-dialog) in every way, except the these serial dialogs will *not* be printed with a newline at the end. This is the only way to build up single-line strings from multiple pieces.

```
concat serial_dialog <string[]>;
// OR
concat serial_dialog <serial dialog literal>;
```

- **Serial dialog literal**: see [Serial Dialog Literal](serial_dialogs#serial-dialog-literal)

## Close Serial Dialog

Ends any [serial dialog](serial_dialogs) that is awaiting user input.

```
close serial_dialog;
```

## Run Script

Immediately switches the current [script](scripts) [slot](scripts#script-slots) to the named [script](scripts), which begins execution immediately.

If you want to replace the script in the current slot without immediately executing it, you should use [Assign Script Value](#assign-script-value) instead.

```
goto <"script"?> <string[]>;
```

## Copy Script

See: [Macros > Copy Script](macros#copy-script)

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

## Jump to Action Index

Jumps to the nth bytecode instruction in the currently-executing [script](scripts). As these indices are near impossible to know ahead of time, using this action is not recommended. Instead, use [Jump to Label](#jump-to-label).

```
goto index <number[]>;
```

## Jump to Label

Jumps to the named label in the currently-executing [script](scripts).

```
goto label <string[]>;
```

## Position Assignment

This action phrase instantly teleports a "[movable](#movable-assignment)" to a "[coordinate](#coordinate-assignment)."

```
<movable[]> = <coordinate[]>;
```

- **Movable**: see [Movable (Assignment)](#movable-assignment)
- **Coordinate**: see [Coordinate (Assignment)](#coordinate-assignment)

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

## Fade Camera In or Out

Transitions the screen from (or to) the specified color. Fades are slow on the real hardware, so use sparingly.

```
// fade in
camera fade in -> <color[]> over <duration[]>;

// fade out
camera fade out -> <color[]> over <duration[]>;
```

## Shake Camera

Shakes the camera a certain distance (`amplitude`) at a certain speed (`frequency`) and for a certain length of time (`duration`)

```
camera shake -> <frequency: duration[]> <amplitude: distance[]> over <duration[]>;
```
