import React from "react";

function Login({theme}) {
	return (
		<>
			<div
				className={`min-h-screen ${
					theme === "dark" ? "bg-[#2E2727]" : "bg-green-500"
				} flex items-center justify-center w-full`}>
				<div className='container1 bg-white rounded-lg p-8'>
					<div className='left max-w-md w-full rounded-3xl bg-gray-300'></div>

					<div className='max-w-md w-full'>
						<h2 className='text-2xl font-bold mb-6 text-zinc-800'>Account Login</h2>
						<p className='mb-4 text-zinc-600'>
							If you are already a member you can login with your email address and
							password.
						</p>
						<form action='#' method='POST'>
							<div className='mb-4'>
								<label htmlFor='email' className='block text-zinc-700'>
									Email address
								</label>
								<input
									type='email'
									id='email'
									name='email'
									required
									className='w-full px-3 py-2 border border-zinc-300 rounded-md'
								/>
							</div>
							<div className='mb-4'>
								<label htmlFor='password' className='block text-zinc-700'>
									Password
								</label>
								<input
									type='password'
									id='password'
									name='password'
									required
									className='w-full px-3 py-2 border border-zinc-300 rounded-md'
								/>
							</div>
							<div className='mb-6 flex items-center'>
								<input type='checkbox' id='remember' name='remember' className='mr-2' />
								<label htmlFor='remember' className='text-zinc-700'>
									Remember me
								</label>
							</div>
							<button
								type='submit'
								className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded ${
									theme === "dark" ? "dark:bg-gray-700 dark:hover:bg-gray-600" : ""
								}`}>
								Register now
							</button>
							<p className='mt-4 text-center text-zinc-600'>
								Don't have an account?{" "}
								<a href='#' className='text-blue-500 hover:text-blue-600'>
									Sign up here
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;

// <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="14%" y1="85%" x2="86%" y2="15%"><stop offset="5%" stop-color="#ed374d"></stop><stop offset="95%" stop-color="#fcb900"></stop></linearGradient></defs><path d="M 0,600 L 0,225 C 42.692194403534614,220.2369293078056 85.38438880706923,215.47385861561122 150,250 C 214.61561119293077,284.5261413843888 301.15463917525767,358.3414948453608 375,335 C 448.84536082474233,311.6585051546392 509.9970544918999,191.16016200294553 567,135 C 624.0029455081001,78.83983799705447 676.8571428571429,87.01785714285711 728,144 C 779.1428571428571,200.9821428571429 828.5743740795288,306.7684094256259 894,302 C 959.4256259204712,297.2315905743741 1040.8453608247423,181.9085051546392 1108,151 C 1175.1546391752577,120.09149484536081 1228.0441826215024,173.5975699558174 1281,200 C 1333.9558173784976,226.4024300441826 1386.9779086892488,225.7012150220913 1440,225 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
