import React from 'react'

import departments4 from '../css/img/shop/departments/04.jpg'
import departments5 from '../css/img/shop/departments/05.jpg'
import departments6 from '../css/img/shop/departments/06.jpg'


export const DropDown = () => {
  return (
    <div className="d-flex flex-wrap flex-md-nowrap">
      <div className="mega-dropdown-column pt-4 px-3">
        <div className="widget widget-links">
          <a className="d-block overflow-hidden rounded-lg mb-3" href="/">
            <img src={departments4} alt="Shoes"/>
          </a>
          <h6 className="font-size-base mb-2">Furniture &amp; Decor</h6>
          <ul className="widget-list">
            <li className="widget-list-item">
              <a className="widget-list-link" href="/">
                Home furniture
              </a>
            </li>
            <li className="widget-list-item">
              <a className="widget-list-link" href="/">
                Office furniture
              </a>
            </li>
            <li className="widget-list-item">
              <a className="widget-list-link" href="/">
                Lighting and decoration
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mega-dropdown-column pt-4 px-3">
        <div className="widget widget-links">
          <a className="d-block overflow-hidden rounded-lg mb-3" href="/">
            <img src={departments5} alt="Shoes"/>
          </a>
          <h6 className="font-size-base mb-2">Accessories</h6>
          <ul className="widget-list">
            <li className="widget-list-item">
              <a className="widget-list-link" href="/">
                Hats
              </a>
            </li>
            <li className="widget-list-item">
              <a className="widget-list-link" href="/">
                Sunglasses
              </a>
            </li>
            <li className="widget-list-item">
              <a className="widget-list-link" href="/">
                Bags
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mega-dropdown-column pt-4 px-3">
        <div className="widget widget-links">
          <a className="d-block overflow-hidden rounded-lg mb-3" href="/">
            <img src={departments6} alt="Shoes"/>
          </a>
          <h6 className="font-size-base mb-2">Entertainment</h6>
          <ul className="widget-list">
            <li className="widget-list-item">
              <a className="widget-list-link" href="/">
                Kid's toys
              </a>
            </li>
            <li className="widget-list-item">
              <a className="widget-list-link" href="/">
                Video games
              </a>
            </li>
            <li className="widget-list-item">
              <a className="widget-list-link" href="/">
                Outdoor / Camping
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
