import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ValidatorsPasswordEasy } from '../CustomnValidators/passworEasy.validator';
import { validatorPasswordMedium } from '../CustomnValidators/passwordMedium.validator';
import { validatorPasswordStrong } from '../CustomnValidators/passwordStrong.validator';
@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent implements OnInit {
  colorSection1: string = 'grey';
  colorSection2: string = 'grey';
  colorSection3: string = 'grey';

  isMinError: boolean;
  isEasyError: boolean;
  isMediumError: boolean;
  isStrongError: boolean;

  password = new FormControl('', [
    Validators.minLength(8),
    ValidatorsPasswordEasy(),
    validatorPasswordMedium(),
    validatorPasswordStrong()
  ])

  ngOnInit(): void {
    this.password.valueChanges.subscribe(() => {
      this.isMinError = this.password.hasError('minlength');
      this.isEasyError = this.password.hasError('passwordEasy');
      this.isMediumError = this.password.hasError('passwordMedium');
      this.isStrongError = this.password.hasError('passwordStrong');

      this.colorSection1 = this.colorFirstSectionHandler();
      this.colorSection2 = this.colorSecondSectionHandler();
      this.colorSection3 = this.colorThirdSectionHandler();
    })
  }

  public colorFirstSectionHandler(): 'grey' | 'green' | 'yellow' | 'red' {
    if (this.isMinError) {
      return 'red';
    } else if (this.isEasyError) {
      return 'red';
    } else if (this.isMediumError) {
      return 'yellow';
    } else if (this.isStrongError) {
      return 'green';
    }
    else return 'grey'
  }

  public colorSecondSectionHandler(): 'grey' | 'green' | 'yellow' | 'red' {
    if (this.isMinError) {
      return 'red';
    } else if (this.isMediumError) {
      return 'yellow';
    } else if (this.isStrongError) {
      return 'green';
    }
    else return 'grey'
  }

  public colorThirdSectionHandler(): 'grey' | 'green' | 'yellow' | 'red' {
    if (this.isMinError) {
      return 'red';
    } else if (this.isStrongError) {
      return 'green';
    }
    else return 'grey'
  }
}














