import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColDef } from '../models/TableColDef';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columns: TableColDef[] = [];
  @Input() data: any[] = [];
}
