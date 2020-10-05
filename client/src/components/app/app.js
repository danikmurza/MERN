import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Redirect} from "react-router-dom"
import NewsPage from "../admin/add-product"
import Products from '../products/products'
import Header from '../header/header'
import {Footer} from "../footer/footer"
import MyAccount from "../login/login"
import {RecoveryPassword} from '../login/recovery-password'
import {OrderTracking} from "../order-tracking/order-tracking"
import {YourCart} from "../shopping-cart-table/your-cart"
import {Categories} from "../categories/categories"
import Review from "../shopping-cart-table/review"
import {Complete} from "../shopping-cart-table/complete"
import {Comparison} from "../comparison/comparison"
import {Error404} from "../404/404"
import {AboutPage} from "../about"
import AccountAddress from "../account/account-address"
import {AccountPayment} from "../account/account-payment"
import AccountProfile from "../account/account-profile"
import {AccountSingleTicket} from "../account/account-single-ticket"
import AccountTickets from "../account/account-tickets"
import AccountWishlist from "../account/account-wishlist"
import {Contacts} from "../contacts/contacts"
import {HelpTopics} from "../help-page/help-topics"
import {HelpSingleTopic} from "../help-page/help-single-topic"
import {SubmitRequest} from "../help-page/submit-request"
import {YourDetails} from "../shopping-cart-table/your-details"
import {Shipping} from "../shopping-cart-table/shipping"
import {Payments} from "../shopping-cart-table/payment"
import AccountOrders from "../account/account-orders"
import AllUser from "../admin/admin-page"
import ProductDescription from "../products/product-description"


const Navigation = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')))
  
  if (user) {
    return (
      <div>
        <Header/>
        <Switch>
          {/*<Route path="/" component={HomePage} exact/>*/}
          <Route path="/store" component={Products}/>
          {/*<Route path="/my_account" component={MyAccount}/>*/}
          <Route path="/categories" component={Categories}/>
          <Route path="/compare" component={Comparison}/>
          <Route path="/error404" component={Error404}/>
          <Route path="/about_page" component={AboutPage}/>
          <Route path="/account_orders" component={AccountOrders}/>
          <Route path="/account_wishlist" component={AccountWishlist}/>
          <Route path="/account_tickets" component={AccountTickets}/>
          <Route path="/account_single_ticket" component={AccountSingleTicket}/>
          <Route path="/account_profile" component={AccountProfile}/>
          <Route path="/account_address" component={AccountAddress}/>
          <Route path="/account_payment" component={AccountPayment}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/help_topics" component={HelpTopics}/>
          <Route path="/help_single_topic" component={HelpSingleTopic}/>
          <Route path="/submit_request" component={SubmitRequest}/>
          <Route path="/recovery_password" component={RecoveryPassword}/>
          <Route path="/news_page" component={NewsPage}/>
          <Route path="/order_tracking" component={OrderTracking}/>
          <Route path="/your_cart" component={YourCart}/>
          <Route path="/your_details" component={YourDetails}/>
          <Route path="/shipping" component={Shipping}/>
          <Route path="/payments" component={Payments}/>
          <Route path="/review" component={Review}/>
          <Route path="/complete" component={Complete}/>
          <Route path="/add" component={NewsPage}/>
          <Route path="/users" component={AllUser}/>
          <Route path="/pd" component={ProductDescription}/>
          <Redirect to="/store" from="/*"/>
        </Switch>
        <Footer/>
      </div>
    )
  } else if (!user) {
    return (
      <div>
        <Header/>
        <Switch>
          {/*<Route path="/" component={HomePage} exact/>*/}
          <Route path="/store" component={Products}/>
          <Route path="/my_account" component={MyAccount}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/compare" component={Comparison}/>
          <Route path="/error404" component={Error404}/>
          <Route path="/about_page" component={AboutPage}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/help_topics" component={HelpTopics}/>
          <Route path="/help_single_topic" component={HelpSingleTopic}/>
          <Route path="/recovery_password" component={RecoveryPassword}/>
          <Route path="/your_cart" component={YourCart}/>
          <Route path="/your_details" component={YourDetails}/>
          <Route path="/shipping" component={Shipping}/>
          <Route path="/payments" component={Payments}/>
          <Route path="/review" component={Review}/>
          <Route path="/complete" component={Complete}/>
          <Route path="/pd" component={ProductDescription}/>
          <Route path="/add" component={NewsPage}/>
          <Redirect to="/store" from="/*"/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export const App = () => {
  
  return (
    <div>
      <Navigation/>
    </div>
  )
}



