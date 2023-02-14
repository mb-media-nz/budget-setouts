<script lang="ts">
	import ServicesBox from '../components/services-box.svelte';
	import IconFeature from './base/icon-feature.svelte';
</script>

<svelte:head>
	<title>Budget SetOuts Ltd</title>
	<meta
		name="description"
		content="Budget Set Outs uses the latest technology and personal service to provide affordable construction and building set outs."
	/>
</svelte:head>

<!-- Banner -->
<div
	class="relative bg-cover bg-center p-4 md:p-20 min-h-[60vh] flex items-center justify-center xl:bg-fixed"
	style="background-image: url('bs-banner.webp');"
>
	<div class="bg-black absolute top-0 left-0 w-full h-full opacity-30 xl:opacity-10" />
	<div class="w-full md:max-w-screen-xl md:px-8 mx-auto z-10 relative">
		<h1
			class="text-white text-[2.2rem] mx-auto md:mx-0 font-bold max-w-[400px] leading-snug text-center md:text-left"
		>
			<span>Affordable Site Survey Services</span>
		</h1>
	</div>
</div>

<!-- About -->
<div class="flex flex-col md:flex-row max-w-screen-xl mx-auto my-10 md:my-20 p-8">
	<div class="w-full md:w-3/5 px-0 md:px-10">
		<h4 class="text-4xl mt-6 mb-10 text-gray-900">
			Local and <span class="font-bold">Experienced</span>
		</h4>
		<p class="text-lg">
			James Zervos (NZCE Civil) is the owner of Budget Set Outs Ltd (est. 1997). James offers top
			quality services at affordable rates and guarantees his full attention to every job. Whether
			you need an engineering set out for a subdivision or a topographic plan for a hillside home,
			contact James to see how he can help.
		</p>
		<p class="text-lg">
			James uses only the best equipment including a Leica GPS and a Leica robotic theodolite and as
			an owner/operator he maintains complete control of the job costs, helping you save money
			without compromising work quality.
		</p>
		<a
			href="/#contact"
			class="border-2 mt-4 border-primaryTheme rounded-full rounded-br-none inline-block hover:bg-primaryTheme hover:text-white transition-colors px-8 py-3 text-"
			>Contact</a
		>
	</div>
	<div
		class="w-full relative md:w-2/5 flex items-center justify-center bg-cover bg-top rounded-lg overflow-hidden soft-shadow min-h-[500px]"
		style="background-image: url('/profile3.webp');"
	/>
</div>

<!-- Services -->
<div class="bg-gray-100 p-10" id="services">
	<div class="text-center">
		<h4 class="text-4xl mt-6 mb-10 text-gray-900">Our <span class="font-bold">Services</span></h4>
		<p>We offer a wide range of services for your next project.</p>
	</div>

	<div
		class="flex justify-around max-w-screen-xl mx-auto my-10 md:my-20 flex-col md:flex-row items-center md:items-baseline"
	>
		<ServicesBox
			img="bs-services-bridge.jpg"
			title="Engineering Setout"
			description="Earthworks, bridges, drainage, roading, kerb and channel, retaining walls, car parks,
					volume calculations and as-built plans."
		/>
		<ServicesBox
			img="bs-service-topo.webp"
			title="Topographic Plans"
			description="AutoCAD plans with all relevant features including contours, buildings, trees, services,
					drainage etc."
		/>
		<ServicesBox
			img="bs-services-building.webp"
			title="Building Set Out"
			description="Hillside houses, grids and commercial buildings."
		/>
	</div>
</div>

<!-- Why Choose Us -->
<div class="bg-gray-100 pb-10 md:pb-20">
	<div class="flex flex-col items-center  lg:flex-row max-w-screen-xl mx-auto p-4 justify-around">
		<div class="w-full lg:w-2/3 max-w-[700px] p-4">
			<h4 class="text-4xl mb-10 text-gray-900">
				Why choose <span class="font-bold">Us</span>
			</h4>
			<p>
				Budget Setouts has years of experience in the industry, giving you the advantage of accurate
				and reliable services targeted to your needs.
			</p>
			<div class="flex flex-wrap justify-around xs:justify-center lg:">
				<IconFeature img="icon-money.jpg" title="Affordable" />
				<IconFeature img="icon-hands.jpg" title="Fast Personal Service" />
				<IconFeature img="icon-quotes.jpg" title="Free Quotes" />
				<IconFeature img="icon-cloud.jpg" title="Latest Technology" />
				<IconFeature img="icon-results.jpg" title="Accurate Results" />
				<IconFeature img="icon-medal.jpg" title="Site Safe Accredited" />
			</div>
		</div>
		<div class="flex w-full max-w-[520px] items-center justify-center">
			<img
				src="bs-why.webp"
				alt="Tripod set up beside truck"
				class="h-full w-full  object-cover object-center rounded-lg soft-shadow"
			/>
		</div>
	</div>
</div>

