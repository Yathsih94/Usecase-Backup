
/**
 * Importing FormGroup method to write custom validations for Password and Confirm Password
 */
import { FormGroup } from "@angular/forms";

/**
 * method to validate password and confirm password
 * @param :group 
 */
export let confirmPassValid = (group: FormGroup) => {
    let password = group.value.pword;
    let cpassword = group.value.cpword;
    console.log(password, cpassword)
    return password === cpassword ? null : { 'custom': true }

}