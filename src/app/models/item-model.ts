export class ItemModel {
  private _id: string;
  private _name: string;
  private _price: number;

  constructor(id: string = 'none', name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  public static getDummyItem(): ItemModel {
    return new ItemModel('none', 'none', 0);
  }

}
