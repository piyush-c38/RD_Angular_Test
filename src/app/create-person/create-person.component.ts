import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {
  person = {
    name: '',
    age: '',
    gender: '',
    mobileNumber: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  createPerson() {
    this.http.post('http://localhost:5000/person', this.person)
      .subscribe(() => {
        alert('Successfully Person Created!');
        this.router.navigate(['/']);
      }, error => {
        console.error('Error in creating Person:', error);
      });
  }
}
