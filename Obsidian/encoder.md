# Encoder

There are two versions of the encoder, but both produce exactly the same `game.dat` file.

What gets encoded (see [[what_youll_need#`MAGE/`|`MAGE/`]]):

1. Everything listed in `scenario.json`:
	- dialogSkins
2. Portraits found in `portraits.json`
3. Entities found in `entity_types.json`
4. Maps found in `maps.json`
5. All MGS files within `scenario_source_files/`

These items are encoded if they're being used by the game in some way; a [[scripts|script]] that isn't used by any [[maps|maps]], [[entities|entities]], or referenced any included script will be ignored. In other words, entities must be placed on at least one map to be encoded.

## `game.dat`

The `game.dat` file is the binary file containing all your game scenario content, including images.

Note that [[state#Save Data|save data]] will persist when using the same `game.dat` file.

There is currently no way to bring save data from an old version of the `game.dat` to a new one.

### Run Your `game.dat`

- [[what_youll_need#Web Build|Web build]]: Open the web build in your browser, then drag the `game.dat` into the browser window.
	- NOTE: If you play the game a little then drag the same `game.dat` in again, the game will appear to restart afresh — but in fact, save flags and the like may not be reset, **even when you didn't explicitly save inside the game**. Refresh the browser window to wipe existing game state.
- [[what_youll_need#Desktop Build|Desktop build]]: If you use the [[#CLI Encoder|CLI encoder]] to build the game, the `game.dat` will already be in the appropriate place to run the game. Otherwise, you must move your new `game.dat` to the `MAGE` folder.
- Badge: see [[updating_the_hardware|Updating the Hardware]]

Also see: [[debug_tools|Debug Tools]]

## CLI Encoder

If you have Node.js installed, you can run the shell script `regenerate_dat_file.sh` to generate a new `game.dat` file. There are two versions of this file:

1. Main project repo version:
	- `cd` into `MAGE/`.
	- Run the shell script. The `game.dat` will be made from the `scenario_source_files/` in `MAGE/`.
2. [[mge_vm|Sample repo]] version:
	- first argument: the `scenario_source_files/` folder to read from
	- second argument: where to write the `game.dat`
	- This version of the shell script also launches the game automatically.

This encoder is more useful than the web version when you want to test rapid iterations of your game data, as it is less involved. It is also much faster because it caches encoded graphics.

## Web Encoder

Open `SD_Card/MAGE/editor/index.html` with a web browser.

Once the page is open, you can either:

1. Drag your `scenario_source_files/` folder into the window.
2. Click the "browse" button and choose the `scenario_source_files` using your operating system's file browser.

Confirm that you want to upload the contents of the folder to your browser, and the encoder will do its magic. If the encode was successful, click the "Download game.dat" button.

The `game.dat` will be sent to your default download location, so to play it on the desktop build, you'll first have to move it to the correct place by hand or run the shell script `replace_dat_file_with_downloaded.sh`. (`cd` into the `SD_Card/MAGE/` folder before using the shell script.)

This encoder is more useful for times you need to [[debug_tools|debug something]] or when you want to manage an [[entities|entity]]'s [[animations|animations]] (see below).

### Entity Manager

A special feature of the web version of the encoder is the [[entity_management_system|entity management system]], which you can use to assign animations to [[entity_types#Character Entities|character entities]].

## Debugging

You can debug in-game either by logging things (via [[serial_dialogs|serial dialogs]] or even [[dialogs|dialogs]]) or with the in-game [[hex_editor|hex editor]].

### Encoder Console

Both versions of the [[encoder|encoder]] will tell you when something has gone wrong during the encoding process, and many errors should be self explanatory, e.g. `"No object named X could be found on map Y!"`

### Inspecting WIP Data

You can use the web encoder and your browser's JavaScript console to inspect various aspects about how the encoder interpreted your game files. (You could even interrupt the encoder *while* it collects and processes the data.)

- List of all [[state#Save Flags|save flags]]
- Number of colors in each tileset's pallet. If trying to reduce the file size of your `game.dat`, it can help to identify which [[tilesets|tilesets]] have more colors than intended.
- …all the rest

This is most useful when the encoder throws an exception, because you can examine the state of data involved in triggering the error. Console messages alone might not identify which script or variable was causing the problem.

### Kaitai

Kaitai ([ide.kaitai.io](https://ide.kaitai.io)) is a tool that can parse and analyze binary data formats.

Available inside your `MAGE` folder is a file called `mage_dat.ksy`. You can drag this in a Kaitai window, along with your `game.dat`, to analyze in great detail the encoded structure of your game.

This tool lets you see the relationship between the hex value of a script/entity_type/dialog/etc. and its name. E.g. if an [[entities|entity]]'s [[scripts#`on_tick`|`on_tick`]] was being changed unexpectedly, but you only knew the hex value that it's being changed to (perhaps using the [[hex_editor|hex editor]]), using Kaitai to find the name of the script in question can help you track down the problem.
