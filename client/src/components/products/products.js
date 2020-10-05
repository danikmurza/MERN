import React, {Component} from 'react'
import {connect} from 'react-redux'
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"
import {ProductList} from "./product-list"
import './products-list.css'
import {
  fetchProducts, sortProductPrice, reverseProductPrice,
  sortProductPAtoZ, reverseProductZtoA, productDescription
} from "../../actions"


class Products extends Component {
  
  state = {
    update: 0,
    offset: 0,
    perPage: 12,
    currentPage: 0
  }
  
  componentDidMount() {
    this.props.dispatch(fetchProducts())
  }
  
  handlePageClick = (e) => {
    const selectedPage = e.selected
    const offset = selectedPage * this.state.perPage
    this.setState({
      offset: offset,
      currentPage: selectedPage
    })
  }
  
  sortingProducts = (e) => {
    const {dispatch} = this.props
    if ('low-high' === e.target.value) {
      dispatch(sortProductPrice())
      this.setState({update: 1})
  
    }
    if ('high-low' === e.target.value) {
      dispatch(reverseProductPrice())
      this.setState({update: 1})
    }
    if ('az' === e.target.value) {
      dispatch(sortProductPAtoZ())
      this.setState({update: 1})
    }
    if ('za' === e.target.value) {
      dispatch(reverseProductZtoA())
      this.setState({update: 1})
    }
    if ('popularity' === e.target.value) {
  
    }
    if ('average-rating' === e.target.value) {
  
    }
  }
  
  productDescription = (e) => {
    this.props.dispatch(productDescription(e.currentTarget.value))
    // localStorage.setItem('id', JSON.stringify( e.currentTarget.value))
    this.props.history.push('/pd')
  }
  
  render() {
    
    const {currentPage} = this.state
    const {products, loading, error, onAddedToCart} = this.props
    const countProduts = products.length
    const page = products.slice(this.state.offset, this.state.offset + this.state.perPage)
    const pageCount = Math.ceil(products.length / this.state.perPage)
    
    if (loading) {
      return <Spinner/>
    }
    
    if (error) {
      return <ErrorIndicator/>
    }
    
    return (
      <div>
        <ProductList page={page}
                     pageCount={pageCount}
                     currentPage={currentPage}
                     countProduts={countProduts}
                     handlePageClick={this.handlePageClick}
                     onAddedToCart={onAddedToCart}
                     sortingProducts={this.sortingProducts}
                     productDescription={this.productDescription}
        />
  
      </div>

    )
  }
}


const mapStateToProps = ({productList: {products, loading, error}}) => {
  return {products, loading, error}
}

export default connect(mapStateToProps, null)(Products)
