import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp2Component } from './comp2.component';

const routes: Routes = [
    {
        path: '',
        component: Comp2Component
    }
]

@NgModule({
    declarations: [
        Comp2Component
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class Comp2Module {

}