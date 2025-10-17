# Dialog and Serial Dialog Settings

 Settings collect common [dialog](dialogs) and [serial dialog](serial_dialogs) parameters, and apply them to all dialogs and serial dialogs found afterward.
 
- Add settings at [root level](syntax_scopes#syntax-contexts).
- [File scope](syntax_scopes#file-scope).
- Note that none of this syntax involve semicolons or commas.

## Precedence

Using the painter's algorithm:

- Engine defaults:
	- Serial dialog: `wrap 80`
	- Dialog: `wrap 42`
	- Dialog: `alignment BL`
- Settings targeting `default`.
- Settings targeting an entity.
- Settings targeting a label.
- In-dialog parameters.

## Dialog Settings

```
add dialog settings { <dialog settings target*> }
```

- **Dialog settings target**:
	- `default { <dialog parameter*> }`
		- Describes the default behavior for all dialogs.
	- `entity <entity name: string> { <dialog parameter*> }`
		- Describes the default dialogs settings for the named [entity](entities).
	- `label <label name: bareword> { <dialog parameter*> }`
		- Defines a dialog identifier shortcut or alias to a specific set of settings.
		- The label *must* be a [bareword](primitive_types#bareword); cannot be a  [quoted string](primitive_types#quoted-string).
		- Dialog labels only exist in MGS (not the game engine itself), so they do not apply to other entity references (such as the target of an action).
- **Dialog parameters**: A property and a value pair.
	- They are never comma-separated.
	- See: [Dialog Parameter](dialogs#dialog-parameter)

### Example

```mgs{2}
add dialog settings {
  label PLAYER {}
}
```

This is a common use case for dialog settings, after which you can use `PLAYER` instead of `entity "%PLAYER%"` as a [dialog identifier](dialogs#dialog-identifier) for [dialogs](dialogs).

```mgs{3,8}
// with label
dialog test {
  PLAYER "Dialog message"
}

// without label
dialog test {
  entity "%PLAYER%" "Dialog message"
}
```

## Serial Dialog Settings

```
add serial_dialog settings { <serial dialog parameters> }
```

- **Serial dialog parameters**: A property and a value pair.
	- They are never comma-separated.
	- See: [Serial Dialog Parameter](serial_dialogs#serial-dialog-parameter)
