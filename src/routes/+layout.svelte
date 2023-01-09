<script lang="ts">
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'

	let ContactModalState = false
	const modalHandler = () => (ContactModalState = !ContactModalState)
</script>

<div class="h-screen w-screen flex flex-col bg-base-300" data-theme="primary">
	<Navbar {modalHandler} />
	<div class="overflow-auto h-full">
		<slot />
	</div>
	<Footer />

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="modal" class:modal-open={ContactModalState}>
		<div id="ContactModal" class="modal-box bg-base-200 w-11/12 max-w-5xl static overflow-visible">
			<button
				class="btn btn-primary rounded-full absolute top-[-12px] right-[-12px] overflow-visible z-4 drop-shadow-lg"
				on:click={modalHandler}>X</button>

			<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
			<p class="py-4">
				You've been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>

			<div class="modal-action">
				<button class="btn btn-primary btn-outline" on:click={modalHandler}>Send</button>
			</div>
		</div>
	</div>
</div>
