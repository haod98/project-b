import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
@Injectable()
export class ContactListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  messages: any = [];
  private USERS_ENDPOINT = environment.api_users_endpoint;
  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): Subscription {
    return this.http.get(this.USERS_ENDPOINT).subscribe((res) => {
      this.messages = res;
    });
  }
}
