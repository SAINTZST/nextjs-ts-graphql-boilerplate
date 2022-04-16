import { Action } from '../actions'
import { ActionType } from '../action-types'

interface PostsState {
  loading: boolean
  error: string | null
  data: object[]
}

const inititalState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (state = inititalState, action: Action): PostsState => {
  switch (action.type) {
    case ActionType.FETCH_POSTS:
      return { loading: true, error: null, data: [] }
    case ActionType.FETCH_POSTS_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.FETCH_POSTS_FAILED:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer
