<script type="ts">
	export let img: string;
	export let title: string;
</script>

<div
	class="bg-white w-[40%] xs:w-1/4 h-[120px] flex items-center flex-col justify-center soft-shadow rounded-md my-2 xs:m-4 group"
>
	<img src={img} alt="icon" class="w-12 mb-2 group-hover:-translate-y-2 transition-transform" />
	<h5 class="uppercase text-[12px] text-center">{title}</h5>
</div>
