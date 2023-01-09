<script lang="ts">
	export let modalHandler: any
</script>

<div class="navbar bg-base-200 border-b border-primary">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label for="" tabindex={0} class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
			</label>

			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="/about">About</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/portfolio">Portfolio</a></li>
			</ul>
		</div>

		<a
			href="/"
			class="flex items-center normal-case text-xl hover:bg-base-300 p-2 rounded cursor-pointer">
			<svg
				id="a"
				class="w-10 h-10 fill-primary"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 551.85 869.08">
				<path
					d="m15.77,258.67c4.23,7.71,12.85,9.84,19.25,4.74l240.62-191.56,240.61,191.55c6.4,5.1,15.02,2.97,19.25-4.74l13.37-24.39c4.23-7.71,2.47-18.1-3.93-23.19L283.81,3.2c-1.32-1.15-2.77-2-4.3-2.54-.07-.02-.13-.04-.2-.06-.35-.11-.69-.22-1.04-.3-.19-.04-.38-.07-.57-.11-.24-.04-.47-.09-.71-.12-.26-.03-.53-.04-.79-.06-.17,0-.34-.02-.5-.02-.33,0-.65.02-.98.04-.11,0-.21.01-.32.02-.41.04-.81.11-1.21.2-.02,0-.05,0-.07.01-2.06.46-4.03,1.47-5.74,3L6.33,211.09c-6.4,5.1-8.16,15.48-3.93,23.19l13.37,24.39Z" /><path
					d="m551.53,468.32c-.57-6.26-4.04-11.87-9.3-14.03l-239.18-98.14c-1.99-1.1-4.27-1.73-6.7-1.73h-24.24c-7.65,0-13.85,6.2-13.85,13.85v313.48c0,7.65,6.2,13.85,13.85,13.85h24.24c7.65,0,13.85-6.2,13.85-13.85v-256.38l189.71,77.84v115.89l-223.38,178.32-224.58-179.28v-208.1l243.93-194.73c6.38-5.1,8.14-15.48,3.92-23.19l-13.34-24.39c-4.22-7.71-12.81-9.84-19.19-4.74L6.31,371.31C2.17,374.62,0,380.14.11,385.72c-.07.56-.11,1.12-.11,1.7v258.94c0,6.21,4.08,11.46,9.7,13.22l258.97,206.73c2.42,1.93,5.16,2.82,7.85,2.77,2.7.05,5.43-.84,7.85-2.77l260.44-207.91c4.19-2.38,7.03-6.88,7.03-12.05v-175.09c0-1.01-.12-2-.32-2.95Z" />
			</svg>
			<span>Dylan Smith</span>
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/about">About</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/portfolio">Portfolio</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<button on:click={modalHandler} class="btn btn-outline btn-primary">Contact Me</button>
	</div>
</div>
