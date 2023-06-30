import axios from "axios";
import { useRef } from "react";
import { setUser } from "../reducers/users/userSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const Index = () => {
const emailField = useRef(null);
const passwordField = useRef (null);  
const dispatch = useDispatch(); 
const navigate = useNavigate();
    function handleSubmit(event) {
       event.preventDefault();
       axios.get('http://localhost:3000/users')
       .then(response => {
        const users = response.data;
        const userToLog = users.find(user => user.email === emailField.current.value);
       if(userToLog)
        { console.log('Usuario autenticado');
           if(userToLog.last_name === passwordField.current.value) {
               console.log('Usuario autenticado');
               dispatch(setUser({
                email: userToLog.email,
                fullName: `${userToLog.first_name} ${userToLog.last_name}`,
                token: Date.now(),
               }))
               navigate('/home');
           } }
       
    })
    .error(error => {console.log(error)});

       
   
   } 
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <h2 className="mb-4"> Formulario de Autenticación </h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" ref={emailField} />
                        <label className="form-label" for="form2Example1">Correo Electrónico</label>
                    </div>

                   
                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" ref={passwordField}  />
                        <label className="form-label" for="form2Example2">Clave</label>
                    </div>

                                        
                    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

        
                </form>
            </div>
        </div>
    )
}
