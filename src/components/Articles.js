import React from 'react'
import { PageTemplate } from './PageTemplate'

export const Articles = (props) => {
  
  let x;
  if(props.match.params.pageNumber){
    x = props.match.params.pageNumber
  }else{
    x = 0
  }
  
  x = parseInt(x,10)
  
  if(isNaN(x)){
    return <div>this is not a valid page number</div>
  }
  
  return <ArticlesPage pageNumber={x}/>
}

export const ArticlesPage = (props) => (
  <PageTemplate header="Articles">
    <div>
      the articles page {props.pageNumber}
    </div>
  </PageTemplate>
)
