import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    @Output() selectedFeature = new EventEmitter<string>();
    onSelect(feature: string)
    {
        this.selectedFeature.emit(feature);
    }

    myFuncnavbar(){
        document.getElementById("navbarNavDropdown").classList.remove("collapse")

        setTimeout(function() {document.getElementById("navbarNavDropdown").classList.add("collapse")},3000);

    }
}