class Car {
    constructor() {
        this.name = "BMW";
        this.price = "50000";
        this.color = "white";
    }

    getCarPrice() {
        console.log(`Car: ${this.name}, Price: ${this.price}`);
    }

}

class BMW extends Car{
    constructor(){
        super();
        this.model = "X5";

    }
    
    getCarDetails(){
        console.log(`Model: ${this.model}, Color: ${this.color}`);
    }
     
}

const myBMW = new BMW();
myBMW.getCarPrice();
myBMW.getCarDetails();

