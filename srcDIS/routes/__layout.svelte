<script>
	import '../app.css';
	import Header from './base/header.svelte';
	import Footer from './base/footer.svelte';

	import { navigating } from '$app/stores';
	import { hideMobileMenu, updateActiveMenu } from '../lib/common';
	import { onMount } from 'svelte';

	onMount(async () => {
		// When click nav-icon, toggle mobile menu
		const navIcon = document.querySelector('#nav-icon');
		const menuList = document.querySelector('.mobile-menu');

		if (navIcon) {
			navIcon.addEventListener('click', () => {
				navIcon.classList.toggle('open');
				menuList.classList.toggle('open');
			});
		}
	});

	$: if($navigating) {
		updateActiveMenu($navigating?.to.pathname);
		hideMobileMenu()
	} 
	
	

</script>

<Header />
<slot />
<Footer />
