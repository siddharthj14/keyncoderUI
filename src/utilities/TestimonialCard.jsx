// TestimonialCard.js
export default function TestimonialCard({
	name,
	company,
	image,
	logo,
	testimony,
}) {
	return (
		<div className='max-w-xl mx-auto p-6 mb-10 md:mb-4 bg-white shadow-lg rounded-lg'>
			<blockquote className='italic text-zinc-600 text-lg'>{testimony}</blockquote>
			<div className='flex items-center mt-4'>
				<img
					src={image}
					alt={name}
					className='w-20 h-16 rounded-full mr-4 border-slate-800 border-[3px]'
				/>
				<div>
					<div className='ml-1 text-zinc-700'>{name}</div>
					<div className='flex items-center'>
						<img
							src={logo}
							alt={`${company} Logo`}
							className='mr-2 w-10 rounded-full'
						/>
						<span className='text-zinc-900 font-semibold'>{company}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
