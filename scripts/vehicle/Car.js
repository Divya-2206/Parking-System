import Vehicle from "./Vehicle.js"

class Car extends Vehicle{
    constructor(owner,vehicleId){
    super(owner,vehicleId)
    this.type = 'cycle'
    
    }

}
export default Car