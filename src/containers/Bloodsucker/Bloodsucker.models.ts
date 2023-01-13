export interface BloodsuckerItem {
  name?: string;
  colors?: ItemColor[];
  sizes?: string[];
  imgs: string[];
}

export interface ItemColor {
  code: string;
  label: string;
}
