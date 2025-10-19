# TODO

TODOs for the language and/or documentation

- Are recursive fn calls detected? NO THEY ARE NOT
- Can fn calls use bool expressions as args? Should they?
	- Whoops, turns out they only take int expressions??? That isn't right (or is it??)
	- Strings pass through correctly purely accidentally
	- Bools can't seem to come through
	- Would need to first enable consts to take more things than single token primitives. Is this okay? Maybe? Why was it limited to a single token again?
- If dialogSkins are the only things left in `scenario.json` should it be moved to its own file, and `scenario.json` retired?
- Change `RNG!()` to `roll!()` (?) (helps keep it straight from `rand!()`
- Change `include` back to `include!()` so it matches the other "macros"
- Make it so ints can have optional sigils? (A quick attempt didn't work)
- Test expansion-ness of push_left and push
- Do custom ANSI sequences come through?
- Currently, fns require at least one argument; the parser distinuishes fn calls and copy script based on whether there's any args passed. This was done because it was confusing when one resembled a normal function call and the other didn't when the two were otherwise used the same way. However, if this paradigm too proves frustrating (i.e. if it turns out we frequently want to make fns with no args), we can disambuguate the copy script and fn call syntax again, or make the parser more discerning re: deciding between namespaces.
- What happens in debug mode if a script targets a debug entity?
- Is `SET_HEX_EDITOR_STATE` working? I think it is?
- Can all three of map's slots be paused or what?
- Does LOOP_CAMERA_ALONG_GEOMETRY work?
- Can you set serial connect message to a serial dialog literal?
- do the `on_look` slots use the `command` slot? They have their own space on the entity struct, so....
- Is it true that MGE animations need to be two frames?
- the expressions definition change might be a bit off re: operand vs expression, i.e. where does grouping actually fall? Is this worth polishing?
- Make a badge hardware section and put buttons/lights enums in there
- Capitalization of macros? Copy Script, Include Macro, etc. Upper or lower or what?
- Put command and array actions into actions?
- Add how to use the MEM buttons

Fancy styles reference: https://vitepress.dev/guide/markdown#errors-and-warnings-in-code-blocks