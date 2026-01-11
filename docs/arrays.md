# Arrays

Arrays are built, modified, and destroyed inside [scripts](scripts) using [actions](actions).

- Arrays may only contain 127 items.
- Arrays can only contain positive ints (with a max value of 65535), the same as [integer variables](state#integer-variables).
    - Array values can be assigned using [int expressions](expressions_and_operators#int-expressions), e.g. `odd_numbers.push(9 + two);`.
- Array literals (a list of items inside brackets, e.g. `[1, 2, 3]`) are only allowed when making a new array. Everywhere else, these are interpreted as [action param expansions](action_param_expansions).
- Arrays are initialized per game session, as opposed to per [map load](maps#map-loads) or per game save.
	- Neither arrays nor their values are stored in the [save data](state#save-data).
- Undefined array lookups (such as reading from an out-of-bounds index) will become 65535.


```mgs
// quick syntax examples:
_ {
	array odd_numbers = [3, 1, 9, 7, 5];
	array sorted = odd_numbers.sort();
	delete array odd_numbers;
}
```

## Array Indices

- Any `i8` number.
- Negative indices read values from the end.
	- E.g. `penultimate_value = array_name[-2];`
- Indices may be made from a bare variable name or an [int expression](expressions_and_operators#int-expressions).
	- E.g. `next_value = array_name[i + 1];`

## Array Action Phrases

### Create

Makes a new array by the given name. If you make a new array when one already exists by that name, the old array will be overwritten.

```
array <name: string> = <initial value>;
```

- **Initial value**:
	- 0+ comma-separated int expressions, wrapped in `[]`
	- [Array method chain that returns an array](#returns-an-array) (as opposed to one returning a value or nothing).

Bytecode action: `ARRAY_NEW`

### Delete

Deletes named array(s). If the array already doesn't exist, nothing will happen.

```
delete array <string[]>;
```

Bytecode action: `ARRAY_DELETE`

### Print

Prints the array(s)'s values to the serial console, but only if the game is in [debug mode](debug_tools#debug-mode).

```
print array <string[]>;
```

Bytecode action: `ARRAY_LOG`

## Array Methods

Array methods act upon an array by changing it, extracting one or more values from it, performing other logical work on it, or any combination of these things. Methods are attached to the array's name with a dot, e.g. `array.pop()`.

Array methods can be daisy chained, e.g.

```mgs
_ {
  var_name = array_name.sort()
    .reverse()
    .map(do_function)
    .pop();
}
```

- The [return](script_control_flow#return) result of the chain depends on the return type of the final method.
- The chain will work even if the methods are split up with white space (i.e. put onto different lines).

### Returns an Array

Some of these alter an existing array, but for those that don't, the modified array is wasted unless used in the RHS of a ["new array" action](#create).

- **Sort**: Changes an array by sorting its values numerically, ascending.
	- `.sort()`
- **Reverse**: Changes an array by reversing the order of its values.
	- `.reverse()`
- **Slice**: Makes a copy of the array in its current state.
	-  `.slice()`: Copies the array whole.
    -  `.slice(<index start>)`: Copies starting at the given index.
    -  `.slice(<index start>, <index end>)`: Copies starting at the given start index and ending on the given end index.
- **Map**: Creates a new array with the same length as the current array by performing the given [fn](fns) on each of the array items.
	- `.map(<fn identifier: string>)`: Uses the named fn.
	- `.map(<fn literal>)`: Uses the provided fn.
    - The default args provided to the mapping fn are:
	    - 1st arg: the value of the current item
		- 2nd arg: current loop index
		- 3rd arg: the name of the array itself
	- Not all 3 args must be used, and they may be named anything in the fn definition (as long as they are constants); the order of the fn args is what determine which of these three values they receive.
    - The mapping fn cannot use `continue` or `break`. You may [`return`](script_control_flow#return) early to jump to the next loop, but the loop must play out in its entirety.
    - If the mapping fn does not return anything, the value of the new array at that index will be 0.

Bytecode actions:

- `ARRAY_SORT`
- `ARRAY_REVERSE`
- `ARRAY_SLICE`
- `ARRAY_SLICE_BY_VARIABLE`
- `ARRAY_SLICE_TWICE`
- `ARRAY_SLICE_TWICE_BY_VARIABLE`

### Returns a Value (int)

Some of these methods modify existing arrays, but for those that don't, the [returned](script_control_flow#return) value is wasted if it's not [stored in a variable](actions#assign-int-value) or [used in an expression](expressions_and_operators#int-expressions).

- **Value at index**: Returns the value of the array at that [index](#array-indices).
	- `[<array index>]`
- **Length**: Returns the length of the array, i.e. the quantity of items it currently contains.
	- `.length()`
- **Pop**: Removes the final item in the array and returns it.
	- `.pop()`
- **Pop Left**: Removes the first item in the array and returns it.
	- `.pop_left()`

Bytecode actions:

- `ARRAY_READ_FROM_INDEX_INTO_VARIABLE`
- `ARRAY_READ_FROM_VARIABLE_INDEX_INTO_VARIABLE`
- `ARRAY_LENGTH_INTO_VARIABLE`
- `ARRAY_POP_INTO_VARIABLE`
- `ARRAY_POP_LEFT_INTO_VARIABLE`

### Returns Nothing

These only modify existing arrays or work on the data inside them. These can only be used in a bare array expression as an action item and cannot be part of an [int expression](expressions_and_operators#int-expressions).

- **Push**: Adds the given value to the end of the array.
	- `.push(<int expression>)`
- **Push Left**: Adds the given value to the beginning of the array.
	- `.push_left(<int expression>)`
- **For Each**: Performs the given fn on each of the items.
	- `.for_each(<fn identifier: string>)`: Uses the named fn.
	- `.for_each(<fn literal>)`: Uses the provided fn.
	- Exactly the same as `.map()`, except that it does not return a new array. Return values from the fn, if any, are discarded.

Bytecode actions:

- `ARRAY_PUSH_FROM_VALUE`
- `ARRAY_PUSH_FROM_VARIABLE`
- `ARRAY_PUSH_LEFT_FROM_VALUE`
- `ARRAY_PUSH_LEFT_FROM_VARIABLE`

## Assign Array Value at Index

Sets the value of an array at a given index to the value on the RHS of the [assignment operation](expressions_and_operators#assignment-operation).

```
<array name: string>[<array index>] = <int expression>;
```

- **Array index**: see [Array Indices](#array-indices)
- **Int expression**: see [Int Expression](expressions_and_operators#int-expressions)

Bytecode actions:

- `ARRAY_WRITE_INTO_INDEX_FROM_VALUE`
- `ARRAY_WRITE_INTO_INDEX_FROM_VARIABLE`
- `ARRAY_WRITE_INTO_VARIABLE_INDEX_FROM_VALUE`
- `ARRAY_WRITE_INTO_VARIABLE_INDEX_FROM_VARIABLE`
