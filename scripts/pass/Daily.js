import Pass from "./Pass.js"

class Daily extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = vehicle.type === 'bike' ? 10 : (vehicle.type === 'cycle'? 5 : 50)
        let timeStamp = new Date()
        timeStamp.setDate(timeStamp.getDate() + 1)
        this.expiry = timeStamp
    }
}
export default Daily