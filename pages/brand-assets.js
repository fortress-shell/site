import styled from 'styled-components'
import * as theme from 'theme'
import Header from 'components/Header'
import Head from 'next/head'

const Page = styled.div`
  ${theme.pageContainer}
`

const Title = styled.h1`
  ${theme.textStyles.mainCallout}
  text-align: center;
`

export default () => (
  <div>
    <Head>
      <title>Buildkite Logo &amp; Brand Assets</title>
    </Head>
    <Header />
    <Page>
      <Title>Brand Assets</Title>
    </Page>
  </div>
)