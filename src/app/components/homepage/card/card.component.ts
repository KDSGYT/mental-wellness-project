import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "'app-card', [appCard]'",
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() cardHeading: string = '';
  @Input() cardText: string = '';
  @Input() bgColor: string = '';
  @Input() imgSrc: string='';
  @Input() lowerSectionColor: string = '';

  ngOnInit(): void {
  }

}
