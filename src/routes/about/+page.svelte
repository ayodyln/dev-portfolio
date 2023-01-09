<script lang="ts">
	import ProfileImage from '$lib/images/profile.jpg'

	$: imageLoading = ProfileImage ? false : true
</script>

<section class="h-full w-full max-w-4xl max-h-[50rem] m-auto py-6 flex gap-6 antialiased">
	<div id="avatar" class="w-3/12 flex flex-col gap-2 bg-base-200 p-4 rounded h-fit">
		<div class="avatar flex flex-col">
			<div class="w-full rounded bg-base-300 shadow-lg" class:animate-pulse={imageLoading}>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img class="w-full h-auto" src={ProfileImage} alt="Avatar Picture" />
			</div>
		</div>

		<div>
			<h1 class="text-3xl font-bold mb-3">Dylan Smith</h1>

			<h3 class="font-mono text-sm italic">Web and App Developer</h3>
			<h3 class="font-mono text-sm italic">UI/UX Designer</h3>
		</div>

		<div class="mt-4">
			<h1 class="text-lg">Current Tech</h1>

			<ul class="list-disc pl-6">
				<li>SvelteKit</li>
				<li>NextJS</li>
				<li>AWS Amplify</li>
			</ul>
		</div>
	</div>

	<div id="resume" class="w-3/5 h-full flex flex-col gap-4 pr-4">
		<h2 class="text-4xl font-bold text-primary">About Me</h2>

		<p class="text-xl font-semibold tracking-wide">
			Hello, I'm a web and app developer that has a passion for crafting things from scratch for the
			web!
		</p>

		<p>
			For 3 plus years, I've been tinkering and breaking things to learn what it takes to create
			modern applications. Building out anything from the simplest components to crafting
			applications that manipulate data constantly. It brings me joy to create something from
			scratch and to have others use it.
		</p>

		<p>
			My introduction to web design and app development was pretty sudden, but my interest sprouted
			instantly and is ever-growing. I've always been around tech and it's been an integral part of
			my life. So, when I was introduced to development I was instantly hooked and have been
			striving to learn as much as I can about the craft since.
		</p>

		<p>
			Currently, I'm attending school still and working towards my Bachelor's in <span
				class="italic">Web Design and App Development</span
			>, with an emphasis on the development of applications. Simultaneously, I'm working for my
			university and currently creating a web application that manages the college department's
			assets (e.g., lab tech, VR headsets, Laptops, etc.). The current tech and frameworks I'm
			working with are <span class="italic">NextJS</span> and
			<span class="italic">AWS Amplify</span>.
		</p>

		<a class="btn btn-link text-primary w-fit h-fit p-0" href="#">View my resume</a>
	</div>
</section>
