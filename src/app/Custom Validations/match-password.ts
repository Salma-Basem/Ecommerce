import { AbstractControl } from "@angular/forms";

export let MatchPassword =(control:AbstractControl)=>{

    let password = control.value.password
    let rePassword = control.value.rePassword

    if(password==rePassword && password && rePassword)
        {
            return null
        }
        else{ return {matchpass:true}}

}