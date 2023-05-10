
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AuthService, LoginFormValue } from "./auth.service";
import { enviroment } from "src/enviroments/enviroments";
import { Usuario } from "src/app/core/models";
import { Router } from "@angular/router";
import { skip } from "rxjs";

describe('Pruebas  sobre auth service', ()=>{

    let service: AuthService;
    let httpController: HttpTestingController


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        }).compileComponents();

       service = TestBed.inject(AuthService)
       httpController = TestBed.inject(HttpTestingController)
    })

    it('el login debe funcionar', ()=>{
        const loginFake: LoginFormValue = {
            email: 'test@email.com',
            password: '123456',
        }
        
        service.login(loginFake);

        service.obtenerUsuarioAutenticado()
        .pipe(
            skip(1),
        )
        .subscribe((usuario)=>{
            expect(usuario).toBeTruthy()
        });

        spyOn(TestBed.inject(Router), 'navigate')

        const MOCK_REQUEST: Usuario[]=[
            {
                id: 1,
                apellido: 'testapellido',
                nombre: 'testnombre',
                email: loginFake.email,
                password: loginFake.password,
                role: 'admin',
                token: 'dashdajkhdsjklahdsa123878174871471894'
            }
        ]

        httpController.expectOne({
            url: `${enviroment.apiBaseUrl}/usuarios?email=${loginFake.email}&password=${loginFake.password}`,
            method: 'GET'
        }).flush(MOCK_REQUEST)
    })
});