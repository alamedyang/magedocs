# What You'll Need

The MGE is data driven, meaning you won't need special hardware or a compiler to generate game content for your Black Mage Badge. All you'll need are:

## Software

### Text Editor

You will need a text editor. (NOTE: a word processor like Apple's Pages or Microsoft Word will not suffice!)

What will work best is an IDE with project management features like syntax parsing and Git integration. Our recommendation, especially for beginners, is [Visual Studio Code](https://code.visualstudio.com/) (Mac, Linux, or Windows), which is free and open source. Importantly, we have prepared a VSCode Marketplace plugin for MGS syntax highlighting, which will make it much easier to work with MGS game script files.

`.mgs` syntax highlighting can be manually added to a handful of other text editors, too. (See [[#Syntax Colors|syntax colors]] for up-to-date details and instructions.) The following can manage decent support as of August 2024:

- [Sublime Text](https://sublimetext.com)
- [JetBrains' IDEs](https://www.jetbrains.com/) (excellent IDE but not inexpensive)
- [TextMate](https://macromates.com) (Mac only)

### Graphics Editor

Any graphics program capable of pixel art can be used to make sprite sheets or [[tilesets|tilesets]]. But if you need custom [[animations|animation]], we recommend investing in [Aseprite](https://www.aseprite.org/), which is about $20. It specializes in sprite animations, and it makes previewing animations and exporting sprite sheets quite painless.

If you don't want to make art from scratch, a good source of premade tilesets is [OpenGameArt.org](https://OpenGameArt.org).

### Tiled

Tiled, which can be found at [mapeditor.org](https://www.mapeditor.org), is a free, cross-platform map and [[tilesets|tileset]] editor that can export and edit JSON files. This how the bulk of [[maps|maps]], [[tilesets|tilesets]], [[entities|entities]] [[animations|animations]], [[tilesets#Tile Collisions|tile collisions]], and [[vector_objects|geometry]] for choreography are defined.

::: warning Use Tiled 1.9.2!
Newer versions of Tiled use a slightly different file structure that is not compatible with the current [[encoder|encoder]]! Please make sure to download version 1.9.2 specifically. Get it from their [Github releases](https://github.com/mapeditor/tiled/releases/tag/v1.9.2).
:::

### Git

~~While strictly optional, it's always nice to version control your projects,~~ If you are not using Git to version control your projects, you bring dishonor and suffering on your house, especially if working with multiple people. We recommend [Sublime Merge](https://www.sublimemerge.com/) if you're just getting started with Git, particularly if you're using VSCode, as VSCode's version control interface is limited. If you're already using one of [JetBrains' IDEs](https://www.jetbrains.com/), you can use their excellent built-in Git tools.

### Web Browser

The [[encoder#Web Encoder|web encoder]] can be run with Node.js (see below) or in a web browser. They will both take the game files from your `scenario_source_files/` folder and export a `game.dat` for the Mage Game Engine to use.

The web version of the encoder, however, also has an [[entity_management_system|entity management system]] for managing animation assignments, so while you might use the Node encoder most of the time, chances are you'll still want to use the web version regularly.

You will likely also want to use the [[#Web Build|web build]] of the MGE to test your game data, as this is much simpler than setting up a Linux environment to run the game natively and much faster than using a microSD card to test the `game.dat` on the real badge after every revision.

### Node.js (optional)

If you find yourself constantly making small changes to your content and regenerating your `game.dat` very frequently, it may be worthwhile to install [Node.js](https://nodejs.org) so you can use the [[encoder#CLI Encoder|CLI version of the encoder]] instead.

We recommend using Node's long-term support (i.e. even numbered) versions.

## Files

Content creation will involve creating, modifying, and using files within `SD_Card/MAGE/`.

This structure was intended to facilitate distribution of `game.dat` files and game source code via SD cards.

### `MAGE/`

- `editor/index.html`
	- The [[encoder#Web Encoder|web encoder]]. Open this file in a web browser to use it.
- `game.dat`
	- Encoded game data.
	- Your `game.dat` must be here for the [[#Desktop Build|desktop build]] to see it.
		- The [[encoder#CLI Encoder|CLI encoder]] will update the `game.dat` in place.
- `replace_dat_file_with_downloaded.sh`
	- Grabs the latest `game.dat` from your Downloads folder and moves it to your current directory.
- `regenerate_dat_file.sh`
	- The [[encoder#CLI Encoder|CLI encoder]]. There are two versions depending on which repo you started with; the version from the [[mge_vm|MGE VM ]]is slightly different. Requires node.js.
- `mage_dat.ksy`
	- For debugging your `game.dat` with [[encoder#Kaitai|Kaitai]].
- `scenario_source_files/`
	- See below.

### `scenario_source_files/`

::: warning Use the right `scenario_source_files/`!
Unit tests include a broad comparison test that checks a copy of the old JSON output against a suite of the old MGS files but with modern syntax. This means there is a second `scenario_source_files/` folder which is not to be updated with new game content. (Changes to syntax is encouraged for experimentation so long as the script names and such are maintained.) This arrangement helps determine whether new grammar changes break anything that existed as of ch2.

When making changes files in either `scenario_source_files/` folder, make sure you've got the right one!
:::

JSON file names should be prefixed with the type of MGE data they contain, even when they're placed inside the corresponding folder. This will make them easier to debug.

Make sure all Tiled files are in the correct place before working on them or references to them will break when you move them.

Folders:

- `entities/`
	- Tiled [[tilesets|tilesets]] (JSON) and [[tilesets#Spritesheets|spritesheets]] (PNG/GIF)
	- For [[entities|entity]] assets like entity tilesets and portrait tilesets
- `maps/`
	- Tiled [[maps|maps]] (JSON)
	- Map data (not including tilesets)
- `mgs/`
	- MageGameScript files (MGS)
	- These files need not be anywhere specific, but they're best kept together if nothing else.
- `tilesets/`
	- Tiled [[tilesets|tilesets]] (JSON) and [[tilesets#Spritesheets|spritesheets]] (PNG/GIF)
	- For non-entity assets, such as graphics for maps, dialog borders, etc.
- `scenario.json`
	- See [[#`scenario.json`|`scenario.json`]]
	- See [[#`entity_types.json`|`entity_types.json`]]
	- See [[#`maps.json`|`maps.json`]]
	- See [[#`portraits.json`|`portraits.json`]]

#### `scenario.json`

This file tells the encoder which JSON files to include for various purposes. After the "mathlang" revision of MageGameScript, it is no longer necessary to keep JSON files for dialogs, serial dialogs, or scripts. Therefore, there is only on thing left needed in here: `dialogSkins`.


```json
{
  "scriptPaths": [],
  "dialogPaths": [],
  "serialDialogPaths": [],
  "dialogSkins": {
    "default": "tilesets/tileset-dialog_moon.json",
    "codec": "tilesets/tileset-dialog_codec.json",
    "menu": "tilesets/tileset-dialog_transparent_menu.json"
  }
}
```

`dialogSkins` is a list (JS object) of dialog skin names mapped to the file path of their tileset JSON file. The "name" is what you'll use to target that dialog skin. A `dialogSkin` called `default` is mandatory.

#### `entity_types.json`

Identifies [[entity_types#Character Entity|character entities]] and assigns them various properties, such as:

- `tileset`: their tileset JSON file path
- `portrait`: the name of their portrait image, if not the same as their `entity_type` name (optional)
- `animations`: their [[entity_management_system#Assigning Animations|animation assignments]] (idle, walk, action, etc. — and north, south, west, east)

As an example (keeping in mind that the animation arrays have been closed so the overall structure is more clear):

```json
{
  "mage": {
    "tileset": "entity-mage.json",
    "animations": {
      "idle": [],
      "walk": [],
      "action": []
    }
  },
  "bender_sadbutt": {
    "tileset": "entity-bender_sadbutt.json",
    "portrait": "bender",
    "animations": {
      "idle": [],
      "walk": [],
      "action": [],
      "bite": []
    }
  }
}
```

Animations are much easier to do using the [[encoder#Web Encoder|web encoder]]'s [[entity_management_system|entity management system]], but if you want to make changes to an entity's animations by hand, the structure is as follows:

```json
"idle": [
  { "tileid": 18, "flip_x": false },
  { "tileid": 16, "flip_x": true },
  { "tileid": 17, "flip_x": false },
  { "tileid": 16, "flip_x": false }
]
```

When animations are created within Tiled, they are assigned to a tile on the tileset. So for the above definitions, `tileid` refers to which tile the animation has been assigned to.

To find the `tileid`, count left-to-right and top-to-down, but remember to count starting from 0 instead of 1. Alternatively, you can select the correct tile in Tiled and see the tile ID that way.

`flip_x` will flip the sprites horizontally (and `flip_y` will flip vertically), but will otherwise make no changes to the animation on that tile.

The order of the object literals in the animation is fixed:

- North
- East
- South
- West

Each character entity should at least have an idle, walk, and action animation. (See: [[animations|Animations]])

### `maps.json`

[[maps#Map Properties|Map properties]] defined in a map's Tiled JSON file (as was done in chapter 1) are still honored (for now!), but it's recommended to move such properties to this file for easier access.

The first map given is the map run when the game is opened.

```json
{
  "sample1": {
    "path": "maps/map-sample1.json",
    "on_load": "on_load-sample",
    "on_look": "on_look-sample",
    "on_tick": "on_tick-sample",
    "directions": {
      "north": "on_go-sample-map",
      "south": "on_go-sample-map"
    }
  },
  "sample2": {
    "path": "maps/map-sample2.json"
  }
}
```

#### `portraits.json`

This file contains data for portraits, which reference tileset JSON files from the `entities/` folder. Portrait names should match associated [[entity_types#Character Entity|entity_type]] names, if any.

```json
{
  "baker": {
    "tileset": "portraits-people.json",
    "emotes": {
      "default": {
        "tileid": 15,
        "flip_x": true
      }
    }
  },
  "bender": {
    "tileset": "portraits-people.json",
    "emotes": {
      "default": {
        "tileid": 21,
        "flip_x": true
      },
      "laugh": {
        "tileid": 22,
        "flip_x": true
      }
    }
  }
}
```

`tileset` is the file path for the [[tilesets|tileset JSON file]] with the portrait image.

`tileid` is how you define which tile in the tileset you want to use. You can simply count the tiles in the tileset left-to-right and top-to-down, beginning from `0`, but it might be easier to select the appropriate tile within Tiled and see what it says the "ID" is.

Game portraits are determined to be in their default position when alignment is `BOTTOM_LEFT` (or `TOP_LEFT`). For normal RPG-style contexts, you'll want your entities facing the center of the screen, which means your graphics should face the right in the tileset file. (These graphics are flipped automatically when used in the `BOTTOM_RIGHT` or `TOP_RIGHT` position.) If the portraits in your tileset image aren't facing the right, you should set `flip_x` to `true`.

You should at least have a `default` emote, but you can define any others as you like. Emotes are currently identified by their index / `id`.

The Mage Game Engine supports animated emotes. To animate an emote, create an animation for that tile the same way you would [[animations|make an entity animation]](animations).

## To Run the Game

### MicroSD Card (optional)

To put a new `game.dat` onto the badge, you'll need a microSD card formatted to FAT32. (This is only necessary if you're using the real badge hardware; the [[#Web Build|web build]] is sufficient for most cases.)

### Desktop Build

The tools listed above can be run in any environment, but at the moment (October 2025), you need Linux to run the game natively on your computer.

A virtual machine will be sufficient for this. For your convenience, we have prepared a [[mge_vm|VM image]] with project files and tooling in place for you to start a new MGE project, but know that you will likely need to update everything, as the VM was prepared for the chapter 1 engine.

### Web Build

The web build of the Mage Game Engine (MGE) allows you to drag and drop a `game.dat` into your browser window to play test (or play!) any MGE scenario.

As of October 2025, the latest build for the chapter 2 engine is available here: [https://dc801.github.io/BM-Badge/](https://dc801.github.io/BM-Badge/).

Save game data persists per `game.dat` file.

## Syntax Colors

A syntax coloring grammar (tmLanguage) for MageGameScript is in development here: [github.com/alamedyang/magegamescript-syntax-highlighting](https://github.com/alamedyang/magegamescript-syntax-highlighting). This makes coding MGS much, much easier.

Syntax colors in this documentation were made possible by [shiki](https://v2.vuepress.vuejs.org/reference/plugin/shiki.html), a TextMate grammar plugin for VuePress.

### Visual Studio Code

When you open an MGS file, VSCode will offer a [marketplace extension](https://marketplace.visualstudio.com/items?itemName=goat-and-bird.magegamescript-colors) for it. Alternatively, search for "MageGameScript Colors" in the Visual Studio Code extensions marketplace.

After installing the extension, all MGS files will have syntax coloring. VSCode will offer to update the extension whenever a new version comes out.

### Sublime Text

Visit the syntax colors repo above (or clone it locally), then find the `mgs.tmLanguage` file in the `syntaxes` folder. Move this file to wherever Sublime Text wants its coloring grammars in your operating system. After this, you can select MageGameScript under View > Syntax to style the text in your MGS files.

You will have to update the `mgs.tmLanguage` manually by repeating the above process when a new version is released.

### TextMate

A `tmbundle` version of the above grammar has been quickly prepared (as of Nov 2023), but may not have feature parity, is not automatically generated, and it is not bundled with the repo yet. Ask the DC801 badge game devs if you want a preview copy to try.

### IntelliJ

IntelliJ has a plugin, available by default, to install TextMate bundles. Acquire the `tmbundle` as explained above, and follow IntelliJ's documentation to install it.

### Other IDEs

Many other IDEs will accept TextMate grammars, but you will have to find and follow your IDE's specific instructions.
