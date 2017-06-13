import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';


import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loaderService.display(true);
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
}
