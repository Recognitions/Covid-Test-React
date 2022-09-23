function ageFormat(string){
    const year = parseInt(string.slice(0,4));
    const month = parseInt(string.slice(5,2));
    const day = parseInt(string.slice(8));
    const data = new Date()
    const yearActual = data.getFullYear();
    const monthActual = data.getMonth()+1;
    const dayActual = data.getDate();
    const age = yearActual-year;
    if(monthActual<month){
        age -= 1;
    }

    return age
}

export default ageFormat