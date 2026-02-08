<script>
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { articles } from "$lib/data/articles";
    import { error } from "@sveltejs/kit";

    const slug = $page.params.slug;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        throw error(404, "Article not found");
    }

    // Find related articles (same category, not current)
    const relatedArticles = articles
        .filter(
            (a) => a.category === article.category && a.slug !== article.slug,
        )
        .slice(0, 3);
</script>

<svelte:head>
    <title>{article.title} | Sri Speech & Hearing Aid Centre</title>
    <meta name="description" content={article.summary} />
</svelte:head>

<div
    class="bg-white min-h-screen pb-24 font-serif text-slate-900 selection:bg-teal-100 selection:text-teal-900"
>
    <!-- Navigation (Simplified for Reader Mode) -->
    <nav
        class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-6 py-4 flex justify-between items-center transition-all"
    >
        <a
            href="{base}/articles"
            class="text-slate-500 hover:text-slate-900 font-sans text-sm flex items-center gap-2 group transition-colors"
        >
            <svg
                class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                ></path></svg
            >
            Health Library
        </a>
        <div class="flex items-center gap-3">
            <span
                class="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full"
                >{article.category}</span
            >
        </div>
    </nav>

    <article class="max-w-3xl mx-auto px-8 md:px-0 mt-20 md:mt-28">
        <!-- Header -->
        <header class="mb-14">
            <h1
                class="text-4xl md:text-6xl font-medium leading-tight md:leading-tight mb-8 text-slate-900 tracking-tight"
            >
                {article.title}
            </h1>

            <p
                class="text-xl md:text-2xl text-slate-600 font-roboto font-light leading-relaxed mb-12"
            >
                {article.summary}
            </p>

            <!-- Author / Meta -->
            <div
                class="flex items-center justify-between border-t border-b border-slate-100 py-6"
            >
                <div class="flex items-center gap-4">
                    <div
                        class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-500 font-sans"
                    >
                        {article.author.charAt(0)}
                    </div>
                    <div class="font-sans">
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-slate-900"
                                >{article.author}</span
                            >
                            <span class="text-emerald-500">
                                <svg
                                    class="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    ><path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    ></path></svg
                                >
                            </span>
                        </div>
                        <div class="text-sm text-slate-500">
                            {article.authorRole} ·
                            <span class="text-slate-400">{article.date}</span>
                        </div>
                    </div>
                </div>
                <div
                    class="text-sm text-slate-400 font-sans font-medium hidden sm:block"
                >
                    {article.readTime}
                </div>
            </div>
        </header>

        <!-- Content -->
        <div class="prose prose-xl mt-12 mb-24 custom-prose">
            {@html article.content}
        </div>

        <!-- Reference Footer -->
        <div
            class="mt-20 p-8 bg-slate-50 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 font-sans"
        >
            <div>
                <h4 class="font-bold text-slate-900 mb-1">Source Reference</h4>
                <p class="text-sm text-slate-500">
                    Originally published by {article.author}.
                </p>
            </div>
            <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-sm font-bold"
            >
                Read Original Source ↗
            </a>
        </div>
    </article>

    <!-- Related Articles -->
    <div class="max-w-4xl mx-auto px-6 mt-32 border-t border-slate-100 pt-16">
        <h3 class="font-sans font-bold text-2xl mb-10 text-slate-900">
            More from {article.category}
        </h3>
        <div class="grid md:grid-cols-2 gap-10">
            {#each relatedArticles as rel}
                <a href="{base}/articles/{rel.slug}" class="group block">
                    <span
                        class="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 block font-sans"
                        >Read Next</span
                    >
                    <h4
                        class="font-serif text-2xl font-bold text-slate-800 mb-3 group-hover:underline decoration-emerald-500 decoration-2 underline-offset-4"
                    >
                        {rel.title}
                    </h4>
                    <p class="text-slate-500 font-sans text-sm line-clamp-2">
                        {rel.summary}
                    </p>
                </a>
            {/each}
        </div>
    </div>
</div>

<style>
    /* Force improved spacing and readability with high specificity */
    :global(.custom-prose p) {
        margin-bottom: 2.5em !important;
        line-height: 2.2 !important;
        font-family: "Roboto", sans-serif !important;
        font-size: 1.25rem !important;
        letter-spacing: 0.02em;
        color: #292524 !important;
    }
    :global(.custom-prose h2),
    :global(.custom-prose h3) {
        margin-top: 3em !important;
        margin-bottom: 1em !important;
        font-family: "Playfair Display", serif !important;
        line-height: 1.3 !important;
        color: #1c1917 !important;
        letter-spacing: -0.02em;
    }
    :global(.custom-prose ul),
    :global(.custom-prose ol) {
        margin-bottom: 2.5em !important;
    }
    :global(.custom-prose li) {
        margin-bottom: 1em !important;
        line-height: 2 !important;
        font-family: "Roboto", sans-serif !important;
        padding-left: 0.5em;
    }
    :global(.custom-prose blockquote) {
        margin-top: 4em !important;
        margin-bottom: 4em !important;
        padding-left: 2em !important;
        border-left-width: 4px !important;
        border-color: #10b981 !important;
        font-style: italic !important;
        font-size: 1.5rem !important;
        line-height: 1.6 !important;
        color: #065f46 !important;
        background: transparent !important;
    }
    :global(.custom-prose strong) {
        font-weight: 700 !important;
        color: #000000 !important;
    }
</style>
