export interface Product {
  id?: string;
  type?: string;
  title?: string;
  info?: string;
  photo?: string;
  price?: number;
  date?: Date;
}

export interface FbResponse {
  name: string;
}

export interface Order {
  id?: string;
  name?: string;
  phone?: string;
  address?: string;
  payment?: string;
  products?: Product[];
  price?: number;
  date?: Date;
}
