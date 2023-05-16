import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {googleLogin, userLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    

    const handleUserLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        userLogin(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')

        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='pt-11 bg-[#E5E5E5] w-full mx-auto pb-32'>
            
            <Link to='/'><img className="w-48 mx-auto" src={logo} alt="" /></Link>
            
            <div className='bg-white md:w-2/4 mx-auto border p-10 mt-10 border border-gray-400'>
                <h2 className='font-bold text-2xl mb-6'>Login</h2>
                <form onSubmit={handleUserLogin}>
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="text" 
                    name="email" placeholder='Email Address' />
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="password" 
                    name="password" placeholder='Password' />
                    <input className='w-full my-2 text-base bg-blue-600 text-white py-2 cursor-pointer' type="submit" value='Login' />
                </form>
                <div className="text-center py-5">
                    <button onClick={handleGoogleLogin} className="bg-red-500 text-white px-5 py-1">Login with Google</button>
                </div>
                <p className="text-center"><small>Do not have an account? <Link className="text-blue-500" to='/register'>Create an account</Link> </small></p>
            </div>
        </div>
    );
};

export default Login;