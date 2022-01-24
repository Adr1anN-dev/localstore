### localstore.js
Simple localStorage operating library with the single API.
#### Getting started
Just download file and include it in your HTML document: `<script src="localstore.min.js"></script>`<br>
Use, code and enjoy!
#### API
it has 6 functions:<br>
`set(key, value)`: sets key-value pair. JSON is supported in values<br>
`add(key, value1, value2)`: add new values in key-value pair<br>
`get(key)`: returns just value for the key. returns `undefined` if no value found<br>
`getAll()`: returns object with all key-value pairs. JSON is parsed. returns `{}` on empty store<br>
`remove(key)`: removes key. returns `undefined`<br>
`removeAll()`: remove all key-value pairs, returns `undefined`<br>

#### Examples
```javascript
// Example set and getAll
localstore.set('a', 1); // 1
localstore.set('b', {c: [1, '2', {d: 3}]})); // {"c":[1,"2",{"d":3}]}
localstore.getAll(); // {"a":1,"b":{"c":[1,"2",{"d":3}]}}

// Example set, remove and getAll
localstore.set('c', 'some string'); // "some string"
localstore.remove('b'); // undefined
localstore.getAll(); // {"a":1,"c":"some string"}

// Example add with initial set String - add(key, value1)
localstore.set('a','The Develop'); // "The Develop"
localstore.add('a',' is excelent'); // "The Develop is excelent"

// Example add with initial set Array - add(key, value1)
localstore.set('b', ['The dogs', 'rock is wonderful', 28, true, ['javascript', 'css', 'html']]); // ['The dogs', 'rock is wonderful', 28, true, ['javascript', 'css', 'html']]
localstore.add('b','texto'); // ['The dogs', 'rock is wonderful', 28, true, ['javascript', 'css', 'html'], 'texto']
localstore.add('b',{texto1:'texto',array1:['texto','otro texto'],object1:{array1:['texto','otro texto'],texto1:'texto'}}); // ['The dogs', 'rock is wonderful', 28, true, ['javascript', 'css', 'html'], {texto1:'texto',array1:['texto','otro texto'],object1:{array1:['texto','otro texto'],texto1:'texto'}}]

// Example add with initial set Object - add(key, value1, value2)
localstore.set('c', {array1:[1,'texto',{number1:5}]}); // {array1:[1,'texto',{number1:5}]}
localstore.add('c','texto1','texto'); // {array1:[1,'texto',{number1:5}],texto1:"texto"}
localstore.add('c','array2',['texto1','texto2','texto3']); // {array1:[1,'texto',{number1:5}],array2:['texto1','texto2','texto3']}
localstore.add('c','object1',{texto1:'texto',array1:['texto',8]}); // {array1:[1,'texto',{number1:5}],object1:{texto1:'texto',array1:['texto',8]}}

// Example removeAll
localstore.removeAll(); // undefined
localstore.getAll(); // {}
```
#### Tests
`index.html`
#### License
MIT