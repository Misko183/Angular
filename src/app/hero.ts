import { Item } from "./item";

export interface Hero {
    id: number;
    name: string;
    items: Item[];
    money: number;
    life: number;
    strenght: number;
  }

  export class HeroForm {
    constructor(
    public id: number,
    public name: string,
    public money: number,
    public life: number,
    public strenght: number,
    ){}
  }