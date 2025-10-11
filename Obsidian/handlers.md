# Handlers

A **handler** is an [[entities|entity]] that manages behaviors unrelated to itself. It doesn't matter who or what the handler is, as long as their `on_tick` slot is free to watch for the necessary triggers (or to be triggered by something else), but if you change who is acting as handler be sure to change all references to them or you'll end up with multiple handlers working against each other.

Handlers are necessary because [[scripts|scripts]] [[scripts#One Slot, One Thread|cannot spawn additional threads]] for simultaneous execution of actions, and must leverage existing [[scripts#Script Slots|script slots]].

### Example: Timid Goats

This is a classic example of a handler listening on behalf of and acting upon other entities.

In chapter 1 of the game, there are a pair of baby goats cavorting in the grass. If the player approaches them, they will run to a secondary spot to cavort instead. Each goat has an `on_tick` script that moves it around in a [[vector_objects|small circle]], and as that [[actions#Position Over Time|loop over path forever]] action will play back [[actions#Forever|forever]], they can perform no other logic (such as watching for where the player is).

(While we might use a [[actions#Position Over Time|Position Over Time]] action as the sole action in an `on_tick` script to perform this same looping walk, the only time we'd be able to intercept their pathing logic is at the beginning or end of that loop. The walk itself takes long enough that they will not appear to be reacting to the player if they only fled during that small window. Plus it would be apparent that they were always fleeing from the same spot. And since the goat's loops took a different amount of time, the goats would only very rarely react simultaneously.)

The handler's `on_tick` starts as `check_if_player_is_goat_high`.

```mgs
check_if_player_is_goat_high {
  if (player intersects geometry high) {
    entity Billy on_tick = {
      entity Billy position -> geometry low1 origin over 900ms;
      entity Billy position -> geometry low1 length over 3000ms forever;
    };
    entity Kid on_tick = {
      entity Kid position -> geometry low2 origin over 1100ms;
      entity Kid position -> geometry low2 length over 3400ms forever;
    };
    self on_tick = check_if_player_is_goat_low;
  }
}
check_if_player_is_goat_low {
  if (player intersects geometry low) {
    entity Billy on_tick = {
      entity Billy position -> geometry high1 origin over 700ms;
      entity Billy position -> geometry high1 length over 3000ms forever;
    };
    entity Kid on_tick = {
      entity Kid position -> geometry high2 origin over 800ms;
      entity Kid position -> geometry high2 length over 3400ms forever;
    };
    self on_tick = check_if_player_is_goat_high;
  }
```

These scripts are engineered so that the identity of the handler is not important. In the real game, the handler is Verthandi, but all we'd need to do to change that is to set Verthandi's `on_tick` script to something else and set a different entity's `on_tick` to `check_if_player_is_goat_high`.

## Example: Bender

Here, a handler is used not to control multiple entities, but to overlap secondary behavior onto an entity with existing behaviors. This time the handler does not control the logic of this complex behavior (Bender does this himself with his `on_interact` script, choosing which of three idle behaviors to perform), but the handler's `on_tick` script is still being leveraged for this.

The handler in this case is the entity "Bob Austin." Because the handler is not controlling his own logic, he must be referenced by name externally. This means swapping him for a different handler would be a little involved.

### Bender Watches You

Bender's default idle behavior involves two threads of logic: one to [[actions#Assign Direction Value|turn him toward the player]] at all times, and the other to [[actions#Play Entity Animation|play back]] the "I've got my eye on you" [[animations|animation]] [[actions#Non-Blocking Delay|after a certain length of time]]. These two behaviors can happen simultaneously (as he can turn toward the player while performing that animation) and so must be done with two [[scripts#Script Slots|script slots]].

In the Tiled [[maps|map]], Bender and his handler have these scripts set to their `on_tick` slots, so this is their default behavior.

```mgs
set_bender_idle_glare_at_you {
  entity "Bob Austin" on_tick = handler_bender_timer;
  entity Bender on_tick = face_player;
}
face_player {
  self direction = player;
}
handler_bender_timer {
  wait 2800ms;
  entity Bender animation -> 2 once;
  wait 3900ms;
  entity Bender animation -> 2 once;
}
```

### Bender Stops

The handler no longer makes Bender play the "I've got my eye on you" animation. This change in behavior required so that Bender's "bite my shiny metal ass" animation can play during his dialog tree without interference.

```mgs
set_bender_idle_stop {
  entity "Bob Austin" on_tick = {};
  entity Bender on_tick = {};
}
```

### Bender Loiters

Bender is no longer interested in the player, so looks around at his own pace. Because this behavior isn't complex, it only requires Bender's own `on_tick`. The handler is no longer used.

```mgs
set_bender_idle_look_around_randomly {
  entity "Bob Austin" on_tick = {};
  entity Bender on_tick = on_tick_bender_loiter;
}
on_tick_bender_loiter {
  self direction = south;
  wait 1200ms;
  self direction = east;
  wait 1400ms;
  self direction = north;
  wait 2000ms;
}
```

---

[[index|Quick Links]]
