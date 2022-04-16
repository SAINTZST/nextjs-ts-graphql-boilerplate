import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '@core/stores'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
