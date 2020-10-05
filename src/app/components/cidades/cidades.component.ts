import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Cidade } from 'src/app/models/cidade';
import { CidadeService } from 'src/app/services/cidade.service';
import { CidadesSearchComponent } from './cidades-search.component';

interface CidadeSearchData {
  cep: string;
  result: Cidade;
}


@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})
export class CidadesComponent implements OnInit {

  cidades = [];
  page: number = 1;
  size: number = 20;
  total: number = 0;

  constructor(
    private cidadeService: CidadeService, 
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getCidades();
  }

  handlePageChange(event) {
    this.page = event;
    this.getCidades();
  }

  getCidades() {
    this.cidadeService.getList(this.page).subscribe(
      resp => {
        console.log(resp.data);
        this.cidades = resp.data;
        this.total = resp.totalElements;
      },
      error => {
        console.log('Error');
        console.log(error);
      }
    )
  }

  search() {
    this.openSearchDialog({
      postalCode: '',
      callback: (cidade: Cidade) : void => {
        console.log('123');
      }
    });
  }

  openSearchDialog(data: any): MatDialogRef<CidadesSearchComponent> {
    return this.dialog.open(CidadesSearchComponent, { data });
  }
}
