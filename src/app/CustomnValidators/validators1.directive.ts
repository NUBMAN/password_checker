import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validatorPassword1(): ValidatorFn {
  return (control: AbstractControl):  {[key: string] : boolean}  | null =>{

    

    const value: string = control.value || ''

    if (value === '') {
      return null;
    }

     // Check if the password contains at least one letter, one digit, and one symbol
     const onlyLetters = /^[a-zA-Z]+$/.test(value);
     const onlyDigits = /^\d+$/.test(value);
     const onlySymbols = /^[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(value);
 
     const isEasy = onlyLetters || onlyDigits || onlySymbols;
     const isValid = !isEasy; // Password is valid if it's not an easy one
 
     console.log('Value:', value);
     console.log('Validation result:', isValid);
     console.log('It\'s easy password:', isEasy);
 
     return isValid ? null : { PasswordValid1: true };

  };
}