import React from 'react'
import { PageTemplate } from './PageTemplate'

export const NotFound = (props) => (
  <PageTemplate header="404">
    <div>not found {props.location.pathname}</div>
  </PageTemplate>
)