<!-- Callout Bar -->
<div class="bg-primaryTheme flex items-center justify-center p-14">
	<div
		class="w-full max-w-screen-md flex flex-col xs:flex-row items-center xs:items-start justify-around"
	>
		<a
			href="tel:+64 21 154 0488"
			class="bg-white border-2 my-2 group hover:text-white border-white rounded-full px-10 py-3 text-lg flex items-center hover:bg-transparent hover:border-2 hover:border-white transition-colors"
		>
			<svg
				class="fill-black group-hover:fill-white w-[25px] mr-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path
					d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
				/></svg
			>
			Call Us
		</a>
		<a
			href="mailto:james@budgetsetouts.co.nz"
			class="bg-white border-2 my-2 group hover:text-white border-white rounded-full px-10 py-3 text-lg flex items-center hover:bg-transparent hover:border-2 hover:border-white transition-colors"
		>
			<svg
				class="fill-black group-hover:fill-white w-[25px] mr-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path
					d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
				/></svg
			>
			Email
		</a>
	</div>
</div>

<!-- Reviews -->
<div class="bg-gray-100 px-2 sm:px-8 py-20">
	<div class="flex w-full flex-col sm:flex-row max-w-screen-lg mx-auto">
		<div class="w-full sm:w-1/2 p-4">
			<h3 class="text-4xl mb-10">Client <span class="font-bold">Reviews</span></h3>
			<p>See what our clients say about working with Budget Set Outs.</p>
		</div>
		<div class="w-full sm:w-1/2 p-4">
			<div
				class="mb-6 bg-white  p-8 relative after:absolute after:left-8 after:-bottom-3 after:bg-white after:w-4 after:h-6 after:rotate-45"
			>
				<div class="flex mb-4">
					<img src="/icon-star.png" alt="" />
					<img src="/icon-star.png" alt="" />
					<img src="/icon-star.png" alt="" />
					<img src="/icon-star.png" alt="" />
					<img src="/icon-star.png" alt="" />
				</div>
				<p class="text-gray-800 m-0">
					I've used James for levels, topo plans and setout for maybe 15 years now, wouldn't go
					anywhere else.<br />
					Prices are reasonable, time frame always good, and service is excellent. Highly recommend.
				</p>
			</div>
			<div class="ml-4 text-lg">
				<p class="mb-1 text-black">Murray Brown</p>
				<p class="text-sm">Murray Brown Design Limited</p>
			</div>
		</div>
	</div>
</div>

<!-- Our Work -->
<div class="p-4 pt-16 sm:p-20" id="work">
	<div class="text-center">
		<h3 class="text-4xl mb-4">Our <span class="font-bold">Work</span></h3>
		<p>
			See some of our past work including subdivisions Pegasus, Halswell on the Park, Waitakiri,
			Westpark, Black Rock and Worsley.
		</p>
	</div>
	<div
		class="my-20 w-full max-w-screen-2xl mx-auto flex flex-wrap items-center justify-center gap-4"
	>
		<img src="/bs-gallery-0.webp" class="w-[350px] h-[250px] object-cover shadow-md" alt="" />
		<img
			src="/bs-work-topo-example.webp"
			class="w-[350px] h-[250px] object-cover shadow-md"
			alt=""
		/>
		<img src="/bs-work-gravel.webp" class="w-[350px] h-[250px] object-cover shadow-md" alt="" />
	</div>
</div>

<!-- Contact -->
<div class="flex flex-col md:flex-row mx-auto w-full" id="contact">
	<div class="w-full md:w-1/2 bg-cover bg-center">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5089.958988022825!2d172.7275032215941!3d-43.5049021605493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318898ede39fc3%3A0x706c54a7c01994ee!2s35%20Lonsdale%20Street%2C%20New%20Brighton%2C%20Christchurch%208083!5e0!3m2!1sen!2snz!4v1663446108094!5m2!1sen!2snz"
			width="100%"
			height="100%"
			style="border:0;"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			class="min-h-[300px]"
			title="Google Maps"
		/>
	</div>
	<div class="w-full md:w-1/2">
		<div class="flex flex-col">
			<div class="p-4 pt-12 md:p-12 md:ml-8">
				<h3 class="text-4xl mb-8">Get in in <span class="font-bold">Touch</span></h3>
				<p class="mb-10">Send us a message about your project and James will be in touch.</p>
				<form action="" class="flex flex-col flex-wrap max-w-md">
					<input type="text" name="name" id="" placeholder="Name" class="" />
					<input type="tel" name="tel" id="" placeholder="Phone" class="" />
					<input type="text" name="email" id="" placeholder="Email" class="" />
					<textarea name="message" id="" rows="8" placeholder="Message" class="" />
					<button type="submit" class="bg-primaryTheme px-4 py-2 rounded-lg mt-2">Send</button>
				</form>
			</div>
			<img src="/bs-surf.webp" alt="" />
		</div>
	</div>
</div>
