import React from 'react'
import Head from 'next/head'
import Layout from './components/layout'
import { COMPANY_NAME } from '../utils/constants'

const NotFoundPage = () => (
  <Layout>
    <Head>
      <title>Page Not Found | {COMPANY_NAME}</title>
      <meta name="robots" content="noindex, follow" />
    </Head>
    <main>
      <h1>NOT FOUND</h1>
      <p>You just hit a page that doesn&#39;t exist... :(</p>
    </main>
  </Layout>
)

export default NotFoundPage
