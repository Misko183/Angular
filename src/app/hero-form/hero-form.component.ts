import { Component } from '@angular/core';
import { Hero, HeroForm } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor(
    private heroService: HeroService) { }

  heroes: HeroForm[] = [];
  hero: Hero[] = [];

  id!: number;
  name!: string;
  money!: number;
  life!: number;
  strenght!: number;

  model = new HeroForm(this.id, this.name, this.money, this.life, this.strenght);

  submitted = false;

  onSubmit() { 
    this.submitted = true;    
  }

  addHero(): void {
    this.heroService.addHero(this.model as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
    })

    console.log(this.model);
  }
}