import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

export class Jaime extends Component {
  render() {
    return (
      <div className='fordBox'>
        Jaime sold his stocks at
        <div className='soldPrice'>
            <NumberFormat value={this.props.price} displayType={'text'} prefix={'$'} decimalScale={2} fixedDecimalScale={true} ></NumberFormat>    
        </div>
      </div>
    )
  }
}

Jaime.protoTypes = {
    price: PropTypes.number.isRequired
}

export default Jaime
