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
  SEARCH_PRODUCT: 'SEARCH_PRODUCT',
  SEARCH_TEXT: 'SEARCH_TEXT',
  SUBCATEGORY: 'SUBCATEGORY',
  PRODUCT_ID: 'PRODUCT_ID',
  SHOW_LOGIN: 'SHOW_LOGIN',
  SHOW_REGISTRATION: 'SHOW_REGISTRATION',
  REGISTRATION_USER: 'REGISTRATION_USER',
  CONFIRM_REGISTRATION: 'CONFIRM_REGISTRATION',
  LOGIN: 'LOGIN',
  ERROR_LOGIN: 'ERROR_LOGIN',
  GO_OUT_PROFILE: 'GO_OUT_PROFILE',
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

  if (textSubmenu === 'jackets') {
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

export const currentCategory = (category: string) => {
  if(category === "men'sclothing") {
    return "men's clothing"
  }
  if(category === "women'sclothing") {
    return "women's clothing"
  }
  return category
}