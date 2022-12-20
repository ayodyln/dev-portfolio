<script>
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<div class="h-screen w-screen flex flex-col" data-theme="light">
	<Navbar />
	<div class="overflow-auto h-full">
		<slot />
	</div>
	<Footer />
</div>
