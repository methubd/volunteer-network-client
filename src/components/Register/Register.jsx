import { Link } from 'react-router-dom';
import logo from '../../assets/logos/Group 1329.png'

const Register = () => {
    return (
        <div className='pt-11 bg-[#E5E5E5] w-full mx-auto pb-32'>
            
            <Link to='/'><img className="w-48 mx-auto" src={logo} alt="" /></Link>
            
            <div className='bg-white md:w-2/4 mx-auto border p-10 mt-10 border border-gray-400'>
                <h2 className='font-bold text-2xl mb-6'>Please register as a volunteer</h2>
                <form>
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="text" 
                    name="name" placeholder='Full Name' />
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="text" 
                    name="email" placeholder='Email Address *' required />
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="password" 
                    name="password" placeholder='Password *' required />
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="password" 
                    name="confirm" placeholder='Confirm Password *' required />
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7 text-gray-400' type="date" 
                    name="date" />
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="text" 
                    name="description" placeholder='Description' />
                    <input className='outline-none border-b-2 w-full my-2 text-base mb-7' type="text" 
                    name="organize" placeholder='Organize Books at the Library' />
                    <input className='w-full my-2 text-base bg-blue-600 text-white py-2 cursor-pointer' type="submit" value='Register' />
                </form>
                <p className="text-center"><small>Already have an account? <Link className="text-blue-500" to='/login'>Please Login</Link> </small></p>
            </div>
        </div>
    );
};

export default Register;