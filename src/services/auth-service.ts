import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Service } from "./service";
import { catchError, retry, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService extends Service {
    constructor(private http: HttpClient) {
        super();
    }

    public Login(user: string, password: string)
    {
        if (user != "admin" || password != "admin")
        {
            return throwError(() => new HttpErrorResponse({error: "User pass salah", status: 400}));
        }

        return this.http
            .post('https://jsonplaceholder.typicode.com/users/', 
            {
                user: user,
                pass: password
            })
            .pipe(
                retry(2),
                catchError(this.catchError)
            );
    }

    public Logout()
    {
        // This should also need some.. API tbh, but this is mock, just let it be
        localStorage.removeItem("loggedUser");
    }

    /**
     * This only for mock, so... don't do this in PRODUCTION!
     * @param user username
     */
    public SetLoggedUser(user: string)
    {
        localStorage.setItem("loggedUser", user);
    }

    /**
     * IF user already logged in?
     * @returns boolean True or False
     */
    public IsLoggedIn()
    {
        return localStorage.getItem("loggedUser") == null ? false : true;
    }

}