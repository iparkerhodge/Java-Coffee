import { useEmployee } from "./employeeDataProvider.js"
import Employee from "./Employee.js"

const contentTarget = document.querySelector(".container")

export const employeeList = () => {
    const employeeArray = useEmployee()

    for (const employeeObject of employeeArray) {
        contentTarget.innerHTML += Employee(employeeObject)
    }
}