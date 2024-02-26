import { Component, OnInit } from '@angular/core';
import { Template } from '../../models/template.model';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {

  public demoTemplate : Template = new Template('Name Surname', 'image', 'contacts', 'summary');

  public template! : Template;

  constucror() {
    this.template = new Template('', '', '', '');
  }

  ngOnInit() {
    this.template = this.demoTemplate;
  }

}
