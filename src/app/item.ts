export interface Item {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
  }

export class ItemForm {
  constructor(
    public id: number,
    public name: string,
    public price: number,
  ) {}
}