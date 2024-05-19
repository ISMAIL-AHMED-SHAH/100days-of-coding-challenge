var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("\n*===CLASS TYPE ANNOTATIONS===*\n");
var Student = /** @class */ (function () {
    function Student(id, name, gpa) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }
    Student.prototype.getStudentInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", GPA: ").concat(this.gpa);
    };
    return Student;
}());
var student1 = new Student(101, "Ali Ismail", 4.2);
console.log(student1.getStudentInfo());
console.log("\n\n");
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        // Constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method type annotations
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
// Create an instance of the Product class
var product1 = new Product(1, "Widget", 20.0);
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
var MyClassPublic = /** @class */ (function () {
    function MyClassPublic(name) {
        this.name = name;
    }
    return MyClassPublic;
}());
var instancePublic = new MyClassPublic("Ali");
console.log(instancePublic.name);
console.log("\n'EXAMPLE FOR '**private**' Modifier'\n");
//  2. private Modifier : Members declared as private are only accessible from within the class they are defined in.
var MyClassPrivate = /** @class */ (function () {
    function MyClassPrivate(secret) {
        this.secret = secret;
    }
    MyClassPrivate.prototype.revealSecret = function () {
        console.log(this.secret);
    };
    return MyClassPrivate;
}());
var instancePrivate = new MyClassPrivate("My secret");
instancePrivate.revealSecret();
console.log("\n'EXAMPLE FOR '**protected**' Modifier'\n");
//  3. protected Modifier :  Members declared as protected are accessible from within the class they are defined in and from subclasses (derived classes).
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.familyName = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.introduceFamily = function () {
        console.log("Our family name is ".concat(this.familyName));
    };
    return Child;
}(Parent));
var parent1 = new Parent("Ismail");
var child = new Child("Ahmed");
child.introduceFamily(); // This is a valid way to access the protected property
// console.log(parent.familyName); // This would result in an error because familyName is protected
console.log("\n\n'***CLASS ACCESSORS***'\n"); //  Also known as getters & setters
var ProductExAccessors = /** @class */ (function () {
    function ProductExAccessors(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0; // Default price
    }
    Object.defineProperty(ProductExAccessors.prototype, "price", {
        get: function () {
            return this._price;
        },
        // ' public ' setter for price
        set: function (newPrice) {
            if (newPrice >= 0) {
                this._price = newPrice;
            }
            else {
                console.log("Price cannot be negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProductExAccessors.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this._price);
    };
    return ProductExAccessors;
}());
// Create an instance of the ProductExAccessors class
var productEx = new ProductExAccessors(1, "Widget");
console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0
// Use the 'setter' to update the price
productEx.price = 99.00;
console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $99
// Attempting to set a negative price triggers the setter logic
productEx.price = -1; // Price cannot be negative.
console.log("\n\n'***CLASS STATIC MEMBERS***'\n");
var ProductStaticMembers = /** @class */ (function () {
    function ProductStaticMembers(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductStaticMembers.generateNextId = function () {
        return ProductStaticMembers.nextId++;
    };
    ProductStaticMembers.prototype.getProductInfo1 = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    // 'private' static property
    ProductStaticMembers.nextId = 1;
    return ProductStaticMembers;
}());
// Generate unique IDs for products using the static method
var product1static1 = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
var product2static1 = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
var product3static1 = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Instrument");
var product4static1 = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gizmo");
console.log(product1static1.getProductInfo1()); // ID: 1, Name: Widget
console.log(product2static1.getProductInfo1()); // ID: 2, Name: Gadget
console.log(product3static1.getProductInfo1()); // ID: 3, Name: Instrument
console.log(product4static1.getProductInfo1()); // ID: 3, Name: Gizmo
console.log("\n\n'***CLASS IMPLEMENTING AN INTERFACE***'\n");
var ProductImplementInterface = /** @class */ (function () {
    function ProductImplementInterface(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductImplementInterface.generateNextId = function () {
        return ProductImplementInterface.nextId++;
    };
    ProductImplementInterface.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    //  'private' static property
    ProductImplementInterface.nextId = 1;
    return ProductImplementInterface;
}());
var product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gizmo");
var product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gadget");
var product3implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Widget");
console.log(product1implement.getProductInfo());
console.log(product2implement.getProductInfo());
console.log(product3implement.getProductInfo());
console.log("\n\n'***ABSTRACT CLASSES MEMBERS***'\n");
var AbstractItem = /** @class */ (function () {
    function AbstractItem(id, name) {
        this.id = id;
        this.name = name;
    }
    AbstractItem.generateNextId = function () {
        return AbstractItem.nextId++;
    };
    AbstractItem.nextId = 1;
    return AbstractItem;
}());
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(id, name) {
        return _super.call(this, id, name) || this;
    }
    Item.prototype.getItemInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Item;
}(AbstractItem));
var item1 = new Item(AbstractItem.generateNextId(), "Widget");
var item2 = new Item(AbstractItem.generateNextId(), "Instrument");
console.log(item1.getItemInfo());
console.log(item2.getItemInfo());
console.log("\n\n'***POLYMORPHISM & METHOD OVERRIDE***'\n");
// Define an abstract class
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity(id, name) {
        this.id = id;
        this.name = name;
    }
    AbstractEntity.generateNextId = function () {
        return AbstractEntity.nextId++;
    };
    AbstractEntity.nextId = 1;
    return AbstractEntity;
}());
// create a concrete subclass
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity(id, name) {
        return _super.call(this, id, name) || this;
    }
    Entity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Entity;
}(AbstractEntity));
var AnotherEntity = /** @class */ (function (_super) {
    __extends(AnotherEntity, _super);
    function AnotherEntity(id, name) {
        return _super.call(this, id, name) || this;
    }
    AnotherEntity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Additional Info: ...");
    };
    return AnotherEntity;
}(AbstractEntity));
var entity1 = new Entity(AbstractEntity.generateNextId(), "Machine");
var entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Ornament");
console.log(entity1.getEntityInfo());
console.log(entity2.getEntityInfo());
console.log("\n\n\n'===THANK YOU==='\n\n\n");
