<script lang="ts">
	import ProfileImage from '$lib/images/profile.jpg'

	$: imageLoading = ProfileImage ? false : true
</script>

<section class="h-full w-full max-w-4xl m-auto py-2 flex">
	<div id="avatar" class="w-4/12 flex flex-col gap-2">
		<div class="avatar flex flex-col">
			<div class="w-full rounded bg-base-300 shadow-lg" class:animate-pulse={imageLoading}>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="w-full h-auto" src={ProfileImage} alt="Avatar Picture" />
			</div>
		</div>

		<div>
			<h1 class="text-3xl font-bold mb-1">Dylan Smith</h1>

			<h3 class="font-mono text-xs italic">JavaScript Web Developer</h3>
			<h3 class="font-mono text-xs italic">UX/UI Designer</h3>
		</div>

		<div class="divider m-0" />

		<div class="bg-neutral text-neutral-content p-2 rounded-lg">
			<h2 class="text-lg">Technologies</h2>

			<ul class="list-disc pl-6">
				<!-- ... -->
				<li>JavaScript</li>
				<li>JavaScript</li>
				<li>JavaScript</li>
			</ul>
		</div>
	</div>

	<div class="divider divider-horizontal m-0 before:bg-base-300 after:bg-base-300" />

	<div id="resume" class="w-full h-full">
		<h2>Resume</h2>
	</div>
</section>
