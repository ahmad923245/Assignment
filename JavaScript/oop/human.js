class Human{
    constructor(){
        this.name = "ahmad";
        this.age = "";
    }
    Eat(){
        return "I am Eating"
    }
    Walk(){
        return "I am Walking"
    }
}
class Dr extends Human{
    constructor(){
        super(name,age);

    }


}

class StreetMan extends Human{
    super(name,age);
    constructor(name,age){
        
    }
    get(){
        console.log("the" + this.name + this.Age);
    }


}

let h1 = new StreetMan("waqas",23)  