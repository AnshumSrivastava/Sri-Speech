<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
    <title>Finding Your Fit | Hearing Aid Styles</title>
    <meta
        name="description"
        content="Explore the different types of hearing aids. From invisible options to powerful BTE models, find the style that matches your lifestyle."
    />
</svelte:head>

<section class="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
    <div class="content-container text-center">
        <span
            class="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 block"
        >
            Options & Lifestyles
        </span>
        <h1
            class="font-serif text-4xl md:text-5xl text-slate-900 mb-6 leading-tight"
        >
            Finding Your <br /> Perfect Fit
        </h1>
        <p
            class="text-xl text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto"
        >
            There is no "best" hearing aid in the world. There is only the best
            hearing aid for <em>you</em>. Your lifestyle, hearing loss, and
            dexterity guide our recommendation.
        </p>
    </div>
</section>

<section class="py-24 bg-white">
    <div class="content-container space-y-24">
        <!-- RIC -->
        <div class="flex flex-col md:flex-row gap-12 items-start">
            <div
                class="w-full md:w-1/3 bg-blue-50 rounded-3xl p-8 flex items-center justify-center aspect-square text-blue-900"
            >
                <!-- Placeholder for RIC Image/Icon -->
                <div class="text-center">
                    <span class="font-bold text-2xl block mb-2">RIC</span>
                    <span class="text-sm uppercase tracking-wide opacity-75"
                        >Receiver-In-Canal</span
                    >
                </div>
            </div>
            <div class="md:w-2/3">
                <h2 class="text-3xl font-serif font-bold text-slate-900 mb-4">
                    The "Open" Choice (RIC)
                </h2>
                <span
                    class="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6"
                    >Most Popular</span
                >
                <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                    The Receiver-In-Canal (RIC) is the modern standard for a
                    reason. A tiny case sits behind your ear, connected by a
                    near-invisible wire to a speaker in your ear canal.
                </p>
                <p class="text-slate-600 mb-6">
                    Because your ear canal remains open, you hear your own voice
                    naturally and don't feel "plugged up."
                </p>

                <div
                    class="grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl"
                >
                    <div>
                        <h4 class="font-bold text-slate-900 mb-2">Best For:</h4>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li>• Mild to Severe hearing loss</li>
                            <li>• High-frequency loss</li>
                            <li>• First-time users</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-2">
                            Why People Love It:
                        </h4>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li>• Natural sound quality</li>
                            <li>• Rechargeable options</li>
                            <li>• Bluetooth connectivity</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- IIC / Invisible -->
        <div class="flex flex-col md:flex-row gap-12 items-start">
            <div
                class="w-full md:w-1/3 bg-slate-100 rounded-3xl p-8 flex items-center justify-center aspect-square text-slate-700"
            >
                <div class="text-center">
                    <span class="font-bold text-2xl block mb-2">IIC</span>
                    <span class="text-sm uppercase tracking-wide opacity-75"
                        >Invisible-In-Canal</span
                    >
                </div>
            </div>
            <div class="md:w-2/3">
                <h2 class="text-3xl font-serif font-bold text-slate-900 mb-4">
                    The Discreet Choice (IIC)
                </h2>
                <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                    Custom-molded to fit deep inside your ear canal, these are
                    virtually undetectable to others. They use your ear's
                    natural shape to funnel sound.
                </p>

                <div
                    class="grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl"
                >
                    <div>
                        <h4 class="font-bold text-slate-900 mb-2">Best For:</h4>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li>• Mild to Moderate loss</li>
                            <li>• Active lifestyles</li>
                            <li>• Cosmetic priority</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-2">
                            Considerations:
                        </h4>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li>• Uses small batteries (not rechargeable)</li>
                            <li>• Requires good dexterity to handle</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- BTE -->
        <div class="flex flex-col md:flex-row gap-12 items-start">
            <div
                class="w-full md:w-1/3 bg-slate-900 rounded-3xl p-8 flex items-center justify-center aspect-square text-white"
            >
                <div class="text-center">
                    <span class="font-bold text-2xl block mb-2">BTE</span>
                    <span class="text-sm uppercase tracking-wide opacity-75"
                        >Behind-The-Ear</span
                    >
                </div>
            </div>
            <div class="md:w-2/3">
                <h2 class="text-3xl font-serif font-bold text-slate-900 mb-4">
                    The Power Choice (BTE)
                </h2>
                <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                    Robust and powerful. All components sit in a durable case
                    behind the ear, with sound delivered through a custom
                    earmold.
                </p>

                <div
                    class="grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl"
                >
                    <div>
                        <h4 class="font-bold text-slate-900 mb-2">Best For:</h4>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li>• Severe to Profound loss</li>
                            <li>• Children (durable / adaptable)</li>
                            <li>• Issues with ear wax or moisture</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 mb-2">
                            Why People Love It:
                        </h4>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li>• Maximum volume & battery life</li>
                            <li>• Very easy to handle & clean</li>
                            <li>• Robust reliability</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="py-24 bg-slate-50 text-center border-t border-slate-200">
    <div class="content-container">
        <h2 class="text-3xl font-serif font-bold text-slate-900 mb-6">
            Not sure which one?
        </h2>
        <p class="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            You don't have to decide now. We can let you hold, feel, and listen
            to the differences during your appointment.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="{base}/book" class="btn-primary">Schedule a Fitting</a>
            <a href="{base}/hearing-aids/reality" class="btn-secondary"
                >Read Myths vs Reality</a
            >
        </div>
    </div>
</section>
