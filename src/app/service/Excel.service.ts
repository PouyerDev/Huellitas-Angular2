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
          // Generar un ID automático
          const id = this.generarID();
          return new Droga(
            id.toString(),
            item.NOMBRE,
            
            parseFloat(item['PRECIO VENTA'].toString().replace('$', '').replace('.', ',')),
            parseFloat(item['PRECIO COMPRA'].toString().replace('$', '').replace('.', ',')),
            parseInt(item['UNIDADES DISPONIBLES']),
            parseInt(item['UNIDADES VENDIDAS'])
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
  private generarID(): number {
    // Generar un ID aleatorio único
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
}