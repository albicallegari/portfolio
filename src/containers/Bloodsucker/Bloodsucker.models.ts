export interface BloodsuckerItem {
  name: string;
  colors: ItemColor[];
  sizes: string[];
  price: string;
}

export interface ItemColor {
  code: string;
  label: string;
  imgs: string[];
}
