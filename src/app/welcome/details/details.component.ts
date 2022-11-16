import { Component, OnInit } from '@angular/core';
import { ClickService } from 'src/app/shared/click.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private clickService: ClickService) {}

  ngOnInit(): void {}

  onClick() {
    this.clickService.registerClick();
  }
}
