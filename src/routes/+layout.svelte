<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import SupportButton from "$lib/components/SupportButton.svelte";
	import "../app.css";
</script>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
	<SupportButton />
</div>
