import React from 'react'
import { PageTemplate } from './PageTemplate'
import { quotesList } from './data'

export const Articles = (props) => {

  let quoteID;

  // check if we have number
  if (props.match.params.quoteID) {
   quoteID= props.match.params.quoteID
  } else {
   quoteID= 0
  }

 quoteID= parseInt(quoteID, 10)

  // check if we have quote with this number 
  if (isNaN(quoteID) ||quoteID< 0 ||quoteID> quotesList.length) {
    return <div>this is not a valid page number</div>
  }
  const quote = quotesList[quoteID]
  console.log(quote)

  return <ArticlesPage quote={quote} pageNumber={quoteID} />
}

export const ArticlesPage = (props) => (
  <PageTemplate header="Articles">
    <div>
      <h4>{props.quote.author}</h4>
      <p>{props.quote.quote}</p>
    </div>
  </PageTemplate>
)
