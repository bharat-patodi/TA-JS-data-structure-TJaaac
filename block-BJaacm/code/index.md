```js
let user = {
  name: "Arya",
  sibling: ["Robb", "Ryan", "John"],
};
let allBrothers = ["Robb", "Ryan", "John"];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

![Memory Representation Diagram](./memory-rep-dia.png)

2. Answer the following with reason:

- `user == newUser;` // true
- `user === newUser;` // true
- `user.name === newUser.name;` // true
- `user.name == newUser.name;` // true
- `user.sibling == newUser.sibling;` // true
- `user.sibling === newUser.sibling;` // true
- `user.sibling == allBrothers;` // false - even though the values are equal, these are different object on the memory heap and hence different reference values
- `user.sibling === allBrothers;` // false - even though the values are equal, these are different object on the memory heap and hence different reference values
- `brothersCopy === allBrothers;` // false
- `brothersCopy == allBrothers;` // false
- `brothersCopy == user.sibling;` // true - they are both references to the same object
- `brothersCopy === user.sibling;` // true - they are both references to the same object
- `brothersCopy[0] === user.sibling[0];` // true
- `brothersCopy[1] === user.sibling[1];` // true
- `user.sibling[1] === newUser.sibling[1];` // true
