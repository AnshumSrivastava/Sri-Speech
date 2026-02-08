<script>
    import { base } from "$app/paths";
    import SEO from "$lib/components/SEO.svelte";
    import { onMount } from "svelte";

    let openIndex = null;

    const faqs = [
        {
            category: "Hearing Loss Basics",
            questions: [
                {
                    q: "Is hearing loss reversible?",
                    a: "In most cases (sensorineural hearing loss), it is permanent because it involves damage to the inner ear nerves. However, it is highly treatable with hearing aids. Conductive hearing loss (e.g., earwax, infection) can sometimes be medically reversed.",
                },
                {
                    q: "Does hearing loss always get worse?",
                    a: "Not necessarily. Age-related hearing loss is progressive but slow. Protecting your ears from loud noise and managing health conditions can slow its progression.",
                },
            ],
        },
        {
            category: "Hearing Aids",
            questions: [
                {
                    q: "Will hearing aids restore my hearing to normal?",
                    a: "No device can fully restore 'normal' hearing. However, modern hearing aids significantly improve your ability to hear speech, filter background noise, and connect with the world.",
                },
                {
                    q: "Do I really need two hearing aids?",
                    a: "If you have hearing loss in both ears, yes. Two aids help your brain localize sound, understand speech in noise, and maintain balance. It’s how your brain is designed to work.",
                },
                {
                    q: "Are hearing aids only for old people?",
                    a: "Absolutely not. Hearing loss affects people of all ages due to genetics, noise exposure, and illness. Treating it is a sign of taking care of your health, just like wearing glasses.",
                },
            ],
        },
        {
            category: "Process",
            questions: [
                {
                    q: "Do I need a doctor's referral?",
                    a: "You can book directly with us for a hearing assessment. If we detect medical flags (like infection), we will refer you to an ENT specialist.",
                },
                {
                    q: "How long does a hearing test take?",
                    a: "A comprehensive assessment typically takes about 45-60 minutes. It is painless and thorough.",
                },
            ],
        },
    ];

    function toggle(index) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<SEO
    title="Frequently Asked Questions"
    description="Answers to common questions about hearing loss, hearing aids, and speech therapy. Trusted medical information from Sri Speech & Hearing Aid Centre."
/>

<div class="bg-slate-50 min-h-screen pb-24">
    <!-- Header -->
    <div class="bg-white border-b border-slate-200 py-16">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h1 class="font-serif text-4xl md:text-5xl text-slate-900 mb-6">
                Common Questions
            </h1>
            <p class="text-xl text-slate-600 max-w-2xl mx-auto font-roboto">
                Clear, honest answers to help you navigate your hearing care
                journey.
            </p>
        </div>
    </div>

    <!-- FAQ Content -->
    <div class="max-w-3xl mx-auto px-6 mt-16 space-y-12">
        {#each faqs as section, sIndex}
            <div>
                <h2
                    class="font-serif text-2xl text-slate-800 mb-6 border-b border-slate-200 pb-2"
                >
                    {section.category}
                </h2>
                <div class="space-y-4">
                    {#each section.questions as item, qIndex}
                        {@const uniqueId = `${sIndex}-${qIndex}`}
                        <div
                            class="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                        >
                            <button
                                class="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                onclick={() => toggle(uniqueId)}
                            >
                                <span class="font-bold text-slate-800 text-lg"
                                    >{item.q}</span
                                >
                                <span
                                    class="text-blue-500 transform transition-transform duration-300 {openIndex ===
                                    uniqueId
                                        ? 'rotate-180'
                                        : ''}"
                                >
                                    ▼
                                </span>
                            </button>
                            {#if openIndex === uniqueId}
                                <div
                                    class="px-6 pb-6 text-slate-600 leading-relaxed font-roboto border-t border-slate-100 pt-4"
                                >
                                    {item.a}
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>

    <!-- Still Have Questions CTA -->
    <div class="max-w-2xl mx-auto px-6 mt-24 text-center">
        <h3 class="font-serif text-2xl text-slate-800 mb-4">
            Still have questions?
        </h3>
        <p class="text-slate-600 mb-8">
            Every ear is unique. The best way to get answers is to speak with a
            professional.
        </p>
        <a href="{base}/book" class="btn-primary">Ask an Audiologist</a>
    </div>
</div>
