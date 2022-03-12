
export function validatePassword (input) {
    return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.$!%*?&])[A-Za-z\d@.$!%*?&]{8,}$/).test(input);
}
export function validateMail (input) {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(input);
}
export function validateName (input) {
    return (/^$|^[A-Za-z]([ ]*[A-Za-z]){0,12}[^\s]$/).test(input);
}
export function validateNumber (input) {
    return (/^\d([ -]?\d){7}$/).test(input);
}
