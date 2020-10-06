import { Component } from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})

export class BodyComponent{
    view:boolean=false;

    sentence:object={
        message:'Ya estamos haciendo notas',
        author:'4 Nota 3 Febrero'
    };

    persons:string[]=['Nota 5 de mayo ','Nota 3 Diciembre','Nota 4 Abril']
}