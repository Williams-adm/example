import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule
  ]
})
export class EmployeesModule { }
