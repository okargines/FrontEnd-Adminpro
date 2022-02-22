import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import swal from 'sweetalert';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {

    // this.getUsuarios();
    this.cargarStorage();

  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }

  }

  guardarStorage( id: string, token: string, usuario: Usuario ) {

    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario) );

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  loginGoogle( token: string ) {

    let url = URL_SERVICIOS + '/login/google';

    return this.http.post( url, { token } )
                .map( (resp: any) => {
                  this.guardarStorage( resp.id, resp.token, resp.usuario );
                  return true;
                });


  }

  login( usuario: Usuario, recordar: boolean = false ) {

    const usuariojsn = JSON.stringify(usuario);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'});

    if ( recordar ) {
      localStorage.setItem('email', usuario.email );
    }else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post( 'http://apisab.me/login', usuariojsn, {headers:headers} )
                .map( (resp: any) => {
                    console.log(resp);
                   this.guardarStorage( resp.id, resp.token, resp.usuario );

                  return true;
                });

  }


  crearUsuario( usuario: Usuario ) {

    let url = URL_SERVICIOS + '/maestro/usuario'; 

    const usuariojsn = JSON.stringify(usuario);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'});

    //2da forma de enviar datos via POST.
    //   const body = new HttpParams()
    //     .set('tipodoc', param.tipodoc)
    //     .set('numdoc', param.numdoc)
    //     .set('pass', param.pass);



    //el http.post Retorna un Observable...
    return this.http.post( 'http://apisab.me/maestro/usuario', usuariojsn, {headers:headers} )
              .map( (resp: any) => {
               console.log(resp);
                return resp.references;
              });
  }
  
}


  // const url = 'http://server.com/index.php';
  // const body = JSON.stringify({username: username,
  //                              password: password});
  // const headers = new HttpHeaders();
  // headers.set('Content-Type', 'application/json; charset=utf-8');
  // this.http.post(url, body, {headers: headers}).subscribe(
  //     (data) => {
  //         console.log(data);
  //     },
  //     (err: HttpErrorResponse) => {
  //         if (err.error instanceof Error) {
  //             console.log('Client-side error occured.');
  //         } else {
  //             console.log('Server-side error occured.');
  //         }
  //     }
  // );

  // login(param) {
  //   const url: string[] = ['pasajeros', 'login'];
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});
  //   const body = new HttpParams()
  //     .set('tipodoc', param.tipodoc)
  //     .set('numdoc', param.numdoc)
  //     .set('pass', param.pass);
  //     return this.http.post(this.ApiUrl + url.join('/'), body, {headers})
  //     .pipe(map( (data: any) => {
  //       if (data && data.pax.TOKEN) {
  //        ....
  //       }
  //       return data.pax;
  //     }));
  // }



  // crearUsuario( usuario: Usuario ) {

  //   // return this.http.get( 'http://apisab.me/maestro/usuario' )
  //   //   .map( (resp: any) => {
  //   //   swal('Usuario creado', 'holasssss', 'success' );
  //   //   console.log(resp);
  //   //   // this.guardarStorage( resp.id, resp.token, resp.usuario );
  //   //   // return true;
  //   // });


  //   // let url = URL_SERVICIOS + '/maestro/usuario'; 

  //   const usuariojsn = JSON.stringify(usuario);
  //   // console.log(usuariojsn);

  //   // var ausuario = new Array();
  //   // ausuario["username"] = usuario.username;
  //   // ausuario["email"] = usuario.email;
  //   // ausuario["password"] = usuario.password;
  //   // ausuario["role_id"] = usuario.role_id;

  //   return this.http.post( 'http://apisab.me/maestro/usuario', usuariojsn )
  //             .map( (resp: any) => {
  //              console.log(resp);
  //               // ogch
  //               // swal('Usuario creado', 'asdadas', 'success' );
  //               return resp;
  //             });
  // }
