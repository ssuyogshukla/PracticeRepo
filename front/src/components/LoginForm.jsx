import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Login.css'; 
import HeaderLogin from "./HeaderLogin";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false); // Initialize as boolean

    useEffect(()=>{
        const dataFetch=()=>{
          axios.get("")
        }
        
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(remember);
    }

    return (
        
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
            }}
        >
              
            <main
                className="form-signin w-100 m-auto"
                style={{ maxWidth: '500px' }}
            >
              
              

                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            value={email}
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingInput">Email Address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            value={password}
                            placeholder="*******"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="floatingDefault"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)} 
                        />
                        <label className="form-check-label" htmlFor="floatingDefault">
                            Remember me
                        </label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">
                        Sign in
                    </button>
                </form>
            </main>
            </div>
            
    );
}

export default LoginForm;
