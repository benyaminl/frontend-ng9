import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
// @see https://angular.io/guide/form-validation#defining-custom-validators
// Welp seems the using a lot of function approach nowdays?
// I think it's possible to make static function like in Validators.fnName()
// @see https://angular.io/api/forms/Validators

export function fileRequiredValidator() : ValidatorFn {
    return (ctrl: AbstractControl): ValidationErrors | null => {
        // const fileUpload = (HTMLInputElement) ctrl;
        const forbid = ctrl.dirty && (ctrl.value as string).length > 0;
        // console.log(ctrl);
        return forbid ? null: {fileRequiredValidator: { value: ctrl.value , message: 'File is empty!'}};
    }; 
}