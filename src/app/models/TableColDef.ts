export class TableColDef {
  key: string = '';
  label: string = '';

  constructor(init?: Partial<TableColDef>) {
    Object.assign(this, init);
  }
}
