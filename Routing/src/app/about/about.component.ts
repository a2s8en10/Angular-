import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private Data : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("this.Data.snapshot.paraMap.get('id')");
  }

}
