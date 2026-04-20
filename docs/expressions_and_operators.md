# Expressions and Operators

Expressions are built up from operands, operators, and parenthetical groupings in the manner commonly done in modern languages.

## Expressions

Expressions can stand in for a [value of the same type](primitive_types) in almost all places.

```mgs
_ {
	entity Bob x = (5 + variable_name) * player x;

	// Without expressions, fwiw:
	TEMP1 = 5;
	TEMP1 += variable_name;
	TEMP2 = player x;
	TEMP1 *= TEMP2;
	entity Bob x = TEMP1;
}
```

### Mixing Types

Int and bool expressions/operands cannot be combined. Examples:

```mgs
_ {
	hex_control = !(player x - 10);
	// Syntax error

	new_var = var_name + false;
	// Not invalid, but not what you wanted
}
```

In the second example above, the string "false" is interpreted as an int variable identifier and not a [boolean](primitive_types#boolean), because booleans are not allowed in int expressions.

Operands and operators themselves cannot be expanded in [action param expansions](action_param_expansions), but the expression as a whole often can, depending on the [action phrase](actions).

```mgs
_ {
	entity Bob x = [0, var_name + 10];
	// OK

	entity Bob x = 10 [-, +] 8;
	// Syntax error

	entity Bob x = [10, 40] - var_name;
	// Syntax error
}
```

## Operands

Operands are what operators act upon. (In `2 + varName`, the operands are `2` and `varName` and the operator is `+`.)

### Types

Because expressions are an artificial abstraction, not every unit of data can be used in every part of an expression, including assignment operations. (This presents challenges when it comes to documentation!)

To explain why some operands can be used some places and not others, it is useful to understand the three main categories of data involved:

#### Getable

**Getable operands** can copied into another value, which makes it easier to use them in more abstract ways. Most numerical entity properties can be moved into [integer variables](state#integer-variables).

All [engine flags](state#engine-flags) ([bools](primitive_types#boolean)) are getable whenever they are checkable, as temporary bool values can be set based on whether the value check passed or not — trivial when there are only two possible states.

#### Checkable

**Checkable operands** are values that can be compared to something else and used for [logic control flow](script_control_flow), i.e. a branch. Each type of check is its own [bytecode instruction](actions).

Some checkables can only be compared with [literal values](primitive_types) and cannot be compared to [boolean variables](state#save-flags) and [integer variables](state#integer-variables). These are usually the operands that are not **getable** (able to be moved and stored into a new place), like strings.

Checkables by their nature are used solely for boolean expressions, which means they can be daisy-chained into larger boolean expressions.

#### Setable

The value of **setable operands** can be changed. Sometimes they can only be set to literal values and not referenced values, which means complex expressions cannot be used as the value being set.

If an operand is setable but not checkable or getable, then it can only appear on the left hand side of an assignment operation: `<LHS> = <RHS>;`

#### Example: `debug_mode`

`debug_mode` is an engine flag determining whether debug entities are loaded into the map, among other things. It is **not setable**, meaning you cannot set it using an assignment operation. (It's triggered using the buttons on the badge.)

```mgs
_ {
	debug_mode = true;
	// Syntax error
}
```

It is, however, **checkable**, meaning there is a [bytecode instruction](actions) for checking the state of `debug_mode` and branching accordingly.

```mgs
_ {
	if (debug_mode) {}
}
```

It is also **getable**, because setting a value based on a boolean checkable is straightforward, as there are only two possible states.

```mgs
_ {
	hex_control = debug_mode;

	// effectively does this
	if (debug_mode) {
		hex_control = true;
	} else {
		hex_control = false;
	}
}
```

### Int Operands

#### Int Getables

- [Number literals](state#integer-variables)
- [Variable identifiers](identifiers) ([integers](state#integer-variables))
- [Copy Script](macros#copy-script) (return value)
- [Fn Call](fns#fn-call) (return value)
- [Array method chain that returns a value](arrays#returns-a-value-int)
- [The RNG Macro](macros#rng)
- [Entity int properties](entities#entity-properties):
    - `<entity identifier> x`
    - `<entity identifier> y`
    - `<entity identifier> primary_id`
    - `<entity identifier> secondary_id`
    - `<entity identifier> primary_id_type`
    - `<entity identifier> current_animation`
    - `<entity identifier> animation_frame`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)

#### Int Checkables

Any [int getable](#int-getables) is also checkable.

#### Int Setables

- [Variable identifiers](identifiers) ([integers](state#integer-variables))
- [Array value at index](arrays#assign-array-value-at-index) (e.g. `array[i]`)
- [Entity int properties](entities#entity-properties):
	- `<entity identifier> x`
	- `<entity identifier> y`
    - `<entity identifier> primary_id_type` (u8)
    - `<entity identifier> primary_id`
    - `<entity identifier> secondary_id`
    - `<entity identifier> current_animation`(u8)
    - `<entity identifier> animation_frame`(u8)
    - `<entity identifier> strafe`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)

### Bool Operands

#### Bool Getables

- [Bool literals](primitive_types#boolean) (`true`, `false` etc.)
- [Variable identifiers](identifiers) ([flags](state#save-flags))
- [Checkable engine flags](state#engine-flags) e.g. `debug_mode`
- [Entity bool properties](entities#entity-properties) / status:
    - `<entity identifier> glitched`
    - `<entity identifier> intersects <geometry identifier>`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- Button status:
    - `button <button name> down` or `up` (the button's current state)
    - `button <button name> pressed` (whether the button recently changed from up to down)

::: warning NOTE
The button states are reset when a new map is loaded. If listening for a button press in the new map, this action may very will trigger immediately, even if the button was held down through the map load.
:::

##### Button Names

- `MEM0`
- `MEM1`
- `MEM2`
- `MEM3`
- `BIT128`
- `BIT64`
- `BIT32`
- `BIT16`
- `BIT8`
- `BIT4`
- `BIT2`
- `BIT1`
- `XOR`
- `ADD`
- `SUB`
- `PAGE`
- `LJOY_CENTER`
- `LJOY_UP`
- `LJOY_DOWN`
- `LJOY_LEFT`
- `LJOY_RIGHT`
- `RJOY_CENTER`
- `RJOY_UP`
- `RJOY_DOWN`
- `RJOY_LEFT`
- `RJOY_RIGHT`
- `TRIANGLE`
- `X` or `CROSS`
- `O` or `CIRCLE`
- `SQUARE`
- `HAX` (capacitive touch button on the PCB)
- `ANY`

::: warning INFO
We found that the joystick clicks were aggressive on the hardware, and would trigger at what felt like arbitrary times. While the engine is capable of detecting these clicks, we recommend not using them.
:::

#### Bool Checkables

Any [bool getable](#bool-getables) is also checkable.`

#### Bool Setables

- [Boolean literals](primitive_types#boolean) e.g. `true`, `false`
- [Variable identifiers](identifiers) ([flags](state#save-flags))
- [Setable engine flags](state#setable-engine-flags):
	- `player_control`
	- `lights_control`
	- `hex_editor`
	- `hex_dialog_mode`
	- `hex_control`
	- `hex_clipboard`
	- `serial_control`
- [Entity bool properties](entities#entity-properties):
    - `<entity identifier> glitched`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- Light states
	- `light <light name[]>`
	- For **light name**, see below:

##### Lights

This includes all 8 bit lights underneath the screen and the 4 lights on either side of the screen. Gaining control of the lights does not clear the light state; you will need to turn all the lights off yourself.

- `LED_XOR`
- `LED_ADD`
- `LED_SUB`
- `LED_PAGE`
- `LED_BIT128`
- `LED_BIT64`
- `LED_BIT32`
- `LED_BIT16`
- `LED_BIT8`
- `LED_BIT4`
- `LED_BIT2`
- `LED_BIT1`
- `LED_MEM0`
- `LED_MEM1`
- `LED_MEM2`
- `LED_MEM3`
- `LED_HAX` (capacitive touch button on the PCB)
- `LED_USB`
- `LED_SD`
- `LED_ALL` (will turn on/off all the lights)

::: warning
If you turn a light off and on again on the same game tick, the light will appear to flicker.
:::

### String Operands

Strings can only be used in bool expressions as part of [equality checks](#string-equality-check).

```mgs
_ {
	hex_control = (player name == "Bob");
	if (player name != "Bob") {}
}
```

Strings can only be used in [string assignment operations](#assign-string-value) by literal value.

```mgs
_ {
	player name = "Bob";
}
```

Strings cannot be assigned or compared by reference. The first example below sets the player's name to the string "warp_state." It does not copy the value stored in the [warp state string](state#warp-state-string) into the player's name, like it implies.

```mgs
_ {
	player name = warp_state;
	// Not invalid, but not what you wanted

	player name = entity Bob name;
	// Syntax error
}
```

There is no string concatenation or slicing, as strings cannot be manipulated in the MGE itself.

```mgs
_ {
	if (player name == "Bob") {}
	if (entity Bob direction != north) {}
	if (entity Alice path == geometry "the stick") {}
	if (
		entity Delmar type == sheep
		|| entity Delmar type == helga
	) {}
}
```

#### String Checkables

- The [Warp State String](state#warp-state-string) (`warp_state`)
- Entity string properties:
    - `<entity identifier> name`
    - `<entity identifier> type`
    - `<entity identifier> path`
    - `<entity identifier> on_interact`
    - `<entity identifier> on_tick`
    - `<entity identifier> on_look`
    - `<entity identifier> direction`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)

#### String Setables

- `warp_state` (the [Warp State String](state#warp-state-string))
- `serial_connect`: the default serial message printed upon game launch (string value must correspond to a [serial dialog](serial_dialogs) name)
- [Entity string properties](entities#entity-properties):
	- `<entity identifier[]> name`
	- `<entity identifier[]> type`
	- `<entity identifier[]> path`
	- **Entity identifier**: See [entity identifier](identifiers#entity-identifier)

#### String Setables (Script Values)

These are a subset of string setables, where the string value being assigned must correspond to a script name. (The script may be [defined in place](scripts#script-literal) instead.)

- The keyword `map`
- An [entity identifier](identifiers#entity-identifier)

They are used with the name of a script slot. See [Scripts > Script Slots](scripts#script-slots) and [Assign Script Value](#assign-script-value)

## Assignment Operation

Sets the value of the LHS to the value of the RHS, which may be an expression or a literal value.

```
<LHS> = <RHS>;
```

::: warning Ambiguity Warning
If the RHS and the LHS of any evaluated expansion are both [bare](primitive_types#bareword) [identifiers](identifiers), it will be handled as an [integer assignment](#assign-int-value) expression. To silence the ambiguity warning, use an "invisible operation" (e.g. `*1` or `+0`) to coerce the RHS to an int expression.

If you want to coerce the ambiguous expression to a boolean expression instead, either use the [sigil](identifiers#sigils) `flag` with the identifier on either side, or use a double unary operator (`!!`) with the RHS.
:::

### Assign Int Value

```
<int setable[]> = <int expression[]>;
```

- **Int setable**: See [Int Setables](#int-setables)
- **Int expression**: See [Int Expressions](#int-expressions)

### Assign Bool Value

```
<bool setable[]> = <bool expression[]>;
```

- **Bool setable**: See [Bool Setables](#bool-setables)
- **Bool expression**: See [Bool Expressions](#bool-expressions)

### Assign String Value

```
<string setable[]> = <string[]>;
```

- **String setable**: See [String Setables](#string-setables)

### Assign Script Value

Similar to string assignment above, except the script can alternatively be [defined in place](scripts#script-literal).

```
<script setable[]> <script slot> = <string[]>;
<script setable[]> <script slot> = <script literal>;
```

- **Script setable**: See [String Setables (Script Values)](#string-setables-script-values)
- **Script literal**: See [Script Literal](scripts#script-literal)
- **Script slot**: See [Script Slots](scripts#script-slots)
	- For maps:
		- `on_tick`
		- `on_look`
	- For entities:
		- `on_interact`
		- `on_tick`
		- `on_look

### Assign Direction

Makes an [entity](entities) face the target. (Also see [Relative Turns](#relative-turns))

```
<entity identifier> direction = <direction target>;
```

- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- **Direction target**:
	- `<geometry identifier>` (See [Geometry Identifier](identifiers#geometry-identifier))
	- `<entity identifier>` (See [Entity Identifier](identifiers#entity-identifier))
	- `north`, `south`, `east`, or `west`

### Other Assignment Actions

- [Actions > Position Assignment](actions#position-assignment)

## Change By Value Operation

Similar to the [Assignment Operation](#assignment-operation). This operation assigns a value to an [int setable](#int-setable) not by overwriting it but modifying it in place.

### Change Int Value

```
<int setable[]> <op equals> <int expression[]>;
```

- **Int setable**: see [Int Setables](#int-setables)
- **Op equals**:
	- `+=`: add
	- `-=`: subtract
	- `*=`: multiply
	- `/=`: divide
	- `%=`: modulo
	- `?=`: RNG roll, exclusive (see [RNG Macro](macros#rng))
- **Int expression**: see [Expressions](expressions_and_operators#expressions)

### Relative Turns

Relative entity turns (e.g. turn 90º CCW) are instead made with the `+=` or `-=` operators alone. Note that these must use number literals on the RHS and cannot be set with int expressions like other [op-equals](expressions_and_operators#change-by-value-operation) expressions.

These relative turns (+1, -1) correspond to a 90º rotation. The value is modulo 4, so +1 is the same as +5.

```
<entity identifier[]> direction += <number[]>;
<entity identifier[]> direction -= <number[]>;
```

- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)

```mgs
_ {
	// examples
	var_name += 5;
	// is the same as
	var_name = var_name + 5;
}
```

## Int Expressions

```
<int operand>
// OR
<int binary expression>
```

- **Int operand**:
	- a single [number literal](primitive_types#number)
	- a [string](primitive_types#string) [identifier](identifiers) ([integer variable](state#integer-variables))
	- a [constant](constants) with a number or string value
	- a grouping: an int expression enclosed by matching parentheses
	- any [int getable](#int-getables)

### Int Binary Expression

These behave in the standard manner.

```
<int operand> <int binary operator> <int operand>
```

- **Int binary operators**:
	- Add: `+`
	- Subtract: `-`
	- Multiply: `*`
	- Divide: `/`
	- Modulo: `%`

```mgs
// example
_ {
	target_int = player x + 30;
}
```

Standard operator precedence (order of operations) is used in the case of chains:

```
1 + 2 * 3 - 4
automatically becomes
(1 + (2 * 3)) - 4
```

## Bool Expressions

```
<bool operand>
// OR
<bool binary expression>
```

- **Bool operand**:
	- a single [bool literal](primitive_types#boolean)
	- a [string](primitive_types#string) [identifier](identifiers) ([boolean variable / save flag](state#save-flags))
	- a [constant](constants) with a bool or string value
	- a grouping: a bool expression enclosed by matching parentheses
	- any [bool getable](#bool-getables)
	- a boolean unary expression

### Bool Unary Expression

The only unary operator is `!`, which inverts the attached bool operand.

```
!<bool operand>
```

- `!<bool exp>` is equivalent to `<bool exp> != true` or `<bool exp> == false`.
- These are evaluated before other operators. To invert a larger expression, group it in parens and invert the grouping.
- For multi-word bool "getables" like `entity Bob glitched` you can put a `!` before the first word to invert the whole phrase. No need to wrap the phrase in parens.

```mgs
//example
_ {
	target_bool = !flag_name;
}
```

### Bool Binary Expression

#### Boolean Logic

These can be daisy chained and combined with groupings and other boolean operands to build complex conditions.

```
<bool expression> <bool binary operator> <bool expression>
```

- **Bool binary operator**:
	- Boolean OR: `||`
	- Boolean AND: `&&`

```
// example
_ {
	target_bool = debug_mode || player glitched;
}
```

#### Int Comparisons

```
<int expression> <comparison operator> <int expression>
```

- **Int expression**: see [Int Expressions](#int-expressions)
- **Comparison operator**:
	- Less than: `<`
	- Less than or equal to: `<=`
	- Greater than: `>`
	- Greater than or equal to: `>=`
	- Equal to: `==`
	- Not equal to: `!=`

#### Bool Equality Check

```
<bool expression> <equality operator> <bool expression>
```

- **Bool expression**: see [Bool Expressions](#bool-expressions)
- **Equality operator**:
	- Equal to: `==`
	- Not equal to: `!=`

#### String Equality Check

```
<string checkable> <equality operator> <string literal>
<string literal> <equality operator> <string checkable>
```

- **String checkable**: see [String Checkables](#string-checkables)
- **String literal**: see [String](primitive_types#string)
- **Equality operator**:
	- Equal to: `==`
	- Not equal to: `!=`

```mgs
//examples
_ {
	target_bool = player x < 100;
	target_bool = flag_name != true;
	target_bool = player name == "Bob";
	target_bool = "Bob" != player name;
}
```

## Position Over Time Operation

The "position over time" operation  is similar to the assignment operation, except that it uses a `->` instead of `=` to indicate that the action will take time to execute. Those action phrases usually require extra parameters to their assignment counterparts.

```
<LHS> -> <RHS>;
```

See:

- [Actions > Position Over Time](actions#position-over-time)
- [Actions > Play Entity Animation](actions#play-entity-animation)
- [Actions > Fade Camera In or Out](actions#fade-camera-in-or-out)
- [Actions > Shake Camera](actions#shake-camera)
