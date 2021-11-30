import { Component, OnInit } from '@angular/core';
import { Contrato } from "../../shared/contrato.model";
import { ContratosService } from '../../shared/services/contratos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  contratos: Contrato[];

  constructor(private contratosService: ContratosService) { }

  ngOnInit(): void {
    this.contratosService.getAll()
      .subscribe( c => this.contratos = c)
  }

}
