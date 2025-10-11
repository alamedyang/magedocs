# Scripts

[[syntax_scopes#Project Scope|Project scope]].

A script is an array of [[actions|actions]] which will execute one after the other, top to bottom, when the script is run.

Scripts execute actions until they run out of actions. Importantly, if a script jumps to another script (either with [[actions#Run Script|Run Script]] or by having another script set the [[#Script Slots|script slot]] to a different script) the current script is *completely abandoned* and the new script is run instead. It is therefore important to check the order in which actions are given, as any action listed after a script jump will be ignored.

There is no means for a script to jump to another script and then pick back up where it left off. [[fns#Fn Call|Fn calls]] and [[actions#Copy Script|Copy Script]] look like function calls, but they actually copy and paste their actions into place; the executing script never leaves its own context in those cases.

## Script Definitions

Defined at [[syntax_scopes#Syntax Contexts|root level of the file]].

**Syntax**: `<"script"?> <name: string> { <script body items> }`

## Script Literal

Scripts can be defined-in-place with script literals in most (though not all) places a script reference is needed.

**Syntax**: `<name: string?> { <script body item*> }`

## Script Body Items

Any of the following:

- [[fns#Fn Call|Fn Call]]
- [[macros#Rand|Rand macro]]
- [[macros#Debug|Debug macro]]
- [[actions#Copy Script|Copy script]]
- [[script_control_flow#Label Definitions|Label definition]]
- [[json_literals|Json literal]]
- [[script_control_flow#If Single|If single]]
- [[script_control_flow#If / Else Chain|If/else chain]]
- [[script_control_flow#While Block|While block]]
- [[script_control_flow#Do While Block|Do while block]]
- [[script_control_flow#For Block|For block]]
- [[actions|Action phrase]]

## Null Script

The only built-in script in the Mage Game Engine is `null_script`. This script contains no actions. Switching to `null_script` is a simple way to terminate `on_tick` scripts, which would otherwise loop forever.

An [[actions|action]] can set any normal script slot to `null_script` with any of the normal [[actions#Script Control|script-controlling actions]], and can change itself to `null_script` by using `goto null_script;`.

For patterns that allow script literals, you may instead put an empty script block `{}` instead.

## Script Slots

Multiple scripts can run at the same time (strictly speaking, they all take turns one after the other during any single game tick), but you cannot arbitrarily spin off threads to run scripts. Instead, entities and maps have "script slots" that are each able to run one script.

- Each [[entities|entity]] has:
	- one `on_interact` slot
	- one `on_tick` slot
	- one `on_look` slot
- The currently-loaded [[maps|map]] has:
	- one `on_load` slot
	- one `on_tick` slot
	- one `on_look` slot
- There is also [[commands|command]] slot for the serial [[terminal|terminal]].

### `on_interact`

If the player presses the interact button and the interact hitbox hits another entity, that entity's `on_interact` script will run. (You can watch this happen with [[debug_tools#Vector View|vector view]].)

Scripts run in the `on_interact` slot will stop once they reach the end of their list of actions. Very commonly, a [[entity_types#Character Entity|character entity]]'s `on_interact` script will be the start script of their [[dialogs|dialog]] tree.

If the script in this slot jumps to another script at some point, interacting with that entity again will result in the last-used script being run again, not whatever the original `on_interact` script was. Therefore, if you wish an entity to begin all interactions with the first script in its interact tree, you must explicitly rerset its `on_interact` script at the end of each of its script branches.

### `on_tick`

`on_tick` scripts continuously evaluate every game tick. Once an `on_tick` script reaches the end of its list of [[actions|actions]], the script will return to the beginning of the currently set script and run again on the next game tick.

::: danger
This means that if you `goto` the same script you started from as the `on_tick` script's last action, the script slot will NEVER give up its turn! You probably need to use [[actions#Assign Script Value|Assign Script Value]] instead, which will set the target script for that slot but NOT immediately execute it like [[actions#Run Script|Run Script]] would.
:::

A map's `on_tick` script slot is a logical place for a script that watches for whether the player enters a doorway, but `on_tick` scripts are useful for other kinds of watch scripts, too, such as changing an entity's idle behavior after a condition has been met.

`on_tick` slots are what you should use if you want to be able to interrupt or abort a script at an arbitrary place or time e.g. with a button press, or when the player crosses a [[vector_objects|collision trigger]], etc.

To terminate an `on_tick` script, you must use the phrase `goto null_script;`, or another script must tell the slot to switch to `null_script`.

### `on_load`

A maps's `on_load` script runs when a map is first loaded. Like an `on_interact` script, once the script reaches the end of its list of actions, the script stops.

These are useful for identifying and re-implementing the "permanent" changes the player has done on that map, as well as making decisions as to whether a cutscene should be played on that map upon load (e.g. at the beginning of the game).

### `on_look`

`on_look` scripts are run when the player uses the `look` command in the [[terminal|terminal]].

`look` on its own triggers the maps's `on_look` script. `look` + the [[state#Printing Current Values|current name]] of an entity will trigger that entity's `on_look` script.

`on_look` scripts can be overridden with a manual [[commands|command]] registration.

### One Slot, One Thread

If you try to put all simultaneous behaviors into a single script, the actions will execute one after the other, but only after each action has completely finished. Three entities having a race would instead run the entire course one at a time, each waiting patiently for the previous runner to complete their route. And if one of the simultaneous behaviors has no stopping point, the actions listed afterwards will never execute at all.

To make a single script perform multiple simultaneous behaviors, it must tell other script slots to start performing those behaviors. The other slots must be `on_tick` slots because all other types of script slots require player input to start execution, and therefore cannot begin at arbitrary times.

When the simultaneous behaviors are finished, the `on_tick` slots must be then set to something else or the new behavior will loop indefinitely (unless that's what you want). Halt an `on_tick` script by having that slot [[actions#Run Script|goto]] [[#Null Script|`null_script`]] as its final action, or by [[actions#Assign Script Value|setting the target slot]] goto `null_script`.

See [[handlers|Handlers]].

---

[[index|Quick Links]]
