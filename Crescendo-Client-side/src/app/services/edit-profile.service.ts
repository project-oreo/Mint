import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  private editStatusSubject = new Subject<number>();
  public $signupStatus = this.editStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  edit(id: string, email: string, password: string, bandName: string, bio: string,
       genre: string, debutDate: any, promotion: any, hourlyRate: number, imageURL: string): void {
    const payload = {
    id,
    email,
    password,
    bandName,
    bio,
    genre,
    debutDate,
    socialMedia: promotion,
    hourlyRate,
    imageURL
  };

    this.httpClient.put('http://ec2-13-59-68-239.us-east-2.compute.amazonaws.com:8081/Crescendo/bands/update', payload, {
    observe: 'response'}).subscribe(response => {
      this.editStatusSubject.next(200);
    }, err => {
      this.editStatusSubject.next(err.status);
    });
  }
}
