import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/models/usuario.interface';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit, AfterViewInit {
  usuarios: IUsuario[] = [];
  
  displayedColumns: string[] = ['e-mail', 'nome', 'telefone'];
  dataSource = new MatTableDataSource<IUsuario>(this.usuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.router.navigate(['/login']);    
  }
}
