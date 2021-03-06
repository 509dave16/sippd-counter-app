import * as React from 'react'
import Items from '../pages/Cart'
import Checkout from '../pages/Checkout'

import { connect } from 'react-redux'
import { CHECKOUT_PAGE, CART_PAGE } from '../../config/constants'

class SwitchView extends React.Component {
  render() {
    return (
      <main className="container">
        {this.getView()}
      </main>
    )
  }

  getView() {
    const { currentPage } = this.props
    console.log('currentPage', currentPage)
    if (currentPage === CHECKOUT_PAGE) {
      return <Checkout />
    } else if (currentPage === CART_PAGE) {
      return <Items />
    }
  }
}

export default connect((state) => ({ currentPage: state.navigation.currentPage }))(SwitchView)