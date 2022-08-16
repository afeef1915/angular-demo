import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-xlsx',
  templateUrl: './xlsx.component.html',
  styleUrls: ['./xlsx.component.scss']
})
export class XlsxComponent implements OnInit {
  rowData: any;
  colDefs: any;
  public columnDefs: ColDef[] = [];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 80,
    flex: 1,

  };
  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetName = workBook.SheetNames;
      this.rowData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName[0]]);
      this.dynamicallyConfigureColumnsFromObject(this.rowData);

    }

  }
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
  dynamicallyConfigureColumnsFromObject(rowData: any) {
    this.columnDefs =[];
    const keys = Object.keys(rowData[0]);
    keys.forEach((key) => this.columnDefs.push({ field: key }));
    this.colDefs = this.columnDefs;
  }


}
