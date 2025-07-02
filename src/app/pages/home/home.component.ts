import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EyesComponent } from '../../shared/components/eyes/eyes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, EyesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  skills = [
    { name: 'HTML', icon: 'assets/svg/html-logo.svg' },
    { name: 'CSS', icon: 'assets/svg/css-logo.svg' },
    { name: 'SASS', icon: 'assets/svg/sass-logo.svg' },
    { name: 'JavaScript', icon: 'assets/svg/javaScript-logo.svg' },
    { name: 'React', icon: 'assets/svg/react-logo.svg' },
    { name: 'Angular', icon: 'assets/svg/Angular.png' },
    { name: 'NextJs', icon: 'assets/svg/nextjs.svg' },
    { name: 'ChakraUI', icon: 'assets/svg/chakra.svg' },
    { name: 'Git', icon: 'assets/svg/git-logo.svg' },
    { name: 'GitHub', icon: 'assets/svg/github-square.svg' },
    { name: 'Figma', icon: 'assets/svg/figma-logo.svg' },
    { name: 'Photoshop', icon: 'assets/svg/photoshop-logo.svg' },
    { name: 'Illustrator', icon: 'assets/svg/illustrator-logo.svg' },
    { name: 'WordPress', icon: 'assets/svg/wordPress.svg' },
    { name: 'Drupal', icon: 'assets/svg/drupal-logo.svg' },
    { name: 'StoryBook', icon: 'assets/svg/storybook-icon.svg' },
    { name: 'MongoDB', icon: 'assets/svg/mongodb-logo.svg' },
    { name: 'Microsoft SQL MANAGEMENT', icon: 'assets/img/sql-management-logo.png' }
  ];

  projects = [
    {
      name: 'Arjesu',
      image: 'assets/img/image 10.png',
      link: '/portfolio',
      class: 'arjesu'
    },
    {
      name: 'CETAV Project',
      image: 'assets/img/cetav.png',
      link: 'https://lalibertad-cetav.vercel.app/',
      class: ''
    }
  ];
}