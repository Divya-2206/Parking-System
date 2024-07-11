import Pass from "./Pass.js"

class Yearly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = vehicle.vehicleType === 'bike' ? 10 : (vehicle.vehicleType === 'cycle' ? 5 : 50)
        let timeStamp = new Date()
        timeStamp.setFullYear(timeStamp.getFullYear() + 1)
        this.expiry = timeStamp
    }
}
export default Yearly