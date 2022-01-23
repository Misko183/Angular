import { Hero } from "./hero";
import { Items } from "./mock-items";

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice', money: 6000, items: [Items[0], Items[9]], life: 476, strenght: 800},
  { id: 12, name: 'Narco', money: 6000, items: [Items[1], Items[8]], life: 42, strenght: 1500},
  { id: 13, name: 'Bombasto', money: 6000, items: [Items[2], Items[7]], life: 6343, strenght: 25},
  { id: 14, name: 'Celeritas', money: 6000, items: [Items[3], Items[6]], life: 1422, strenght: 234},
  { id: 15, name: 'Magneta', money: 6000, items: [Items[4], Items[5]], life: 1399, strenght: 1255},
  { id: 16, name: 'RubberMan', money: 6000, items: [Items[5], Items[4]], life: 1500, strenght: 565},
  { id: 17, name: 'Dynama', money: 6000, items: [Items[6], Items[3]], life: 2455, strenght: 250},
  { id: 18, name: 'Dr IQ', money: 6000, items: [Items[7], Items[2]], life: 644, strenght: 40},
  { id: 19, name: 'Magma', money: 6000, items: [Items[8], Items[1]], life: 1233, strenght: 400},
  { id: 20, name: 'Tornado', money: 6000, items: [Items[9], Items[0]], life: 1231, strenght: 670}
]