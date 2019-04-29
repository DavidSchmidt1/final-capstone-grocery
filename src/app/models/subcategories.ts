import { Items } from './product';

export interface Subcategories  {
  name: string;
  items: (Items | Items)[];
}

