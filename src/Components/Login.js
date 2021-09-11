import React from 'react'
import './Form.css'


export default function Login(){
    return(
        <div className="login">
            <h4 className="signIn">Sign In</h4>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1"/>
                    <input type="email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                
                
                <div class="form-group text-center">
                    <label for="exampleInputPassword1"/>
                    <input type="password" required class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your data with anyone</small>
                </div>
                


                <div class="col text-center">
                    <button type="submit" class="btn btn-success">Login</button>
                </div>
            </form>

            <div class="col text-center">
                <p>Don't have an account? <a href="">Register</a></p>
            </div>

        
            
        </div>
    )
}
