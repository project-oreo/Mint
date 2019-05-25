import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  private editStatusSubject = new Subject<number>();
  public $editStatus = this.editStatusSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  edit(id: string, email: string, bandName: string, bio: string, socialmedia: string,
       genre: string, debutDate: Date, hourlyRate: number, imageURL: string, hashedPassword: string): void {
    const payload = {
    id: id,
    email: email,
    bandName: bandName,
    bio: bio,
    genre: genre,
    debutDate: debutDate,
    socialmedia: socialmedia,
    hourlyRate: hourlyRate,
    imageURL: imageURL,
    hashedPassword: hashedPassword
  };

    this.httpClient.put('http://localhost:8081/Crescendo/bands/update', payload, {
    observe: 'response'}).subscribe(response => {
      this.editStatusSubject.next(200);
    }, err => {
      this.editStatusSubject.next(err.status);
    });
  }
}
