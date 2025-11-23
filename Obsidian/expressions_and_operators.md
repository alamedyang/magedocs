# Expressions and Operators

## Expressions

- Expressions are built up from operands, operators, and parenthetical groupings in the manner commonly done in modern languages, e.g.`(5 + variable_name) * 7`.
- Expressions can stand in for a [[primitive_types|value of that type]] in almost all places.
- Int and bool expressions cannot be combined. Examples:
	- `!(player x - 10)` is a syntax error.
	- `var_name + false` will be parsed as `var_name + "false"`, where "false" is an int variable name).
- String literals and string references cannot be used in expressions apart from in bool comparisons.
- Operands and operators themselves cannot be expanded in [[action_param_expansions|action param expansions]], but the expression as a whole often can, depending on the [[actions|action phrase]].

## Assignment Operation

This is a binary expression that sets the left-hand side (LHS) to the value of the right-hand side (RHS).

```
<LHS> = <RHS>;
```

See: [[actions#Assign a Value|Actions > Assign a Value]]

## Operands

### Getables vs Setables

You can set and get/check most operands with bytecode instructions. But some can only be checked, and some only set. This means some can only be on the LHS of an assignment operation, and some can only be in the expression on the RHS.

### Getables vs Checkables

Getables can have their values copied out, but checkables can only be used for conditional logic jumps. All getables are checkable, but not all checkables are getable.

### Literals Only

Certain checkables can only be checked against literal values, not expressions. Likewise, certain setables can only be set to literal values.

## Int Expressions

An int expression results in a number value. Note that a single int operand is a valid int expression.

```
<int operand>
// OR
<int binary expression>
// OR
( <int expression> )
```

### Int Binary Expression

These behave as expected. Standard operator precedence (order of operations) is used.

```
<int operand> <int binary operator> <int operand>
```

- **Int operand**: see [[#Int Operands]]
- **Int binary operator**:
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

### Int Operands

These are "int getables" (as opposed to [[actions#Int Setables|"int setables"]]).

- [[state#Integer Variables|Number literals]]
- [[identifiers|Variable identifiers]] ([[state#Integer Variables|integers]])
- [[macros#Copy Script|Copy Script]] (return value)
- [[fns#Fn Call|Fn Call]] (return value)
- [[arrays#Returns a Value (int)|Array method chain that returns a value]]
- [[macros#RNG|The RNG Macro]]
- [[entities#Entity Properties|Entity int properties]]:
    - `<entity identifier> x`
    - `<entity identifier> y`
    - `<entity identifier> primary_id`
    - `<entity identifier> secondary_id`
    - `<entity identifier> primary_id_type`
    - `<entity identifier> current_animation`
    - `<entity identifier> animation_frame`
	- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
- Another int expression

Bytecode actions:

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
- [[arrays#Returns a Value (int)|Bytecode actions for array methods that return a value]]

## Bool Expressions

A bool expression result in a bool value. A single bool operand is a valid bool expression.

```
<bool operand>
// OR
<bool unary expression>
// OR
<bool comparison>
// OR
<bool binary expression>
// OR
( <bool expression> )
```

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

### Bool Comparison

```
<int expression> <comparison operator> <int expression>
// OR
<bool expression> <equality operator> <bool expression>
// OR
<string checkable> <equality operator> <string literal>
// OR
<string literal> <equality operator> <string checkable>
```

- **Int expression**: see [[expressions_and_operators#Int Expressions|Int Expression]]
- **Bool expression**: see [[expressions_and_operators#Bool Expressions|Bool Expressions]]
- **String checkable**: see [[#String Checkables]]
- **String literal**: see [[primitive_types#String|String]]
- **Equality operator**:
	- Equal to: `==`
	- Not equal to: `!=`
- **Comparison operator**:
	- Less than: `<`
	- Less than or equal to: `<=`
	- Greater than: `>`
	- Greater than or equal to: `>=`
	- Also, all equality operators

```mgs
//examples
_ {
	target_bool = player x < 100;
	target_bool = flag_name != true;
	target_bool = player name == "Bob";
	target_bool = "Bob" != player name;
}
```

### Bool Binary Expression

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

### Bool Operands

These are "bool getables" (as opposed to [[actions#Bool Setables|"bool setables"]]).

- [[primitive_types#Boolean|Boolean literals]] e.g. `true`, `false`
- [[identifiers|Variable identifiers]] ([[state#Save Flags|flags]])
- [[state#Engine Flags|Checkable engine flags]] e.g. `debug_mode`
- [[entities#Entity Properties|Entity bool properties]] / status:
    - `<entity identifier> glitched`
    - `<entity identifier> intersects <geometry identifier>`
	- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]
- Button status:
    - `button <button name> down` or `up` (the button's current state)
    - `button <button name> pressed` (whether the button recently changed from up to down)
    - NOTE: The button states are reset when a new map is loaded. If listening for a button press in the new map, this action may very will trigger immediately, even if the button was held down through the map load.

Bytecode actions:

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

These are string operands that can be "checked," or used in a [[expressions_and_operators#Bool Expressions|boolean expression]]. For string operands that can be set, see [[actions#Assign String Value|Assign String Value]].

These aren't "getables" because their values cannot be stored.

- The [[state#Warp State String|Warp State String]] (`warp_state`)
- Entity string properties:
    - `<entity identifier> name`
    - `<entity identifier> type`
    - `<entity identifier> path`
    - `<entity identifier> on_interact`
    - `<entity identifier> on_tick`
    - `<entity identifier> on_look`
    - `<entity identifier> direction`
	- **Entity identifier**: see [[identifiers#Entity Identifier|Entity Identifier]]

**IMPORTANT**: Strings do not exist (except by reference) in the final game binary!

- There are no string operations apart from [[actions#Assign String Value||assignment]] (e.g. `player name = "Bob"`) and as part of [[#Bool Comparison|boolean comparisons]] (e.g. `player name != "Bob"`).
- No string concatenation or slicing
- String references can only be compared to string literals, not a second string reference (e.g. `player name == self name` is invalid)

Bytecode actions:

- `CHECK_WARP_STATE`
- `CHECK_ENTITY_NAME`
- `CHECK_ENTITY_TYPE`
- `CHECK_ENTITY_PATH`
- `CHECK_ENTITY_INTERACT_SCRIPT`
- `CHECK_ENTITY_TICK_SCRIPT`
- `CHECK_ENTITY_LOOK_SCRIPT`
- `CHECK_ENTITY_DIRECTION`
