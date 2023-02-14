<script>
	import { onMount } from 'svelte';
	import { updateActiveMenu, hideMobileMenu } from '../../lib/common';
	import LogoSVG from './logoSVG.svelte';

	onMount(async () => {
		// Get active menu item
		updateActiveMenu(window.location.pathname);

		// Add event listener to mobile menu
		const M = document.querySelector('#nav-icon');
		M?.addEventListener('click', () => {
			const mobileMenu = document.querySelector('#mobile-menu-container');
			mobileMenu?.classList.toggle('hidden');
		});

		// Loop through mobile-link elements and add click event listener
		const mobileLinks = document.querySelectorAll('.mobile-link');
		mobileLinks.forEach((link) => {
			link.addEventListener('click', () => {
				hideMobileMenu();
			});
		});
	});

	// Create menu links
	const links = [
		{
			name: 'Services',
			href: '#services'
		},
		{
			name: 'Work',
			href: '#work'
		},
		{
			name: 'Contact',
			href: '#contact'
		}
	];
</script>

<header class=" top-0 left-0 z-50 drop-shadow-md bg-white soft-shadow">
	<nav class="flex justify-between p-6 max-w-screen-xl mx-auto">
		<div class="flex items-center justify-center">
			<a href="/" class="w-[180px] xs:w-[300px] block">
				<!-- <img src="/logo-258.webp" height=56 alt="Murray's Chimney Services Logo" class="max-h-14" /> -->
				<LogoSVG size="100%" fill="fill-[#284ed3]" />
			</a>
		</div>

		<div class="flex items-center justify-center">
			<div class="relative xmd:hidden scale-75">
				<!-- Hamburger Menu -->
				<div id="nav-icon" class="">
					<span />
					<span />
					<span />
				</div>
			</div>
			<ul class="hidden xmd:flex font-bold font-sans items-center justify-center main-menu">
				{#each links as link}
					<li class="nav-li mx-6 transition-colors text-black hover:text-gray-600">
						<a href={link.href}>{link.name}</a>
					</li>
				{/each}
				<li
					class="mx-4 transition-colors bg-primaryTheme text-black bg-redTheme hover:bg-redThemeDark px-8 py-2 rounded-3xl cursor-pointer"
				>
					<a href="tel:+64 21 154 0488">Call Us</a>
				</li>
			</ul>
		</div>
	</nav>

	<!-- Mobile Menu -->
	<div id="mobile-menu-container" class="hidden">
		<ul
			id="mobile-menu"
			class="mobile-menu xmd:hidden text-center z-20 top-0 left-0 w-full bg-gray-100 flex flex-col p-4 font-heading uppercase items-center justify-center py-10"
		>
			{#each links as link}
				<li
					class="nav-li mx-4 transition-colors text-gray-800 hover:text-gray-800 tracking-wider mb-4"
				>
					<a class="mobile-link" href={link.href}>{link.name}</a>
				</li>
			{/each}
			<li
				class="mx-4 transition-colors text-gray-800 bg-redTheme hover:bg-redThemeDark px-4 py-2 rounded-3xl cursor-pointer tracking-widest"
			>
				<a href="tel:+64-800-132-046">Call Us</a>
			</li>
		</ul>
	</div>
</header>
