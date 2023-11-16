import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validatorPasswordMedium(): ValidatorFn {
  return (control: AbstractControl):  ValidationErrors  | null =>{
    
    if (control.value === '') {
      return null;
    }
     
    const hasLetters = /[a-zA-Z]/.test(control.value);
    const hasDigits = /\d/.test(control.value);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(control.value);
    const isMedium = ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols))
    !== (hasLetters && hasDigits && hasSymbols) 
  
    return isMedium ?  { passwordMedium: true } : null;
  };
}