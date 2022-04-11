import { flowRight as compose } from 'lodash'

import withLayout from './withLayout'

const withPage = (options = {}) => (Component) => {
  const hocs = [withLayout(options)]

  return compose(...hocs)(Component)
}

export default withPage
