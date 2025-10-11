# Constants

## Constant Definition

**Syntax**: `<constant> = <value: any primitive>;`

- Constants are compile-time constants (as opposed to runtime constants).
- [[syntax_scopes#File Scope|File scope]]. (Cannot be redefined or used before definition).
- Define at [[syntax_scopes#Syntax Contexts|root level of file]], use anywhere.
- **Value** must be a number, string, or boolean (see [[primitive_types]]), and only a single token.

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

- Constants are [[syntax_scopes#File Scope|File scope]], and [[state#Integer Variables|integer variables]] are [[syntax_scopes#Project Scope|Project scope]].
- Constants are meant to prevent magic numbers, and not meant to maintain their identity in the final game output.

---

[[index|Quick Links]]
