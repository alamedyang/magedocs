# Fns

[File scope](syntax_scopes#file-scope).

Fn calls copy all items from the fn definition, swapping out values from the args in the definition with the args in the fn call, and pastes them into place.

This makes them similar to [Copy Script](macros#copy-script), except that Copy Script cannot do any token replacement. For this reason, fns must have at least 1 arg.

Fns can [return](script_control_flow#return) a value, change the value of global variables, or both.

Fns are not functions as there is no call stack. (They are inline functions, if anything.) Still, they are called fns because the word "[macro](macros)" is already used for other MGS concepts, and though they feel like functions when you use them they are not *real* functions.

In a fn body, constants are first checked against the args registered between the definition and the call. If not found, they are checked against the file's [constant](constants) registry.

You may use fn args inside a deeper fn call, however, the parent fn args are not available to the child call unless handed down again via args.

## Fn Definition

Defined at [root level of the file](syntax_scopes#syntax-contexts).

**Syntax**: `fn <fn name: string> ( <fn args> ) { <script body items> }`

- **Fn args**: comma-separated [constants](primitive_types#constant).
- **Script body items**: see [Script Body Items](scripts#script-body-items).

```mgs
// example
fn add_two ($n) { return $n + 2; }
```

## Fn Literal

Fns can be defined in place (anonymously) using this syntax inside the [array methods](arrays#array-methods) `.map()` and `.for_each()`.

**Syntax**: `( <fn args> ) { <script body items> }`

- **Fn args**: comma-separated [constants](primitive_types#constant).
- **Script body items**: see [Script Body Items](scripts#script-body-items).

```mgs
// example in an array expression
_ {
	array tens = ones.map(($n) { return $n * 10; });
}
```

## Fn Call

Used inside a [script body](scripts#script-body-items).

**Syntax**: `<fn name: string>(<passed args>)`

- **Passed args**: One or more of the following, comma-separated:
	- [Int expressions](expressions_and_operators#expressions)
	- [Booleans](primitive_types#boolean)
	- [Strings](primitive_types#string)
	- [Constants](primitive_types#constant)

Bare fn calls only have utility if the fn performs work; the return value of bare fns is discarded.

```mgs
// example
_ {
	pause_entity_walk("Bob")
}
```

Fn calls can be used as an [int operand](expressions_and_operators#int-operands) in [expressions](expressions_and_operators#expressions). This only has utility if the fn returns a value.

```mgs
// example
_ {
	player x = sanitize_x(player x);
	player y = sanitize_y(player y) + 10;
}
```

## Example

```mgs
fn diff ($a, $b) {
	if ($a > $b) { return $a - $b; }
	if ($a < $b) { return $b - $a; }
	return 0;
}

fn get_manhattan_distance ($e1, $e2) {
	x_diff = diff(entity $e1 x, entity $e2 x);
	y_diff = diff(entity $e1 y, entity $e2 y);
	return x_diff + y_diff;
}

// Teleports an entity to the player if the player gets too far away.
script on_tick_yank {
	manhattan = get_manhattan_distance("%PLAYER%", "%SELF%");
	if (manhattan > 80) {
		self position = player position;
	}
	self direction = player;
}
```
