import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivsionComponent } from './divsion/divsion.component';
import { XlsxComponent } from './xlsx/xlsx.component';


const routes: Routes = [
  { path: '', component:DivsionComponent  },
  { path: 'xls', component: XlsxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
