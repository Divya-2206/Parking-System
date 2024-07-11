import Vehicle from "./Vehicle.js"

class Cycle extends Vehicle{
    constructor(owner,vehicleId){
    super(owner,vehicleId)
    this.type = 'cycle'
    
    }

}
export default Cycle