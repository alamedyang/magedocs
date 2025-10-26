# Macros

A higher-level MGS structure that expands into a larger, linear sequence. Overt macros tend to take Rust-like syntax (e.g. `rand!()`).

## Include

The Include Macro will copy the whole (parsed) contents of the target file into place. Used at [[syntax_scopes#Syntax Contexts|root level of the file]].

- The quoted string must end in `.mgs`, just as the file must end in `.mgs`.
- This is the only way to bring [[syntax_scopes#File Scope|file-scoped]] definitions into a second file.
- Script definitions and other [[syntax_scopes#Project Scope|project-scoped]] structures will also be brought over, and these will count as duplicate definitions. Therefore, included files should only have MGS-only features, like [[dialog_and_serial_dialog_settings]] and [[fns|fns]].

```
include <file name: quoted string>;
```

## Rand

A means of quickly giving random parameters to [[scripts#Script Body Items|script body items]] using [[action_param_expansions|action param expansions]].

See [[action_param_expansions#Rand Macro|Action Param Expansions > Rand Macro]].

```
rand!( <script body items> ) <";"?>
```

## RNG

This macro creates a random number and put it into a temporary variable. Can use it as an [[expressions_and_operators#Int Operands|int operand]] in an [[expressions_and_operators#Int Expressions|int expression]]. To store the random value longer term, use it in the RHS of an [[actions#Assign Int Value|assignment statement]].

```
RNG!(<max>)
// OR
RNG!(<min>, <max>)
```

- **Min**:
	- If no `min` is given, RNG will roll between 0 and `max`.
- **Max**:
	- `=<number>`: inclusive
	- `<number>`: exclusive

```mgs
// example
_ {
	up_to_four = RNG!(5);  // rolls between 0-4
	up_to_five = RNG!(=5); // rolls between 0-5
}
```

## Debug

This macro prints the given [[serial_dialogs|serial dialog]], but only if `debug_mode` is on.

```
debug!(<bareword>) <";"?>
// OR
debug!(serial_dialog <string>) <";"?>
// OR
debug!(<serial dialog>) <";"?>
```

- The first pattern contains a single bareword. This will be the name of the serial dialog.
- The second pattern is for serial dialog names with special characters, i.e. names that must be "escaped" with quotes. The [[identifiers#Sigils|sigil]] `serial_dialog` allows this usage.
- The third pattern contains an actual serial dialog.
	- This may contain parameters and options (but must contain at least 1 message).
	- No need to put curly braces.
	- You cannot give this serial dialog a name.

```mgs{3,4,5,9}
// example
_ {
	if (debug_mode) {
		show serial_dialog { "This is a debug message." };
	}
	
	// The above is the same as:
	
	debug!("This is a debug message.")
}
```

## Copy Script

Copy Script copies all items from the named [[scripts|script]] and pastes them into place.

Copying is done recursively. Infinite recursion is detected and aborted.

The semicolon at the end can only be used in bare Copy Scripts, i.e. when it's used on its own as a single action item. When Copy Script is used as an [[expressions_and_operators#Int Operands|int operand]] (as part of an [[expressions_and_operators#Int Expressions|int expression]]), it must not have a semicolon, e.g. `var_name = tally() + 100;`

```
<script name: string>() <";"?>
```

Bytecode action:

- Formerly `COPY_SCRIPT`
- No longer uses a bytecode action; now these are baked before the JSON step.
- It's still possible to use `COPY_SCRIPT` as a bytecode action inside a [[json_literals|JSON literal]] for legacy reasons, but it is entirely handled by the MGS side of things now.

### Fn Call Vs Copy Script

See: [[fns#Fns|Fns]]

- Fns are [[syntax_scopes#File Scope|file scope]], and scripts are [[syntax_scopes#Project Scope|project scope]].
- The Copy Script macro resembles a fn call in appearance only in order to resemble modern programming languages (because the alternative was frustrating).
- Fn names and script names may collide because they have separate name spaces.
- Copy Script and fn calls are both baked in place, but scripts still exist in the final game output. This means copied scripts can be [[hex_editor|triggered by players at arbitrary times]], even if the script was never meant to run on its own.
