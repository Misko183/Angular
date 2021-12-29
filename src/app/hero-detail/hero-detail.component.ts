import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ItemsNo, Items } from '../mock-items';
import { Item } from '../item';
import { ReplaySubject } from 'rxjs';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero!: Hero;
  itemsFree = ItemsNo;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  click(): void { }

  sellItems(item: Item): void {
    if(item.isAvailable == false){
      this.hero.money += item.price;
      item.isAvailable = true;
      this.itemsFree.push(item);
      this.deleteMsg(item);
    }
  }

  deleteMsg(item:Item) {
    const index: number = this.hero.items.indexOf(item);
    if (index !== -1) {
        this.hero.items.splice(index, 1);
    }
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
