# Template Strings

Template strings are a means of generating dynamic strings at compile time. The value of a [constant](constants) or [fn arg](fns) may be inserted by wrapping its name in curly braces `{}` (including the initial `$`).

Unlike with [dialog and serial dialog message strings](dialog_and_serial_dialog_strings), the value of the constant is baked into the string at the moment of definition, because both template strings and constants are [file scope](syntax_scopes#file-scope) and do not exist in the final game state.

The string is wrapped with backticks: \`

```mgs
fn set_entity_name_mr ($e) {
	entity $e name = `Mr. {$e}`;
}
example {
	set_entity_name_mr(Bob);
}
// Is equivalent to
example {
	entity Bob name = "Mr. Bob";
}
```

::: warning Not the same as in JavaScript!
These strongly resemble template strings in JavaScript, except that the dollar sign goes inside the curly braces instead of outside. If you are getting unexpected behavior, check where the dollar sign is!
:::
