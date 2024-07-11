import Pass from "./Pass.js"

class Monthly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = vehicle.vehicleType === 'bike' ? 10 : (vehicle.vehicleType === 'cycle'? 5 : 50)
        let timeStamp = new Date()
        timeStamp.setMonth(timeStamp.getMonth() + 1)
        this.expiry = timeStamp
    }
}
export default Monthly