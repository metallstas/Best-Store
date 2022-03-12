export const ACTIONS = {
  CATEGORIES: 'CATEGORIES',
  PRODUCTS_CATEGORY: 'PRODUCTS_CATEGORY',
  ACTIVE_CATEGORY: 'ACTIVE_CATEGORY',
  CLEAR_STATE_PRODUCTS: 'CLEAR_STATE_PRODUCTS',
  CLOSE_MENU: 'CLOSE_MENU',
  OPEN_MENU: 'OPEN_MENU',
  SHOW_SEARCH: 'SHOW_SEARCH',
  PRODUCT_SUBCATEGORY: 'PRODUCT_SUBCATEGORY',
  GET_PRODUCT_SUBCATEGORY: 'GET_PRODUCT_SUBCATEGORY',
  SET_ID_PRODUCT: 'SET_ID_PRODUCT',
  NEW_PRODUCTS: 'NEW_PRODUCTS',
}

export const currenTextSubmenu = (textSubmenu: string) => {
  if (textSubmenu === 'hdd') {
    return 'Жесткие диски'
  }

  if (textSubmenu === 'ssd') {
    return 'SSD'
  }

  if (textSubmenu === 'tv') {
    return 'Телевизоры'
  }

  if (textSubmenu === 'T-shirts') {
    return 'Майки'
  }

  if (textSubmenu === 'jacket') {
    return 'Куртки'
  }

  if (textSubmenu === 'bags') {
    return 'Сумки'
  }

  if (textSubmenu === 'bracelet') {
    return 'Браслеты'
  }

  if (textSubmenu === 'rings') {
    return 'Кольца'
  }
}
