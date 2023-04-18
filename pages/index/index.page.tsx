import React from 'react'
import Sidebar from '../../components/sidebar'
import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
          <Sidebar />
        </li>
      </ul>
    </>
  )
}
