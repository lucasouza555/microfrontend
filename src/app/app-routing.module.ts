import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'comp1',
  //   loadChildren: () => import('../comp1/comp1.module').then(comp => comp.Comp1Module) 
  // },
  {
    path: 'comp2',
    loadChildren: () => import('../comp2/comp2.module').then(comp => comp.Comp2Module) 
  },
  {
    path: 'comp3',
    loadChildren: () => import('../comp3/comp3.module').then(comp => comp.Comp3Module) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
