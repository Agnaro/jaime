import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

export class Loss extends Component {

    getStyle = () => {
        return {
            color: this.props.currentPrice > 0 ? 'green' : 'red'
        }
    }

    getTotal = () => {
        return (this.props.currentPrice - this.props.soldPrice)*this.props.soldAmt;
    }
    
  render() {
    return (
      <div className='lossBox'>
        Jaime's lossed profits:
        <div className='lossAmt' style={this.getStyle()}>
            <NumberFormat value={this.getTotal()} displayType={'text'} prefix={'$'} decimalScale={2} fixedDecimalScale={true} ></NumberFormat>    
        </div>
      </div>
    )
  }
}

Loss.propTypes = {
    currentPrice: PropTypes.number.isRequired,
    soldPrice: PropTypes.number.isRequired,
    soldAmt: PropTypes.number.isRequired
}

export default Loss
