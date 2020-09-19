import React, {Component} from 'react'
import {connect} from 'react-redux'
import {processorAction} from '../../actions/index'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


class AddProduct extends Component {
  
  state = {
    brand: "",
    count: 0,
    img: "",
    name: "",
    price: 0,
    specification: "",
    type: ""
  }
  
  
  componentDidMount() {
    this.props.dispatch(processorAction.getAll())
    
  }
  
  handleChange = (e) => {
    e.preventDefault()
    this.setState({type: e.target.value})
  }
  brand = (e) => {
    e.preventDefault()
    this.setState({brand: e.target.value})
  }
  count = (e) => {
    e.preventDefault()
    this.setState({count: e.target.value})
  }
  img = (e) => {
    e.preventDefault()
    this.setState({img: e.target.value})
  }
  name = (e) => {
    e.preventDefault()
    this.setState({name: e.target.value})
  }
  price = (e) => {
    e.preventDefault()
    this.setState({price: e.target.value})
  }
  specification = (e) => {
    e.preventDefault()
    this.setState({specification: e.target.value})
  }
  
  onSubmits = (e) => {
    const {name, brand, specification, price, count, img, type} = this.state
    e.preventDefault()
    this.props.dispatch(processorAction.processorAdd(
      name, brand, specification, price, count, img, type
    ))
  }
  
  render() {
    
    const {products, pending, error} = this.props
    // const {books, user, processor} = products
    // if (books && processor){
    // const ara = [...books, ...processor, ...user]
    // console.log(ara)
    // }
    
    if (pending) {
      return <Spinner/>
    }
    
    if (error) {
      return <ErrorIndicator/>
    }
    // console.log(products)
    if (products.message) {
      console.log(products.message)
    }
    // console.log(this.state.type)
    // const {brand, name, specification, count, img, price} = products[0]
    return (
      <div className="container pb-4">
        <div className="form-group">
          <label htmlFor="text-input">TYPE PRODUCT</label>
          <select value={this.state.type} onChange={this.handleChange}>
            <option value="">Выбери продукт</option>
            <option value="processor">Processor</option>
            <option value="motherboard">Motherboard</option>
            <option value="memory">Memory</option>
            <option value="video-card">Video Card</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="text-input">Name product</label>
          <input
            className="form-control"
            type="text"
            id="name"
            onChange={this.name}
            // defaultValue={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-input">Brand </label>
          <input
            className="form-control"
            type="text"
            id="brand"
            onChange={this.brand}
            // defaultValue={brand}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-input">Count</label>
          <input
            className="form-control"
            type="number"
            id="count"
            onChange={this.count}
            // defaultValue={count}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-input">Price</label>
          <input
            className="form-control"
            type="number"
            id="price"
            onChange={this.price}
            // defaultValue={price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-input">Image URL</label>
          <input
            className="form-control"
            type="text"
            id="link"
            onChange={this.img}
            // defaultValue={img}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-input">Description</label>
          <input
            className="form-control"
            type="text"
            id="specification"
            onChange={this.specification}
            // defaultValue={specification}
          />
        </div>
        <div className="text-right">
          <button className="btn btn-primary" type="submit"
                  onClick={this.onSubmits}>
            <i className="czi-user mr-2 ml-n1"/>
            ADD
          </button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({newsList: {products, pending, error}}) => {
  return {products, pending, error}
}


export default connect(mapStateToProps, null)(AddProduct)
