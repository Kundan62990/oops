console.log("oops");
// what exactly oops and why do we need it ?

// Object-Oriented Programming (OOP) is a programming paradigm that focuses on organizing code around objects, which are instances of classes that encapsulate data (attributes) and behavior (methods). OOP is based on several key principles:

// Encapsulation: Objects encapsulate data and methods, hiding the internal implementation details and providing an interface for interacting with the object. This helps in data protection and allows for modular code development.

// Inheritance: Inheritance allows objects/classes to inherit properties and methods from parent objects/classes. It promotes code reuse and hierarchy, as new classes can be created based on existing ones, inheriting their functionality.

// Polymorphism: Polymorphism enables objects to take on different forms while sharing a common interface. It allows objects of different classes to be used interchangeably, promoting flexibility and code extensibility.

// Abstraction: Abstraction allows you to create simplified models of real-world objects by focusing on essential characteristics and ignoring unnecessary details. It helps in managing complexity and allows for clearer and more modular code design.

// Now, why do we need OOP? Here are some benefits of using OOP:

// Modularity and code organization: OOP promotes the organization of code into smaller, reusable, and self-contained objects. This enhances code modularity, making it easier to understand, maintain, and debug.

// Code reusability: Through inheritance and object composition, OOP enables code reuse, reducing redundancy and saving development time. Existing classes and objects can be extended or modified to create new ones with additional or specialized functionality.

// Maintainability and scalability: OOP encourages clean code design, making it easier to maintain and update applications. It provides clear boundaries between different objects, allowing for independent development and modification of individual components. This scalability is particularly beneficial for large and complex projects.

// Collaboration and team development: OOP facilitates collaborative development by allowing different team members to work on separate objects or classes concurrently. Well-defined interfaces between objects promote better coordination and integration among team members.

// Modeling real-world concepts: OOP aligns with the way we perceive and interact with the real world. By modeling objects and their relationships, it becomes easier to conceptualize, design, and implement solutions to real-world problems.

// Code extensibility: OOP allows for easy extension of existing code through inheritance and polymorphism. New functionality can be added without modifying the existing codebase, reducing the risk of introducing bugs or breaking existing functionality.

// Overall, OOP provides a powerful set of tools and principles that enhance code organization, reusability, maintainability, and scalability. However, it's worth noting that OOP is not the only programming paradigm, and the choice of paradigm depends on the specific requirements and characteristics of the project.


// class -:In JavaScript, a class is a blueprint for creating objects with similar properties and methods. It serves as a template or a definition for creating instances of objects.


//creating a object 

let user1={
    name:"kundan",
    age:"24",
    mobile:"9568241303",
    username:"kund_25"
}
console.log(user1);

 function person(myname,myage,mymobile,myusername){
    return {
    name:myname,
    age:myage,
    mobile:mymobile,
    username:myusername
    }
}
let user2=person("kundan","24","567412463874","kun_45")
console.log(user2);

class user{
    constructor(myname,myage,mymobile,myusername){
        this.name=myname;
        this.age=myage;
        this.mobile=mymobile;
        this.username=myusername;
    }
}
let user3= new user("kundan","24","567412463874","kun_45")
console.log(user3);

console.log("Name", user1.name,user2.name,user3.name);