<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
    <title>Speech Therapy Ludhiana | Voice, Fluency, & Rehabilitation</title>
    <meta
        name="description"
        content="Expert speech therapy for children and adults. Treating stammering, delayed speech, and voice disorders with evidence-based techniques."
    />
</svelte:head>

<section class="pt-32 pb-16 bg-slate-50 text-center px-6">
    <div class="max-w-4xl mx-auto">
        <span
            class="text-xs font-bold tracking-widest text-pink-600 uppercase mb-4 block"
        >
            Find Your Voice
        </span>
        <h1 class="font-serif text-4xl md:text-5xl text-slate-900 mb-6">
            Communication is <br /> A Human Right
        </h1>
        <p
            class="text-xl text-slate-600 leading-relaxed font-roboto max-w-2xl mx-auto"
        >
            It’s not just about "talking correctly." It’s about expressing who
            you are. Our therapy is supportive, patient, and scientifically
            grounded.
        </p>
    </div>
</section>

<!-- Adult vs Child (Source: ASHA) -->
<section class="py-20 bg-white px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <!-- For Children -->
        <div class="space-y-6">
            <h2
                class="font-serif text-3xl text-slate-900 flex items-center gap-4"
            >
                <span
                    class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl"
                    >🧸</span
                >
                For Children
            </h2>
            <p class="text-slate-600 leading-relaxed">
                Early intervention is key. We turn therapy into play, helping
                children build confidence while mastering language.
            </p>
            <ul class="space-y-4">
                <li class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div class="font-bold text-pink-600">01</div>
                    <div>
                        <h3 class="font-bold text-slate-900">Speech Delay</h3>
                        <p class="text-sm text-slate-500">
                            Not hitting mileslates? We help jumpstart vocabulary
                            and sentence formation.
                        </p>
                    </div>
                </li>
                <li class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div class="font-bold text-pink-600">02</div>
                    <div>
                        <h3 class="font-bold text-slate-900">
                            Stammering / Stuttering
                        </h3>
                        <p class="text-sm text-slate-500">
                            Fluency techniques to reduce blocks and anxiety
                            around speaking.
                        </p>
                    </div>
                </li>
                <li class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div class="font-bold text-pink-600">03</div>
                    <div>
                        <h3 class="font-bold text-slate-900">Articulation</h3>
                        <p class="text-sm text-slate-500">
                            Correcting sounds like 'r', 's', or 'l' to improve
                            clarity.
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <!-- For Adults -->
        <div class="space-y-6">
            <h2
                class="font-serif text-3xl text-slate-900 flex items-center gap-4"
            >
                <span
                    class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl"
                    >👔</span
                >
                For Adults
            </h2>
            <p class="text-slate-600 leading-relaxed">
                It is never too late. Whether recovering from a medical event or
                refining professional communication, we can help.
            </p>
            <ul class="space-y-4">
                <li class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div class="font-bold text-blue-600">01</div>
                    <div>
                        <h3 class="font-bold text-slate-900">
                            Post-Stroke Aphasia
                        </h3>
                        <p class="text-sm text-slate-500">
                            Rebuilding language pathways after a neurological
                            event.
                        </p>
                    </div>
                </li>
                <li class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div class="font-bold text-blue-600">02</div>
                    <div>
                        <h3 class="font-bold text-slate-900">
                            Voice Disorders
                        </h3>
                        <p class="text-sm text-slate-500">
                            Treatment for hoarseness, vocal nodules, or strain
                            from overuse.
                        </p>
                    </div>
                </li>
                <li class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div class="font-bold text-blue-600">03</div>
                    <div>
                        <h3 class="font-bold text-slate-900">
                            Professional Fluency
                        </h3>
                        <p class="text-sm text-slate-500">
                            Techniques for public speakers and professionals to
                            speak with authority.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>

<!-- The Process -->
<section class="py-20 bg-pink-50/50 px-6 text-center">
    <div class="max-w-4xl mx-auto">
        <h2 class="font-serif text-3xl text-slate-900 mb-12">
            How Therapy Works
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-sm">
                <div class="text-4xl mb-4">🩺</div>
                <h3 class="font-bold text-slate-800 mb-2">Assessment</h3>
                <p class="text-sm text-slate-500">
                    Standardized testing to identify the core issue.
                </p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-sm">
                <div class="text-4xl mb-4">🎯</div>
                <h3 class="font-bold text-slate-800 mb-2">Plan</h3>
                <p class="text-sm text-slate-500">
                    Customized exercises and mileslates tailored to you.
                </p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-sm">
                <div class="text-4xl mb-4">🏡</div>
                <h3 class="font-bold text-slate-800 mb-2">Home Practice</h3>
                <p class="text-sm text-slate-500">
                    Techniques to practice daily for faster progress.
                </p>
            </div>
        </div>
        <div class="mt-12">
            <a href="{base}/book" class="btn-primary">Book an Assessment</a>
        </div>
    </div>
</section>
