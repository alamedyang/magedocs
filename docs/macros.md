# Macros

A higher-level MGS structure that expands into a larger, linear sequence. Overt macros tend to take Rust-like syntax (e.g. `rand!()`).

## Include

The Include Macro will copy the whole (parsed) contents of the target file into place. Used at [root level of the file](syntax_scopes#syntax-contexts).

**Syntax**: `include <file name: quoted string>;`

- The quoted string must end in `.mgs`, just as the file must end in `.mgs`.
- This is the only way to bring [file-scoped](syntax_scopes#file-scope) definitions into a second file.
- Script definitions and other [project-scoped](syntax_scopes#project-scope) structures will also be brought over, and these will count as duplicate definitions. Therefore, included files should only have MGS-only features, like [dialog_and_serial_dialog_settings](dialog_and_serial_dialog_settings) and [fns](fns).

## Rand

A means of quickly giving random parameters to [script body items](scripts#script-body-items) using [action param expansions](action_param_expansions).

**Syntax**: `rand!( <script body items> ) <";"?>`

See [Action Param Expansions > Rand Macro](action_param_expansions#rand-macro).

## RNG

This macro creates a random number and put it into a temporary variable. Can use it as an [int operand](expressions_and_operators#int-operands) in an [int expression](expressions_and_operators#int-expressions). To store the random value longer term, use it in the RHS of an [assignment statement](actions#assign-int-value).

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

This macro prints the given [serial dialog](serial_dialogs), but only if `debug_mode` is on.

- **Syntax:**
	- `debug!(<serial dialog identifier: bareword>) <";"?>`
		- Because quoted strings count as dialog messages, this identifier must be a bareword.
	- `debug!(<serial dialog>) <";"?>`
		- This may contain parameters and options (but must contain at least 1 message).
		- No need to put curly braces.
		- You cannot give this serial dialog a name.

```mgs{3,4,5,9}
// example
script debug_long {
	if (debug_mode) {
		show serial_dialog { "This is a debug message." };
	}
	
	// The above is the same as:
	
	debug!("This is a debug message.")
}
```

## Copy Script

Copy Script copies all items from the named [script](scripts) and pastes them into place.

Copying is done recursively. Infinite recursion is detected and aborted.

**Syntax**: `<script name: string>() <";"?>`

The semicolon at the end can only be used in bare Copy Scripts, i.e. when it's used on its own as a single action item. When Copy Script is used as an [int operand](expressions_and_operators#int-operands) (as part of an [int expression](expressions_and_operators#int-expressions)), it must not have a semicolon, e.g. `var_name = tally() + 100;`

**Bytecode action**: `COPY_SCRIPT`

Copy Script was originally handled on the JSON encoder side. It's still possible to use `COPY_SCRIPT` as a bytecode action for legacy reasons, but it is entirely handled by the MGS side of things now.

### Fn Call Vs Copy Script

See: [Fns](fns#fns)

- Fns are [file scope](syntax_scopes#file-scope), and scripts are [project scope](syntax_scopes#project-scope).
- The Copy Script macro resembles a fn call in appearance only in order to resemble modern programming languages (because the alternative was frustrating).
- Fn names and script names may collide because they have separate name spaces.
- Copy Script and fn calls are both baked in place, but scripts still exist in the final game output. This means copied scripts can be [triggered by players at arbitrary times](hex_editor), even if the script was never meant to run on its own.
