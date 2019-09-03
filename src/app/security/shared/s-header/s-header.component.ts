import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-s-header',
  templateUrl: './s-header.component.html',
  styleUrls: ['./s-header.component.css']
})
export class SHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoDownloadPage(){
    this.router.navigateByUrl('download')
  }

}
