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
  show5 :boolean = false;
  show6 :boolean = false;
  show7 :boolean = false;
  show8 :boolean = false;
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

  viewContent5(){
    document.getElementById("collapseProject5").classList.remove("collapse");
    this.show5 = !this.show5;

    if(this.show5 == false)
    {
      document.getElementById("collapseProject5").classList.add("collapse");
    }
  }

  viewContent6(){
    document.getElementById("collapseProject6").classList.remove("collapse");
    this.show6 = !this.show6;

    if(this.show6 == false)
    {
      document.getElementById("collapseProject6").classList.add("collapse");
    }
  }

  viewContent7(){
    document.getElementById("collapseProject7").classList.remove("collapse");
    this.show7 = !this.show7;

    if(this.show7 == false)
    {
      document.getElementById("collapseProject7").classList.add("collapse");
    }
  }

  viewContent8(){
    document.getElementById("collapseProject8").classList.remove("collapse");
    this.show8 = !this.show8;

    if(this.show8 == false)
    {
      document.getElementById("collapseProject8").classList.add("collapse");
    }
  }
}
