<script type="ts">
	export let img: string;
	export let title: string;
	export let description: string;
</script>

<div
	class="flex-1 max-w-md soft-shadow overflow-hidden rounded-md mx-2 my-6 md:m-2 w-full md:w-1/3  hover:scale-[1.05] transition-transform"
>
	<div style="background-image: url('{img}');" class="min-h-[180px] bg-cover bg-center" />
	<div class="bg-white px-6 pt-6 xl:p-6 min-h-[200px] xl:min-h-[240px]">
		<p class="font-bold text-xl text-black">{title}</p>
		<p class="m-0 pb-6">
			{description}
		</p>
	</div>
</div>
