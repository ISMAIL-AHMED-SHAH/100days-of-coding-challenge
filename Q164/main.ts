console.log("\n\n");
// *********************************
//  * TYPE ANNOTATIONS WITH OBJECTS *
//  *********************************

let personOne: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
        street: string;
        city: string;
    };
};

personOne = {
    name: "Ali",
    age: 29,
    jobTitle: "Cloud Applied Engineer",
    address: {
        street: "1323 Shahi Street",
        city: "Dreamland"
    },
};
console.log(personOne);


console.log("\n\n");
// Another method

let personTwo: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "Alinaa",
    age: 22,
    jobTitle: "Generative AI Engineer",
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
  };
  console.log(personTwo);
  