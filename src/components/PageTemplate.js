import React from 'react'

export const PageTemplate = (props) => (
  <div>
    <nav>
      my beautiful website
    </nav>
    <h1>{ props.header }</h1>
    <hr/>
    <main>
      { props.children }
    </main>
  </div>
)