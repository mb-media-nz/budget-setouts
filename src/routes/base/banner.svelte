<script type="ts">
	export let title: string;
	export let image: string;
</script>

<div
	style="background-image: url('{image}')"
	class="bg-center flex justify-center items-center min-h-[500px] relative bg-no-repeat bg-cover"
>
	<div class="absolute left-0 top-0 w-full h-full bg-black bg-opacity-30" />
	<h1 class="text-white text-center text-4xl bg-redTheme bg-opacity-60 p-1 z-10">{title}</h1>
</div>
