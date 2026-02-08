<script>
    let activeTab = "styles"; // 'styles' | 'how-it-works' | 'faq'
    import SEO from "$lib/components/SEO.svelte";

    const styles = [
        {
            name: "Behind-the-Ear (BTE)",
            desc: "Robust & Powerful",
            details:
                "Best for moderate to severe hearing loss. Easy to handle and clean.",
            pros: ["Long battery life", "Powerful amplification"],
            cons: ["More visible than other styles"],
            color: "bg-blue-50 border-blue-100",
        },
        {
            name: "Receiver-in-Canal (RIC)",
            desc: "Open & Natural",
            details:
                "The most popular style. A small wire connects the body to the receiver in your ear.",
            pros: ["Discrete", "Natural sound quality"],
            cons: ["Speaker susceptible to wax"],
            color: "bg-emerald-50 border-emerald-100",
        },
        {
            name: "In-the-Ear (ITE)",
            desc: "Custom Molded",
            details:
                "Fills the outer ear. Easier to handle for those with dexterity issues.",
            pros: ["Easy to insert", "Longer battery life"],
            cons: ["Visible", "Wind noise"],
            color: "bg-amber-50 border-amber-100",
        },
        {
            name: "Invisible-in-Canal (IIC)",
            desc: "Truly Invisible",
            details:
                "Fits deep inside the ear canal. For mild to moderate loss.",
            pros: ["Invisible", "Natural sound localization"],
            cons: ["Short battery life", "Hard to handle"],
            color: "bg-slate-100 border-slate-200",
        },
    ];
</script>

<SEO
    title="Hearing Aid Styles & Technology"
    description="Explore different types of hearing aids: BTE, RIC, ITE, and Invisible models. Learn how they work and find the best fit for your lifestyle."
/>

