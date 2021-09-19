import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  show1 :boolean = false;
  show2 :boolean = false;
  show3 :boolean = false;
  show4 :boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  viewContent1(){
    document.getElementById("collapseProject1").classList.remove("collapse");
    this.show1 = !this.show1;

    if(this.show1 == false)
    {
      document.getElementById("collapseProject1").classList.add("collapse");
    }
  }

  viewContent2(){
    document.getElementById("collapseProject2").classList.remove("collapse");
    this.show2 = !this.show2;

    if(this.show2 == false)
    {
      document.getElementById("collapseProject2").classList.add("collapse");
    }
  }

  viewContent3(){
    document.getElementById("collapseProject3").classList.remove("collapse");
    this.show3 = !this.show3;

    if(this.show3 == false)
    {
      document.getElementById("collapseProject3").classList.add("collapse");
    }
  }

  viewContent4(){
    document.getElementById("collapseProject4").classList.remove("collapse");
    this.show4 = !this.show4;

    if(this.show4 == false)
    {
      document.getElementById("collapseProject4").classList.add("collapse");
    }
  }
}
