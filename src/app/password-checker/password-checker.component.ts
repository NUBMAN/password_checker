    import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { validatorPassword1 } from '../CustomnValidators/validators1.directive';
import { validatorPassword2 } from '../CustomnValidators/validators2.directive';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent implements OnInit{
  colorBlank: string = 'grey'
  colorBlank2: string = 'grey'
  colorBlank3: string = 'grey'
  passworISEasy: boolean = true


   password =  new FormControl( '', [
    // Validators.minLength(8),
    Validators.minLength(8),
    validatorPassword1(),
    validatorPassword2()
   ])

   ngOnInit(): void {
     this.password.valueChanges.subscribe( value => {
      console.log(value)
      let isMin = this.password.hasError('minlength')
      console.log(isMin)
      let isEasy = this.password.hasError('PasswordValid1')
      console.log(isEasy)
      let isMedium = this.password.hasError('PasswordValid2')
      console.log(isMedium)

      this.colorBlank = 'grey'
        this.colorBlank2 = 'grey'
        this.colorBlank3 = 'grey'
      if(isMin){
        this.colorBlank = 'red'
        this.colorBlank2 = 'red'
        this.colorBlank3 = 'red'
        console.log('It\'s password too short')

      } else if (isEasy) {
        this.colorBlank = 'red';
        this.colorBlank2 = 'grey';
        this.colorBlank3 = 'grey'
        console.log('It\'s easy password')
        
      } else if(isMedium){
        this.colorBlank = 'yellow';
        this.colorBlank2 = 'yellow';
        this.colorBlank3 = 'grey'
      }


      
   })




}
   

}

 
 

    




  
 


