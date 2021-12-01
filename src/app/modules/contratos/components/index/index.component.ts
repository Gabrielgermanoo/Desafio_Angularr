import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contrato } from "../../shared/contrato.model";
import { ContratosService } from '../../shared/services/contratos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  contratos: Contrato[];

  contForm: FormGroup;

  constructor(private contratosService: ContratosService,
    private contratoService: ContratosService) { }

  

  ngOnInit(): void {
    this.contratosService.getAll()
      .subscribe( c => this.contratos = c),
    
    this.contForm = new FormGroup({
      'servico': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'quantidade': new FormControl('', [Validators.required]),
      'valor_unitario': new FormControl('', [Validators.required])
    })
  }
  onSubmit(){
    console.log(this.contForm.value)
    const newCont = this.contForm.value
    this.contratoService.create(newCont)
      .subscribe()
  }

}
