# Scripts

[Project scope](syntax_scopes#project-scope).

A script is a list of [bytecode actions](actions) which will execute one after the other, top to bottom, when the script is run.

Scripts execute actions until they run out of actions. Importantly, if a script jumps to another script (either with [Run Script](actions#run-script) or by having another script set the [script slot](#script-slots) to a different script) the current script is *completely abandoned* and the new script is run instead. It is therefore important to check the order in which actions are given, as any action listed after a script jump will be ignored.

There is no means for a script to jump to another script and then pick back up where it left off. [Fn calls](fns#fn-call) and [Copy Script](macros#copy-script) look like function calls, but they actually copy and paste their actions into place; the executing script never leaves its own context in those cases.

## Script Definitions

Defined at [root level of the file](syntax_scopes#syntax-contexts).

```
<"script"?> <name: string> { <script body items> }
```

## Script Literal

Scripts can be defined-in-place with script literals in most (though not all) places a script reference is needed.

```
<script name: string?> { <script body item*> }
```

If the script does not need to be referenced by anything else, it's best to omit the name. This improves readability.

## Script Body Items

Any of the following:

- [Fn Call](fns#fn-call)
- [Rand Macro](macros#rand)
- [Debug Macro](macros#debug)
- [Copy Script Macro](macros#copy-script)
- [Label definition](script_control_flow#label-definitions)
- [Json literal](json_literals)
- [If single](script_control_flow#if-single)
- [If/else chain](script_control_flow#if--else-chain)
- [While block](script_control_flow#while-block)
- [Do while block](script_control_flow#do-while-block)
- [For block](script_control_flow#for-block)
- [Action phrase](actions)

## `null_script`

The only built-in script in the Mage Game Engine is `null_script`. This script contains no actions. Switching to `null_script` is a simple way to terminate [`on_tick`](scripts#on_tick) scripts, which would otherwise loop forever.

An [action](actions) can set any normal script slot to `null_script` with any of the normal [script-controlling actions](actions#script-control), and can change itself to `null_script` by using [actions](actions#run-script)  (`goto null_script;`).

For patterns that allow script literals, you may instead put an empty script block `{}` instead.

## Script Slots

Multiple scripts can run at the same time (strictly speaking, they all take turns one after the other during any single game tick), but you cannot arbitrarily spin off threads to run additional scripts. Instead, entities and maps have "script slots" that are each able to run one script.

- Each [entity](entities) has:
	- one [`on_interact`](#on_interact) slot
	- one [`on_tick`](#on_tick) slot
	- one [`on_look`](#on_look) slot
- The currently-loaded [map](maps) has:
	- one [`on_load`](#on_load) slot
	- one [`on_tick`](#on_tick) slot
	- one [`on_look`](#on_look) slot
- There is also [command](commands) slot for the serial [terminal](terminal).

### `on_interact`

For [entities](entities).

If the player presses the interact button and the interact hitbox hits another entity, that entity's `on_interact` script will run. You can watch this happen with [vector view](debug_tools#vector-view).

Scripts run in the `on_interact` slot will stop once they reach the end of their list of actions. Very commonly, a [character entity](entity_types#character-entity)'s `on_interact` script will be the start script of their [dialog](dialogs) tree.

If the script in this slot jumps to another script at some point, interacting with that entity again will result in the last-used script being run again, not whatever the original `on_interact` script was. Therefore, if you wish an entity to begin all interactions with the first script in its interact tree, you must explicitly rerset its `on_interact` script at the end of each of its script branches.

### `on_tick`

For [entities](entities) and [maps](maps).

`on_tick` scripts continuously evaluate every game tick. Once an `on_tick` script reaches the end of its list of [actions](actions), the script will return to the beginning of the currently set script and run again on the next game tick.

::: danger
This means that if you [`goto`](actions#run-script) the same script you started from as the `on_tick` script's last action, the script slot will NEVER give up its turn! You probably need to use [Assign Script Value](actions#assign-script-value) instead, which will set the target script for that slot but NOT immediately execute it like [Run Script](actions#run-script) would.
:::

To terminate an `on_tick` script, you must use the phrase [`goto null_script;`](actions#run-script), or another script must tell the [slot to switch](actions#assign-script-value) to `null_script`.

### `on_load`

For [maps](maps).

A maps's `on_load` script runs when a map is first loaded. Like an [`on_interact`](scripts#on_interact) script, once the script reaches the end of its list of actions, the script stops.

These are useful for identifying and re-implementing the "permanent" changes the player has done on that map, as well as making decisions as to whether a cutscene should be played on that map upon load (e.g. at the beginning of the game).

### `on_look`

For [entities](entities) and [maps](maps).

`on_look` scripts are run when the player uses the `look` command in the [terminal](terminal).

`look` on its own triggers the maps's `on_look` script. `look` + the [current name](state#printing-current-values) of an entity will trigger that entity's `on_look` script.

`on_look` scripts can be overridden with a manual [command](commands) registration.

### One Slot, One Thread

If you try to put all simultaneous behaviors into a single script, the actions will execute one after the other, but only after each action has completely finished. Three entities having a race would instead run the entire course one at a time, each waiting patiently for the previous runner to complete their route. And if one of the simultaneous behaviors has no stopping point, the actions listed afterwards will never execute at all.

To make a single script perform multiple simultaneous behaviors, it must tell other script slots to start performing those behaviors. The other slots must be `on_tick` slots because all other types of script slots require player input to start execution, and therefore cannot begin at arbitrary times. See [Handlers](handlers).

When the simultaneous behaviors are finished, the `on_tick` slots must be then set to something else or the new behavior will loop indefinitely (unless that's what you want). Halt an `on_tick` script by having that slot [goto](actions#run-script) [`null_script`](#null_script) as its final action, or by [setting the target slot](actions#assign-script-value) goto `null_script`.
