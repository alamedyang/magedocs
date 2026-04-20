# Actions

- **Bytecode action**: a single bytecode instruction. These are the basic scripting unit of the Mage Game Engine.
- **Action phrase**: a phrase of multiple words or sub-patterns that produce one or more bytecode instructions when compiled.
	- Action phrases are used inside a [[scripts|script block]].
	- They must end with a semicolon.

For dictionary entry syntax information, see: [[jargon_and_syntax|Syntax and Jargon]] and [[primitive_types|Primitive Types]]. Also see [[action_param_expansions|Action Param Expansions]].

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
	- [[#Copy Script]]
	- [[#Pause or Unpause Script]]
	- [[#Jump to Action Index]]
	- [[#Jump to Label]]
- Choreography
	- [[#Position Assignment]]
	- [[#Position Over Time]]
	- [[#Play Entity Animation]]
	- [[#Fade Camera In or Out]]
	- [[#Shake Camera]]
- [[expressions_and_operators#Assignment Operation|Assignment Operation]]
	- [[expressions_and_operators#Assign Int Value|Assign Int Value]]
	- [[expressions_and_operators#Change Int Value|Change Int Value]]
	- [[expressions_and_operators#Assign Bool Value|Assign Bool Value]]
	- [[expressions_and_operators#Assign String Value|Assign String Value]]
	- [[expressions_and_operators#Assign Script Value|Assign Script Value]]
	- [[expressions_and_operators#Assign Direction|Assign Direction]]
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

## Load Slot

Brings the [[state#Save Data|save data]] associated with that slot into RAM.

```
load slot <number[]>;
```

## Erase Slot

Clears all the [[state#Save Data|save data]] in the given slot.

This action displays a [[dialogs|dialog card]] reporting that the save was erased. This introduces a player-timed barrier which prevents ROM burnout in the event that a player set an an [[scripts#`on_tick`|`on_tick`]] script slot to a script that contains this action.

```
erase slot <number[]>;
```

## Non-Blocking Delay

This pauses the current [[scripts|script]] while allowing all other aspects of the game to continue unimpeded. Use this if you want to pad the actions an entity is performing so they don't all occur on the same game tick.

For cinematic cutscenes, you will almost certainly need to [[#Assign Bool Value|disable]] [[#Bool Setables|player control]] before using this action, otherwise the player will be able to walk away in the middle. (Don't forget to turn it on again when finished.)

```
wait <duration[]>;
```

## Blocking Delay

This pauses the entire game, including all other scripts and animations, for the given duration. As this might make the game appear broken, you should probably use a [[#Non-Blocking Delay]] instead.

```
block <duration[]>;
```

## Load Map

For most normal door behavior, you will probably want to [[#Assign String Value|set]] the [[state#Warp State String|Warp State String]] before using the this action. See [[maps#Map Loads|Map Loads]] for what happens when a map is (re)loaded.

```
load map <string[]>;
```

## Show Dialog

Plays the named [[dialogs|dialog]]. While a dialog card is showing, the player can only advance to the next dialog message or choose a [[dialogs#Dialog Option|multiple choice option]] within that dialog (if any); the player cannot hack, interact with another [[entities|entity]], move, etc.

```
show dialog <string[]>;
// OR
show dialog <dialog literal>;
```

- **Dialog literal**: see [[dialogs#Dialog Literal|Dialog Literal]]

## Close Dialog

Ends any open [[dialogs|dialog]].

Use this action when you want to trigger a dialog that may potentially interrupt a dialog in progress. Otherwise, the two dialogs may collide, which can result in a soft lock.

```
close dialog;
```

## Show Serial Dialog

Outputs the named [[serial_dialogs#Serial Dialog|serial dialog]] to a connected [[terminal|serial console]].

Using this action, each serial dialog message will get a newline added to the end. (To avoid this, use the concat variant.)

```
show serial_dialog <string[]>;
// OR
show serial_dialog <serial dialog literal>;
```

- **Serial dialog literal**: see [[serial_dialogs#Serial Dialog Literal|Serial Dialog Literal]]

## Concat Serial Dialog

Like [[#Show Serial Dialog]] in every way, except the these serial dialogs will *not* be printed with a newline at the end. This is the only way to build up single-line strings from multiple pieces.

```
concat serial_dialog <string[]>;
// OR
concat serial_dialog <serial dialog literal>;
```

- **Serial dialog literal**: see [[serial_dialogs#Serial Dialog Literal|Serial Dialog Literal]]

## Close Serial Dialog

Ends any [[serial_dialogs|serial dialog]] that is awaiting user input.

```
close serial_dialog;
```

## Run Script

Immediately switches the current [[scripts|script]] [[scripts#Script Slots|slot]] to the named [[scripts|script]], which begins execution immediately.

If you want to replace the script in the current slot without immediately executing it, you should use [[#Assign Script Value|Assign Script Value]] instead.

```
goto <"script"?> <string[]>;
```

## Copy Script

See: [[macros#Copy Script|Macros > Copy Script]]

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

## Jump to Action Index

Jumps to the nth bytecode instruction in the currently-executing [[scripts|script]]. As these indices are near impossible to know ahead of time, using this action is not recommended. Instead, use [[#Jump to Label|Jump to Label]].

```
goto index <number[]>;
```

## Jump to Label

Jumps to the named label in the currently-executing [[scripts|script]].

```
goto label <string[]>;
```

## Position Assignment

This action phrase instantly teleports a "[[#Movable (Assignment)|movable]]" to a "[[#Coordinate (Assignment)|coordinate]]."

```
<movable[]> = <coordinate[]>;
```

- **Movable**: see [[#Movable (Assignment)|Movable (Assignment)]]
- **Coordinate**: see [[#Coordinate (Assignment)|Coordinate (Assignment)]]

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
