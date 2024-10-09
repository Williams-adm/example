import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../shared/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  empleados: any= [] ;
  constructor(
    private _listEmployee:EmployeeService
  ) { }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  listarEmpleados() {
    this._listEmployee.list().subscribe(data => this.empleados = data, err => console.error(err), () => console.log(this.empleados))
    
  }

}
