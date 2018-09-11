import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {EmailPage} from "../pages/email-page/email-page";


/*
  Generated class for the Correos provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Correos {
  
    lista = [
      {
        name: 'Sofia Salas',
        emailAddress: 'Soffi1994@Hotmail.es',
        subject: 'Invitación Party Hard',
        message: 'Hola, quiciera invitarte a una fiesta en mi casa que se llevará acabo el siguiente fin de semana.',
        date: 'Lunes, Julio 30 2018'
      },
      {
        name: 'Denisse Casillas',
        emailAddress: 'Denisse_punk@Hotmail.com',
        subject: 'Graduación',
        message: 'Hola Josue, queria confirmar tu asistencia para mi fiesta de graduación este 12 de octubre.',
        date: 'Lunes, Julio 30 2018'
      },
      {
        name: 'Alejandra Perez',
        emailAddress: 'Ale1510@Gmail.com',
        subject: 'Reunion Proyecta',
        message: 'Hola, Josué, queria saber sis asistirás a la reunion que estamos organizando para los de proyecta. Por favor confirma asistencia.',
        date: 'Martes, Julio 31 2018'
      },
      {
        name: 'Blas Jimenez',
        emailAddress: 'BlasCockieJimenez@Hotmail.com',
        subject: 'CV Blas',
        message: 'Te manod mi curriculum para que lo mandes a tu amigo.',
        date: 'Miercoles, Agosto 1 2018'
      },
      {
        name: 'Carolina Escobar',
        emailAddress: 'Caro_ES@Outlook.com',
        subject: 'Foto',
        message: 'Josu, te mando la foto que te dije que te podia interesar.',
        date: 'Miercoles, Agosto 1 2018'
      },
      {
        name: 'Roseli Herrera',
        emailAddress: 'Rosselhi@Gmail.com',
        subject: 'Carta de recomendación',
        message: 'Hola, te mando el formato de la carta de recomendación que me habias pedido. Que estes muy bien!',
        date: 'Miercoles, Agosto 1 2018'
      },
      {
        name: 'Leo Flores',
        emailAddress: 'Leo1706@Outlook.com',
        subject: 'Curso de Angular',
        message: 'Tavo, que no se te olvide mandarme el curso de Angular qu me dijiste para ver si lo comienso este fin de semana.',
        date: 'Jueves, Agosto 2 2018'
      }
    ];

    sended = [];
}
