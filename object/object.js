

/*
When we run a js program a global execution context is created.
along with global execution context a global object (window) is
created with predefined properties and methods
everyone can access these properties and methods in js
by default props and methods are public*

In js every object has a parent object, object inherits 
props and methods from their parent

In an object property lookup is delegation

in ES6 this is bound to undefined;
in CJS this is bound to exports object;
*/


/*
descriptor is the set of attributes
props are three types
1. data property----name value pair----name: "Jane"
2. Accessor property---getters and setters
3. Internal Property----available in prototype for e.g. toString()
*/
