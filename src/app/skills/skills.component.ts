import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  info: string;
  skills_list: any = {
    'python': '/assets/images/skills_content/python-text.png',
    'node': '/assets/images/skills_content/node-text.png',
    'angular2': '/assets/images/skills_content/angular2-text.png',
    'django': "/assets/images/skills_content/django-text.png",
    'responsive': '/assets/images/skills_content/responsive-text.png',
    'basics': '/assets/images/skills_content/basics-text.png',
    'bootstrap': '/assets/images/skills_content/bootstrap-text.png',
    'bower': '/assets/images/skills_content/bower-text.png',
    'treehouse': '/assets/images/skills_content/treehouse-text.png',
    'phoenix': '/assets/images/skills_content/phoenix-text.png'
  };

  constructor() { }

  ngOnInit() {
  }

  showSkillInfo(event) {
    this.info = this.skills_list[event];
  }

}
