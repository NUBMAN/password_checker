import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validatorPasswordStrong(): ValidatorFn {
    return (control: AbstractControl):  {[key: string] : boolean}  | null =>{
      
    if (control.value === '') {
      return null;
    }

    const hasLetters = /[a-zA-Z]/.test(control.value);
    const hasDigits = /\d/.test(control.value);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(control.value);
    const isStrong = (hasLetters && hasSymbols && hasDigits)

    return isStrong ?  { passwordStrong: true } : null;

  };
}   