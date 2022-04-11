import { pick } from 'lodash'
import BaseLayout from '@components/templates/layouts/BaseLayout'

const withLayout =
  ({ layout: Layout = BaseLayout }) =>
  (PageComponent) => {
    const EnhancedPageComponent = (props) => {
      return Layout ? (
        <Layout {...pick(props, ['location', 'history', 'match', 'userData'])}>
          <PageComponent {...props} />
        </Layout>
      ) : (
        <PageComponent {...props} />
      )
    }

    return EnhancedPageComponent
  }

export default withLayout
