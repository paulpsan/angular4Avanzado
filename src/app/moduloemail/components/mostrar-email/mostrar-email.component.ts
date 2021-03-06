import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  template: `
    <div *ngIf="emailContacto">
        <h4>{{title}}</h4>
        Email de Contacto: {{emailContacto}}
        <button (click)="borrarEmail()">Eliminar email de contacto</button>
    </div>
  `
})
export class MostrarEmailComponent implements DoCheck, OnInit {
    public title = 'Mostrar email';
    public emailContacto: string;

    ngOnInit() {
        this.emailContacto = localStorage.getItem('emailContacto');    
    }

    ngDoCheck() {
        this.emailContacto = localStorage.getItem('emailContacto');    
    }

    borrarEmail() {
        localStorage.removeItem('emailContacto');

        //localStorage.clear();
        this.emailContacto = null;
    }
}
