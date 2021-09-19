import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  firstname: string = "Sri Vatsav Kumar";
  lastname: string = "Patapanchala";
  constructor() { }

  ngOnInit(): void {
  }

}
