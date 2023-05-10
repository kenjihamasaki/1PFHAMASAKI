import { TestBed } from "@angular/core/testing";
import { LoginComponent } from './login.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "src/app/shared/pipes/pipes.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('pruebas de LoginComponent', ()=>{
    let component: LoginComponent;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [
            RouterTestingModule,
            HttpClientModule,
            MatFormFieldModule,
            MatInputModule,
            ReactiveFormsModule,
            PipesModule,
            BrowserAnimationsModule
          ],
          declarations: [
            LoginComponent
          ],
        }).compileComponents();

        const fixture = TestBed.createComponent(LoginComponent);

        component = fixture.componentInstance
        fixture.detectChanges()
      });

      it('si el campo email esta vacio el FormControl del email debe ser invalido',()=>{
        component.loginForm.setValue({ email: null, password: null})
        expect(component.emailControl.invalid).toBeTrue();
      });


})