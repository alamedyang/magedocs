# Dialog and Serial Dialog Settings

 Settings collect common [[dialogs|dialog]] and [[serial_dialogs|serial dialog]] parameters, and apply them to all dialogs and serial dialogs found afterward.
 
- Add settings at [[syntax_scopes#Syntax Contexts|root level]].
- [[syntax_scopes#File Scope|File scope]].
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
		- Describes the default dialogs settings for the named [[entities|entity]].
	- `label <label name: bareword> { <dialog parameter*> }`
		- Defines a dialog identifier shortcut or alias to a specific set of settings.
		- The label *must* be a [[primitive_types#Bareword|bareword]]; cannot be a  [[primitive_types#Quoted String|quoted string]].
		- Dialog labels only exist in MGS (not the game engine itself), so they do not apply to other entity references (such as the target of an action).
- **Dialog parameters**: A property and a value pair.
	- They are never comma-separated.
	- See: [[dialogs#Dialog Parameter|Dialog Parameter]]

### Example

```mgs{2}
add dialog settings {
  label PLAYER {}
}
```

This is a common use case for dialog settings, after which you can use `PLAYER` instead of `entity "%PLAYER%"` as a [[dialogs#Dialog Identifier|dialog identifier]] for [[dialogs|dialogs]].

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
	- See: [[serial_dialogs#Serial Dialog Parameter|Serial Dialog Parameter]]
