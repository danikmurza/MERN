import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchNews} from '../../actions/index'
import LoadingSpinner from '../spinner'
import {compose} from "../../utils"
import {withProductStoreService} from "../hoc"
import ErrorBoundry from "../error-boundry"

class NewsPage extends Component {
  
  componentDidMount() {
    this.props.fetchProducts()
    
  }
  
  render() {
    
    const {pending, error, products} = this.props
    
    if (pending) {
      return (
        <LoadingSpinner/>
      )
    }
    if (error) {
      return (
        <ErrorBoundry/>
      )
    } else {
      return (
        <div className='product-list-wrapper'>
          <News products={products}/>
        </div>
      )
    }
  }
}

const News = ({products}) => {
  const news = products.map((news, index) =>
    <li key={index}
        style={{listStyle: "none", paddingLeft: "0px", marginLeft: "0px"}}>
    
      <div className="jumbotron pb-1">
        <div className="media">
        
          <img className="rounded mr-3 w-25"
               src={news.urlToImage}
               alt="card"
            // style="width: 18rem;"
          />
          <div className="media-body">
            <h5 className="display-8">{news.title}</h5>
            <p className="display-8">{news.author}</p>
            <p>
              {news.description}
            </p>
            <p>
              {news.content}
            </p>
            <a className="btn btn-secondary btn-sm"
               href={news.url}
               role="button"
            >
              Learn more
            </a>
            <p className="pt-2">Date: {news.publishedAt.slice(0, 10)}</p>
          </div>
        </div>
      </div>
  
    </li>
  )
  
  return (
    
    <ul className='m-0 p-0'>
      {news}
    </ul>
  
  )
}


const mapStateToProps = ({newsList: {products, pending, error}}) => {
  return {products, pending, error}
};


const mapDispatchToProps = dispatch => bindActionCreators({
  
  
  fetchProducts: fetchNews
  
}, dispatch)


export default compose(
  withProductStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(NewsPage)
