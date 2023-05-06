import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jbutton',
  templateUrl: './jbutton.component.html',
  styleUrls: ['./jbutton.component.css']
})
export class JButtonComponent {
  @Input() name: string = 'Unnamed';

}
