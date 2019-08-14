import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

	public showSuccess: boolean = false;
	public hideForm: boolean = false;

	submitted = false;
	mailChimpEndpoint = "https://reidsheritagehomes.us16.list-manage.com/subscribe/post-json?u=befb39eea1e6b0c35138ba993&amp;id=56a5be1bd2&	";
	error = '';
	model:any = {
		name : '',
		email: '',
		phone1: '',
		phone2: '',
		phone3: '',
		address: '',
		city: '',
		province: '',
		postal: '',
		optin: ''
	};

  constructor(private http: HttpClient) { }

	submitForm() {
  		this.submitted = true;
  		this.showSuccess = true;
		this.hideForm = true;


  		const params = new HttpParams()
			.set('EMAIL', this.model.email)
			.set('FNAME', this.model.name)
			.set('MMERGE2[area]', this.model.phone1)
			.set('MMERGE2[detail1]', this.model.phone2)
			.set('MMERGE2[detail2]', this.model.phone3)
			.set('ADDRESS[addr1]', this.model.address)
			.set('ADDRESS[city]', this.model.city)
			.set('ADDRESS[state]', this.model.province)
			.set('ADDRESS[zip]', this.model.postal)
			.set('group[7109][1]', this.model.optin)
			.set('b_befb39eea1e6b0c35138ba993_56a5be1bd2', ''); // hidden input name

  	// var formEntries = Array.from(this.formData.entries());
   //  console.log("formEntries " , formEntries); 

  		this.error = '';
		const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
		this.http.jsonp<any>(mailChimpUrl, 'c').subscribe(response => {
			// console.log(response);
			if (response.result && response.result !== 'error') {
				this.submitted = true;
			}
			else {
				this.error = response.msg;
			}
		}, error => {
			console.error(error);
			this.error = 'Sorry, an error occurred.';
		});
	}

  // submitToggle() {
  // 	 this.showSuccess = true;
  // 	 this.hideForm = true;
  // }

  ngOnInit() {
  }

}

