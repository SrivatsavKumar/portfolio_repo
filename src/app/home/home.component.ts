import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent{
    title = "Hi, I'm Sri Vatsav Kumar, Patapanchala!";
    imagePath: string = "assets/images/tbn1.png";

    downloadResume(){
        let link = document.createElement('a');
        link.setAttribute('type','hidden');
        link.href = 'assets/ResumeInternships.pdf';
        link.download = 'assets/ResumeInternships.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove(); 

    }

    downloadTranscripts(){
        let link = document.createElement('a');
        link.setAttribute('type', 'hidden');
        link.href = 'assets/SSR_TSRPT.pdf';
        link.download = 'assets/SSR_TSRPT.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    myFunc(){
        document.getElementById("tableCustom").classList.remove("d-none");
    }
}