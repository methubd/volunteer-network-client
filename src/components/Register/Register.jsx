import { Link } from 'react-router-dom';
import logo from '../../assets/logos/Group 1329.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
    const {userRegister} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target; 
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const date = form.date.value; 
        const description = form.description.value;
        const organize = form.organize.value;
        const applicant = {name, email, date, description, organize};
        
        fetch('http://localhost:5000/volunteers', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(applicant)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registration process is successfully done!',
                    showConfirmButton: true,
                    timer: 1500
                  }) 
                  form.reset()

            }
        })

        //user registration with email and password
        if(password !== confirm){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Password Not Matched',
                showConfirmButton: true,
                timer: 1500
              })            
            return
        }

        userRegister(email, password)
        .then(result => {
            const newUser = result.user;
            console.log(newUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='pt-11 bg-[#E5E5E5] w-full mx-auto pb-32'>
            
            <Link to='/'><img className="w-48 mx-auto" src={logo} alt="" /></Link>
            
            <div className='bg-white md:w-2/4 mx-auto border p-10 mt-10 border border-gray-400'>
                <h2 className='font-bold text-2xl mb-6'>Please register as a volunteer</h2>
                <form onSubmit={handleRegister}>
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