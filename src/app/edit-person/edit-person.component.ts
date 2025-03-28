import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person: any = {
    name: '',
    age: '',
    gender: '',
    mobileNumber: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const personId = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>('http://localhost:5000/person')
    .subscribe((people) => {
      this.person = people.find(p => p._id === personId);

      if (!this.person) {
        console.error('Person not found');
      }
    }, error => {
      console.error('Error fetching people:', error);
    });
  }

  updatePerson() {
    const personId = this.route.snapshot.paramMap.get('id');
    this.http.put(`http://localhost:5000/person/${personId}`, this.person)
      .subscribe(() => {
        alert('Person updated successfully!');
        this.router.navigate(['/']);
      }, error => {
        if(error.error.message.includes('E11000')) {
          alert('Mobile number already exists!');
        }
        console.error('Error updating person:', error);
      });
  }
}
