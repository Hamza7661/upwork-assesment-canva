import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { TableColDef } from '../models/TableColDef';
import { Orders } from '../models/Orders';

@Component({
  selector: 'app-orders',
  imports: [TableComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
    tableColDefs:TableColDef[] = [
     new TableColDef({ label: 'Description', key: 'description' }),
     new TableColDef({ label: 'Billed To', key: 'billedTo' }),
     new TableColDef({ label: 'Created On', key: 'createdOn' }),
     new TableColDef({ label: 'Status', key: 'status' }),
     new TableColDef({ label: 'Total', key: 'total' })
  ];

  orders: Orders[] = []
}
