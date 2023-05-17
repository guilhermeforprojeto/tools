import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  filtersOptions = [
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
  ];

  tools: Array<any> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getToolsData();
  }

  private onClick() {
    alert('Clicked in menu item');
  }

  private getToolsData() {
    this.http.get<any>('https://my-json-server.typicode.com/guilhermeforprojeto/order_your_parts-api/orderparts').subscribe(
      (response) => {
        this.tools = response.parts ?? [];
      },
      (error) => {
        console.error("ERROR");
        console.error('Failed to fetch tools data:', error);
      }
    );
  }


}
