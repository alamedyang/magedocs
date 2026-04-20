# Hex Editor

The hex editor is a unique feature of the Mage Game Engine (MGE) that allows you to view and edit [entity properties](entities#entity-properties) for [entities](entities) in the live game.

If [hex editor control](state#engine-flags) is turned off, the hex editor will not open and values cannot be changed.

## Opening the Hex Editor

Press the capacitive button (the hat) on the top of the physical badge to open the hex editor. (On the web, press `ESC` or `TAB` or click the button in the upper-left corner.) Repeat to close the hex editor again.

Remember that you can select a byte in the hex editor and watch its value change (or change it yourself) live in the overworld — you need not open the hex editor all the time to monitor a single value while playing the game.

## Selecting a Value

There are several methods:

1. Once inside the hex editor, use the arrow joystick (on the web, use the arrow keys or the WSAD keys) to control which byte is selected.
2. In the overworld, you can face an entity and press the triangle button to open the hex editor and jump to the first byte of that entity's struct.
3. Use the `MEM0` through `MEM3` buttons to jump to a saved byte offset within the currently-selected entity struct.
	- These saved offsets can be changed by holding `PAGE` and pressing the target `MEM` button.

## Changing a Value

The `XOR`, `ADD`, and `SUB` buttons on the left side of the screen change the operator mode for the bit buttons below the screen. E.g. to add 4 to the value, set the mode to `ADD` and press the `4` bit button.

While inside the hex editor you can also increment and decrement the selected value by 1 using the triangle and X buttons.

## Values

Each entity has two rows of data. Every multi-byte number is little endian. The player entity's entry will be red.

```
AAAAAAAAAAAABBCC
DDEEFFGGHIJKLLMM
```

- A. [Name](entities#name)
- B. [X coordinate](entities#position)
- C. [Y coordinate](entities#position)
- D. [`on_interact`](scripts#on_interact) [script](scripts)
- E. [`on_tick`](scripts#on_tick) [script](scripts)
- F. [primary_id](entities#tile-type)
- G. [secondary_id](entities#tile-type)
- H. [primary_id_type](entities#tile-type)
- I. [Animation id](entities#current-animation)
- J. [Animation frame](entities#current-frame)
- K. Render flags
	- [NSEW direction](entity_management_system) (2 bits)
	- flip diagonal
	- is_floating
	- [Strafe rotation](entities#strafe) (2 bits)
	- [is_debug](entities#debug)
	- [is_glitched](entities#glitched)
- L. [Assigned geometry (path)](entities#path)
- M. [`on_look`](scripts#on_look) [script](scripts)
