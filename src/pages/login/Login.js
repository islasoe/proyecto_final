import React, { useState } from "react";
import './Login.css';
import Title from './components/title/title';
import Label from './components/label/label';
import Input from './components/input/input';

const Login = () => {

    const [ user, setUser ] = useState ('');
    const [ password, setPassword ] = useState(''); 
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ hasError, setHasError] = useState(false);

    function handleChange(name, value) {
        if(name === 'usuario') {
            setUser(value)
            setHasError(false);
        } else {
            if(value.length < 6) {
                setPasswordError(true);
                setHasError(false);
            } else {
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
        }    
    };

    function ifMatch(param){
        if(param.user.length > 0 && param.password.length > 0) {
            if(param.user === 'Mithy' && param.password === '123456'){
                const {user, password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            } else {
                setIsLogin(false);   
                setHasError(true)  
            }
         } else {
             setIsLogin(false);
         }               
    }

    function handleSubmit() {
        let account = { user, password }
        if(account) {
            ifMatch(account);
        }
    };

    return(
        <div className= 'login-container'>
        {isLogin ?
            <div className= 'home-container' >
                <h1>Congratulations!</h1>
                <label>Aqui trabajaremos el Home</label>
            </div>

            :
            
            <div className= 'login-content'>
                 <Title text='Welcome!' />
                 {hasError && 
                    <label className= ' label-alert'> 
                         Su contraseña o usuario son incorrectos, o no existen en nuestra plataforma. 
                    </label>
                 }
                 <Label text= 'Usuario' />
                 <Input
                 attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                 }}
                 handleChange={handleChange}
                />
                <Label text= 'Contraseña'/>
                <Input
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña'
                }}
                handleChange={handleChange}
                param={passwordError}
                />

                 { passwordError &&
                 <label className='label-error'>
                       Contraseña invalida o incompleta
                     </label>
                 }

                <div className= 'submit-button-container'>
                  <button onClick={handleSubmit} className= 'submit-button'>
                  Ingresar
                 </button>   
                </div>
            </div>
        }
        </div>
    )
};
export default Login;