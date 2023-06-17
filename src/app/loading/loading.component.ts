import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  @Input() loading = true;
  @Input() message = 'loading...';
  url =
    'https://i.pinimg.com/originals/a0/02/a3/a002a3e51a2adc85d6c0a4684892e743.gif';
  constructor() {}

  ngOnInit(): void {}
}
