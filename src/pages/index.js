import axios from "axios";
import { useRef } from "react";


export const Index = () => {
const emailField = useRef(null);
const passwordField = useRef (null);   
    function handleSubmit(event) {
       event.preventDefault();
       axios.get('http://localhost:3000/users')
       .then(response => {
        const users = response.data;
        const userToLog = user.find
       
    })
    .error(error => {console.log(error)})

       const data = new FormData(event.target);
       console.log({
           email: data.get('email'),
           password: data.get('password')
       });
   
   } 
    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <h2 className="mb-4"> Formulario de Autenticación </h2>
                <form onSubmit={handleSubmit}>

                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" />
                        <label class="form-label" for="form2Example1">Correo Electrónico</label>
                    </div>

                   
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Clave</label>
                    </div>

                                        
                    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

        
                </form>
            </div>
        </div>
    )
}
