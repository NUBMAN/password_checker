import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validatorPassword2(): ValidatorFn {
  return (control: AbstractControl):  {[key: string] : boolean}  | null =>{

    

    const value: string = control.value || ''

    if (value === '') {
      return null;
    }

     
     const hasLetters = /[a-zA-Z]/.test(value);
     const hasDigits = /\d/.test(value);
     const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value);
 
     const isMedium = (hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)
     const isValid = !isMedium; // Password is valid if it's not an medium one
 
     console.log('Value:', value);
     console.log('Validation result:', isValid);
     console.log('It\'s  medium paassword:', isMedium);
 
     return isValid ? null : { PasswordValid2: true };

  };
}