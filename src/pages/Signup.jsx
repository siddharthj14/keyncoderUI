// src/components/Signup.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api/SignUp"; // Import the register function

function Signup({ theme }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			const data = await register(name, email, password);
			// Handle the response data (e.g., show a success message, navigate)
			//give notification successfully regiters
			alert("Successfully registered");
			navigate("/login");
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div
			className={`min-h-screen ${
				theme === "dark"
					? "bg-gradient-to-r from-[#292626] via-[rgb(89,77,77)] to-[#847373] text-white"
					: "bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#FCB900] text-black"
			} flex items-center justify-center w-full`}>
			<div className='bg-white rounded-lg p-8 m-6 gap-20 flex md:flex-row flex-col-reverse md:px-10 dark:bg-[#292626]'>
				<div className='left max-w-md h-96 w-fit bg-white-300 flex-1 relative'>
					<img
						src={"/images/signup.png"}
						alt='SignUp'
						className='h-[100%] w-fit mt-6 m-auto object-cover rounded-3xl'
					/>
				</div>

				<div className='max-w-md w-full flex-1 m-2 bg-white-300'>
					<h2 className='text-2xl font-bold mb-6 text-zinc-800'>
						<span className='dark:text-white'>Account</span>{" "}
						<span className='dark:text-[#F14A16]'>SignUp</span>
					</h2>
					<form onSubmit={handleSignup}>
						<div className='mb-4'>
							<label
								htmlFor='name'
								className='block text-zinc-700 dark:text-[#A4A4A4]'>
								Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								className='w-full px-3 py-2 border border-zinc-300 focus:border-orange-400 rounded-md dark:bg-[#292626]'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='email'
								className='block text-zinc-700 dark:text-[#A4A4A4]'>
								Email address
							</label>
							<input
								type='email'
								id='email'
								name='email'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='w-full px-3 py-2 border border-zinc-300 group-focus:border-orange-500 rounded-md dark:bg-[#292626]'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='password'
								className='block text-zinc-700 dark:text-[#A4A4A4]'>
								Password
							</label>
							<input
								type='password'
								id='password'
								name='password'
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='w-full px-3 py-2 border border-zinc-300 rounded-md dark:bg-[#292626]'
							/>
						</div>
						<button
							type='submit'
							className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg ${
								theme === "dark" ? "dark:bg-orange-600 dark:hover:bg-gray-600" : ""
							}`}>
							Sign up now
						</button>
						<p className='flex flex-row justify-center items-center gap-6 my-4'>
							<span className='border-t-2 w-full border-gray-500'></span>
							<span>or</span>
							<span className='border-t-2 w-full border-gray-500'></span>
						</p>
						<button
							type='button'
							className={`w-full flex flex-row border border-gray-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg justify-evenly`}>
							<img src='images/google.png' alt='' className='w-6' />
							<span className='font-medium'>Sign up with Google</span>
						</button>
						<p className='mt-4 text-center text-zinc-600 dark:text-[#A4A4A4]'>
							Already have an account?{" "}
							<Link to={"/login"} className='text-blue-500 hover:text-blue-600'>
								Login here
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup;
