import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1.component';

// const routes: Routes = [
//     {
//         path: '',
//         component: Comp1Component
//     }
// ]

@NgModule({
    declarations: [
        Comp1Component
    ],
    imports: [
        CommonModule,
        // RouterModule.forChild(routes)
    ]
})
export class Comp1Module {
    
}