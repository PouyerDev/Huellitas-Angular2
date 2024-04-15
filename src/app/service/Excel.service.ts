import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Droga } from '../model/droga';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  public leerExcel(file: File): Observable<Droga[]> {
    return from(new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();

      reader.onload = (e: any) => {
        const data: Uint8Array = new Uint8Array(e.target.result);
        const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
        const sheetName: string = workbook.SheetNames[0]; // Suponiendo que la hoja con los datos está en la primera posición
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        const excelData: any[] = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        const drogas: Droga[] = excelData.map((item: any) => {
          return new Droga(
            item.id,
            item.nombre,
            item.precioCompra,
            item.precioVenta,
            item.unidadesDisponibles,
            item.unidadesVendidas
          );
        });

        resolve(drogas);
      };

      reader.onerror = (e) => {
        reject(e);
      };

      reader.readAsArrayBuffer(file);
    })).pipe(
        map((drogas: unknown) => drogas as Droga[])
    );
  }
}
