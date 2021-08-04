//Main Class
class cars {
    constructor(carMark,carModel,carYear,carColor,EngineType) {
        this.carMark  = carMark;
        this.carModel = carModel;
        this.carYear = carYear;
        this.carColor = carColor;
        this.EngineType = EngineType;
    }
    ShowInfo() {
        return this.carMark + '<br>' + this.carModel   + 
        '<br>' + this.carYear+ '<br>' +  this.carColor +'<br>' +   this.EngineType;
    }
}

//Extend Cars Class
class ExtendedCar extends cars {
    constructor(carMark,carModel,carYear,carColor,EngineType, odometr) {
        super(carMark,carModel,carYear,carColor,EngineType); 
        this.odometr = odometr;
    }
    ShowExtendedInfo() {
        if (this.odometr > 2000) {
            this.odometrState = 'Used';
        } else {
            this.odometrState = 'New';
        }
        return super.ShowInfo() + '<br>' + this.odometrState + '<br> Odometr = ' + this.odometr;
    }
}

//Private Method return
class privateCars {
    constructor(carMark,carModel,carYear,carColor,EngineType) {
        this.carMark  = carMark;
        this.carModel = carModel;
        this.carYear = carYear;
        this.carColor = carColor;
        this.EngineType = EngineType;
    }
    #ShowInfo() {
        return  this.carMark + '<br>' + this.carModel + '<br>' + this.carYear + '<br>' + this.carColor + '<br>' + this.EngineType;
    }
    getAllCars(){
        return this.#ShowInfo();
    }
}

//Static method return
class staticCars {
    static carMark  = 'Toyota';
    static carModel = 'Celica';
    static carYear = 2004;
    static carColor = 'green';
    static EngineType = 'Petrol';

    ShowInfo() {
        return  staticCars.carMark + '<br>' + staticCars.carModel   + '<br>' + staticCars.carYear+ '<br>' 
        + staticCars.carColor +'<br>' + staticCars.EngineType;
    }
}

//New instance of Classes
var FirstCar = new cars('Ford', 'Probe','1994', 'blue', 'Petrol');
var SecondCar = new ExtendedCar('Mazda', 'Rx7','2000', 'red', 'Petrol', 2005);
var ThirdCar = new privateCars('Alfa Romeo', '166','2004', 'silver', 'Disel');
var FourthCar = new staticCars();

//Calls on Mouse over, with object ("element(this)") providing
function getCarDetails(element) {
    element.innerHTML = FirstCar.ShowInfo();
}
function getExtendedCarInfo(element) {
    element.innerHTML = SecondCar.ShowExtendedInfo();
}
function GetPrivateCars(element) {
    element.innerHTML = ThirdCar.getAllCars();
}
function GetStaticCars(element) {
    element.innerHTML = FourthCar.ShowInfo();
}
