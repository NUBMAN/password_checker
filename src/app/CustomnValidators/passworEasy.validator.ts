import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ValidatorsPasswordEasy(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (!control.value) {
      return null;
    }

    const onlyLetters = /^[a-zA-Z]+$/.test(control.value);
    const onlyDigits = /^\d+$/.test(control.value);
    const onlySymbols = /^[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(control.value);
    const isEasy = onlyLetters || onlyDigits || onlySymbols;


    return isEasy ? { passwordEasy: true } : null;
  };
}