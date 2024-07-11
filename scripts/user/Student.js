import User from "./User.js"

class Student extends User{
    constructor(name,contact){
       super(name,contact)
       this.role = "student"
    }
    

}
export default Student