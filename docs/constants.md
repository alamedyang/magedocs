# Constants

- Constants are compile-time constants (as opposed to runtime constants).
- Meant to prevent [magic numbers](https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants).
- [File scope](syntax_scopes#file-scope). (Cannot be redefined or used before definition).
- Their values are swapped out automatically when encountered in an [action phrase](actions).
- [Fn definition](fns#fn-definition) args also use constants for their registration / replacement behavior.

## Constant Definition

Define at [root level of file](syntax_scopes#syntax-contexts).

- **Syntax**: `<constant> = <value: any primitive>;`
	- **Value** must be a number, string, or boolean (see [Primitive Types](primitive_types)), and only a single token.

```mgs
$trombones = 76;
$steamed_hams = "hamburgers";
$quick_debug = true;
```

## Use

You may use a constant in any (or almost any) [action phrase](actions) that expects a single [token](jargon_and_syntax#token).

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

In the example above, `$total_rounds` has been extracted to a constant so that the "magic number" 7 isn't buried deep in game logic and can be adjusted easily. This is especially important if multiple pieces of logic need to consult the same value.

## Vs Integer Variable

- Constants are [File scope](syntax_scopes#file-scope), but [Integer variables](state#integer-variables) are [project scope](syntax_scopes#project-scope).
- Constants are not meant to maintain their identity in the final game output.
	- If you find you want to reassign the value of a constant, then it should actually be part of MGE game logic. Make it a game variable instead.
