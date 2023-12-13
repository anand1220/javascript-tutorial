

const accountId = 101;
let accountEmail = 'ak@example.com';
var accountPass = "12345";
accountCity = "Kangra";

// accountId = 2;    - Not allowed (assignment to constant variable)
// console.log(accountId);

accountEmail = "ak333@gamil.com";
accountPass = "434343";
accountCity = "Chennai";

console.table([accountId, accountEmail, accountPass, accountCity]);


/*
- Difference between var let and const 
1. var has a functional scope while let and const are block scoped.

2. Variable declared with var becomes the property in the window object while let and const does not add itself in the window object.

3. When we declare variable using var is hoisted to the top of their containing function or global scope. let and const are also hoisted but not initialized , we can not access in the temporal dead zone.

# Temporal Dead Zone - It is a period variable is declared but value is not assigned. Between this period if we try to access the variable then we will get the error.


*/