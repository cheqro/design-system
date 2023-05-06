import {Component, Input} from '@angular/core';

@Component({
  selector: 'j-input',
  templateUrl: './jinput.component.html',
  styleUrls: ['./jinput.component.css']
})
export class JInputComponent {
  @Input() placeholder: string = 'placeholder jinput!';
  @Input() label: string = 'label jinput :';

}
