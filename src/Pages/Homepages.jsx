import { useState, useEffect } from "react";

const Home = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailDirty, setEmailDirty] = useState(false);
   const [passwordlDirty, setPasswordlDirty] = useState(false);
   const [emailError, setEmailError] = useState('Емейл не может быть пустым');
   const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      if (emailError || passwordError) {
         setFormValid(false)
      } else {
         setFormValid(true)
      }
   }, [formValid])

   //Обрабатываем е-мейл
   const emailHandler = (e) => {
      setEmail(e.target.value)
      const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
      if (!re.test(String(e.target.value).toLowerCase())) {
         setEmailError('не коректный email')
      } else {
         setEmailError('')
      }
   };
   //Обрабатываем пароль
   const passwordHandler = (e) => {
      setPassword(e.target.value)
      if (e.target.value.length < 3 || e.target.value.length > 8) {
         setPasswordError('от 3 до 8 символов')
         if (!e.target.value) {
            setPasswordError('Пароль не может быть пустым')
         }
      } else (
         setPasswordError('')
      )
   };

   const blurHandler = (e) => {
      // eslint-disable-next-line default-case
      switch (e.target.name) {
         case 'email':
            setEmailDirty(true)
            break
         case 'password':
            setPasswordlDirty(true)
            break
      }
   }

   return (
      <>
         <div className="login-form">
            <div className="login-box">
               <h2>Login</h2>

               <form>
                  <div className="user-box">

                     { (emailDirty && emailError) && <div className="emailError">{ emailError }</div> }
                     <input
                        onChange={ e => emailHandler(e) }
                        onBlur={ e => blurHandler(e) }
                        value={ email }
                        type="text"
                        name="email"
                        placeholder="E-mail" />
                     <label>Email</label>
                  </div>

                  <div className="user-box">

                     { (passwordlDirty && passwordError) && <div className="emailError">{ passwordError }</div> }
                     <input
                        onChange={ e => passwordHandler(e) }
                        value={ password }
                        onBlur={ e => blurHandler(e) }
                        type="password"
                        name="password"
                        placeholder="Password" />
                     <label>Password</label>
                  </div>


                  <a href="/home">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Submit
                  </a>
               </form>
            </div>
         </div>
      </>
   )
}

export { Home };