class Car {

	// The constructor initializes the properties.
	// It gets called when we do: new Car(some_brand)
	constructor(brand, model) {
		this.brand = brand;
        this.model = model;
		this.speed = 0;
        this.motion ="The car is not moving (initial condition) "
	}

	// methods:

	// (notice that now we don't say "function" and that we
	//  don't put a comma after closing brace of the function)

    check_motion()  {
        (this.speed > 0) ? this.motion = "The car is moving" : this.motion = "The car has stopped"

    }
    
	accelerate(amount) {
		this.speed += amount;
        this.check_motion()
	}

	brake(amount) {
    //    if (amount >= this.speed){
    //        this.speed = 0;
    //    }
       
    //    else {this.speed -= amount;}
		
        // the following ternary conditional has the same meaning as the if-else statement above
        (amount >= this.speed) ? this.speed = 0 : this.speed -= amount
        this.check_motion();
	}
    
    emergency_brake() {
        this.speed = 0;
        this.check_motion()
    }
    
	status() {
		return this.brand + " " +  this.model +  " running at " + this.speed + " km/h;" + " status check: " + this.motion;
	}
}