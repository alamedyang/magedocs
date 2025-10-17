# General Process

An example production pipeline. The exact order can vary a bit, and previous steps might be revisited at any point.

## Entities

Prepare entities. For each entity:

1. Acquire or produce [[tilesets|spritesheets]].
2. In Tiled, [[tilesets#Creating a Tileset JSON File|make a tileset JSON file]].
	1. Put it in `scenario_source_files/entities/`.
	2. For [[entity_types#Character Entity|character entities]], set the `Class` property for all tiles to what you want the entity's `entity_type` name to be.
	3. Set frames and timings for your [[animations|animations]], if any.
		1. For [[entity_types#Character Entity|character entities]], prepare [[animations|animations]] for at least idle, walking, and action.
3. For each [[entity_types#Character Entity|character entities]]:
	1. Use the [[encoder#Web Encoder|web encoder]] to [[entity_management_system|assign animations and NSEW directions]].
	2. Paste updated entity data into `entity_types.json`.
4. Prepare dialog portraits.
	1. In Tiled, [[tilesets#Creating a Tileset JSON File|make a tileset JSON file]] for the talk portrait images.
		1. Put it in `scenario_source_files/entities/`.
	2. Prepare `portraits.json`.
	3. Assign portraits to their entities in `entity_types.json` if the portrait name does not match an [[entity_types#Character Entity|entity_type]] name.

## Maps

Prepare map(s). For each map:

1. Acquire or produce [[tilesets|tilesets]].
2. In Tiled, [[tilesets#Creating a Tileset JSON File|make a tileset JSON file]].
	1. Put it in `scenario_source_files/tilesets/`.
	2. Set [[tilesets#Tile Collisions|tile collisions]] for each tile.
3. In Tiled, [[maps#Creating a Map JSON File|create a map]] using the tileset(s) from above.
4. Place entities on the map.
	1. Set [[entities#Entity Properties|entity properties]] e.g.
		1. `Name`
		2. `is_player`
		3. [[scripts#`on_tick`|`on_tick`]] script
		4. [[scripts#`on_interact`|`on_interact`]] script
		5. [[scripts#`on_look`|`on_look`]] script
5. [[vector_objects|Draw vector shapes]], e.g.
	1. Walk paths
	2. Doorways
	3. "Walking out the door" paths
	4. Camera targets
6. Add the map to `maps.json`, and supply properties like its `on_load` and `on_tick` scripts.

## Dialog Skins

Prepare dialog skin(s). For each skin:

1. Acquire or produce [[tilesets]].
2. In Tiled, [[tilesets#Creating a Tileset JSON File|make a tileset JSON file]].
	1. Put it in `scenario_source_files/tilesets/`.
3. Add dialogSkin file(s) to `scenario.json`.

## Game Logic

Prepare game behavior.

1. Write MGS files for [[scripts|scripts]], [[dialogs|dialogs]], and [[serial_dialogs|serial dialogs]].

## Encode Game

Encode the `game.dat` using the [[encoder|encoder]].

## Play Test

Test the game in one of three ways:

1. [[what_youll_need#Web Build|Web build]]:
	1. Remember to use the web build appropriate for the version of the encoder you're using!
	2. Drag the new `game.dat` into the browser window.
	3. Run the game.
2. [[what_youll_need#Desktop Build|Desktop build]] (see [[mge_vm|MGE VM]]):
	1. Move `game.dat` to the right place.
	2. Run the game.
3. Verify on real badge hardware. See: [[updating_the_hardware|Updating the Hardware]]
	1. Copy `game.dat` onto a microSD card.
	2. Insert the microSD card into hardware.
	3. Flash the game.
	4. Run the game.
