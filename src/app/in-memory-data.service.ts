import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Item } from './item'; 

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const items = [
      { id: 0, name: 'Sword', price: 145, isAvailable: true },
      { id: 1, name: 'Bow', price: 150, isAvailable: true},
      { id: 2, name: 'Arrow', price: 59, isAvailable: true},
      { id: 3, name: 'Shield', price: 143, isAvailable: true},
      { id: 4, name: 'Potion', price: 25, isAvailable: true},
      { id: 5, name: 'Bomb', price: 90, isAvailable: true},
      { id: 6, name: 'Sunglasses', price: 30, isAvailable: true},
      { id: 7, name: 'Dagger', price: 70, isAvailable: true},
      { id: 8, name: 'Axe', price: 120, isAvailable: true},
      { id: 9, name: 'Armor', price: 200, isAvailable: true},
    ]

    return { heroes, items };
  }

  genId(heroes: Hero[], items: Item[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11 && items.length > 0 ? Math.max(...items.map(item => item.id)) +1 : 11;
  }
}