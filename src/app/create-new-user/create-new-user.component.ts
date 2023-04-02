import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent {

//Consumer object
consumer = {
	"meterNo": "",
	"email": "",
	"pwd": "",
	"fullName": "",
	"address": "",
	"mobile": ""
}

constructor(private restService : RestService){}

//create new user

createConsumer(){
  console.log(JSON.stringify(this.consumer));
  this.restService.createConsumer({
    consumer : this.consumer
  }).subscribe({
    next: (data: string) => { console.log(data) },
    error: (err) => {alert(err.error)}
  })
}
}
