# Script Control Flow

These structures appear inside [[scripts|script bodies]], as well as anywhere else that can contain script body items, like [[script_control_flow|looping blocks]] and fn bodies.

## Return

- `return` is an index jump to the bottom of the current script. This terminates the script early.
- If a value is given after the keyword `return`, that value will be put into the "return register" (a dedicated int variable), where the caller, if any, can receive it.
	- After the caller receives the returned value, the return register is set back to `0`.
- Scripts and fns can both return values.
- **Syntax:**
	- `return;`
	- `return <int expression>;`

## If / Else Chain

- An if chain is an `if` block, any number of `else if` blocks, then an optional `else` block.
- If an `if` or `else if` condition is met, no other conditions in that chain is checked.
- `else` defines behavior that happens if none of the above `if` or `else if` conditions are met.
- **Syntax:**
	- **If block**:
		- `if (<condition: boolean expression>) { <script body items> }`
	- **Else if block**:
		- `else if (<condition: boolean expression>) { <script body items> }`
	- **Else block**:
		- `else { <script body items> }`
- **Boolean expression**: see [[expressions_and_operators#Bool Expressions|Boolean Expressions]]

## If Single

- This is a simpler branching syntax meant for printing expanded output, not for writing outright.
- **Syntax:**
	- `if <simple condition> then goto <script name: string>;` 
	- `if <simple condition> then goto script <script name: string>;` 
	- `if <simple condition> then goto label <bareword>;` 
	- `if <simple condition> then goto index <number>;`
- A simple condition is a [[expressions_and_operators#Bool Expressions|boolean expressions]] with a direct counterpart to a bytecode action. 
	- I'm not going to write these out, as there's not much point doing it, but if you must find which kinds of comparisons are legal here, it's the parameters in bytecode actions that start with `CHECK_` .

## While Block

**Syntax**: `while (<condition: boolean expression>) { <looping body items> }`

- Loops over the items in the while body as long as the while [[expressions_and_operators#Bool Expressions|condition]] is true.
- The condition is checked at the beginning of each loop and at no other time, i.e. the loop is not aborted if the condition becomes false partway through the loop.
- If the condition is false on the first loop, the while body is never executed.
- Looping body items are the same as script body items, with two additions:
	- **Continue**: Stops the current loop and jumps ahead to the beginning of the next loop.
		- `continue;`
	- **Break**: Stops the loop altogether.
		- `break;`
	- Continue and break only work on their own loop, not any parent loops. (Cannot `break` to a labeled loop.) If you want this behavior, you must use label definitions and `goto label <string>;`.

## Do While Block

Like a [[#While Block|while block]], except that the body items are guaranteed to be executed at least once.

**Syntax**: `do { <looping body items> } while (<condition: boolean expression>)`

## For Block

**Syntax**: `for (<initializer>; <condition>; <incrementer>) { <looping body items> }`

- **Initializer**: Can be any [[actions|action item]], but should be used for setting the initial value of the variable being used to manage the loop, e.g. `i = 0`
- **Condition**: A [[expressions_and_operators#Bool Expressions|boolean expression]]. The for loop will continue while the condition is true.
- **Incrementer**: Can be any [[actions|action item]], but should be used for incrementing the variable being used to manage the loop, e.g. `i += 1`
- There must be a semicolon separating these things.
	- Normally action items end in a semicolon, but these do not, because the separator semicolon serves the same purpose.
	- The final action item does not end in a semicolon.

Fun fact, a for block is effectively a [[#While Block|while block]] with extra steps:

```
<initializer>
while (<condition>) {
	<looping body items>
	<incrementer>
}
```

## Label Definitions

Labels are a means of setting destinations for jump actions. These are [[scripts|script level]].

**Syntax**: `<bareword>:`

---

[[index|Quick Links]]
