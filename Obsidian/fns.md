# Fns

[[syntax_scopes#File Scope|File scope]].

Fn calls copy all items from the fn definition, swapping out values from the args in the definition with the args in the fn call, and pastes them into place.

This makes them similar to [[macros#Copy Script|Copy Script]], except that Copy Script cannot do any token replacement. For this reason, fns must have at least 1 arg.

Fns can [[script_control_flow#Return|return]] a value, change the value of global variables, or both.

Fns are not functions as there is no call stack. (They are inline functions, if anything.) Still, they are called fns because the word "[[macros|macro]]" is already used for other MGS concepts, and though they feel like functions when you use them they are not *real* functions.

In a fn body, constants are first checked against the args registered between the definition and the call. If not found, they are checked against the file's [[constants|constant]] registry.

You may use fn args inside a deeper fn call, however the parent fn args are not available to the child call unless handed down again via args.

## Fn Definition

Defined at [[syntax_scopes#Syntax Contexts|root level of the file]].

```
fn <fn name: string> ( <fn args> ) { <script body items> }
```

- **Fn args**: comma-separated [[primitive_types#Constant|constants]].
- **Script body items**: see [[scripts#Script Body Items|Script Body Items]].

```mgs
// example
fn add_two ($n) { return $n + 2; }
```

## Fn Literal

Fns can be defined in place (anonymously) using this syntax inside the [[arrays#Array Methods|array methods]] `.map()` and `.for_each()`.

```
( <fn args> ) { <script body items> }
```

- **Fn args**: comma-separated [[primitive_types#Constant|constants]].
- **Script body items**: see [[scripts#Script Body Items|Script Body Items]].

```mgs
// example as a lambda in an array expression
_ {
	array tens = ones.map(($n) { return $n * 10; });
}
```

## Fn Call

Used inside a [[scripts#Script Body Items|script body]].

```
<fn name: string>(<passed args>) <";"?>
```

- **Passed args**: One or more comma-separated int expressions.
	- **Int expression**: see [[expressions_and_operators#Expressions|Int Expression]]

The semicolon at the end can only be used in bare fn calls, i.e. when it's used on its own as a single action item. When a fn call is used as an [[expressions_and_operators#Int Operands|int operand]] (as part of an [[expressions_and_operators#Int Expressions|int expression]]), it must not have a semicolon, e.g. `var_name = fn(40) + 80;`

Bare fn calls only have utility if the fn performs work; the return value of bare fns is discarded in these cases.

```mgs
// example
_ {
	pause_entity_walk("Bob")
}
```

Fn calls can be used as an [[expressions_and_operators#Int Operands|int operand]] in [[expressions_and_operators#Expressions|expressions]]. This only has utility if the fn returns a value.

```mgs
// example
_ {
	player x = sanitize_x(player x);
	player y = sanitize_y(player y + 10) * 2;
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
