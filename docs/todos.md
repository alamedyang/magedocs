# TODO

- `delete command _ fail` is missing in the grammar!
- could add sigil to `debug!()` serial dialog references, so we can use strings instead of being limited to barewords?
- Are recursive fn calls detected?
- Can fn calls use bool expressions as args? Should they?
- If dialogSkins are the only things left in `scenario.json` should it be moved to its own file, and `scenario.json` retired?
- Change `RNG!()` to `roll!()` (?) (helps keep it straight from `rand!()`
- Change `include` back to `include!()` so it matches the other "macros"
- it's annoying to remember which things don't take a `;` (or which bracketed things do, like in show dialog blocks), so we might make them optional in certain common situations so it's easier to err on the side of always putting them. (Making them optional everywhere breaks too much; I tried.)
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
