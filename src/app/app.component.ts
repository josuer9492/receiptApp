import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'receipt-App';

  columnDefs = [
    { headerName: "CF", field: "number", sortable: true }, 
    { headerName: "Cant", field: "amount", sortable: true }, 
    { headerName: "P.U", field: "price", sortable: true }, 
    { headerName: "Total", field: "total", sortable: true }, 
  ];
  rowData = [
    { number: "*79*", amount: "10", price: "0.50", total: "50" }, 
    { number: "*80*", amount: "45", price: "0.25", total: "2.50" }, 
    { number: "*81*", amount: "5", price: "0.10", total: "0.50" }, 
  ];
}
