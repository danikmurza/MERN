import React from 'react'
import categories1 from '../css/img/shop/categories/01.jpg'
import categories2 from '../css/img/shop/categories/02.jpg'
import categories3 from '../css/img/shop/categories/03.jpg'
import categories4 from '../css/img/shop/categories/04.jpg'
import categories5 from '../css/img/shop/categories/05.jpg'
import categories6 from '../css/img/shop/categories/06.jpg'
import brands1 from '../css/img/shop/brands/01.png'
import brands2 from '../css/img/shop/brands/02.png'
import brands3 from '../css/img/shop/brands/03.png'
import brands4 from '../css/img/shop/brands/04.png'
import brands5 from '../css/img/shop/brands/05.png'
import brands6 from '../css/img/shop/brands/06.png'
import brands7 from '../css/img/shop/brands/07.png'
import brands8 from '../css/img/shop/brands/08.png'
import brands9 from '../css/img/shop/brands/09.png'
import brands10 from '../css/img/shop/brands/10.png'
import brands11 from '../css/img/shop/brands/11.png'
import brands12 from '../css/img/shop/brands/12.png'


export const Categories = () => {
  return (
    <div>
      {/* Page Title (Light)*/}
      <div className="bg-secondary py-4">
        <div
          className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <a className="text-nowrap" href="/">
                    <i className="czi-home"/>
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="/">Shop</a>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Categories
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
            <h1 className="h3 mb-0">Shop categories</h1>
          </div>
        </div>
      </div>
      {/* Page Content*/}
      <div className="container pb-4 pb-sm-5">
        {/* Categories grid*/}
        <div className="row pt-5">
          {/* Catogory*/}
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card border-0">
              <a
                className="d-block overflow-hidden rounded-lg"
                href="/"
              >
                <img
                  className="d-block w-100"
                  src={categories1}
                  alt="Clothing"
                />
              </a>
              <div className="card-body">
                <h2 className="h5">Clothing</h2>
                <ul className="list-unstyled font-size-sm mb-0">
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Blazers &amp; Suits
                    </a>
                    <span className="font-size-ms text-muted">235</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Blouse
                    </a>
                    <span className="font-size-ms text-muted">410</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Cardigans &amp; Jumpers
                    </a>
                    <span className="font-size-ms text-muted">107</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Dresses
                    </a>
                    <span className="font-size-ms text-muted">93</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Hoodie &amp; Sweatshirts
                    </a>
                    <span className="font-size-ms text-muted">93</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Sportswear
                    </a>
                    <span className="font-size-ms text-muted">65</span>
                  </li>
                  <li>...</li>
                  <li>
                    <hr/>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      View all
                    </a>
                    <span className="font-size-ms text-muted">2,548</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Catogory*/}
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card border-0">
              <a
                className="d-block overflow-hidden rounded-lg"
                href="/"
              >
                <img
                  className="d-block w-100"
                  src={categories2}
                  alt="Shoes"
                />
              </a>
              <div className="card-body">
                <h2 className="h5">Shoes</h2>
                <ul className="list-unstyled font-size-sm mb-0">
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Pumps &amp; High Heels
                    </a>
                    <span className="font-size-ms text-muted">247</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Ballerinas &amp; Flats
                    </a>
                    <span className="font-size-ms text-muted">156</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Sandals
                    </a>
                    <span className="font-size-ms text-muted">310</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Sneakers
                    </a>
                    <span className="font-size-ms text-muted">402</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Boots
                    </a>
                    <span className="font-size-ms text-muted">393</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Flip Flops
                    </a>
                    <span className="font-size-ms text-muted">116</span>
                  </li>
                  <li>...</li>
                  <li>
                    <hr/>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      View all
                    </a>
                    <span className="font-size-ms text-muted">1,953</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Catogory*/}
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card border-0">
              <a
                className="d-block overflow-hidden rounded-lg"
                href="/"
              >
                <img
                  className="d-block w-100"
                  src={categories3}
                  alt="Gadgets"
                />
              </a>
              <div className="card-body">
                <h2 className="h5">Gadgets</h2>
                <ul className="list-unstyled font-size-sm mb-0">
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Smartphones &amp; Tablets
                    </a>
                    <span className="font-size-ms text-muted">436</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Headphones
                    </a>
                    <span className="font-size-ms text-muted">308</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Wearable Electronics
                    </a>
                    <span className="font-size-ms text-muted">195</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Home IoT Gadgets
                    </a>
                    <span className="font-size-ms text-muted">82</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Computers &amp; Accessories
                    </a>
                    <span className="font-size-ms text-muted">264</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Cameras, Photo &amp; Video
                    </a>
                    <span className="font-size-ms text-muted">57</span>
                  </li>
                  <li>...</li>
                  <li>
                    <hr/>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      View all
                    </a>
                    <span className="font-size-ms text-muted">1,240</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Catogory*/}
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card border-0">
              <a
                className="d-block overflow-hidden rounded-lg"
                href="/"
              >
                <img
                  className="d-block w-100"
                  src={categories4}
                  alt="Furniture"
                />
              </a>
              <div className="card-body">
                <h2 className="h5">Furniture &amp; Decor</h2>
                <ul className="list-unstyled font-size-sm mb-0">
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Lounge Seating
                    </a>
                    <span className="font-size-ms text-muted">374</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      File Cabinets
                    </a>
                    <span className="font-size-ms text-muted">83</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Tables
                    </a>
                    <span className="font-size-ms text-muted">125</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Indoor Lighting
                    </a>
                    <span className="font-size-ms text-muted">291</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Office Chairs
                    </a>
                    <span className="font-size-ms text-muted">118</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Adjustable Height Desks
                    </a>
                    <span className="font-size-ms text-muted">46</span>
                  </li>
                  <li>...</li>
                  <li>
                    <hr/>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      View all
                    </a>
                    <span className="font-size-ms text-muted">960</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Catogory*/}
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card border-0">
              <a
                className="d-block overflow-hidden rounded-lg"
                href="/"
              >
                <img
                  className="d-block w-100"
                  src={categories5}
                  alt="Accessories"
                />
              </a>
              <div className="card-body">
                <h2 className="h5">Accessories</h2>
                <ul className="list-unstyled font-size-sm mb-0">
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Bags
                    </a>
                    <span className="font-size-ms text-muted">417</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Sunglasses
                    </a>
                    <span className="font-size-ms text-muted">382</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Watches
                    </a>
                    <span className="font-size-ms text-muted">122</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Hats
                    </a>
                    <span className="font-size-ms text-muted">204</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Jewelry
                    </a>
                    <span className="font-size-ms text-muted">149</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Cosmetics
                    </a>
                    <span className="font-size-ms text-muted">90</span>
                  </li>
                  <li>...</li>
                  <li>
                    <hr/>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      View all
                    </a>
                    <span className="font-size-ms text-muted">1,532</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Catogory*/}
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card border-0">
              <a
                className="d-block overflow-hidden rounded-lg"
                href="/"
              >
                <img
                  className="d-block w-100"
                  src={categories6}
                  alt="Entertainment"
                />
              </a>
              <div className="card-body">
                <h2 className="h5">Entertainment</h2>
                <ul className="list-unstyled font-size-sm mb-0">
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Video Games, VR
                    </a>
                    <span className="font-size-ms text-muted">306</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Kid's Toys
                    </a>
                    <span className="font-size-ms text-muted">231</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Table Games
                    </a>
                    <span className="font-size-ms text-muted">114</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Outdoor / Camping
                    </a>
                    <span className="font-size-ms text-muted">92</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Gifts
                    </a>
                    <span className="font-size-ms text-muted">27</span>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      Music, CDs &amp; Vinyl
                    </a>
                    <span className="font-size-ms text-muted">41</span>
                  </li>
                  <li>...</li>
                  <li>
                    <hr/>
                  </li>
                  <li
                    className="d-flex align-items-center justify-content-between">
                    <a className="nav-link-style" href="/">
                      <i className="czi-arrow-right-circle mr-2"/>
                      View all
                    </a>
                    <span className="font-size-ms text-muted">879</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Popular brands*/}
        <h2 className="h3 text-center py-4 mt-md-3">Popular brands</h2>
        <div className="row">
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands1}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands2}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands3}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands4}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands5}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands6}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands7}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands8}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands9}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands10}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands11}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <a
              className="d-block bg-white box-shadow-sm rounded-lg py-3 py-sm-4 mb-grid-gutter"
              href="/"
            >
              <img
                className="d-block mx-auto"
                src={brands12}
                style={{width: 150}}
                alt="Brand"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Footer*/}
    </div>
  )
}
