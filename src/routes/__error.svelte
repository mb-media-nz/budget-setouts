<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: status,
				message: error.message
			}
		};
	}
</script>

<script lang="ts">
	export let title: string, message: string;
</script>

<div class="font-extrabold  w-full h-[60vh] flex justify-center items-center flex-col">
	<h1 class="text-4xl mb-6">Error {title}</h1>
	<p class="text-xl mb-4">{message}</p>
	<a
		href="/"
		class="uppercase text-white bg-redTheme hover:bg-redThemeDark transition-colors px-8 py-3 text-sm"
		>Take me home</a
	>
</div>
