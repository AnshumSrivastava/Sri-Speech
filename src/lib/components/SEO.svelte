<script>
    import { page } from "$app/stores";

    export let title;
    export let description;
    export let keywords =
        "audiologist, hearing aids, speech therapy, ludhiana, hearing loss, tinnitus, pediatric hearing";
    export let image = "/images/hero_realistic.png"; // Default generic image
    export let type = "website";
    export let date = "";

    const siteUrl = "https://srispeech.com"; // Replace with actual domain
    const siteTitle = "Sri Speech & Hearing Aid Centre";

    $: currentUrl = `${siteUrl}${$page.url.pathname}`;
    $: fullTitle = `${title} | ${siteTitle}`;
    $: imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
</script>

<svelte:head>
    <!-- Basic -->
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={currentUrl} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={type} />
    <meta property="og:url" content={currentUrl} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:site_name" content={siteTitle} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={currentUrl} />
    <meta property="twitter:title" content={fullTitle} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={imageUrl} />

    {#if date}
        <meta property="article:published_time" content={date} />
    {/if}
</svelte:head>
