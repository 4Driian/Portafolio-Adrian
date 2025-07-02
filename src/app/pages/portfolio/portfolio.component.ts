import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Dalio Project',
      image: 'assets/img/dalio.png',
      link: 'https://github.com/4Driian/Dalio',
      description: 'Dalio was an exciting project developed during the first semester of Web Design. Its main focus was the creation of a unique and appealing website template. The main objective of this project was to allow us to acquire and put into practice valuable skills in the application of styles and web design.',
      skills: [
        { name: 'HTML', icon: 'assets/svg/html-logo.svg' },
        { name: 'CSS', icon: 'assets/svg/css-logo.svg' },
        { name: 'Figma', icon: 'assets/svg/figma-logo.svg' }
      ],
      alignment: 'right'
    },
    {
      name: 'Biccas Project',
      image: 'assets/img/biccas.png',
      link: 'https://github.com/4Driian/Biccas',
      description: 'Biccas was an engaging project undertaken during the second semester of Web Design. It revolved around the development of a captivating and visually appealing website template. The primary goal of this project was to provide us with the opportunity to learn and apply valuable skills in the realm of styling and web design. Through the Biccas project, we aimed to enhance our proficiency in creating dynamic and user-friendly web interfaces, as well as effectively implementing responsive design principles.',
      skills: [
        { name: 'HTML', icon: 'assets/svg/html-logo.svg' },
        { name: 'CSS', icon: 'assets/svg/css-logo.svg' },
        { name: 'Figma', icon: 'assets/svg/figma-logo.svg' }
      ],
      alignment: 'left'
    },
    {
      name: 'BenitoShop Project',
      image: 'assets/img/BenitoShop.png',
      link: 'https://github.com/4Driian/proyecto-final',
      description: 'Benito Shop is the result of a real entrepreneurial venture that emerged in 2020 with the genuine intention of establishing an authentic online commerce. Initially created for illustrative purposes as a final project, as it progressed, the viability and potential of the business became evident. The idea of turning it into a real e-commerce has become an exciting and concrete possibility.',
      skills: [
        { name: 'HTML', icon: 'assets/svg/html-logo.svg' },
        { name: 'CSS', icon: 'assets/svg/css-logo.svg' },
        { name: 'SASS', icon: 'assets/svg/sass-logo.svg' },
        { name: 'Figma', icon: 'assets/svg/figma-logo.svg' }
      ],
      alignment: 'right'
    },
    {
      name: 'Dad Jokes Project',
      image: 'assets/img/dad-jokes.png',
      link: 'https://github.com/4Driian/dad-jokes',
      description: 'The objective of this project was to create a dad joke generator that allows users to search for jokes using keywords. Additionally, we implemented a shopping cart feature for custom objects with dad jokes. It was a real challenge to start with because we began incorporating APIs.',
      skills: [
        { name: 'HTML', icon: 'assets/svg/html-logo.svg' },
        { name: 'CSS', icon: 'assets/svg/css-logo.svg' },
        { name: 'JavaScript', icon: 'assets/svg/javaScript-logo.svg' },
        { name: 'SASS', icon: 'assets/svg/sass-logo.svg' },
        { name: 'Figma', icon: 'assets/svg/figma-logo.svg' }
      ],
      alignment: 'left'
    },
    {
      name: 'Yu-Gi-Oh Project',
      image: 'assets/img/yu-gi-oh.png',
      link: 'https://github.com/4Driian/proyecto-yu-gi-oh',
      description: 'This project was created in the NodeJS environment. The main idea was to establish a MongoDB database and develop a user interface so that users could create their own customized Yu-Gi-Oh cards.',
      skills: [
        { name: 'HTML', icon: 'assets/svg/html-logo.svg' },
        { name: 'CSS', icon: 'assets/svg/css-logo.svg' },
        { name: 'SASS', icon: 'assets/svg/sass-logo.svg' },
        { name: 'JavaScript', icon: 'assets/svg/javaScript-logo.svg' },
        { name: 'MongoDB', icon: 'assets/svg/mongodb-logo.svg' },
        { name: 'Figma', icon: 'assets/svg/figma-logo.svg' }
      ],
      alignment: 'right'
    },
    {
      name: 'CETAV Project',
      image: 'assets/img/cetav.png',
      link: 'https://lalibertad-cetav.vercel.app/',
      description: "I've been part of the migration of the CETAV website, which was filled with challenges, working with new frameworks for me. It didn't pose an extreme difficulty, and working closely with my team, we managed to achieve a very good result.",
      skills: [
        { name: 'JavaScript', icon: 'assets/svg/javaScript-logo.svg' },
        { name: 'NextJs', icon: 'assets/svg/nextjs.svg' },
        { name: 'React', icon: 'assets/svg/react-logo.svg' },
        { name: 'ChakraUI', icon: 'assets/svg/chakra.svg' },
        { name: 'StoryBook', icon: 'assets/svg/storybook-icon.svg' },
        { name: 'Figma', icon: 'assets/svg/figma-logo.svg' }
      ],
      alignment: 'left'
    },
    {
      name: 'Arjesu',
      image: 'assets/img/image 10.png',
      link: '/portfolio',
      description: 'This is a project that is still under development. We took on the task of creating a project from scratch for "Arjesu", a distributor of wholesale tools, using the best of the market for an optimized operation.',
      skills: [
        { name: 'Angular', icon: 'assets/svg/Angular.png' },
        { name: 'SASS', icon: 'assets/svg/sass-logo.svg' },
        { name: 'TypeScript', icon: 'assets/svg/Typescript_logo_2020.svg.png' },
        { name: 'Figma', icon: 'assets/svg/figma-logo.svg' }
      ],
      alignment: 'right',
      class: 'arjesu'
    }
  ];
}