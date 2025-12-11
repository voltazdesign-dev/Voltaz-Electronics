export type UserRole = 'user' | 'admin' | 'guest';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  features: string[];
  stock: number;
  featured?: boolean;
  // Marketplace fields
  minOrder?: number;
  vendor?: string;
  rating?: number;
  reviewCount?: number;
  country?: string;
  yearsActive?: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, role: UserRole) => void;
  logout: () => void;
}

export interface DataState {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
}