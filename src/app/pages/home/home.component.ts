import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mood: 'good' | 'stressed' | 'lonely' | 'sad' | 'angry' | '' = '';
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    // This is going to change the text shown to the user according to the user's selectiond
    this.route.params.subscribe(param => {
      this.mood = param['mood'];
      // console.log(this.mood)
    });
  }

}
