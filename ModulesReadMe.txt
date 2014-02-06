module.exports is the object that's actually returned as the result of a require call.



The exports variable is initially set to that same object (i.e. it's a shorthand "alias"), 
so in the module code you would usually write something like this:

var myFunc1 = function() { ... };
var myFunc2 = function() { ... };
exports.myFunc1 = myFunc1;
exports.myFunc2 = myFunc2;
to export (or "expose") the internally scoped functions myFunc1 and myFunc2.

And in the calling code you would use:

var m = require('mymodule');
m.myFunc1();
where the last line shows how the result of require is (usually) 
just a plain object whose properties may be accessed.

http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-nodejs
http://nodejs.org/api/modules.html
http://openmymind.net/2012/2/3/Node-Require-and-Exports/
