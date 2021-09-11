import React from 'react'
import './Form.css'

function Register(){

    return(
        <div className="register">
            <h4 className="signIn">Sign up</h4>
            <form>
                <div class="form-group">
                    <label for="exampleInputPassword1"/>
                    <input type="text" required class="form-control" id="exampleInputPassword1" placeholder="Name"/>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1"/>
                    <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                
                <div class="form-group">
                    <label for="exampleInputPassword1"/>
                    <input type="password" required class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="form-group text-center">
                    <label for="exampleInputPassword1"/>
                    <input type="password" required class="form-control" id="exampleInputPassword1" placeholder="Confirm password"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your data with anyone else.</small>
                </div>
                


                <div class="col text-center">
                <button type="submit" class="btn btn-success">Register</button>
                </div>
            </form>
        
            
        </div>
    )
}


export default Register;
