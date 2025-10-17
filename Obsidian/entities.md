# Entities

Entities are a basic element of the Mage Game Engine (MGE). All [[animations|animated]] graphics must be entities, as ordinary map tiles cannot change appearance or move.

All entities have all the same [[#Entity Properties|entity properties]] available to them, visible in-game as a pair of rows on the hex editor in the game, 32 bytes total.

Entities need not have a name, nor a unique name. [[Scripts]] targeting an entity by name will simply use the first the encoder found with that name.

Any single tile object placed in one of a [[maps|map's]] [[maps#Object Layers|object layers]] will be one of the three [[entity_types|entity primary id types]], automatically determined by the nature of tile being placed.

All entity state (apart from the player's name) is reset when a [[maps#Map Loads|map load]] occurs.

## Entity Properties

Some of these properties are available to entities in Tiled by default.

Many of these may be modified during gameplay with [[scripts|script]] [[actions|actions]] or by the player via the [[hex_editor|hex editor]]. To add a property to an entity in Tiled, click the plus at the bottom of the Properties view and set the property type (bool, object, string, etc.).

The MGS property type refers to what the RHS should be when the property is the LHS in an [[expressions_and_operators#Assignment Operation|assignment operation]].

### Name

These are limited to 12 ASCII characters in the Mage Game Engine. (Tiled will not enforce this limitation.)

An entity's current name may be printed in a [[dialog_and_serial_dialog_strings#Print Entity Name|dialog or serial dialog string]].

- **Tiled**: `Name` (string)
- **MGS**: `name` (string)
	- [[actions#String Setables|Setable]]
	- [[expressions_and_operators#String Checkables|Checkable]]

### Type

For [[entity_types#Character Entity|character entities]], this is the `type`, or the name of the character entity as defined in [[what_youll_need#`entity_types.json`|`entity_types.json`]]. This should be automatically assigned by Tiled when you place a character entity on the [[maps|map]]. (All tiles on the entity tileset must first have their Type property set to the correct `entity_type` name for this to work.)

- **Tiled**: `Class`, formerly `Type` (string)
- **MGS**: `type` (string)
	- [[actions#String Setables|Setable]]
	- [[expressions_and_operators#String Checkables|Checkable]]

### Tile Type

**`primary_id_type`**, **`primary_id`**, and **`secondary_id`** are also available to entities, but you need not assign these properties explicitly within Tiled, since they are determined by the [[entity_types|identity of the tile]] you are placing on the map.

- **Tiled**: (determined by the identity of the tile placed)
- **MGS**:
	- `primary_id_type` (int, u8)
		- [[actions#Int Setables|Setable]]
		- [[expressions_and_operators#Int Operands|Getable]]
	- `primary_id` (int)
		- [[actions#Int Setables|Setable]]
		- [[expressions_and_operators#Int Operands|Getable]]
	- `secondary_id` (int)
		- [[actions#Int Setables|Setable]]
		- [[expressions_and_operators#Int Operands|Getable]]

### Path

You can use this property to assign a [[vector_objects|vector object]] to an entity. It's primarily used so you can give multiple entities the same script, one that compels them to walk along their own path.

The [[identifiers#Geometry Identifier|geometry identifier]] keyword `entity_path` refers to this assignment. (Full version: `geometry %ENTITY_PATH%`)

- **Tiled**: `Path` (string)
- **MGS**: `path` (string, [[identifiers#Geometry Identifier|geometry identifier]])
	- [[actions#String Setables|Setable]]
	- [[expressions_and_operators#String Checkables|Checkable]]

### Position

The MGS keyword `position` is used in the [[actions|action phrases]] [[actions#Position Assignment|Position Assignment]] and [[actions#Position Over Time|Position Over Time]]. MGS can also set the `x` and `y` individually

- **Tiled**: (where the tile is placed)
- **MGS**:
	- `position` ("movable")
		- [[actions#Movable (Assignment)|Setable (instant)]]
		- [[actions#Movable (Over Time)|Setable (over time)]]
		- [[actions#Coordinate (Assignment)|As destination (instant)]]
		- [[actions#Coordinate (Over Time)|As destination (over time)]]
	- `x` (int)
		- [[actions#Int Setables|Setable]]
		- [[expressions_and_operators#Int Operands|Getable]]
	- `y` (int)
		- [[actions#Int Setables|Setable]]
		- [[expressions_and_operators#Int Operands|Getable]]

### Direction

This is the cardinal direction the character entity is facing, handled by placing the desired animation tile (and therefore the correct direction) of the target character entity on the map. Left and right can be flipped by taking a side-facing animation tile and checking the **Flipping > Horizontal** checkbox in the Properties view.

The default direction is north.

::: tip NOTE
Horizontally flipping a front or back-facing character entity will make it appear horizontally flipped within Tiled, but in the MGE this will turn the entity around 180º.
:::

- **Tiled**: (place the tile for the desired direction)
- **MGS**:
	- `direction`
		- [[actions#Assign Direction Value|Turn toward entity]]
		- [[actions#Assign Direction Value|Turn toward geometry]]
		- [[actions#Assign Direction Value|Turn cardinal direction]]
		- [[actions#Change Int Value|Give relative turn]]

### `on_tick` Script

See: [[scripts#`on_tick`|`on_tick`]]

This identifies the [[scripts|script]] that is run for that entity every game tick. Since `on_tick` scripts loop when finished, don't assign a script you wouldn't want to run forever.

::: tip Best Practice
If you don't want an entity to have an `on_tick` script, you can leave this property blank, or avoid adding it altogether. However, it's useful to set an entity's `on_tick` script to `null_script` if the entity will be given a specific `on_tick` by another script later in the game. This way, it's clear that the entity's `on_tick` slot is "reserved," and you won't accidentally give it an `on_tick` script that will be overwritten later.
:::

- **Tiled**: `on_tick` (string)
- **MGS**: `on_tick` (string)
	- [[actions#Script Setables|Setable]]
	- [[expressions_and_operators#String Checkables|Checkable]]

### `on_interact` Script

See: [[scripts#`on_interact`|`on_interact`]]

This identifies the script that is run when the player interacts with the entity. Overwhelmingly, this will be the start of the entity's [[dialogs|dialog]] tree.

- **Tiled**: `on_interact` (string)
- **MGS**: `on_interact` (string)
	- [[actions#Script Setables|Setable]]
	- [[expressions_and_operators#String Checkables|Checkable]]

### `on_look` Script

See: [[scripts#`on_look`|`on_look`]]

This identifies the script that is run when the player interacts with the entity using the [[terminal|terminal]] via `look at <entity name>`.

- **Tiled**: `on_look` (string)
- **MGS**: `on_look` (string)
	- [[actions#Script Setables|Setable]]
	- [[expressions_and_operators#String Checkables|Checkable]]

### Current Animation

This lets you set the specific [[animations|animation]] for character entities. `0` is the idle, and will play by default.

Animations you choose in Tiled via tile selection are ignored.

- **Tiled**: n/a
- **MGS**: `current_animation` (number, u8)
	- [[actions#Int Setables|Setable]]
	- [[expressions_and_operators#Int Operands|Getable]]

### Current Frame

This lets you start an entity's animation at an arbitrary frame. This is useful for staggering entities with identical animation timings.

- **Tiled**: `animation_frame` (number)
- **MGS**: `animation_frame` (number, u8)
	- [[actions#Int Setables|Setable]]
	- [[expressions_and_operators#Int Operands|Getable]]

### Glitched

This gets written into a render flag on the "direction" byte. If checked, the entity will appear to be scrambled and glitchy within the MGE.

- **Tiled**: `is_glitched` (bool)
- **MGS**: `glitched` (bool)
	- [[actions#Bool Setables|Setable]]
	- [[expressions_and_operators#Bool Operands|Getable]]

### Debug

This indicates whether the entity is hidden when [[debug_tools#Debug Mode|Debug Mode]] is off. (While this can be toggled in the [[hex_editor|hex editor]] within the MGE, in practice it will not actually affect anything in-game, as the map is reloaded afresh when debug mode is toggled.)

- **Tiled**: `is_debug` (bool)
- **MGS**: n/a

### Strafe

This adds a rotation to an entity's [[animations|animations]]. This is different from turning an entity toward something or someone; this action applies a rotation to *all* an entity's animations, including while the entity is in motion. In short, use this action to make an entity walk backwards or strafe (walk sideways).

This number cannot be negative.

- **Tiled**: n/a
- **MGS**: `strafe` (number, u8)
	- [[actions#Int Setables|Setable]]

### Player

This is the entity the player will control within the map. There should be only one such entity per map. (If there is more than one, the [[encoder|encoder]] will throw an error.)

- **Tiled**: `is_player` (bool)
- **MGS**: n/a

Without an `is_player` entity:

1. The camera will be positioned with its top-left corner aligned with the top-left corner of the map's coordinate space.
2. The left joystick will control the camera movement.
	- Holding `X` (the run button) will make the camera move faster.
3. The hex editor can still be engaged.
4. [[debug_tools#Vector View|Vector view]] can still be toggled (`XOR` + `MEM0`, or `F1` + `F5` on desktop).
5. [[maps#Map Loads|Map loads]] work, but the camera will remain wherever it was last positioned. (It will not be reset to what is described in #1.)
6. [[dialogs|Dialogs]] referencing the player entity will use a random portrait and the name `MISSING: 253`.
7. [[actions|Actions]] targeting the player entity will generally do nothing.
	- If you want to change the player's name via an action (e.g. in your game's main menu), this means you must have an `is_player` entity somewhere on the map.
