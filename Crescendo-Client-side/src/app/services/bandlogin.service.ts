import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandloginService {

  private loginStatusSubject = new Subject<number>();
  public  $loginStatus = this.loginStatusSubject.asObservable();
  bandStats;

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): void {
    const payload = {
      email,
      password
    };

    this.httpClient.post('http://ec2-18-220-247-101.us-east-2.compute.amazonaws.com:8081/Crescendo/bands/login', payload, {
      observe: 'response'
      })
      .subscribe(response => {
        this.loginStatusSubject.next(200);
        this.bandStats = response.body;
      }, err => {
        this.loginStatusSubject.next(err.status);
      });
  }
}
