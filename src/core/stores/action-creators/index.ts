import axios from '@core/utils/axios'
import { Dispatch } from 'redux'

import { Action } from '@core/stores/actions'
import { ActionType } from '@core/stores/action-types'

export const fetchData = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_POSTS })

    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )

      dispatch({ type: ActionType.FETCH_POSTS_SUCCESS, payload: data })
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.FETCH_POSTS_FAILED,
          payload: error
        })
      }
    }
  }
}
