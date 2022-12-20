<script></script>

<div class="navbar bg-base-100 border-b border-primary">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label for="" tabindex={0} class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</label>
			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="/portfolio">Portfolio</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/code">Code</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/portfolio">Portfolio</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/code">Code</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/contact" class="btn">Contact Me!</a>
	</div>
</div>
