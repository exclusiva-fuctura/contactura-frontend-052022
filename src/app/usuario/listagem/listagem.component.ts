import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/models/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit, AfterViewInit {
  usuarios: IUsuario[] = [];
  
  pageEvent!: PageEvent;

  displayedColumns: string[] = ['e-mail', 'nome', 'telefone', 'action'];
  dataSource = new MatTableDataSource<IUsuario>(this.usuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.listAll();
  }


  private listAll(): void {
    this.usuarioService.listaUsuarios().subscribe({
      next: (resp) => {
        const dados = resp.body;
        if (dados) {
          this.usuarios = dados;
          this.dataSource = new MatTableDataSource<IUsuario>(dados);
        }
      }
    });
  }

  private delete(usuario: IUsuario): void {
    this.usuarioService.excluir(usuario).subscribe({
      next: () => {
        Swal.fire(
          'Remover',
          'Usuário removido com sucesso!',
          'success'
        );

        // atualizar listagem
        this.listAll();
      },
      error: (err: HttpErrorResponse) => {
        let msg = err.message;
        // se erro na requisição
        Swal.fire(
          'Remover',
          msg,
          'error'
        );

        if (msg.includes('Sessão expirada')) {
          this.router.navigate(['/login']);
        }
      }
    });
  }

  onLogout(): void {
    this.router.navigate(['/login']);    
  }

  onDelete(usuario: IUsuario): void {
    this.delete(usuario);
  }

  onEdit(usuario: IUsuario): void {
    this.router.navigate([`/usuario/cadastro/${usuario.id}`]);
  }
}
