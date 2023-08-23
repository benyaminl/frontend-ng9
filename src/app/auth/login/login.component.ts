import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service';

interface LoginFormInterface
{
  username: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public msg: string = "";
  private redirectUrl: string = "";

  public submitDisabled: boolean = false;
  public formLogin: FormGroup<LoginFormInterface> = new FormGroup<LoginFormInterface>({
    username: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.minLength(5)]})
  });

  constructor(private authService: AuthService, private route: ActivatedRoute, private routerService: Router)
  {
  }

  public ngOnInit()
  {
    this.route.queryParams.subscribe(d => {
      console.log(d['msg']);
      if (d['msg'] == 1)
        this.msg = "User harus login!";
      if (d['redirectUrl'] != undefined)
        this.redirectUrl = d['redirectUrl'];
    });
  }

  public Submit()
  {
    if(this.formLogin.value.username == undefined || this.formLogin.value.password == undefined) return;
    this.submitDisabled = true;
    this.authService.Login(this.formLogin.value.username, this.formLogin.value.password)
      .subscribe({next: d => {
        alert("Berhasil Login");
        this.authService.SetLoggedUser("admin");
        
        if (this.redirectUrl != '')
        {
          console.log("Redirect Page");
          this.routerService.navigateByUrl(this.redirectUrl);
        }
      }, error: e => {
        console.log(e);
        alert(e.error)
      }})
      // Then
      .add(() => {
        this.submitDisabled = false;
        this.msg = '';
        if (this.redirectUrl == "") 
        {
          this.routerService.navigate([], {
            queryParams: {
              msg: null
            },
            queryParamsHandling: 'merge'
          });
        }
      });
  }
}
