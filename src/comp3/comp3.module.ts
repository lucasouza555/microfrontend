import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp3Component } from './comp3.component';

const routes: Routes = [
    {
        path: '',
        component: Comp3Component
    }
]
@NgModule({
    declarations: [
        Comp3Component
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class Comp3Module {

}