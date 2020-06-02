import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentuser: User = JSON.parse(localStorage.getItem('currentUser'));
  topSecretData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSecretInfo(this.currentuser).subscribe(data => {
      console.log(data);
      this.topSecretData = data;
    })
  }

}
