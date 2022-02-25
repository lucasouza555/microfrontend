import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Item } from 'src/app/web-components';

@Component({
    templateUrl: './comp2.component.html'
})
export class Comp2Component {

    itens:Item[] = [
        {
            codigo:1,
            descricao:'Bola',
            valor: 149.90
        },
        {
            codigo:2,
            descricao:'Boneca cocomelon',
            valor: 249.90
        },
        {
            codigo:3,
            descricao:'Pista hot wheels',
            valor: 369.90
        },
        {
            codigo:4,
            descricao:'Max steel',
            valor: 89.90
        }
    ]

    ngOnInit() {
        const projeto2CompSemRota = document.querySelector('projeto-2-comp-sem-rota');
        projeto2CompSemRota.itens = this.itens;
        projeto2CompSemRota.addEventListener('teste', (e:CustomEvent) => {
            console.log(e.detail);
        })
    }
    
}