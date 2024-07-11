import Vehicle from "./Vehicle.js";
class Bike extends Vehicle{
    constructor(owner,vehicleId){
    super(owner,vehicleId)
    this.type = 'bike'
    
    }

}
export default Bike