console.log("\n*===CLASS TYPE ANNOTATIONS===*\n")

class Student {
    id: number;
    name: string;
    gpa: number;

 constructor(id: number, name: string, gpa: number) {
    this.id = id;
    this.name = name;
    this.gpa = gpa;
 }
 getStudentInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, GPA: ${this.gpa}`
 }
}
const student1 = new Student(101, "Ali Ismail", 4.2)

console.log(student1.getStudentInfo());

console.log("\n\n");
class Product {
    // Property type annotations
    id: number;
    name: string;
    price: number;
    
    constructor(id: number, name: string, price: number) {
        // Constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
    // Method type annotations
    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
// Create an instance of the Product class
const product1 = new Product(1, "Widget", 20.0);

// Access class properties and call a method
console.log(product1.getProductInfo());



// class Product2 {
    //     id: number;
    //     name: string;
    //     price: number;
    
    //     constructor(id: number, name: string, price: number){
        //         this.id = id;
        //         this.name = name;
        //         this.price = price;
        //     }
        
        //     getProduct(): string {
            //         return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
            //     }
            // }
            // const product3 = new Product2(5, "IPhone", 555);
            
            // console.log(product3.getProduct());
            


console.log("\n\n'---Class Access Modifiers in TypeScript---'\n");
console.log("\n'EXAMPLE FOR '**public**' Modifier'\n");
// 1. public Modifier  :  Members declared as public are accessible from anywhere, both within and outside the class. 
class MyClassPublic {
    public name: string;   //  It's the default modifier if you don't explicitly specify one.
    
    constructor(name: string){
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("Ali");
console.log(instancePublic.name);


console.log("\n'EXAMPLE FOR '**private**' Modifier'\n");
//  2. private Modifier : Members declared as private are only accessible from within the class they are defined in.

class MyClassPrivate {
    private secret: string;
    
    constructor(secret: string){
        this.secret= secret;
    }
    revealSecret() {
        console.log(this.secret);
        
    }
}

const instancePrivate = new MyClassPrivate("My secret");

instancePrivate.revealSecret();















console.log("\n'EXAMPLE FOR '**protected**' Modifier'\n");
//  3. protected Modifier :  Members declared as protected are accessible from within the class they are defined in and from subclasses (derived classes).
class Parent {
    protected familyName: string;
    
    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
        
    }
}

const parent1 = new Parent("Ismail");
const child = new Child("Ahmed");


child.introduceFamily();  // This is a valid way to access the protected property

// console.log(parent.familyName); // This would result in an error because familyName is protected






console.log("\n\n'***CLASS ACCESSORS***'\n");   //  Also known as getters & setters

class ProductExAccessors {
    // 'private' property
    private _price: number;
    constructor(private id: number, private name: string) {
        this._price = 0;  // Default price
    }
    get price(): number {
        return this._price;
    }
    
    // ' public ' setter for price
    set price(newPrice: number) {
        if (newPrice >= 0){
            this._price = newPrice;
        } else {
            console.log("Price cannot be negative.");
            
        }
    }
    
    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
}

// Create an instance of the ProductExAccessors class
const productEx = new ProductExAccessors(1, "Widget");

console.log(productEx.getProductInfo());    // Default price: ID: 1, Name: Widget, Price: $0

// Use the 'setter' to update the price
productEx.price = 99.00;

console.log(productEx.getProductInfo());    // Updated price: ID: 1, Name: Widget, Price: $99

// Attempting to set a negative price triggers the setter logic
productEx.price = -1;   // Price cannot be negative.




console.log("\n\n'***CLASS STATIC MEMBERS***'\n");   


class ProductStaticMembers {
    // 'private' static property
    private static nextId: number = 1;
    
    constructor(private id: number, private name: string) {}
    
    static generateNextId(): number {
        return ProductStaticMembers.nextId++;
    }
    
    getProductInfo1(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

// Generate unique IDs for products using the static method
const product1static1 = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
const product2static1 = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
const product3static1 = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Instrument");
const product4static1 = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gizmo");

console.log(product1static1.getProductInfo1()); // ID: 1, Name: Widget
console.log(product2static1.getProductInfo1()); // ID: 2, Name: Gadget
console.log(product3static1.getProductInfo1()); // ID: 3, Name: Instrument
console.log(product4static1.getProductInfo1()); // ID: 3, Name: Gizmo



console.log("\n\n'***CLASS IMPLEMENTING AN INTERFACE***'\n");   

interface ProductInterface {
    id: number;
    name: string;
    getProductInfo(): string;
}

class ProductImplementInterface implements ProductInterface {
    //  'private' static property
    private static nextId: number = 1;
    
    constructor(public id: number, public name: string) {}
    
    static generateNextId(): number {
        return ProductImplementInterface.nextId++;
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}


const product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gizmo");
const product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gadget");
const product3implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Widget");

console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo());
console.log(product3implement.getProductInfo());



console.log("\n\n'***ABSTRACT CLASSES MEMBERS***'\n");   


abstract class AbstractItem {
    private static nextId: number = 1;
    
    constructor(public id: number, protected name: string) {}
    
    static generateNextId(): number {
        return AbstractItem.nextId++;
    }
    abstract getItemInfo(): string;
}

class Item extends AbstractItem {
    constructor(id: number, name: string) {
        super(id, name);
    }
    
    getItemInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Instrument");

console.log(item1.getItemInfo());
console.log(item2.getItemInfo());




console.log("\n\n'***POLYMORPHISM & METHOD OVERRIDE***'\n");   

// Define an abstract class
abstract class AbstractEntity {
    private static nextId: number = 1;

    constructor(public id: number, protected name: string) {}

    static generateNextId(): number {
        return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
}

// create a concrete subclass
class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
        super(id, name);
    }

    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

class AnotherEntity extends AbstractEntity{
    constructor(id: number, name: string) {
        super(id, name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}

const entity1: AbstractEntity = new Entity(AbstractEntity.generateNextId(), "Machine");
const entity2: AbstractEntity = new AnotherEntity(AbstractEntity.generateNextId(), "Ornament");

console.log(entity1.getEntityInfo());
console.log(entity2.getEntityInfo());


console.log("\n\n\n'===THANK YOU==='\n\n\n");
