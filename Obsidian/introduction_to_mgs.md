# Introduction to MGS

MageGameScript (MGS) is a [custom scripting language](https://en.wikipedia.org/wiki/Domain-specific_language) that compiles to Mage Game Engine (MGE) bytecode. JSON is the intermediate step between the MGS parser and the MGE [[encoder|encoder]].

## Philosophy

MGS v1 ("natlang") was designed to use natural language-like phrases to make actions easier to read and write, but in practice it only made them easier to _read_; keywords and subphrases were easy to confuse with each other, and it was hard to remember which prepositions were strictly necessary. Also, recursive or non-fixed-length structures were not possible due to the way the old parser worked.

MGS v2 ("mathlang") instead reduces ambiguity by breaking logical concepts into modular, mathlike structures which can be combined with operators. This makes syntax much more uniform, and allows for more complex and recursive structures.

For an example, there are several actions to rotate an entity toward a specific direction. The natlang phrases sounded like natural English, but as a result the keywords in the phrase varied:

- `turn entity Bob north;`
- `turn entity Bob toward entity Alice;`
- `turn entity Bob toward geometry stick;`
- `rotate entity Bob 1;`

Instead, Mathlang takes the concept of an entity having a "direction" and uses that as the LHS of an [[actions#Assign Direction Value|assignment operation]] (or an [[actions#Change Int Value|op-equals operation]]), with a few types of compatible RHSs:

- `entity Bob direction = north;`
- `entity Bob direction = entity Alice;`
- `entity Bob direction = geometry stick;`
- `entity Bob direction += 1;`

The `direction` property is an artificial construct; it isn't a value that's being changed to the value of the RHS, at least not literally. Still, the mathlike uniformity makes these phrases easy to write, and no harder to read.

## New Features

- **Error recovery**: The parser no longer stops on invalid syntax, meaning multiple errors can be printed in one go.
- **[[expressions_and_operators|Expressions]]**: Math no longer needs to be handled like assembly instructions, one operation at a time. Any value that can be checked may now be included in expressions, including engine flags like `debug_mode`. Expressions are flattened using a register system to hold temporary values, but in practice not very many of these temporary values are needed.
- **[[fns|Fns]]**: Macros, templates, inline functions, whatever you want to call them — these are like copy_script but will swap out tokens based on what they were passed in their args when called. This can be recursive. This leverages the existing [[constants|constants system]].
- **[[script_control_flow#Return|Returning a value]]**: Fns and scripts can add a value to a "return register" (a dedicated int variable) before jumping to the end of their action list. "Callers" can intercept this value and store it or use it as they like.
- **[[json_literals|JSON literals]]**: Actions (particularly novel actions) may be written out in JSON inside an MGS file. No need to keep script/dialog/serial_dialog JSON files around.
- **Define-in-place scripts**: Like with [[actions#Show Dialog|Show Dialog]] and [[actions#Show Serial Dialog|Show Serial Dialog]], scripts most places can now be defined in place instead of used only by reference. This can be done recursively.
- **[[encoder#CLI Encoder|CLI]] and [[encoder#Web Encoder|web]] versions for MGS parsing**: No special handling required when encoding the game; the WASM additions are invisible when it comes to generating the new binary data file.
- **[[what_youll_need#Syntax Colors|Syntax colors]]**: TextMate grammars have been working for some time, and are generally kept up to date. Works with Sublime, VSCode, TextMate. The VSCode plugin is available on the VSCode extension marketplace.

## WIP Features

- IntelliJ colors: Got it working once, gotta get it working again!
- **[[arrays|Arrays]]**: The MGS side is fully supported, including method daisy chains. QOL features include `.map()` and `.for_each()`, which can refer to [[fns|fns]] by name or work off a given lambda. The engine side is starting to support basic features and is the current dev focus.
- **Language server**: Still investigating. The tree-sitter pass alone should contain enough information for basic features like symbol renaming and supplemental syntax coloring, as queries can target relevant nodes like entity names. (Map JSON files and the like must also be included in this analysis, however.)

## Using the Parser

All files within `SD_Card/MAGE/scenario_source_files/` with filenames ending in `.mgs` will be parsed by the MGS parser. (See [[what_youll_need#`MAGE/`|`MAGE/`]]) All that is required is the tree-sitter engine and the MGS language grammar, both WASM. Both have been attached to the existing [[encoder|CLI/web encoder]] for the game.

To alter the grammar, you must make changes in `grammar.js`, rebuild the grammar using tree-sitter (targeting WASM), and then rebuild the library using Vite. That final step is required for seeing the changes in the MGE encoder, but not necessary for using the tree-sitter playground or running the language unit tests.

---

[[index|Quick Links]]
