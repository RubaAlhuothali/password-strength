function PasswordStrength(Password){
let strength=0;

if (/[A-Z]/.test(Password))strength++;
if (/[0-9]/.test(Password))strength++;
if (Password.length >=6)strength++;

if (strength <=1){
    return 'weak password'
}
if (strength === 2) {
    return 'Medium strength'
} else {
    return 'strong password'
}
}
let password = prompt ('Enter you password');
console.log(PasswordStrength(password));