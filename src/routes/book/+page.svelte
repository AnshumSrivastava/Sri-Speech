<script>
    import { base } from "$app/paths";
    import { fade } from "$lib/actions/fade";
</script>

<svelte:head>
    <title>Schedule Care | Sri Speech & Hearing Aid Centre</title>
    <meta
        name="description"
        content="Schedule your professional hearing assessment. A comfortable, patient-first environment for your hearing health."
    />
</svelte:head>

<div class="bg-slate-50 min-h-screen">
    <div class="grid lg:grid-cols-2 min-h-screen">
        <!-- Left: Context & Journey - Visual Reassurance -->
        <div
            class="bg-blue-900 text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden"
        >
            <!-- Gentle Background -->
            <div
                class="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 pointer-events-none opacity-50"
            ></div>
            <div
                class="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse duration-[5s]"
            ></div>

            <div class="relative z-10">
                <a
                    use:fade={{ delay: 100 }}
                    href="{base}/"
                    class="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-12 transition-colors font-medium"
                >
                    &larr; Return Home
                </a>

                <h1
                    use:fade={{ delay: 200 }}
                    class="text-display-large mb-8 text-white"
                >
                    Let's Start a <br /><span class="text-blue-300"
                        >Conversation</span
                    >
                </h1>
                <p
                    use:fade={{ delay: 300 }}
                    class="text-blue-100 text-lg mb-12 leading-relaxed font-sans max-w-md"
                >
                    We know this step takes courage. We are here to make it
                    simple, comfortable, and entirely about you.
                </p>

                <div class="space-y-12">
                    <div use:fade={{ delay: 400 }} class="flex gap-6 group">
                        <div
                            class="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center font-bold text-white shrink-0 shadow-lg shadow-blue-900/50"
                        >
                            1
                        </div>
                        <div>
                            <h3 class="font-bold text-xl mb-2 text-white">
                                We Listen First
                            </h3>
                            <p
                                class="text-blue-200 text-sm leading-relaxed max-w-sm"
                            >
                                Before any testing, we sit down to understand
                                your daily life, your frustrations, and your
                                goals.
                            </p>
                        </div>
                    </div>
                    <div use:fade={{ delay: 500 }} class="flex gap-6 group">
                        <div
                            class="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center font-bold text-white shrink-0"
                        >
                            2
                        </div>
                        <div>
                            <h3 class="font-bold text-xl mb-2 text-white">
                                Clinical Assessment
                            </h3>
                            <p
                                class="text-blue-200 text-sm leading-relaxed max-w-sm"
                            >
                                A gentle, thorough examination of your hearing
                                health using medical-grade diagnostics.
                            </p>
                        </div>
                    </div>
                    <div use:fade={{ delay: 600 }} class="flex gap-6 group">
                        <div
                            class="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center font-bold text-white shrink-0"
                        >
                            3
                        </div>
                        <div>
                            <h3 class="font-bold text-xl mb-2 text-white">
                                Personalized Plan
                            </h3>
                            <p
                                class="text-blue-200 text-sm leading-relaxed max-w-sm"
                            >
                                Honest recommendations tailored to your medical
                                needs and budget. No pressure, ever.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right: Booking Form - Clean & Private -->
        <div class="bg-white p-8 lg:p-24 flex flex-col justify-center">
            <div use:fade={{ delay: 200 }} class="max-w-lg mx-auto w-full">
                <h2 class="font-serif text-3xl text-slate-800 mb-2 font-bold">
                    Schedule Your Care
                </h2>
                <p class="text-slate-500 mb-10">
                    Share your details below. Our patient coordinator will
                    contact you intimately to arrange a time that works for you.
                </p>

                <form class="space-y-8">
                    <div class="space-y-2">
                        <label
                            for="full-name"
                            class="block text-sm font-semibold text-slate-700"
                            >Full Name</label
                        >
                        <input
                            id="full-name"
                            type="text"
                            class="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50 focus:bg-white placeholder:text-slate-400"
                            placeholder="e.g. Aditi Sharma"
                        />
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label
                                for="phone"
                                class="block text-sm font-semibold text-slate-700"
                                >Phone Number</label
                            >
                            <input
                                id="phone"
                                type="tel"
                                class="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50 focus:bg-white placeholder:text-slate-400"
                                placeholder="+91..."
                            />
                            <p class="text-xs text-slate-400 mt-1">
                                We only use this to confirm your appointment.
                            </p>
                        </div>
                        <div class="space-y-2">
                            <label
                                for="time"
                                class="block text-sm font-semibold text-slate-700"
                                >Preferred Time</label
                            >
                            <input
                                id="time"
                                type="text"
                                class="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50 focus:bg-white placeholder:text-slate-400"
                                placeholder="e.g. Morning, After 4 PM"
                            />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label
                            for="topic"
                            class="block text-sm font-semibold text-slate-700"
                            >How can we help?</label
                        >
                        <select
                            id="topic"
                            class="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all bg-slate-50 focus:bg-white text-slate-700"
                        >
                            <option>Hearing Assessment</option>
                            <option>Hearing Aid Consultation</option>
                            <option>Speech Therapy Inquiry</option>
                            <option>Pediatric / Child Assessment</option>
                            <option>Tinnitus (Ringing in Ears)</option>
                            <option>General Inquiry</option>
                        </select>
                    </div>

                    <div class="pt-6">
                        <button
                            class="btn-primary w-full py-4 text-lg shadow-blue-600/20"
                        >
                            Connect with a Specialist
                        </button>
                        <p class="text-center text-xs text-slate-400 mt-6">
                            Secure & Confidential. We respect your medical
                            privacy.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
