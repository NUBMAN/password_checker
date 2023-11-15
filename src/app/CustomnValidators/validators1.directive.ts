import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validatorPassword1(): ValidatorFn {
  return (control: AbstractControl):  {[key: string] : boolean}  | null =>{

    

    const value: string = control.value || ''

    if (value === '') {
      return null;
    }

    const hasLetter = /[a-zA-Z]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value);

    const isValidCombination = (hasLetter && hasDigit) || (hasLetter && hasSymbol) || (hasDigit && hasSymbol);

    const isValid = hasLetter && hasDigit && hasSymbol && !isValidCombination;

    console.log('Value:', value);
    console.log('Validation result:', isValid);



    return isValid ? null : {PasswordValid1: true}

  };
}