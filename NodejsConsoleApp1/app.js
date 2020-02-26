'use strict';
function Dog(name, breed) { //abstraction example
    name: name;
    breed: breed;
    this.getDetails = function(){
           return (`Dog Name: ${name}, Breed: ${breed}`);
    }
}
let dog1 = new Dog("Fluffy", "Cocker Spaniel");
console.log("Abstraction example: " + dog1.getDetails());

class cellPhone { //encapsulation example
    manufacturer = "Verizon";
    model = "Droid 10";
    getCellphoneDetails() {
    console.log (`Cellphone Manufacturer: ${this.manufacturer}, Cellphone Model: ${this.model}`);
    }
}
const cellphone1 = new cellPhone();
console.log("\nEncapsulation example: ");
cellphone1.getCellphoneDetails();

class HealthPractitioner { //inheritance example
    constructor(medicalField) {
        this.medicalField = medicalField;
    }
    toString(){
    return (`Medical Field: ${this.medicalField}`);
    }
}
class hospitalEmployee extends HealthPractitioner {
    constructor (medicalField, hospitalName, empName) {
        super(medicalField);
        this.hospitalName = hospitalName;
        this.empName = empName;
    }
    toString() {
        return (`${super.toString()}, Hospital Name: ${this.hospitalName}, Employee Name: ${this.empName}`);    
    }
}
console.log(`\nInheritance example- class: HealthPractitioner, extended class: hospitalEmployee`);
let emp1 = new hospitalEmployee ("OB/GYN", "Mt. Sinai Hospital", "Dr. Amy Smith");
console.log(emp1.toString());
let emp2 = new hospitalEmployee ("Neurology", "Metropolitan Hospital", "Dr. Owen Jones");
console.log(emp2.toString());
