import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  id: string;
  email: string;
  phone: string;
  website: string;
  image: string;

  employeeDatas = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info"
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);

    if(this.id === '0'){
      this.email = this.employeeDatas[0].email;
      this.phone = this.employeeDatas[0].phone;
      this.website = this.employeeDatas[0].website;
    }else if(this.id === '1'){
      this.email = this.employeeDatas[1].email;
      this.phone = this.employeeDatas[1].phone;
      this.website = this.employeeDatas[1].website;
    }else{
      this.email = this.employeeDatas[2].email;
      this.phone = this.employeeDatas[2].phone;
      this.website = this.employeeDatas[2].website;
    }

  }

}
