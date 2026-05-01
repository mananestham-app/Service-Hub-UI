export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

export interface CartItem extends MenuItem {
  quantity: number
}

export interface Chef {
  id: string
  name: string
  cuisine: string
  rating: number
  experience: string
  price: string
  image: string
  available: boolean
}
