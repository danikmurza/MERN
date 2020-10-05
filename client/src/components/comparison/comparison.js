import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {removeCart} from "../localStorage/local-storage";


export const Comparison = () => {
  const [compare, setCompare] = useState(JSON.parse(localStorage.getItem('compare')))
  
  if (compare) {
    return (
      <div>
        {/* Page Title (Dark)*/}
        <div className="bg-dark py-4">
          <div
            className="container d-lg-flex justify-content-between py-2 py-lg-3">
            <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                  <li className="breadcrumb-item">
                    <Link className="text-nowrap" to="/">
                      <i className="czi-home"/>
                      Home
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page"
                  >
                    Comparison
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
              <h1 className="h3 text-light mb-0">Product comparison</h1>
            </div>
          </div>
        </div>
        {/* Page Content*/}
        <div className="container py-5 mb-2">
          <div className="table-responsive">
            <table
              className="table table-bordered table-fixed font-size-sm"
              style={{minWidth: "45rem"}}>
              <thead>
              <tr>
                <td className="align-middle">
                  <select
                    className="form-control custom-select"
                    id="compare-criteria"
                    data-filter="trigger">
                    <option value="all">Comparison criteria *</option>
                    <option value="summary">Summary</option>
                    <option value="general">General</option>
                    <option value="multimedia">Multimedia</option>
                    <option value="performance">Performance</option>
                    <option value="design">Design</option>
                    <option value="display">Display</option>
                    <option value="storage">Storage</option>
                    <option value="camera">Camera</option>
                    <option value="battery">Battery</option>
                    <option value="price">Price &amp; rating</option>
                  </select>
                  <small className="form-text text-muted">
                    * Choose criteria to filter table below.
                  </small>
                  <div className="pt-3">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="differences"
                      />
                      <label className="custom-control-label"
                             htmlFor="differences">
                        Show differences only
                      </label>
                    </div>
                  </div>
                </td>
                {compare.length > 0 ? <td className="text-center px-4 pb-4">
                  <button className="btn btn-sm btn-block text-danger mb-2"
                          value={compare[0]._id}
                          id="compare"
                          onClick={(e) => setCompare(removeCart(e))}
                  >
                    <i className="czi-trash mr-1"/>
                    Remove
                  </button>
                  <a className="d-inline-block mb-3" href="/">
                    <img
                      src={compare[0].img}
                      width={80}
                      alt="Apple iPhone Xs Max"
                    />
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="/">{compare[0].name}</a>
                  </h3>
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                  >
                    Add to Cart
                  </button>
                </td> : null}
                {compare.length > 1 ? <td className="text-center px-4 pb-4">
                  <button className="btn btn-sm btn-block text-danger mb-2"
                          value={compare[1]._id}
                          id="compare"
                          onClick={(e) => setCompare(removeCart(e))}
                  >
                    <i className="czi-trash mr-1"/>
                    Remove
                  </button>
                  <a className="d-inline-block mb-3" href="/">
                    <img
                      src={compare[1].img}
                      width={80}
                      alt="Apple iPhone Xs Max"
                    />
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="/">{compare[1].name}</a>
                  </h3>
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                  >
                    Add to Cart
                  </button>
                </td> : null}
                {compare.length > 2 ? <td className="text-center px-4 pb-4">
                  <button className="btn btn-sm btn-block text-danger mb-2"
                          value={compare[2]._id}
                          id="compare"
                          onClick={(e) => setCompare(removeCart(e))}
                  >
                    <i className="czi-trash mr-1"/>
                    Remove
                  </button>
                  <a className="d-inline-block mb-3" href="/">
                    <img
                      src={compare[2].img}
                      width={80}
                      alt="Apple iPhone Xs Max"
                    />
                  </a>
                  <h3 className="product-title font-size-sm">
                    <a href="/">{compare[2].name}</a>
                  </h3>
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                  >
                    Add to Cart
                  </button>
                </td> : null}
              
              </tr>
              </thead>
              <tbody id="summary" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Summary</th>
                {compare.length ? <td>
              <span className="text-dark font-weight-medium text-dark">
                {compare[0].name}
              </span>
                </td> : null}
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Performance</th>
                <td>Hexa Core</td>
                <td>Octa Core</td>
                <td>Octa Core</td>
              </tr>
              <tr>
                <th className="text-dark">Display</th>
                <td>6.5-inch</td>
                <td>6.3-inch</td>
                <td>6.4-inch</td>
              </tr>
              <tr>
                <th className="text-dark">Storage</th>
                <td>64 GB</td>
                <td>64 GB</td>
                <td>128 GB</td>
              </tr>
              <tr>
                <th className="text-dark">Camera</th>
                <td>Dual 12-megapixel</td>
                <td>12.2-megapixel</td>
                <td>12,16,12-megapixel</td>
              </tr>
              <tr>
                <th className="text-dark">Battery</th>
                <td>3,174 mAh</td>
                <td>3,430 mAh</td>
                <td>4,100 mAh</td>
              </tr>
              </tbody>
              <tbody id="general" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">General</th>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Apple iPhone Xs Max
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Quick charging</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Operating system</th>
                <td>iOS v12</td>
                <td>Android v9.0 Pie</td>
                <td>Android v9.0 with Samsung One UI</td>
              </tr>
              <tr>
                <th className="text-dark">Sim slots</th>
                <td>Single SIM, GSM</td>
                <td>Single SIM, GSM</td>
                <td>Hybrid SIM slot, GSM</td>
              </tr>
              <tr>
                <th className="text-dark">Launch date</th>
                <td>September 12, 2018 (Official)</td>
                <td>November 1, 2018 (Official)</td>
                <td>February 20, 2019 (Official)</td>
              </tr>
              <tr>
                <th className="text-dark">Sim size</th>
                <td>SIM1: Nano</td>
                <td>SIM1: Nano</td>
                <td>SIM1: Nano SIM2: Nano (Hybrid)</td>
              </tr>
              <tr>
                <th className="text-dark">Network</th>
                <td>
                  4G: Available (supports Indian bands) 3G: Available, 2G:
                  Available
                </td>
                <td>
                  4G: Available (supports Indian bands) 3G: Available, 2G:
                  Available
                </td>
                <td>
                  4G: Available (supports Indian bands) 3G: Available, 2G:
                  Available
                </td>
              </tr>
              <tr>
                <th className="text-dark">Fingerprint sensor</th>
                <td>None (Face ID)</td>
                <td>Back cover</td>
                <td>In-screen</td>
              </tr>
              </tbody>
              <tbody id="multimedia" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Multimedia</th>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Apple iPhone Xs Max
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Loudspeaker</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">FM radio</th>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <th className="text-dark">Headphone jack</th>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              </tbody>
              <tbody id="performance" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Performance</th>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Apple iPhone Xs Max
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Processor</th>
                <td>Apple A12 Bionic</td>
                <td>Qualcomm Snapdragon 845 (2.5GHz octa-core)</td>
                <td>Octa-core Qualcomm Snapdragon 855</td>
              </tr>
              <tr>
                <th className="text-dark">Graphics</th>
                <td>Apple GPU (4-core graphics)</td>
                <td>Adreno 630</td>
                <td>Mali-G72 MP18</td>
              </tr>
              <tr>
                <th className="text-dark">Architecture</th>
                <td>64 bit</td>
                <td>64 bit</td>
                <td>64 bit</td>
              </tr>
              <tr>
                <th className="text-dark">RAM</th>
                <td>4 GB</td>
                <td>4 GB</td>
                <td>8 GB</td>
              </tr>
              </tbody>
              <tbody id="design" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Design</th>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Apple iPhone Xs Max
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Build material</th>
                <td>Case: AluminiumBack: Mineral Glass</td>
                <td>Case: AluminiumBack: Aluminium</td>
                <td>Case: AluminiumBack: Mineral Glass</td>
              </tr>
              <tr>
                <th className="text-dark">Thickness</th>
                <td>7.7 mm</td>
                <td>7.9 mm</td>
                <td>8.5 mm</td>
              </tr>
              <tr>
                <th className="text-dark">Width</th>
                <td>70.9 mm</td>
                <td>76.7 mm</td>
                <td>73.8 mm</td>
              </tr>
              <tr>
                <th className="text-dark">Height</th>
                <td>143.6 mm</td>
                <td>157.9 mm</td>
                <td>158.1 mm</td>
              </tr>
              <tr>
                <th className="text-dark">Weight</th>
                <td>174 grams</td>
                <td>175 grams</td>
                <td>189 grams</td>
              </tr>
              <tr>
                <th className="text-dark">Waterproof</th>
                <td>
                  Yes Water resistant (up to 30 minutes in a depth of 1 meter),
                  IP67
                </td>
                <td>
                  Yes Water resistant (up to 30 minutes in a depth of 1 meter),
                  IP67
                </td>
                <td>
                  Yes Water resistant (up to 30 minutes in a depth of 1.5
                  meter),
                  IP68
                </td>
              </tr>
              <tr>
                <th className="text-dark">Colors</th>
                <td>Silver, Space Grey</td>
                <td>Black, Black and White</td>
                <td>Midnight Black, Coral Blue, Lilac Purple</td>
              </tr>
              </tbody>
              <tbody id="display" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Display</th>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Apple iPhone Xs Max
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Display type</th>
                <td>Super Retina OLED</td>
                <td>'flexible' OLED</td>
                <td>Super AMOLED</td>
              </tr>
              <tr>
                <th className="text-dark">Pixel density</th>
                <td>458 ppi</td>
                <td>522 ppi</td>
                <td>522 ppi</td>
              </tr>
              <tr>
                <th className="text-dark">Screen protection</th>
                <td>Yes</td>
                <td>Corning Gorilla Glass v5</td>
                <td>Corning Gorilla Glass v5</td>
              </tr>
              <tr>
                <th className="text-dark">Screen size</th>
                <td>6.5 inches</td>
                <td>6.3 inches</td>
                <td>6.4 inches</td>
              </tr>
              <tr>
                <th className="text-dark">Screen resolution</th>
                <td>1125 x 2436 pixels</td>
                <td>1440 x 2880 pixels</td>
                <td>1440 x 2960 pixels</td>
              </tr>
              <tr>
                <th className="text-dark">Touch screen</th>
                <td>Yes, 3D Touch Touchscreen, Multi-touch</td>
                <td>Yes, Capacitive Touchscreen, Multi-touch</td>
                <td>Yes, Capacitive Touchscreen, Multi-touch</td>
              </tr>
              </tbody>
              <tbody id="storage" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Storage</th>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Apple iPhone Xs Max
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Internal memory</th>
                <td>64 GB</td>
                <td>64 GB</td>
                <td>128 GB</td>
              </tr>
              <tr>
                <th className="text-dark">Expandable memory</th>
                <td>No</td>
                <td>No</td>
                <td>Yes Up to 1 TB</td>
              </tr>
              </tbody>
              <tbody id="camera" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Camera</th>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Apple iPhone Xs Max
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Settings</th>
                <td>Exposure compensation, ISO control</td>
                <td>Exposure compensation, ISO control</td>
                <td>Exposure compensation</td>
              </tr>
              <tr>
                <th className="text-dark">Aperture</th>
                <td>F2.2</td>
                <td>F2.4</td>
                <td>F1.7</td>
              </tr>
              <tr>
                <th className="text-dark">Camera features</th>
                <td>
                  10 x Digital zoom, Optical zoom, Auto flash, Face detection,
                  Touch
                  to focus
                </td>
                <td>Fixed zocus</td>
                <td>Wide angle selfie</td>
              </tr>
              <tr>
                <th className="text-dark">Image resolution</th>
                <td>4000 x 3000 pixels</td>
                <td>4000 x 3000 pixels</td>
                <td>4000 x 3000 pixels</td>
              </tr>
              <tr>
                <th className="text-dark">Sensor</th>
                <td>BSI sensor</td>
                <td>CMOS image sensor</td>
                <td>CMOS image sensor</td>
              </tr>
              <tr>
                <th className="text-dark">Autofocus</th>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Shooting modes</th>
                <td>
                  Continuos shooting, High dynamic range mode (HDR), Burst mode
                </td>
                <td>Continuos shooting, High dynamic range mode (HDR)</td>
                <td>Continuos shooting, High dynamic range mode (HDR)</td>
              </tr>
              <tr>
                <th className="text-dark">Optical image stabilisation</th>
                <td>Yes, Dual optical image stabilization</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Flash</th>
                <td>Yes, Retina flash</td>
                <td>Yes, Dual LED flash</td>
                <td>Yes, LED flash</td>
              </tr>
              </tbody>
              <tbody id="battery" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Battery</th>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Apple iPhone Xs Max
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Talktime</th>
                <td>Up to 21 hours(4G)</td>
                <td>Up to 24 hours(4G)</td>
                <td>Up to 25 hours(4G)</td>
              </tr>
              <tr>
                <th className="text-dark">Quick charging</th>
                <td>Yes, fast, 50 % in 30 minutes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Wireless charging</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Type</th>
                <td>Li-ion</td>
                <td>Li-ion</td>
                <td>Li-ion</td>
              </tr>
              <tr>
                <th className="text-dark">Capacity</th>
                <td>3,174 mAh</td>
                <td>3,430 mAh</td>
                <td>4,100 mAh</td>
              </tr>
              </tbody>
              <tbody id="price" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Price &amp; rating</th>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Apple iPhone Xs Max
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Google Pixel 3 XL
              </span>
                </td>
                <td>
              <span className="text-dark font-weight-medium text-dark">
                Samsung Galaxy S10+
              </span>
                </td>
              </tr>
              <tr>
                <th className="text-dark">Price</th>
                <td>$1,099</td>
                <td>$899</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <th className="text-dark">Rating</th>
                <td>4.5/5</td>
                <td>4.5/5</td>
                <td>4.5/5</td>
              </tr>
              <tr>
                <th/>
                <td>
                  <button
                    className="btn btn-primary btn-block"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                  >
                    Add to Cart
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-block"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                  >
                    Add to Cart
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-block"
                    type="button"
                    data-toggle="toast"
                    data-target="#cart-toast"
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Toast: Added to Cart*/}
        <div className="toast-container toast-bottom-center">
          <div
            className="toast mb-3"
            id="cart-toast"
            data-delay={5000}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header bg-success text-white">
              <i className="czi-check-circle mr-2"/>
              <h6 className="font-size-sm text-white mb-0 mr-auto">Added to
                cart!</h6>
              <button
                className="close text-white ml-2 mb-1"
                type="button"
                data-dismiss="toast"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="toast-body">This item has been added to your cart.
            </div>
          </div>
        </div>
        {/* Footer*/}
      </div>
    )
  }
  if (!compare) {
    return (
      <div></div>
    )
  }
}
