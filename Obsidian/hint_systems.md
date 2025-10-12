# Hint Systems

Chapter 1 utilized a hints system. Whenever a player engaged with an [[entities|entity]] involving a quest, a hint value was [[state|set]] so the [[entities|entity]] designated to be the "hint man" could provide a hint for the player.

There were two methods we used to do this, and both are viable. Depending on how many hints (or similar behavior) you'll need to manage, you might use either method.

## Save Flag Hints

With this method, there is a separate [[state#Save Flag|save flag]] for each hint.

**Triggering a hint**: If the player talks to a quest entity and triggers "backstory" dialog or otherwise engages the entity in a way that indicates they are involved in a quest, set all other hint flags to `false` and set the hint flag for the quest line to `true`.

You should have a separate script for setting all hint flags in the game to `false`. Use [[macros#Copy Script|Copy Script]] to "invoke" that script right before setting the target hint to `true`.

**Clearing a hint**: Once the player has completed a quest line, set the hint flag for the quest line to `false`.

The advantage of this technique is that it's effortless to reset only the target hint. Say, for instance, that the current hint is the "goose" hint but the player triggered the completion of the Bender quest sort of by accident. Bender's wrapup script might set his own hint flag to `false`, but this doesn't interfere with the current hint flag (the goose hint) and so the hint for the goose quest remains `true`.

This technique will likely require maintaining a list of hint flags and being very careful about setting them, since it's possible to have multiple hint flags set to `true` at the same time. And if your "set all hint flags to false" script is incomplete, hints might be left on by accident.

For games with a large number of hints this method can be difficult to debug. Another disadvantage of this technique is its susceptibility to typos, as every hint flag is a string.

Chapter 1 we moved away from this technique because we were setting hint flags *a lot* — every time a hint flag was set, every other hint flag was *also* set. (The reset script set them all to `false`, even if they were already `false`.) We were going to log the save flags triggered by play testers to do story timing analytics, but found that hint flags overwhelmed everything.

## Integer Hints

With this method, there is a single [[state#Integer Variables|integer variable]] for all hints. Let's call this the "hinteger."

**Triggering a hint**: If the player talks to a quest entity and triggers "backstory" dialog or otherwise engages the entity in a way that indicates they are involved in a quest, set the hinteger to the value associated with that quest line.

**Clearing a hint**: Once the player has completed a quest line, set the hinteger to `0`.

Optionally, first check whether the hinteger is associated with the quest line being solved, and leave the hinteger alone if the current hinteger is for a different quest. (This makes hint deactivation much more complicated — a disadvantage of this technique.)

The biggest advantage is that only one hint can be set at a time. Typos are far less likely for ints than strings, too. It is, however, much harder to tell which hint is which from the value of the int alone (as opposed to strings, which can be much more self explanatory).

### Hint Variations

You might need multiple hints per quest line. We had several values per quest line depending on what triggered the hint: we used the ones digit to indicate the context of the trigger, and the tens (overflowing to the hundreds) digit to indicate which questline it was. For our game, `2-` meant baker, `-0` meant the hint was triggered by Bert, and `-1` meant the hint was triggered by the entity itself, etc.:

`20` = The player heard about the baker from Bert, which meant the hint man had to only describe where the baker was and something about what he wanted in general.

`21` = The player actually talked to the baker and heard his backstory in person (long form or short form), which meant the hint man had to give a hint about how to solve the problem the baker mentioned verbally.

If we continued with this pattern, we might have used `22` for if the player got partway through the quest and needed a hint about the second half, etc.

Incorporating hint variations will likely require more frequent hint logic checks. For instance, if the current hint is `21` (continuing from the above example) we wouldn't want speaking to Bert to set it to `20`, which is a more basic hint. To prevent this, we might check the relevant backstory flag or the current hinteger to decide whether to set it to `20`. This is fairly easy to do in the case of chapter 1 because the tens (and hundreds) digit determine the hint quest line, so we could divide the current hinteger by 10 to procedurally detect which quest line the hint was for.

### Hintiger Abstraction

Hintigers might count as [magic numbers](https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants), which are to be avoided when possible. Solutions include using [[constants|constants]] to define these values in one place or using [[macros#Copy Script|Copy Script]] (or [[fns|fns]]) to import actions to change a value rather than needing to know what the value should be changed to. (The [[macros#Include|Include Macro]] is required when using constants or fns in multiple files as they are [[syntax_scopes#File Scope|file scope]], but is not needed for scripts as they are [[syntax_scopes#Project Scope|project scope]].)
