import { useEffect } from "react";
import { useState } from "react";
import { CurrencyInput } from "./CurrencyInput";

const BASE_URL = "https://openexchangerates.org/api/latest.json?app_id=b7db904c27e94c54889050a5890ad18e";

const CurrencyRates = () => {

   const [amount1, setAmount1] = useState(0);
   const [amount2, setAmount2] = useState(0);
   const [currency1, setCurrency1] = useState('USD');
   const [currency2, setCurrency2] = useState('UAH');
   const [rates, setRates] = useState([]);

   useEffect(() => {
      fetch(BASE_URL)
         .then(res => res.json())
         .then(data => {
            const firstResponse = data
            setRates(firstResponse.rates)
            // console.log(firstResponse.rates)
         })
   }, [])

   function handleAmount1Change(newAmount1) {
      setAmount2(newAmount1 * rates[currency2] / rates[currency1]);
      setAmount1(+newAmount1);
   };

   function handleCurrency1Change(newCurrency1) {
      setAmount2(amount1 * rates[currency2] / rates[newCurrency1]);
      setCurrency1(newCurrency1);
   };

   function handleAmount2Change(newAmount2) {
      setAmount1(newAmount2 * rates[currency1] / rates[currency2]);
      setAmount2(+newAmount2);
   };

   function handleCurrency2Change(newCurrency2) {
      setAmount1(amount2 * rates[currency1] / rates[newCurrency2]);
      setCurrency2(newCurrency2);
   };

   return (
      <>
         <div className="curr-form">
            <div className="curr-box">
               <h2>Обмін валют</h2>

               <CurrencyInput
                  onAmountChange={ handleAmount1Change }
                  onCurrencyChange={ handleCurrency1Change }
                  currencies={ Object.keys(rates) }
                  amount={ amount1 }
                  currency={ currency1 }
               />

               <CurrencyInput
                  onAmountChange={ handleAmount2Change }
                  onCurrencyChange={ handleCurrency2Change }
                  currencies={ Object.keys(rates) }
                  amount={ amount2 }
                  currency={ currency2 } />
            </div>
         </div>
      </>
   )
};

export { CurrencyRates };