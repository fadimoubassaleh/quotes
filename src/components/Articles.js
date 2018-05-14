import React from 'react'
import { PageTemplate } from './PageTemplate'
import { quotesList } from './data'

fetch('/quotes')
.then(response => {
  return response.json()
})
.then(data =>{
  console.log(data) 
})

export class Articles extends React.Component{
  render(){
    let quoteID;
    
    // check if we have number
    if (this.props.match.params.quoteID) {
      quoteID = this.props.match.params.quoteID
    } else {
      quoteID = 0
    }
    
    quoteID = parseInt(quoteID, 10)
    
    // check if we have quote with this number 
    if (isNaN(quoteID) || quoteID < 0 || quoteID > quotesList.length) {
      return <div>this is not a valid page number</div>
    }
    const quote = quotesList[quoteID]
    console.log(quote)
    
    return <ArticlesPage quote={quote} pageNumber={quoteID} />

  }
}

// stop defaul submit for the form
// get the values from the form 
const onSubmit = (evt) => {
  evt.preventDefault()
  const form = evt.form
  const quote = form.quote.value
  const author = form.author.value
  const obj = { quote, author }
}

export const ArticlesPage = (props) => (
  <PageTemplate header="Articles">
    <div>
      <h4>{props.quote.author}</h4>
      <p>{props.quote.quote}</p>
      <form onSubmit={this.onSubmit} >
        <input type='text' placeholder='quote' />
        <br />
        <input type='text' placeholder='author' />
        <br />
        <input type='submit' value='submit' />
      </form>
    </div>
  </PageTemplate>
)
