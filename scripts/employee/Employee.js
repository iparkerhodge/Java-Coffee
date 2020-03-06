const Employee = (employee) => {
    return `
        <div class="employee">
            <div class="employee__name">${employee.firstName} ${employee.lastName}</div>
            <div class="employee__title">${employee.jobTitle}</div>
            <div class="employee__hours">Hours Schecduled: ${employee.hoursScheduled}</div>
        </div>
    `
}

export default Employee