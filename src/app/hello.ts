import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hello',
  template: `Hello, testronaut-demo!`,
})
export class Hello {}
