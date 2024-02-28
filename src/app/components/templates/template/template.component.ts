import { Component, OnInit } from '@angular/core';
import { Template } from '../../../models/template.model';
import { Contacts } from '../../../models/contacts.model';
import { Skill } from '../../../models/skill.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [NgFor],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {

  public contacts : Contacts = {
    location : 'Berlin',
    phone: 123456789,
    mail : 'my_email@gmail.com', 
    linkedin : 'link_to_linkedin'
  };

  public skills : Skill[] = [
    new Skill('java'), 
    new Skill('Spring'),
    new Skill('MYSQL')
  ];

  public demoTemplate : Template = new Template('Name Surname', 'image', this.contacts, 'summary', 'projects', 
  this.skills, 'languages', 'experience');

  public template! : Template;

  constucror() {
    this.template = new Template('', '', this.contacts, '', '', this.skills, '', '');
  }

  ngOnInit() {
    this.template = this.demoTemplate;
  }

}
