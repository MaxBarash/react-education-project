import PropTypes from 'prop-types';

function CurrencyInput(props) {

   const {
      amount,
      currency,
      currencies,
      onAmountChange,
      onCurrencyChange,
   } = props

   return (
      <div className="rates">
         <input type="text" value={ amount } onChange={ e => onAmountChange(e.target.value) } />
         <select value={ currency } onChange={ e => onCurrencyChange(e.target.value) }>
            { currencies.map((currency, id) => (
               <option key={ id } value={ currency }>{ currency }</option>
            )) }
         </select>
      </div>
   );
}

CurrencyInput.propTypes = {
   amount: PropTypes.number,
   currency: PropTypes.string,
   currencies: PropTypes.array,
   onAmountChange: PropTypes.func,
   onCurrencyChange: PropTypes.func,
}

export { CurrencyInput };