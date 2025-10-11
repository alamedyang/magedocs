# Action Param Expansions

For [[actions|action phrases]], multiple params may be put into a single param "slot" by wrapping it in brackets. Such params are comma-separated.

There are two applications for this:

## Spreading

By default, param expansions are spread into multiple instances of that action. If there are multiple expansions in the same action phrase, the nth item of each expansion is chosen for each nth spread.

```mgs
script before {
	entity [Bob, Alice] on_tick = [null_script, watch_player];
}

// becomes
	
script after {
	entity Bob on_tick = null_script;
	entity Alice on_tick = watch_player;
}
```

## Rand Macro

If inside a `rand!()` macro, the actions inside the rand block are arranged so that a single parameter is chosen at random when the game is run. If there are multiple expansions inside the same `rand!()` block, then the same nth value is chosen for that random roll.

```mgs
script before {
	rand!(
		entity [Bob, Alice] on_tick = null_script;
		wait [10ms, 2000ms];
	)
}

// becomes

script after {
__TEMP_0 = RNG(0, =1);
	if (__TEMP_0 == 0) {
		entity Bob on_tick = null_script;
		wait 10ms;
	} else if (__TEMP_0 == 1) {
		entity Alice on_tick = null_script;
		wait 2000ms;
	}
}
```

## Expansion Rules

- All expansions within the same unit (a single action phrase, or a single `rand!()` block) must contain the same quantity of items.
- Expansion items need not be the same type.
	- E.g. `[var_name, flag_name] = [10, true];`
- The param "chunk" that is allowed to be expanded varies per phrase.
	- E.g. for `[camera, entity Bob position] = geometry stick;`, it is the "movable" in the LHS that can be expanded, not the entity name.

---

[[index|Quick Links]]
