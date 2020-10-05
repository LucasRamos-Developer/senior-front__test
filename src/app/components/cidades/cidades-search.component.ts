import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cidade } from 'src/app/models/cidade';
import { CidadeService } from 'src/app/services/cidade.service';

interface CidadeSearchData {
  callback: Function | undefined;
  postalCode: string;
}

@Component({
  selector: 'app-cidades-search',
  templateUrl: './cidades-search.component.html',
  styleUrls: ['./cidades-search.component.scss']
})
export class CidadesSearchComponent implements OnInit {
  
  callback: Function | undefined;
  postalCode: string;

  constructor(
    private cidadeService: CidadeService, 
    public dialogRef: MatDialogRef<CidadesSearchComponent>,
    @Inject(MAT_DIALOG_DATA) data: CidadeSearchData,
  ) {
    this.postalCode = data.postalCode;
    this.callback = data.callback;
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  search(): Cidade {
    let cidade = new Cidade();
    this.cidadeService.getSearch(this.postalCode).subscribe(
      resp => {
        cidade = resp.data;
      },
      error => {
        console.log(error);
      }
    )
    return cidade
  }
  
  submit(e: Event): void {
    if (this.callback instanceof Function) {
      this.callback(this.search);
    }
    e.preventDefault();
  }

}