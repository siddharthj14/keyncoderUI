// Testimonial.js
import TestimonialCard from "../components/TestimonialCard";

export default function Testimonial() {
	const testimonialData = [
		{
			name: "Aaron Dessner",
			company: "Microsoft",
			image: "../images/pfp.jpg",
			logo: "https://developer.microsoft.com/_devcom/images/logo-ms-social.png",
			testimony:
				"Lorem Ipsum courses we have? lorem ipsum Loremdiorigh vodfjv idfjbvid dfjbvlsdjfvb sjdfvjsjdbfvkjsdfivsj sidjfsi isjdbfisbdfi sidjfbisjbdf isdjfbsijdffsd sdøjhsøjdhf sjdbfsjdfijs sdjfbisjdfsu sjdfsihjf ssdjhgfsø sdjf",
		},
		{
			name: "Jane Doe",
			company: "Apple",
			image: "../images/pfp.jpg",
			logo:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0mpcTWy4WSOrDf5m5M1x4fCNM9VhpaHvMnOCDk8YNKeGlrC31yNo4RSomQ3mTojQuEw&usqp=CAU",
			testimony:
				"Lorem Ipsum courses we have? lorem ipsum Loremdiorigh vodfjv idfjbvid dfjbvlsdjfvb sjdfvjsjdbfvkjsdfivsj sidjfsi isjdbfisbdfi sidjfbisjbdf isdjfbsijdffsd sdøjhsøjdhf sjdbfsjdfijs sdjfbisjdfsu sjdfsihjf ssdjhgfsø sdjf",
		},
	];

	return (
		<>
			<h1 className=' text-center font-bold text-[50px] mb-10'>
				Our Testimonials
			</h1>
			<div className='flex flex-col  justify-between md:flex-row md:mb-4'>
				{testimonialData.map((data, index) => (
					<TestimonialCard
						key={index}
						name={data.name}
						company={data.company}
						image={data.image}
						logo={data.logo}
						testimony={data.testimony}
					/>
				))}
			</div>
		</>
	);
}
