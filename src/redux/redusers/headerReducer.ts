import { ACTIONS } from '../constans'

export interface IHeaderReducer {
  isOpenMenu: boolean
  showSearch: boolean
}

const defaultState: IHeaderReducer = {
  isOpenMenu: false,
  showSearch: false,
}

export const headerReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.OPEN_MENU) {
    return { isOpenMenu: !state.isOpenMenu }
  }

  if (action.type === ACTIONS.CLOSE_MENU) {
    return { isOpenMenu: false }
  }

  if (action.type === ACTIONS.SHOW_SEARCH) {
    return { showSearch: !state.showSearch }
  }

  return state
}
