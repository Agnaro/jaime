import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

export class StockPrice extends Component {
  render() {
    return (
      <div className='fordBox'>
            Current Ford stock price: <br/>
            <div className='stockPrice'>
                <NumberFormat value={this.props.price} displayType={'text'} prefix={'$'} decimalScale={2} fixedDecimalScale={true} ></NumberFormat>
            </div>
      </div>
    )
  }
}

StockPrice.protoTypes = {
    price: PropTypes.number.isRequired,
    getPrice: PropTypes.func.isRequired
}

export default StockPrice
