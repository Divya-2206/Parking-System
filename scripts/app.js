import Student from './user/Student.js'
import Faculty from './user/Faculty.js'
import Bike from './vehicle/Bike.js'
import Car from './vehicle/Car.js'
import Cycle from './vehicle/Cycle.js'
import Daily  from './pass/Daily.js'
import Monthly  from './pass/Monthly.js'
import Yearly  from './pass/Yearly.js'



document.addEventListener('DOMContentLoaded',() => {
    const name = document.getElementById('name')
    const contact = document.getElementById('contact')
    const role = document.getElementById('role')
    const saveUserBtn = document.getElementById('saveUserBtn')
    saveUserBtn.addEventListener('click', e => {
        e.preventDefault()
        const user = role.value === 'student'
                                ? new Student(name.value, contact.value)
                                : new Faculty(name.value, contact.value)
        console.log(user);

        alert(`Congratulation ${user.name} !! you have been registered successfully.`)
        document.querySelector('.user').style.display = 'none'

        const vehicleId = document.getElementById('vehicleId')
        const vehicleType = document.getElementById('vehicleType')
        const vehicleSaveBtn = document.getElementById('vehicleSaveBtn')
        vehicleSaveBtn.addEventListener('click', e => {
            e.preventDefault()
            let vehicle = null
            switch(vehicleType.value){
                case 'bike':
                    vehicle = new Bike( user, vehicleId.value)
                break;
                case 'car':
                    vehicle = new Car(user, vehicleId.value)
                break;
                case 'cycle':
                    vehicle = new Cycle( user, vehicleId.value)
                break
            }

            alert('Congratulations, your vehicle has been successfully saved .')
            document.querySelector('.vehicle').style.display = 'none'

            const passchoiceForm = document.querySelector('.pass-choice')

            const dailyPass = new Daily(vehicle)
            const dailyPassBtn = document.createElement('INPUT')
            dailyPassBtn.setAttribute('type', 'button')
            dailyPassBtn.setAttribute('value', `Daily : ${dailyPass.price}`)
            passchoiceForm.appendChild(dailyPassBtn)
            dailyPassBtn.addEventListener('click', () => {
                dailyPass.print()
            })

            const monthlyPass = new Monthly(vehicle)
            const monthlyPassBtn = document.createElement('INPUT')
            monthlyPassBtn.setAttribute('type', 'button')
            monthlyPassBtn.setAttribute('value', `Monthly : ${monthlyPass.price}`)
            passchoiceForm.appendChild(monthlyPassBtn)
            monthlyPassBtn.addEventListener('click', () => {
                monthlyPass.print()
            })

            const yearlyPass = new Yearly(vehicle)
            const yearlyPassBtn = document.createElement('INPUT')
            yearlyPassBtn.setAttribute('type', 'button')
            yearlyPassBtn.setAttribute('value', `Yearly : ${yearlyPass.price}`)
            passchoiceForm.appendChild(yearlyPassBtn)
            yearlyPassBtn.addEventListener('click', () => {
                yearlyPass.print()
            })

        })
        
    })
})
    
