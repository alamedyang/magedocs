# Constants

- Constants are compile-time constants (as opposed to runtime constants).
- Meant to prevent [magic numbers](https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants).
- [[syntax_scopes#File Scope|File scope]]. (Cannot be redefined or used before definition).
- Their values are swapped out automatically when encountered in an [[actions|action phrase]].
- [[fns#Fn Definition|Fn definition]] args also use constants for their registration / replacement behavior.

## Constant Definition

Define at [[syntax_scopes#Syntax Contexts|root level of file]].

```
<constant> = <value: any primitive>;
```

- **Value** must be a number, string, or boolean (see [[primitive_types|Primitive Types]]), and only a single token.

```mgs
// examples:
$trombones = 76;
$steamed_hams = "hamburgers";
$quick_debug = true;
```

## Use

Constants can replace [[jargon_and_syntax#Token|tokens]] (one token at a time) inside an [[actions|action phrase]] or [[expressions_and_operators|expression]].

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

Constants cannot replace keywords.

## Vs Integer Variable

- Constants are [[syntax_scopes#File Scope|file scope]], but [[state#Integer Variables|integer variables]] are [[syntax_scopes#Project Scope|project scope]].
- Constants are not meant to maintain their identity in the final game output.
	- If you find you want to reassign the value of a constant, then it should actually be part of MGE game logic. Make it a game variable instead.
