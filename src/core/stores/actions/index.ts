import { ActionType } from '../action-types'

interface FetchPostsAction {
  type: ActionType.FETCH_POSTS
}

interface FetchPostsSuccessAction {
  type: ActionType.FETCH_POSTS_SUCCESS
  payload: any
}

interface FetchPostsFailedAction {
  type: ActionType.FETCH_POSTS_FAILED
  payload: any
}

export type Action =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsFailedAction
