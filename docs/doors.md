# Doors

## Doors (NPCs)

To make an entity walk through a door, move them to the doorway and then [hide](hiding_an_entity) them.

Entities cannot be unloaded once loaded on a map, so they will always exist no matter what . You might make a different version of the map without such hidden entities, but this would require a fresh [map load](maps#map-loads) — which is likely to be inconvenient, especially if multiple entities have to leave at multiple times.

## Doors (Player)

For doors to work for the player, you'll need the following:

### Doorway Trigger

A doorway trigger is a [vector shape](vector_objects) placed on the [map](maps) wherever you want to trigger warp or doorway behavior, e.g. a literal doorframe, a few tiles spanning the path out of town, etc.

The vector shape should be large enough that the player can't skip over it when running past it on low frame rate devices.

To allow the player access to the doorway, the tile(s) the door is on should not have any [collision data](tilesets#tile-collisions). (If you use a door with alpha on top of a wall tile, for instance, the wall collision might keep the player from physically entering the doorway.)

Use [vector view](debug_tools#vector-view) to debug misbehaving door triggers.

### Doorway Watcher

You can check whether an entity is inside a geometry object with a [bool expression](expressions_and_operators#bool-operands) (look for `intersects`). Daisy chain several [ifs](script_control_flow#if--else-chain) to check each vector doorway trigger inside a doorway watcher's `on_tick` script. This is best done in the map's `on_tick` script, as it cannot be changed by the player using the [hex editor](hex_editor), so is well protected.

TIP: If there are certain doorways that unlock or lock at specific times in the story, you might want your map's `on_tick` script to run logic that determines which watch script to run, and/or include a [save flag](state#save-flags) check to give the script an opportunity to jump to the appropriate one automatically if lock/unlock conditions change after the map is loaded.

When the "entity intersects geometry" condition is met, the doorway watcher script should branch to an appropriate "entering a doorway" script.

### "Entering a Doorway" Script

1. If you need to set the [warp_state](state#warp-state-string) string for this doorway, set it before anything else.
2. The next action depends on the doorway destination:
	1. **Another spot on the same map**: Teleport the player to the new spot.
		- You will likely still need to have "leaving a doorway" behavior of some kind, though it need not be a separate script.
	2. **A different map (e.g. a house, a dungeon, another zone on the overworld)**: The very last action should be [Load Map](actions#load-map).
		- This means all "leaving a doorway" behavior must be handled (or at least triggered) by the target map's `on_load` script. See below.

Generally, entering a doorway requires no other padding or special handling unless you want to use fades.

### "Leaving a Doorway" Script

If a new map is loaded:
1. Do all other logic checks first, such as for [re-registering commands](commands#command-actions) or [teleporting entities](actions#position-assignment). This is vital if the "leaving a doorway" behavior takes any amount of time, i.e. when the entity must walk along a geometry to enter the room.
2. Use the [Warp State String](state#warp-state-string) to determine which "leaving a doorway" script to run.

#### "Leaving a Doorway" Behavior

1. Move the player entity to the correct [spawn point](#spawn-points).
2. If the default direction of the player entity is different from what you would like, you should either:
	1. explicitly turn them the correct direction, or
	2. have them walk a brief distance in the correct direction out of the doorway.
3. Turn player control back on.

### Doorway Fades

Fades are a little clunky on the hardware, so if using them for doorways, it might be better to limit them to the most important doorways alone, such as the edges of the map.

If a fade requires two simultaneous behaviors (e.g. camera fade and entity walk), you will need two script slots. Using the player's `on_tick` for this is logical, but not required; feel free to manage the player's behavior with another entity's `on_tick` script, instead.

#### Entering a Doorway Script (with Fades)

1. Disable player control.
2. Set the player's `on_tick` to a script that walks them toward a vector point several tiles away.
	- To make the player's walk path as straight as possible, you can put this point far away and set the duration fairly high.
3. Begin the fade.
	- Set the duration lower than that of the player entity's walk.
4. Load the new map.

#### Leaving a Doorway Script (with Fades)

Be sure to verify that the new map's `on_load` will check the [Warp State String](state#warp-state-string) and branch to the the correct "leaving a doorway" script.

1. Set the player entity's `on_tick` to a script that walks them briefly in a line away from the doorway.
	- For the last action in this `on_tick` script, goto [`null_script`](scripts#null-script) (or set the `on_tick` to something else) to prevent it from looping.
2. Fade the screen back in.
	- Duration should be approximately that of the player entity's walk.
3. Turn player control back on.

## Spawn Points

For doorway/warp behavior, there are two ways to handle player spawn points:

1. **Default spawn points**: Player entities will spawn by default where an `is_player` entity was placed on a [map](maps) in Tiled. For maps with a single door, such as an NPC's house, this will be sufficient to control a player's spawning behavior — simply place a player entity at the entrance, facing the appropriate direction.
2. **Custom spawn points**: To control additional spawn points, you will need to create [vector objects](vector_objects) to use as teleport destinations.

To prevent the player from instantly returning to where they came from, the player spawn point should not overlap with the doorway trigger in the new destination.

