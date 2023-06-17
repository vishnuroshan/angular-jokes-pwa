import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-joke-text',
  templateUrl: './joke-text.component.html',
  styleUrls: ['./joke-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeTextComponent implements OnInit {
  @Input() setup: string = '';
  @Input() delivery: string = '';
  startDelivery = false;
  constructor() {}

  ngOnInit(): void {}

  onSetupStopped(_event: any) {
    this.startDelivery = true;
  }
}
