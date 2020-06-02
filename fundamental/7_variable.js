var person;
var people = "";
var fullname = "Samit Koyom";
var age = 30;
var weight = 65.50;
var height = 168;
var state = true;
var opt = false;
var stock = null;

console.log("--------------------Check Type----------------");

// Check Type
console.log("person type = " + typeof(person));
console.log("people type = " + typeof(people));
console.log("name type = " + typeof(fullname));
console.log("age type = " + typeof(age));
console.log("weight type = " + typeof(weight));
console.log("height type = " + typeof(height));
console.log("state type = " + typeof(state));
console.log("opt type = " + typeof(opt));
console.log("stock type = " + typeof(stock));

console.log("--------------------Value----------------");

// Display Value
console.log("person value = " + person);
console.log("people value = " + people);
console.log("name value = " + fullname);
console.log("age value = " + age);
console.log("weight value = " + weight);
console.log("height value = " + height);
console.log("state value = " + state);
console.log("opt value = " + opt);
console.log("stock value = " + stock);

console.log("-------------------Boolean----------------------");

console.log(Boolean(null)); //false
console.log(Boolean(0));    //false
console.log(Boolean(""));   //false
console.log(Boolean("0"));   //true
console.log(Boolean(false));   //false
console.log(Boolean(true));   //true
console.log(Boolean(undefined));   //false
console.log(Boolean({}));   //true
console.log(Boolean([]));   //true
console.log(Boolean(3-3));   //false
console.log(Boolean(new Date()));   //true
console.log(Boolean(10 > 9)); // true

console.log("-------------------Operator----------------------");

console.log(age + 10); // 40
console.log(fullname + age); // Samit Koyom30
console.log(fullname + 'age'); // Samit Koyomage
console.log('fullname' + age); // fullname30
console.log(weight * height); // 11004
console.log(1+1); // 2
console.log(1 + '1'); // 11
console.log('1' + '1'); // 11
console.log(1 / ''); // Infinity
console.log(1 / 0); // Infinity
console.log(0 / 1); // 0
console.log(0 / 0); // NaN

console.log("-------------------NaN----------------------");

// NaN = Not - a - Number
// NaN Check
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// Check with isNaN
console.log(isNaN(NaN)); // true // ไม่สามารถ convert เป็น number ได้
console.log(isNaN(30)); // false
console.log(isNaN('red')); // false  // ไม่สามารถ convert เป็น number ได้
console.log(isNaN(true));  //false  // จะถูก Convert  เป็น 1 ถ้า  false  จะเป็น 

console.log("-------------------Infinity----------------------");

console.log(Infinity)                 // Infinity
console.log(Number.POSITIVE_INFINITY) // Infinity
console.log(Math.pow(2,1024))         // Infinity
console.log(1.8e+308)                 // Infinity
console.log(1/0)                      // Infinity

console.log(-Infinity)                 // -Infinity
console.log(Number.NEGATIVE_INFINITY)  // -Infinity
console.log(-1*Math.pow(2,1024))       // -Infinity
console.log(-1.8e+308)                 // -Infinity
console.log(1/-0)                      // -Infinity

console.log(37/Infinity) // 0
console.log(Infinity/Infinity) // NaN
console.log(37/-Infinity) // -0

console.log(Infinity+37) // Infinity
console.log(Infinity-37) // Infinity
console.log(Infinity*37) // Infinity
console.log(Infinity/37) // Infinity

console.log(Math.pow(Infinity,2)) // Infinity

console.log(Infinity+Infinity) // Infinity
console.log(Infinity-Infinity) // NaN
console.log(Infinity*Infinity) // NaN
console.log(Infinity/Infinity) // NaN

console.log(Infinity == 1/0) // true
console.log(Infinity === 1/0) // true

// Double equals will coerce strings to numbers, but triple equals won't:
console.log(Infinity == "Infinity") // true
console.log(Infinity === "Infinity") // false

// Using the division operator will force the coercion prior to the comparison:
console.log(Infinity == "1"/"0") // true
console.log(Infinity === "1"/"0") // true

// But trying to coerce the whole equation results in a NaN value:
console.log(Infinity == "1/0") // false
console.log(Infinity === "1/0") // false

console.log(Object.is(Infinity, 1/0)) // true
console.log(Infinity === 1/0) // true
console.log(Infinity == 1/0) // true

console.log(Object.is(Infinity, "Infinity")) // false
console.log(Infinity === "Infinity") // false
console.log(Infinity == "Infinity") // true

console.log(isFinite("Infinity")) // false
console.log(isFinite("37")) // true

console.log(Number.isFinite("Infinity")) // false
console.log(Number.isFinite("37")) // false

console.log(Number.isFinite(Number("Infinity"))) // false
console.log(Number.isFinite(Number("37"))) // true

console.log("-------------------Special----------------------");

// Special
console.log({} + {}) // [object Object][object Object]
console.log([] + []) // 