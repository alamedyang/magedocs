# Expressions and Operators

## Expressions

- Expressions are built up from operands, operators, and parenthetical groupings in the manner commonly done in modern languages, e.g.`(5 + variable_name) * 7`.
- Expressions can stand in for a [value of that type](primitive_types) in almost all places.
- Int and bool expressions cannot be combined. Examples:
	- `!(player x - 10)` is a syntax error.
	- `var_name + false` will be parsed as `var_name + "false"`, where "false" is an int variable name).
- String literals and string references cannot be used in expressions apart from in bool comparisons.
- Operands and operators themselves cannot be expanded in [action param expansions](action_param_expansions), but the expression as a whole often can, depending on the [action phrase](actions).

## Assignment Operation

This is a binary expression that sets the left-hand side (LHS) to the value of the right-hand side (RHS).

**Syntax**: `<LHS> = <RHS>;`

- Action phrases using this pattern:
	- [Assign Int Value](actions#assign-int-value)
	- [Change Int Value](actions#change-int-value)
	- [Assign Bool Value](actions#assign-bool-value)
	- [Assign String Value](actions#assign-string-value)
	- [Assign Script Value](actions#assign-script-value)
- [Position Over Time action phrases](actions#position-over-time) are similar, but use a `->` instead of `=` to indicate that the action will take time to execute.

## Operands

### Getables vs Setables

You can set and get/check most operands with bytecode instructions. But some can only be checked, and some only set. This means some can only be on the LHS of an assignment operation, and some can only be in the expression on the RHS.

## Int Expressions

An int expression results in a number value. Note that a single int operand is a valid int expression.

- **Syntax**:
	- `<int operand>`
	- `<int binary expression>`
	- `( <int expression> )`

### Int Binary Expression

These behave as expected. Standard operator precedence (order of operations) is used.

- **Syntax**: `<int operand> <int binary operator> <int operand>`
- **Int operand**: see [undefined](#int-operands)
- **Int binary operator**:
	- Add: `+`
	- Subtract: `-`
	- Multiply: `*`
	- Divide: `/`
	- Modulo: `%`

### Int Operands

These are "int getables" (as opposed to ["int setables"](actions#int-setables)).

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
- Another int expression

**Bytecode actions**:

- `COPY_VARIABLE`
- `CHECK_VARIABLE`
- `CHECK_VARIABLES`
- `COPY_SCRIPT`
- `CHECK_ENTITY_X`
- `CHECK_ENTITY_Y`
- `CHECK_ENTITY_PRIMARY_ID`
- `CHECK_ENTITY_SECONDARY_ID`
- `CHECK_ENTITY_PRIMARY_ID_TYPE`
- `CHECK_ENTITY_CURRENT_ANIMATION`
- `CHECK_ENTITY_CURRENT_FRAME`
- [Bytecode actions for array methods that return a value](arrays#returns-a-value-int)

## Bool Expressions

A bool expression result in a bool value. A single bool operand is a valid bool expression.

- **Syntax**:
	- `<bool operand>`
	- `<bool unary expression>`
	- `<bool comparison>`
	- `<bool binary expression>`
	- `( <bool expression> )`

### Bool Unary Expression

The only unary operator is `!`, which inverts the attached bool operand.

**Syntax**: `!<bool operand>`

- `!<bool exp>` is equivalent to `<bool exp> != true` or `<bool exp> == false`.
- These are evaluated before other operators. To invert a larger expression, group it in parens and invert the grouping.
- For multi-word bool "getables" like `entity Bob glitched` you can put a `!` before the first word to invert the whole phrase. No need to wrap the phrase in parens.

### Bool Comparison

- **Syntax**:
	- `<int expression> <comparison operator> <int expression>`
	- `<bool expression> <equality operator> <bool expression>`
	- `<string checkable> <equality operator> <string literal>`
	- `<string literal> <equality operator> <string checkable>`
	- **Int expression**: see [Int Expression](expressions_and_operators#int-expressions)
	- **Bool expression**: see [Bool Expressions](expressions_and_operators#bool-expressions)
	- **String checkable**: see [undefined](#string-checkables)
	- **String literal**: see [String](primitive_types#string)
	- **Equality operator**:
		- Equal to: `==`
		- Not equal to: `!=`
	- **Comparison operator**:
		- Less than: `<`
		- Less than or equal to: `<=`
		- Greater than: `>`
		- Greater than or equal to: `>=`
		- Also, all equality operators

### Bool Binary Expression

- **Syntax**:
	- `<bool expression> <bool binary operator> <bool expression>`
	- **Bool binary operator**:
		- Boolean OR: `||`
		- Boolean AND: `&&`

### Bool Operands

These are "bool getables" (as opposed to ["bool setables"](actions#bool-setables)).

- [Boolean literals](primitive_types#boolean) e.g. `true`, `false`
- [Variable identifiers](identifiers) ([flags](state#save-flags))
- [Checkable engine flags](state#engine-flags) e.g. `debug_mode`
- [Entity bool properties](entities#entity-properties) / status:
    - `<entity identifier> glitched`
    - `<entity identifier> intersects <geometry identifier>`
	- **Entity identifier**: see [Entity Identifier](identifiers#entity-identifier)
- Button status:
    - `button <button name> down` or `up` (the button's current state)
    - `button <button name> pressed` (whether the button recently changed from up to down)
    - NOTE: The button states are reset when a new map is loaded. If listening for a button press in the new map, this action may very will trigger immediately, even if the button was held down through the map load.

**Bytecode actions**:

- `CHECK_SAVE_FLAG`
- `CHECK_DEBUG_MODE`
- `CHECK_DIALOG_OPEN`
- `CHECK_SERIAL_DIALOG_OPEN`
- `CHECK_ENTITY_GLITCHED`
- `CHECK_IF_ENTITY_IS_IN_GEOMETRY`
- `CHECK_FOR_BUTTON_PRESS`
- `CHECK_FOR_BUTTON_STATE`

### Button Names

::: warning INFO
We found that the joystick clicks were aggressive on the hardware, and would trigger at what felt like arbitrary times. While the engine is capable of detecting these clicks, we recommend not using them.
:::

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

### String Checkables

These are string operands that can be "checked," or used in a [boolean expression](expressions_and_operators#bool-expressions). For string operands that can be set, see [Assign String Value](actions#assign-string-value).

These aren't "getables" because their values cannot be stored.

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

**IMPORTANT**: Strings do not exist (except by reference) in the final game binary!

- There are no string operations apart from [|assignment](actions#assign-string-value) (e.g. `player name = "Bob"`) and as part of [boolean comparisons](#bool-comparison) (e.g. `player name != "Bob"`).
- No string concatenation or slicing
- String references can only be compared to string literals, not a second string reference (e.g. `player name == self name` is invalid)

**Bytecode actions**:

- `CHECK_WARP_STATE`
- `CHECK_ENTITY_NAME`
- `CHECK_ENTITY_TYPE`
- `CHECK_ENTITY_PATH`
- `CHECK_ENTITY_INTERACT_SCRIPT`
- `CHECK_ENTITY_TICK_SCRIPT`
- `CHECK_ENTITY_LOOK_SCRIPT`
- `CHECK_ENTITY_DIRECTION`
