# Entities

Entities are a basic element of the Mage Game Engine (MGE).

- All [animated](animations) graphics must be entities, as ordinary map tiles cannot change appearance or move.
- Any single tile object placed in one of a [map's](maps) [object layers](maps#object-layers) will be one of the three [entity primary id types](entity_types), automatically determined by the nature of tile being placed.
- All entities have all the same [entity properties](#entity-properties) available to them, visible in-game as a pair of rows on the hex editor in the game, 32 bytes total.

- Entities need not have a name, nor a unique name. [Scripts](scripts) targeting an entity by name will simply use the first the encoder found with that name.
- All entity state (apart from the player's name) is reset when a [map load](maps#map-loads) occurs.

## Entity Properties

Some of these properties are available to entities in Tiled by default.

Many of these may be modified during gameplay with [script](scripts) [actions](actions) or by the player via the [hex editor](hex_editor). To add a property to an entity in Tiled, click the plus at the bottom of the Properties view and set the property type (bool, float, object, string, etc.).

The Tiled property name is the same as the MGS keyword unless specified.

### Name

These are limited to 12 ASCII characters in the Mage Game Engine. (Tiled will not enforce this limitation.)

An entity's current name may be printed in a [dialog or serial dialog string](dialog_and_serial_dialog_strings#print-entity-name).

- **MGS keyword**: `name` (string)
- **Tiled property name**: `Name` (string)

### Type

For [character entities](entity_types#character-entity), this is the `type`, or the name of the character entity as defined in `entity_types.json`. This should be automatically assigned by Tiled when you place a character entity on the [map](maps). (All tiles on the entity tileset must first have their Type property set to the correct `entity_type` name for this to work.)

- **MGS keyword**: `type` (string)
- **Tiled property name**: `Class`, formerly `Type` (string)

### Tile Type

**`primary_id_type`**, **`primary_id`**, and **`secondary_id`** are also available to entities, but you need not assign these properties explicitly within Tiled, since they are determined by the [identity of the tile](entity_types) you are placing on the map.

- **MGS keywords**:
	- `primary_id_type` (int, u8)
	- `primary_id` (int)
	- `secondary_id` (int)

### Path

You can use this property to assign a [vector object](vector_objects) to an entity. It's primarily used so you can give multiple entities the same script, one that compels them to walk along their own path.

The [geometry identifier](identifiers#geometry-identifier) keyword `entity_path` refers to this assignment. (Full version: `geometry %ENTITY_PATH%`)

- **MGS keyword**: `path` ([geometry identifier](identifiers#geometry-identifier))
- **Tiled property name**: `Path` (object)

### Position

- **MGS keyword**:
	- `position` ([movable](actions#movable-assignment))
		- used in the [action phrases](actions) [Position Assignment](actions#position-assignment) and [Position Over Time](actions#position-over-time)
	- `x` (int)
	- `y` (int)
- **Tiled property name**: just place the entity where you want it to appear on the map

### Direction

This is the cardinal direction the character entity is facing. This is handled by placing the desired animation tile (and therefore the correct direction) of the target character entity on the map. Left and right can be flipped by taking a side-facing animation tile and checking the **Flipping > Horizontal** checkbox in the Properties view.

NOTE: Horizontally flipping a front or back-facing character entity will make it appear horizontally flipped within Tiled, but in the MGE this will turn the entity around 180º.

With scripts, you can have the entity point at something specific using the [action phrase](actions) [Assign Direction Value](actions#assign-direction-value), or make a relative turn with [Change Int Value](actions#change-int-value).

- **MGS keyword**: `direction`
- **Tiled property name**: just place the entity the way you want it to appear on the map

### `on_tick` Script

See: [`on_tick`](scripts#on_tick)

This identifies the [script](scripts) that is run for that entity every game tick. Since `on_tick` scripts loop when finished, don't assign a script you wouldn't want to run forever.

::: tip Best Practice
If you don't want an entity to have an `on_tick` script, you can leave this property blank, or avoid adding it altogether. However, it's useful to set an entity's `on_tick` script to `null_script` if the entity will be given a specific `on_tick` by another script later in the game. This way, it's clear that the entity's `on_tick` slot is "reserved," and you won't accidentally give it an `on_tick` script that will be overwritten later.
:::

- **MGS keyword**: `on_tick` ([script slot](scripts#script-slots))
- **Tiled property name**: `on_tick` (string)

### `on_interact` Script

See: [`on_interact`](scripts#on_interact)

This identifies the script that is run when the player interacts with the entity. Overwhelmingly, this will be the start of the entity's [dialog](dialogs) tree.

- **MGS keyword**: `on_interact` ([script slot](scripts))
- **Tiled property name**: `on_interact` (string)

### `on_look` Script

See: [`on_look`](scripts#on_look)

This identifies the script that is run when the player interacts with the entity using the [terminal](terminal) via `look at <entity name>`.

- **MGS keyword**: `on_look` ([script slot](scripts))
- **Tiled property name**: `on_look` (string)

### Current Animation

This lets you set the specific [animation](animations) for character entities. `0` is the idle, and will play by default.

Animations you choose in Tiled via tile selection are ignored.

- **MGS keyword**: `current_animation` (int, u8)

### Current Frame

This lets you start an entity's animation at an arbitrary frame. This is useful for staggering entities with identical animation timings.

- **MGS keyword**: `animation_frame` (int, u8)
- **Tiled property name**: `animation_frame` (number)

### Glitched

This lets you start an entity's animation at an arbitrary frame. This is useful for staggering entities with identical animation timings.

- **MGS keyword**: `glitched` (bool)
- **Tiled property name**: `is_glitched` (bool)

### Debug

This indicates whether the entity is hidden when [Debug Mode](debug_tools#debug-mode) is off. (While this can be toggled in the [hex editor](hex_editor) within the MGE, in practice it will not actually affect anything in-game, as the map is reloaded afresh when debug mode is toggled.)

- **MGS keyword**: n/a
- **Tiled property name**: `is_debug` (bool)

### Strafe

This adds a rotation to an entity's [animations](animations). This is different from turning an entity toward something or someone; this action applies a rotation to *all* an entity's animations, including while the entity is in motion. In short, use this action to make an entity walk backwards or strafe (walk sideways).

This number cannot be negative.

NOTE: This value cannot be checked (used in an int expression), only set.

- **MGS keyword**: `strafe` (int)
- **Tiled property name**: n/a

### Player

This is the entity the player will control within the map. There should be only one such entity per map. (If there is more than one, the [encoder](encoder) will throw an error.)

- **MGS keyword**: n/a
- **Tiled property name**: `is_player` (bool)

Without an `is_player` entity:

1. The camera will be positioned with its top-left corner aligned with the top-left corner of the map's coordinate space.
2. The left joystick will control the camera movement.
	- Holding `X` (the run button) will make the camera move faster.
3. The hex editor can still be engaged.
4. [Vector view](debug_tools#vector-view) can still be toggled (`XOR` + `MEM0`, or `F1` + `F5` on desktop).
5. [Map loads](maps#map-loads) work, but the camera will remain wherever it was last positioned. (It will not be reset to what is described in #1.)
6. [Dialogs](dialogs) referencing the player entity will use a random portrait and the name `MISSING: 253`.
7. [Actions](actions) targeting the player entity will generally do nothing.
	- If you want to change the player's name via an action (e.g. in your game's main menu), this means you must have an `is_player` entity somewhere on the map.
