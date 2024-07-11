import User from "./User.js"

class Faculty extends User{
    constructor(name,contact){
       super(name,contact)
       this.role = "faculty"
    }
    

}
export default Faculty