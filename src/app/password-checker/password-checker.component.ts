    import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { validatorPassword1 } from '../CustomnValidators/validators1.directive';

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
    validatorPassword1()
   ])

   ngOnInit(): void {
     this.password.valueChanges.subscribe( value => {
      console.log(value)
      let isMin = this.password.hasError('minlength')
      console.log(isMin)
      let isEasy = this.password.hasError('PasswordValid1')
      console.log(isEasy)

      
      if(isMin){
        this.colorBlank = 'red'
        this.colorBlank2 = 'red'
        this.colorBlank3 = 'red'
        console.log('It\'s password too short')
      } 

      if (!isEasy) {
        this.colorBlank = 'red';
        this.colorBlank2 = 'grey';
        this.colorBlank3 = 'grey'
        console.log('It\'s easy password')
      }  


      
   })




}
   

}

 
 

    




  
 


