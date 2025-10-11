# Macros

A higher-level MGS structure that expands into a larger, linear sequence. Overt macros tend to take Rust-like syntax (e.g. `rand!()`).

## Include

The Include macro will copy the whole (parsed) contents of the target file into place. Used at [[syntax_scopes#Syntax Contexts|root level of the file]].

**Syntax**: `include <file name: quoted string>;`

- The quoted string must end in `.mgs`, just as the file must end in `.mgs`.
- This is the only way to bring file-scoped definitions into a second file.
- Script definitions and other project-scoped structures will also be brought over, and these will count as duplicate definitions. Therefore, included files should only have MGS-only features, like dialog settings and fns.

## Rand

A means of quickly giving random parameters to [[scripts#Script Body Items|script body items]] using [[action_param_expansions|action param expansions]].

**Syntax**: `rand!( <script body items> )`

See [[action_param_expansions#Rand Macro|Action Param Expansions > Rand Macro]].

## RNG

This macro creates a random number. Can use it an [[expressions_and_operators#Int Operands|int operand]] in an [[expressions_and_operators#Int Expressions|int expression]] or in an [[actions#Assign Int Value|assignment statement]].

- **Syntax:**
	- `RNG!(<number>)`
	- `RNG!(<min>, <max>)`
- **Min**: `<number>`
	- If no `min` is given, RNG will roll between 0 and `max`.
- **Max**:
	- `=<number>`: inclusive
	- `<number>`: exclusive

```mgs
// example
script rng_exlusive_inclusive {
	up_to_four = RNG!(5);  // rolls between 0-4
	up_to_five = RNG!(=5); // rolls between 0-5
}
```

## Debug

This macro prints the given [[serial_dialogs|serial dialog]], but only if `debug_mode` is on.

- **Syntax:**
	- `debug!(<serial dialog identifier: bareword>)`
		- Because quoted strings count as dialog messages, this identifier must be a bareword.
	- `debug!(<serial dialog>)`
		- This may contain parameters and options (but must contain at least 1 message).
		- No need to put curly braces.
		- You cannot give this serial dialog a name.

## Copy Script

Copy script literally copies all items from the named [[scripts|script]] and pastes them into place.

**Syntax**: `<script name: string>()`

- Copying is done recursively. Infinite recursion is detected and aborted.

### Fn Call Vs Copy Script

- Fns are [[syntax_scopes#File Scope|file scope]], and scripts are [[syntax_scopes#Project Scope|project scope]].
- The copy script macro resembles a fn call in appearance only in order to resemble modern programming languages (because anything less was frustrating).
- Fn names and script names may collide because they have separate name spaces.
- Copy script and fn calls are both baked in place, but scripts still exist in the final game output. This means copied scripts can be triggered by players at arbitrary times, even if the script was never meant to run on its own.

---

[[index|Quick Links]]
