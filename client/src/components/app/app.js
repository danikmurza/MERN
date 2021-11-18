import React, {useState, Suspense} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Products from '../products/products'
import Header from '../header/header'
import Footer from "../footer/footer"
import Categories from "../categories/categories"
import ProductDescription from "../products/product-description"
import Spinner from "../spinner"
import MyAccount from "../login/login";

import RecoveryPassword from '../login/recovery-password'
import Comparison from '../comparison/comparison'
import AboutPage from '../about/about'
import Error404 from '../404/404'
import Complete from '../shopping-cart-table/complete'
import Review from '../shopping-cart-table/review'
import AccountOrders from '../account/account-orders'
import AccountWishlist from '../account/account-wishlist'
import AccountTickets from '../account/account-tickets'
import AccountSingleTicket from '../account/account-single-ticket'
import AccountProfile from '../account/account-profile'
import AccountAddress from '../account/account-address'
import AccountPayment from '../account/account-payment'
import Contacts from '../contacts/contacts'
import HelpTopics from '../help-page/help-topics'
import HelpSingleTopic from '../help-page/help-single-topic'
import SubmitRequest from '../help-page/submit-request'
import Shipping from '../shopping-cart-table/shipping'
import Payments from '../shopping-cart-table/payment'
import NewsPage from '../admin/add-product'
import OrderTracking from '../order-tracking/order-tracking'
import YourCart from '../shopping-cart-table/your-cart'
import YourDetails from '../shopping-cart-table/your-details'
import AllUser from '../admin/admin-page'

// const RecoveryPassword = lazy(() => import('../login/recovery-password'))
// const Comparison = lazy(() => import('../comparison/comparison'))
// const AboutPage = lazy(() => import('../about/about'))
// const Error404 = lazy(() => import('../404/404'))
// const Complete = lazy(() => import('../shopping-cart-table/complete'))
// const Review = lazy(() => import('../shopping-cart-table/review'))
// const AccountOrders = lazy(() => import('../account/account-orders'))
// const AccountWishlist = lazy(() => import('../account/account-wishlist'))
// const AccountTickets = lazy(() => import('../account/account-tickets'))
// const AccountSingleTicket = lazy(() => import('../account/account-single-ticket'))
// const AccountProfile = lazy(() => import('../account/account-profile'))
// const AccountAddress = lazy(() => import('../account/account-address'))
// const AccountPayment = lazy(() => import('../account/account-payment'))
// const Contacts = lazy(() => import('../contacts/contacts'))
// const HelpTopics = lazy(() => import('../help-page/help-topics'))
// const HelpSingleTopic = lazy(() => import('../help-page/help-single-topic'))
// const SubmitRequest = lazy(() => import('../help-page/submit-request'))
// const Shipping = lazy(() => import('../shopping-cart-table/shipping'))
// const Payments = lazy(() => import('../shopping-cart-table/payment'))
// const NewsPage = lazy(() => import('../admin/add-product'))
// const OrderTracking = lazy(() => import('../order-tracking/order-tracking'))
// const YourCart = lazy(() => import('../shopping-cart-table/your-cart'))
// const YourDetails = lazy(() => import('../shopping-cart-table/your-details'))
// const AllUser = lazy(() => import('../admin/admin-page'))


export const App = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')))
  
  if (user) {
    return (
      <>
        <Header/>
        <Switch>
          {/*<Route path="/" component={HomePage} exact/>*/}
          <Route exact path="/" component={Products}/>
          <Route exact path="/store" component={Products}/>
          <Route path="/my_account" component={MyAccount}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/pd" component={ProductDescription}/>
          
          {/*<Suspense fallback={<Spinner/>}>*/}
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
            <Route path="/shipping" component={Shipping}/>
            <Route path="/payments" component={Payments}/>
            <Route path="/review" component={Review}/>
            <Route path="/complete" component={Complete}/>
            <Route path="/add" component={NewsPage}/>
            <Route path="/users" component={AllUser}/>
            <Route path="/news_page" component={NewsPage}/>
            <Route path="/order_tracking" component={OrderTracking}/>
            <Route path="/your_cart" component={YourCart}/>
            <Route path="/your_details" component={YourDetails}/>
            <Route path="/recovery_password" component={RecoveryPassword}/>
          {/*</Suspense>*/}
          <Redirect to="/" from="/*"/>
        </Switch>
        <Footer/>
      </>
    )
  } else if (!user) {
    return (
      <>
        <Header/>
        <Switch>
          {/*<Route path="/" component={HomePage} exact/>*/}
          <Route exact path="/" component={Products}/>
          <Route exact path="/store" component={Products}/>
          <Route path="/my_account" component={MyAccount}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/pd" component={ProductDescription}/>
          
          <Suspense fallback={<Spinner/>}>
            <Route path="/recovery_password" component={RecoveryPassword}/>
            <Route path="/compare" component={Comparison}/>
            <Route path="/error404" component={Error404}/>
            <Route path="/about_page" component={AboutPage}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/help_topics" component={HelpTopics}/>
            <Route path="/help_single_topic" component={HelpSingleTopic}/>
            <Route path="/your_cart" component={YourCart}/>
            <Route path="/your_details" component={YourDetails}/>
            <Route path="/shipping" component={Shipping}/>
            <Route path="/payments" component={Payments}/>
            <Route path="/review" component={Review}/>
            <Route path="/complete" component={Complete}/>
            <Route path="/add" component={NewsPage}/>
          </Suspense>
          <Redirect to="/" from="/*"/>
        </Switch>
        <Footer/>
      </>
    )
  }
}



