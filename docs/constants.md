# Constants

## Constant Definition

**Syntax**: `<constant> = <value: any primitive>;`

- Constants are compile-time constants (as opposed to runtime constants).
- [File scope](syntax_scopes#file-scope). (Cannot be redefined or used before definition).
- Define at [root level of file](syntax_scopes#syntax-contexts), use anywhere.
- **Value** must be a number, string, or boolean (see [primitive_types](primitive_types)), and only a single token.

```mgs
$trombones = 76;
$steamed_hams = "hamburgers";
$quick_debug = true;
```

## Use

```mgs
//example

$total_rounds = 7;

play_game {
	do_turn()
	round_count += 1;
	if (round_count >= $total_rounds) {
		win_cutscene()
	}
}
```

In the example above, `$total_rounds` has been extracted to a constant so that the "magic number" 7 isn't buried deep in game logic, and can be adjusted easily. This is especially important if multiple pieces of logic need to consult the same value.

## Vs Integer Variable

- Constants are [File scope](syntax_scopes#file-scope), and [integer variables](state#integer-variables) are [Project scope](syntax_scopes#project-scope).
- Constants are meant to prevent magic numbers, and not meant to maintain their identity in the final game output.
