# Template Strings

Template strings are a means of generating dynamic strings at compile time. The value of a [constant](constants) or [fn arg](fns) may be inserted by wrapping its name in curly braces `{}` (including the initial `$`).

Unlike with [dialog and serial dialog message strings](dialog_and_serial_dialog_strings), the value of the constant is baked into the string at the moment of definition, because both template strings and constants are [file scoped](syntax_scopes#file-scope) and do not exist in the final game state.

The string is wrapped with backticks: \`

```mgs
fn store_entity_position ($e, $label) {
	`{$label}_x` = entity $e x;
	`{$label}_y` = entity $e y;
}
example {
	store_entity_position(Bob, bob_pos);
}
// Is equivalent to
example {
	"bob_pos_x" = entity Bob x;
	"bob_pos_y" = entity Bob y;
}
```

::: warning Not the same as in JavaScript!
These strongly resemble template strings in JavaScript, except that the dollar sign goes inside the curly braces instead of outside.
:::

The primary purpose of template strings is to limit the number of unique variable and flag names that must be created in advance and passed into a [fn](fns) when creating large quantities of unique state with that fn. This is because every variable is [always global and always exists](syntax_scopes#project-scope), so different instances of a fn call cannot keep their own locally-scoped variables to themselves.

Template strings cannot be stored into a variable and referenced later, except as a [compile-time constant](constants) value; inside a fn body, they must be fresh template strings every time, because consts can only be defined at the root of the file. (If this proves annoying enough we might change it… #todo)

## Example

A proof of concept for ch3 was having an arbitrary [entity](entities) follow an arbitrary second entity, as in a JRPG where party members follow the player character on the overworld. With a single [fn](fns), an entity's [`on_tick`](scripts#on_tick) could perform all the [state](state) management required to do this.

However….

### Without Template Strings

Every [variable](state#integer-variables), [flag](state#save-flags) and [array name](arrays) required for this behavior had to be passed into the [fn](fns) explicitly, because the fn could not create fresh, locally-scoped [variables](state) for its own private use. That meant every time this fn was "called," you had to pass nine arguments!

```mgs
fn follow_entity (
  $fwer, // follower entity name
  $fwee, // entity being followed ("followee")
  $delay, // delay before follower starts/stops
  $distance, // distance follower keeps from followee
  $should_follow, // whether the follower should follow
  $is_following, // whether the follower *is* following
  $countdown, // variable for managing the delay tick
  $qx, // array queue name for followee X position
  $qy, // array queue name for followee Y position
) {
  // ...
  if (!$should_follow) {
    $should_follow = true;
    init_double_queue($qx, $qy, $fwer, $fwee, $distance);
    $countdown = $delay;
  } else if ($countdown != 0) {
    $countdown = $countdown - 1;
  } else if (!$is_following) {
    $is_following = true;
    entity $fwer current_animation = 1;
  }
  save_entity_pos($qx, $qy, $fwee);
  // ...
}
```

### With Template Strings

In this version, only five arguments are required, as a single `$label` string can be used to generate consistent, unique variable, flag, and array names using template strings. The `$fwer` (follower) name might be used to make these unique strings instead, but keeping it to a separate `$label` variable means less total unique (global, finite) variables are required, as several entities can share the same state if they do not follow at the same time as each other.

The `$label` can be passed inside other, similar init fns so they require fewer args, as well. 

```mgs
fn follow_entity ($fwer, $fwee, $delay, $distance, $label) {
  // ...
  if (!`{$label}_should_follow`) {
    `{$label}_should_follow` = true;
    init_double_queue($fwer, $fwee, $distance, $label);
    `{$label}_countdown` = $delay;
  } else if (`{$label}_countdown` != 0) {
    `{$label}_countdown` = `{$label}_countdown` - 1;
  } else if (!`{$label}_is_following`) {
    `{$label}_is_following` = true;
    entity $fwer current_animation = 1;
  }
  save_entity_pos($fwee, $label);
  // ...
}
```