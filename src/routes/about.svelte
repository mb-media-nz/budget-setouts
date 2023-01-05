<script>
	import Banner from './base/banner.svelte';
	import BookBar from './base/bookBar.svelte';
</script>

<svelte:head>
	<title>About - Chimney Services</title>
	<meta
		name="description"
		content="With over 50 years experience, our qualified staff perform professional services to industry standards keeping your fire compliant and family safe."
	/>
</svelte:head>

<Banner title={'About Us'} image={'./about-banner.webp'} />

<!-- Content -->
<div class="p-4 text-center max-w-screen-lg mx-auto">
	<div class="py-8 px-6">
		<h2 class="text-4xl mt-6 mb-6 text-gray-900">Experienced Staff</h2>
		<p class="text-lg mb-6">
			Murray’s Chimney Services has been operating in South Canterbury for over 50 years. As a
			family-run business currently employing three local people, we pride ourselves on being
			honest, hardworking and diligent to the safety standards to keep your fire in good working
			order and household safe. We have a <a class="font-bold text-redTheme hover:underline" href="https://chimneyservices.co.nz/#reviews">reliable reputation</a> in the community and continue to
			strive for customer satisfaction.
		</p>
		<p class="text-lg">
			With years of experience in the chimney servicing industry we make sure you get a professional
			and well-done job.<br />We are qualified to carry out services including:
		</p>
	</div>
</div>

<div class="my-0 sm:my-2 lg:my-16 pt-0 pb-8 md:py-10 px-10">
	<ul class="feature-list max-w-sm sm:max-w-screen-sm lg:max-w-screen-lg mx-auto text-gray-600 columns-1 sm:columns-2 lg:columns-4 text-lg">
		<li class="">Chimney sweep</li>
        <li class="">Flue replacement</li>
        <li class="">Roof flashing repairs</li>
        <li>Log burner repairs</li>
        <li>Log burner installation</li>
        <li>Inspections</li>
        <li>Broken top plate and baffles</li>
        <li>Broken door or glass</li>
        <li>Worn seals</li>
        <li>Bird-proofing</li>
        <li>Smoky burner</li>
        <li>Airtube replacement</li>
	</ul>
</div>

<div class="flex flex-col-reverse md:flex-row mx-auto max-w-screen-lg my-0 md:my-20 p-6">
    <div class="p-4 flex flex-col justify-center">
        <h3 class="text-redTheme uppercase font-semibold my-2">OUR APPROACH</h3>
        <h4 class="text-4xl mt-6 mb-6 text-gray-900">Work ethic</h4>
        <p>We have respect for you and your property. We meet our appointment times and leave the work site in a tidy condition, notifying you of any potential hazards.</p>
    </div>
    <div>
        <img class="rounded-xl max-w-full" src="/about-feature-1.webp" alt="Working safely on a scaffold">
    </div>
</div>

<div class="flex flex-col-reverse md:flex-row-reverse mx-auto max-w-screen-lg my-0 md:my-20 p-6">
    <div class="p-4 md:ml-8 w-full  flex flex-col justify-center">
        <h3 class="text-redTheme uppercase font-semibold my-2">MODERN TOOLS</h3>
        <h4 class="text-4xl mt-6 mb-6 text-gray-900">Safe and effective</h4>
        <p>We keep up to date with the latest technology by using the most effective SnapLok cleaning equipment specially designed in the UK. This allows us to stay in line with industry standards for top compliance and quality workmanship.</p>
    </div>
    <div class="">
        <img class="rounded-xl max-w-full" src="/about-feature-2.webp" alt="Working safely on a scaffold">
    </div>
</div>



<BookBar />

