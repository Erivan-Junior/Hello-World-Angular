import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  aluno: String;

  constructor() {
    this.aluno = 'Erivan Soares Leite Junior'
  }
}
