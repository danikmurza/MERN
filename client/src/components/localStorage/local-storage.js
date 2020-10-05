export const addProduct = (e, product) => {
  let productsTitle = e.currentTarget.title
  const {name, price, img, review, brand} = product
  let products = [];
  if (localStorage.getItem(productsTitle)) {
    products = JSON.parse(localStorage.getItem(productsTitle))
  }
  let pro = products.find(p => p._id === product._id)
  if (pro) {
    products.map(p => p._id === product._id ? p.count++ : p.count)
  }
  if (!pro) {
    products.push({
      _id: product._id,
      name: name,
      price: price,
      img: img,
      count: 1,
      review: review,
      brand: brand
    })
  }
  localStorage.setItem(productsTitle, JSON.stringify(products));
}

export const ratings = (arr) => {
  let arr5 = arr.filter((item) => item.rating === 5).length
  let arr4 = arr.filter((item) => item.rating === 4).length
  let arr3 = arr.filter((item) => item.rating === 3).length
  let arr2 = arr.filter((item) => item.rating === 2).length
  let arr1 = arr.filter((item) => item.rating === 1).length
  return ((5 * arr5) + (4 * arr4) + (3 * arr3) + (2 * arr2) + arr1) / (arr.length).toFixed(1)
}

export const removeCart = (e) => {
  e.preventDefault()
  
  const productss = e.currentTarget.id
  let storageProducts = JSON.parse(localStorage.getItem(productss))
  let products = storageProducts.filter(product => product._id !== e.currentTarget.value)
  localStorage.setItem(productss, JSON.stringify(products))
  return JSON.parse(localStorage.getItem(productss))
}

export let ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
}