<div class="bg-slate-50 min-h-screen pt-32 pb-24">
    <div class="max-w-4xl mx-auto px-6 mb-16 text-center">
        <h1 class="font-serif text-5xl md:text-6xl text-slate-900 mb-6">
            Find Your Perfect Fit
        </h1>
        <p class="text-xl text-slate-600 leading-relaxed">
            Hearing aids come in many shapes and sizes. We'll help you navigate
            the options to find a device that feels natural and sounds great.
        </p>
    </div>

    <div class="max-w-7xl mx-auto px-6">
        <!-- Tab Navigation -->
        <div class="flex justify-center flex-wrap gap-4 mb-16">
            {#each ["styles", "how-it-works", "faq"] as tab}
                <button
                    class="px-8 py-4 text-sm font-bold tracking-wide rounded-full transition-all border
                {activeTab === tab
                        ? 'bg-slate-800 text-white border-slate-800 shadow-lg'
                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700'}"
                    onclick={() => (activeTab = tab)}
                >
                    {tab.replace(/-/g, " ").toUpperCase()}
                </button>
            {/each}
        </div>

        <!-- Styles Tab -->
        {#if activeTab === "styles"}
            <div class="grid md:grid-cols-2 gap-8 animate-fade-in">
                {#each styles as style}
                    <div
                        class="card-comfort {style.color} border flex flex-col items-start h-full"
                    >
                        <div
                            class="flex justify-between w-full items-start mb-4"
                        >
                            <h3 class="font-serif text-2xl text-slate-800">
                                {style.name}
                            </h3>
                            <span
                                class="text-xs font-bold uppercase tracking-wide text-slate-500 bg-white/60 px-3 py-1 rounded-full"
                                >{style.desc}</span
                            >
                        </div>
                        <p
                            class="text-slate-600 mb-8 leading-relaxed flex-grow"
                        >
                            {style.details}
                        </p>

                        <div
                            class="bg-white/60 rounded-2xl p-6 w-full grid grid-cols-2 gap-6 text-sm"
                        >
                            <div>
                                <span
                                    class="font-bold text-emerald-600 block mb-2 text-xs uppercase tracking-wider"
                                    >Pros</span
                                >
                                <ul class="text-slate-600 space-y-2">
                                    {#each style.pros as pro}
                                        <li class="flex items-start gap-2">
                                            <svg
                                                class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                ><path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path></svg
                                            >
                                            {pro}
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                            <div>
                                <span
                                    class="font-bold text-rose-500 block mb-2 text-xs uppercase tracking-wider"
                                    >Cons</span
                                >
                                <ul class="text-slate-600 space-y-2">
                                    {#each style.cons as con}
                                        <li class="flex items-start gap-2">
                                            <svg
                                                class="w-4 h-4 text-rose-400 mt-0.5 shrink-0"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                ><path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                ></path></svg
                                            >
                                            {con}
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}

        <!-- Mechanics Tab -->
        {#if activeTab === "how-it-works"}
            <div
                class="bg-white rounded-[2.5rem] p-8 md:p-16 animate-fade-in border border-slate-100 shadow-sm"
            >
                <div class="grid md:grid-cols-2 gap-16 items-center">
                    <div class="space-y-10">
                        <div>
                            <h3
                                class="font-serif text-3xl font-bold text-slate-900 mb-4"
                            >
                                More Than Just an Amplifier
                            </h3>
                            <p class="text-slate-600 leading-relaxed text-lg">
                                Today's hearing aids are sophisticated
                                computers. They analyze your environment 100
                                times per second to separate speech from noise.
                            </p>
                        </div>

                        <div class="space-y-8">
                            <div class="flex gap-6">
                                <div
                                    class="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0"
                                >
                                    1
                                </div>
                                <div>
                                    <h4
                                        class="font-bold text-slate-800 text-lg"
                                    >
                                        Sound Capture
                                    </h4>
                                    <p class="text-slate-600 mt-1">
                                        Microphones pick up sound waves and
                                        convert them into digital signals.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-6">
                                <div
                                    class="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0"
                                >
                                    2
                                </div>
                                <div>
                                    <h4
                                        class="font-bold text-slate-800 text-lg"
                                    >
                                        Smart Processing
                                    </h4>
                                    <p class="text-slate-600 mt-1">
                                        The chip analyzes the sound, reducing
                                        background noise (like wind or traffic)
                                        and enhancing speech frequencies.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-6">
                                <div
                                    class="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0"
                                >
                                    3
                                </div>
                                <div>
                                    <h4
                                        class="font-bold text-slate-800 text-lg"
                                    >
                                        Clear Delivery
                                    </h4>
                                    <p class="text-slate-600 mt-1">
                                        Processed sound is delivered into your
                                        ear canal, crisp and clear.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative aspect-square bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-center p-8"
                    >
                        <!-- Abstract Tech Visualization -->
                        <div
                            class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] rounded-[2rem]"
                        ></div>

                        <div
                            class="relative z-10 w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center"
                        >
                            <div
                                class="absolute inset-0 border-4 border-blue-100 rounded-full animate-ping opacity-20"
                            ></div>
                            <div class="text-center">
                                <div class="text-5xl mb-2">🧠</div>
                                <div class="font-bold text-slate-800">
                                    Processing...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}

        <!-- FAQ Tab -->
        {#if activeTab === "faq"}
            <div class="max-w-3xl mx-auto animate-fade-in space-y-6">
                <div
                    class="card-comfort group cursor-pointer hover:border-blue-200"
                >
                    <h3
                        class="font-serif text-xl text-slate-800 mb-3 group-hover:text-blue-600 transition-colors"
                    >
                        How long do batteries last?
                    </h3>
                    <p class="text-slate-600 leading-relaxed">
                        Standard zinc-air batteries last 3-10 days depending on
                        usage. Rechargeable models typically last 24 hours on a
                        single charge.
                    </p>
                </div>
                <div
                    class="card-comfort group cursor-pointer hover:border-blue-200"
                >
                    <h3
                        class="font-serif text-xl text-slate-800 mb-3 group-hover:text-blue-600 transition-colors"
                    >
                        Will hearing aids restore my hearing to normal?
                    </h3>
                    <p class="text-slate-600 leading-relaxed">
                        No, they cannot restore natural hearing, but they
                        significantly improve your ability to hear and
                        communicate by amplifying soft sounds.
                    </p>
                </div>
                <div
                    class="card-comfort group cursor-pointer hover:border-blue-200"
                >
                    <h3
                        class="font-serif text-xl text-slate-800 mb-3 group-hover:text-blue-600 transition-colors"
                    >
                        Do I need two hearing aids?
                    </h3>
                    <p class="text-slate-600 leading-relaxed">
                        If you have hearing loss in both ears, wearing two aids
                        (binaural hearing) helps you determine where sounds are
                        coming from and hear better in noisy environments.
                    </p>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .animate-fade-in {
        animation: fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
</style>
