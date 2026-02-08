<script>
    import { base } from "$app/paths";
    import { articles } from "$lib/data/articles";
    import { fade } from "$lib/actions/fade";
    import { fly } from "svelte/transition";
    import SEO from "$lib/components/SEO.svelte";

    let searchQuery = "";
    let selectedCategory = "All";

    // unique categories
    const categories = ["All", ...new Set(articles.map((a) => a.category))];

    // Filter logic
    $: filteredArticles = articles.filter((article) => {
        const matchesSearch =
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.summary.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === "All" || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Featured article (first one that matches criteria, or just the first one generally)
    $: featuredArticle =
        filteredArticles.length > 0 ? filteredArticles[0] : null;
    $: remainingArticles =
        filteredArticles.length > 1 ? filteredArticles.slice(1) : [];
</script>

<SEO
    title="Articles & Resources | Sri Speech & Hearing"
    description="Expert articles on hearing health, speech therapy, and medical technology. Your trusted resource for audiology insights."
/>

<div class="bg-white min-h-screen">
    <!-- Navbar Spacer -->
    <div class="h-20"></div>

    <!-- Header & Search -->
    <section class="pt-16 pb-12 border-b border-slate-100">
        <div class="max-w-[840px] mx-auto px-6">
            <h1
                class="font-serif text-5xl md:text-6xl text-slate-900 mb-8 font-medium tracking-tight"
            >
                Reflections on <br />
                <span class="text-slate-500 italic">Connection & Clarity.</span>
            </h1>

            <!-- Search Bar -->
            <div class="relative max-w-lg mb-12">
                <input
                    type="text"
                    bind:value={searchQuery}
                    placeholder="Search articles..."
                    class="w-full pl-12 pr-4 py-3 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors text-lg placeholder:text-slate-400 font-serif"
                />
                <svg
                    class="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    /></svg
                >
            </div>

            <!-- Categories -->
            <div
                class="flex gap-8 overflow-x-auto pb-4 no-scrollbar border-b border-slate-100"
            >
                {#each categories as category}
                    <button
                        class="text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors pb-4 border-b-2 {selectedCategory ===
                        category
                            ? 'text-slate-900 border-slate-900'
                            : 'text-slate-400 border-transparent hover:text-slate-600'}"
                        onclick={() => (selectedCategory = category)}
                    >
                        {category}
                    </button>
                {/each}
            </div>
        </div>
    </section>

    <!-- Content Area -->
    <section class="py-16 px-6">
        <div class="max-w-[1000px] mx-auto">
            {#if featuredArticle}
                <!-- Featured Article -->
                <a
                    href="{base}/articles/{featuredArticle.slug}"
                    class="mb-20 grid md:grid-cols-2 gap-12 items-center group cursor-pointer block"
                >
                    <div
                        class="aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:shadow-blue-900/20 transition-all duration-500"
                    >
                        <!-- Pure Black Gradient: Zinc-900 (Top-Left) to Black (Bottom-Right) -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black opacity-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                        ></div>

                        <!-- Title Overlay -->
                        <div class="absolute inset-x-0 bottom-0 p-8 text-left">
                            <span
                                class="block text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-2"
                            >
                                {featuredArticle.category}
                            </span>
                            <span
                                class="font-serif text-3xl md:text-5xl font-medium text-white leading-tight drop-shadow-lg tracking-tight block"
                            >
                                {featuredArticle.title}
                            </span>
                            <div
                                class="h-1 w-12 bg-blue-600 mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 origin-left"
                            ></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div
                                class="w-6 h-6 rounded-full bg-slate-200"
                            ></div>
                            <!-- Author Avatar Placeholder -->
                            <span
                                class="text-xs font-bold uppercase tracking-wide text-slate-900"
                                >{featuredArticle.author}</span
                            >
                            <span class="text-slate-300">•</span>
                            <span class="text-xs text-slate-500"
                                >{featuredArticle.date}</span
                            >
                        </div>
                        <h2
                            class="font-serif text-3xl md:text-4xl text-slate-900 font-bold mb-4 group-hover:underline decoration-2 underline-offset-4 decoration-slate-900"
                        >
                            {featuredArticle.title}
                        </h2>
                        <p
                            class="text-slate-500 text-lg leading-relaxed line-clamp-3 mb-6 font-serif"
                        >
                            {featuredArticle.summary}
                        </p>
                        <span
                            class="text-xs font-bold text-slate-900 uppercase tracking-widest"
                        >
                            Read Article &rarr;
                        </span>
                    </div>
                </a>
            {:else}
                <div class="text-center py-20">
                    <p class="text-slate-500 text-lg">
                        No articles found matching your search.
                    </p>
                </div>
            {/if}

            <!-- Recent Articles Grid -->
            <div
                class="grid md:grid-cols-3 gap-x-12 gap-y-16 border-t border-slate-100 pt-16"
            >
                {#each remainingArticles as article, i}
                    <a
                        href="{base}/articles/{article.slug}"
                        in:fly={{ y: 20, delay: i * 50 }}
                        class="group cursor-pointer flex flex-col h-full block"
                    >
                        <div
                            class="aspect-[3/2] relative rounded-xl mb-6 overflow-hidden shadow-lg ring-1 ring-slate-900/5 group-hover:shadow-2xl group-hover:ring-slate-900/10 transition-all duration-500"
                        >
                            <!-- Pure Black Gradient: Zinc-900 (Top-Left) to Black (Bottom-Right) -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black transition-transform duration-1000 ease-out group-hover:scale-110"
                            ></div>

                            <!-- Title Overlay -->
                            <div
                                class="absolute inset-x-0 bottom-0 p-6 text-left"
                            >
                                <span
                                    class="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2"
                                >
                                    {article.category}
                                </span>
                                <span
                                    class="font-serif text-xl md:text-2xl font-medium text-white leading-snug drop-shadow-lg block"
                                >
                                    {article.title}
                                </span>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 mb-3">
                            <span
                                class="text-[10px] font-bold uppercase tracking-widest text-slate-900"
                                >{article.category}</span
                            >
                        </div>

                        <h3
                            class="font-serif text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:underline decoration-2 underline-offset-4"
                        >
                            {article.title}
                        </h3>

                        <p
                            class="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow font-serif"
                        >
                            {article.summary}
                        </p>

                        <div
                            class="flex items-center gap-2 text-xs text-slate-400 mt-auto"
                        >
                            <span>{article.readTime}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>
</div>
