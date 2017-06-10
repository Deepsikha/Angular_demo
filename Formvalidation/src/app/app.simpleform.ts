import { Component } from '@angular/core';

@Component({
  selector: 'simple-form',
  template: `
    <div class="jumbotron">
      <h1>Simple Form</h1>
      <form #form="ngForm" (ngSubmit)="submitForm(form.value)">
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" placeholder="Mike" name="firstName" ngModel required>
        </div>

        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" placeholder="76" name="lastName" ngModel required>
        </div>
        
        <div class="form-group">
          <label>Gender</label>
        </div>
        
        <div class="radio">
          <label>
            <input type="radio" name="gender" value="Male" ngModel> Male
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="gender" value="Female" ngModel> Female
          </label>
        </div>
        
        <div class="form-group">
          <label>Activities</label>
        </div>
        <label class="checkbox-inline">
          <input type="checkbox" value="hiking" name="hiking" ngModel> Hiking
        </label>
        <label class="checkbox-inline">
          <input type="checkbox" value="swimming" name="swimming" ngModel> Swimming
        </label>
        <label class="checkbox-inline">
          <input type="checkbox" value="running" name="running" ngModel> Running
        </label>
        <div class="form-group">
          <button type="submit" class="btn btn-default">Submit</button>
        </div>
      </form>
    </div>
  `
})

export class SimpleFormComponent {
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}

