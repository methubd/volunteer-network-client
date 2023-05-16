import { Link } from "react-router-dom";
import logo from '../../assets/logos/Group 1329.png'

const Login = () => {
    return (
        <div className='pt-11 bg-[#E5E5E5] w-full mx-auto pb-32'>
            
            <Link to='/'><img className="w-48 mx-auto" src={logo} alt="" /></Link>
            
            <div className='bg-white md:w-2/4 mx-auto border p-10 mt-10 border border-gray-400'>
                <h2 className='font-bold text-2xl mb-6'>Login</h2>
                <form>

                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="text" 
                    name="email" placeholder='Email Address' />
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="password" 
                    name="password" placeholder='Password' />
                    <input className='w-full my-2 text-base bg-blue-600 text-white py-2 cursor-pointer' type="submit" value='Login' />
                </form>
                <div className="text-center py-5">
                    <button className="bg-red-500 text-white px-5 py-1">Login with Google</button>
                </div>
                <p className="text-center"><small>Do not have an account? <Link className="text-blue-500" to='/register'>Create an account</Link> </small></p>
            </div>
        </div>
    );
};

export default Login;