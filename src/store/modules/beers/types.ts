
export interface IBeer {
  id: number;
  image_url: string;
  name: string;
  tagline: string;
  brewers_tips: string;
  description?: string;
  first_brewed?: string;
  food_pairing?: [string];
}

export type BeerDescription = Omit<IBeer, 'image_url' | 'tagline' | 'brewers_tips'>;

export interface IBeerState {
  itens: IBeer[];
}