import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople(): void {
    this.personService.getPeople().subscribe((data) => {
      this.people = data;
    });
  }

  deletePerson(id: string): void {
    if (confirm('Confirm to delete this person?')) {
      this.personService.deletePerson(id).subscribe(() => {
        this.fetchPeople(); 
      });
    }
  }
}
