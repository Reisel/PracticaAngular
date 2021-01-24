import {Directive, ElementRef} from "@angular/core";

@Directive({
    selector: "[MiDirectiva]"
})

export class MiDirectivaDirective {
    constructor(elem: ElementRef){
        elem.nativeElement.style.color = "white";
        elem.nativeElement.style.backgroundColor = "red";
        elem.nativeElement.style.border = "3px black solid";
        elem.nativeElement.style.fontSize = "30px";
    }

}