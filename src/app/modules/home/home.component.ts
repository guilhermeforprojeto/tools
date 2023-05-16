import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  filtersOptions  = [
    {
      property: 'nome'
    },
    {
      property: 'marca'
    },
    {
      property: 'versao'
    },
    {
      property: 'ano',
      type: 'date'
    }
  ]

  tools: Array<any> = [
    {
      "nome": "Carburador",
      "marca": "Uno",
      "ano": "2019",
      "categoria": "Moto",
      "valor": "29.00"
    },
    {
      "nome": "Pneu",
      "marca": "Michelin",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "150.00"
    },
    {
      "nome": "Bateria",
      "marca": "Moura",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "200.00"
    },
    {
      "nome": "Amortecedor",
      "marca": "Cofap",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "120.00"
    },
    {
      "nome": "Vela de Ignição",
      "marca": "NGK",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "15.00"
    },
    {
      "nome": "Óleo de Motor",
      "marca": "Mobil",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "40.00"
    },
    {
      "nome": "Pastilha de Freio",
      "marca": "Bendix",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "50.00"
    },
    {
      "nome": "Correia Dentada",
      "marca": "Contitech",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "80.00"
    },
    {
      "nome": "Filtro de Ar",
      "marca": "Tecfil",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "20.00"
    },
    {
      "nome": "Radiador",
      "marca": "Valeo",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "250.00"
    },
    {
      "nome": "Lâmpada",
      "marca": "Philips",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "10.00"
    },
    {
      "nome": "Embreagem",
      "marca": "Luk",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "300.00"
    },
    {
      "nome": "Cabo de Vela",
      "marca": "NGK",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "25.00"
    },
    {
      "nome": "Sensor de Velocidade",
      "marca": "Bosch",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "60.00"
    },
    {
      "nome": "Termostato",
      "marca": "Vernet",
      "ano": "N/A",
      "categoria": "Carro",
      "valor": "30.00"
    },
    {
      "nome": "Bomba de Combustível",
      "marca": "Bosch",
      "ano": "N/A",
      "categoria":"",
      "valor":"30:00"
    }]

  private onClick() {
    alert('Clicked in menu item')
  }

}
