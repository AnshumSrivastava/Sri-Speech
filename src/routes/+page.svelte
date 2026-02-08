<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { intersection } from "$lib/actions/intersection";
  import SEO from "$lib/components/SEO.svelte";

  // Removed fade/fly in favor of CSS-based Intersection Observer for performance
</script>

<SEO
  title="Professional Audiology Excellence"
  description="Professional-grade hearing care in Ludhiana. Trusted audiologists dedicated to your long-term hearing health and connection."
  keywords="audiologist ludhiana, hearing test, hearing aids, speech therapy, digital hearing aids, cochlear implants"
/>

<!-- SECTION 1: HERO (Trust + Professional Illustration) -->
<section
  class="relative min-h-[85vh] flex items-center bg-[#FAFAF9] overflow-hidden"
>
  <!-- Subtle Ambient Background -->
  <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
    <div
      class="absolute right-0 top-0 w-[50vw] h-[50vw] bg-[#E0F2F1] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"
    ></div>
    <div
      class="absolute left-0 bottom-0 w-[40vw] h-[40vw] bg-[#F4E4C1] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4"
    ></div>
  </div>

  <div
    class="relative z-10 content-container w-full pt-12 md:pt-20 grid md:grid-cols-2 gap-12 items-center"
  >
    <!-- Text Content -->
    <div class="max-w-[600px] animate-on-scroll" use:intersection>
      <span
        class="inline-block py-2 px-4 rounded-full bg-white border border-[#E5E5E5] text-[var(--color-primary)] text-sm font-semibold tracking-wide mb-8 shadow-sm"
      >
        Professional Audiology in Ludhiana
      </span>

      <h1
        class="text-display-huge mb-8 text-[var(--color-text-heading)] leading-[1.1]"
      >
        Restoring connection through <span class="text-[var(--color-primary)]"
          >clinical expertise.</span
        >
      </h1>

      <p
        class="text-body-large text-[var(--color-text-main)] mb-12 max-w-[540px]"
      >
        Hearing loss is a personal journey, not just a volume issue. We provide
        experienced care designed to help you engage fully with life again.
      </p>

      <div class="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <a href="{base}/book" class="btn-primary shadow-lg shadow-[#0F4C5C]/10">
          Talk to a Hearing Expert
        </a>
        <a
          href="{base}/hearing-check"
          class="text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-light)] transition-colors flex items-center gap-2 group"
        >
          Check Your Hearing
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4 group-hover:translate-x-1 transition-transform"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Hero Illustration (Realistic Consultation) -->
    <div
      class="relative hidden md:block animate-on-scroll delay-200"
      use:intersection
    >
      <div class="animate-float">
        <img
          src="{base}/images/hero_realistic.png"
          alt="Audiologist consulting with a patient in a professional setting"
          class="w-full h-auto drop-shadow-2xl rounded-3xl mix-blend-multiply"
        />
      </div>
    </div>
  </div>
</section>

<!-- SECTION 2: HUMAN PROBLEM STATEMENT (Family Focus) -->
<section class="py-32 bg-white">
  <div class="content-container grid md:grid-cols-2 gap-16 items-center">
    <div class="order-2 md:order-1 animate-on-scroll" use:intersection>
      <img
        src="{base}/images/family_connection.png"
        alt="Senior couple enjoying a conversation"
        class="w-full h-auto rounded-2xl shadow-lg"
      />
    </div>

    <div
      class="order-1 md:order-2 max-w-[600px] animate-on-scroll delay-100"
      use:intersection
    >
      <h2 class="text-display-medium mb-10 text-[var(--color-text-heading)]">
        It often starts with a whisper you miss.
      </h2>

      <div class="space-y-8 text-body-large text-[var(--color-text-main)]">
        <p>
          Hearing loss rarely happens all at once. It creeps in slowly—a missed
          punchline at dinner, the need to turn up the TV, or the exhaustion
          that comes from straining to follow a conversation in a crowded room.
        </p>
        <p>
          Over time, these small moments add up. You might find yourself
          withdrawing from social gatherings, not because you don't want to be
          there, but because it’s simply too tiring to keep up.
        </p>
        <p class="font-medium text-[var(--color-primary)]">
          You are not alone, and this is not a permanent state. With<br
            class="hidden md:block"
          />
          expert intervention, clarity can be restored.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 3: WHY HEARING MATTERS (Context & Depth) -->
<section class="py-32 bg-[#FAFAF9] border-t border-[var(--color-border)]">
  <div class="content-container">
    <div class="mb-20 animate-on-scroll" use:intersection>
      <h2 class="text-display-medium mb-6 text-[var(--color-text-heading)]">
        Hearing is your connection to the world.
      </h2>
      <p class="text-body-large max-w-[720px]">
        When we treat hearing loss, we aren't just amplifying sound. We are
        reducing cognitive load and preserving your ability to engage with those
        who matter most.
      </p>
    </div>

    <div
      class="grid md:grid-cols-3 gap-12 sm:divide-x divide-[var(--color-border)]"
    >
      <!-- Subsection 1 -->
      <div class="pr-6 animate-on-scroll delay-100" use:intersection>
        <div
          class="mb-6 w-16 h-16 bg-[#E0F2F1] rounded-2xl flex items-center justify-center text-[var(--color-primary)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            /></svg
          >
        </div>
        <h3 class="text-xl font-bold text-[var(--color-text-heading)] mb-4">
          Effortless Communication
        </h3>
        <p class="text-body-base text-[var(--color-text-main)]">
          Follow conversations in noisy restaurants without strain. Understand
          soft voices without asking for repetition.
        </p>
      </div>

      <!-- Subsection 2 -->
      <div class="md:px-6 animate-on-scroll delay-200" use:intersection>
        <div
          class="mb-6 w-16 h-16 bg-[#FFF8E1] rounded-2xl flex items-center justify-center text-amber-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            /></svg
          >
        </div>
        <h3 class="text-xl font-bold text-[var(--color-text-heading)] mb-4">
          Cognitive Health
        </h3>
        <p class="text-body-base text-[var(--color-text-main)]">
          Untreated hearing loss forces your brain to work harder, leaving less
          energy for memory. Early intervention protects brain health.
        </p>
      </div>

      <!-- Subsection 3 -->
      <div class="md:pl-6 animate-on-scroll delay-300" use:intersection>
        <div
          class="mb-6 w-16 h-16 bg-[#F3E5F5] rounded-2xl flex items-center justify-center text-purple-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            /></svg
          >
        </div>
        <h3 class="text-xl font-bold text-[var(--color-text-heading)] mb-4">
          Deepening Relationships
        </h3>
        <p class="text-body-base text-[var(--color-text-main)]">
          True intimacy relies on catching the nuance in a tone of voice. Don't
          let hearing loss create an invisible barrier.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 4: PROFESSIONAL & SCIENTIFIC LEGITIMACY -->
<section class="py-32 bg-white">
  <div class="content-container">
    <div class="max-w-[720px] mb-20 animate-on-scroll" use:intersection>
      <h2 class="text-display-medium mb-6 text-[var(--color-text-heading)]">
        Evidence-based care, grounded in science.
      </h2>
      <p class="text-body-large">
        We adhere to global gold standards in audiology. Our approach is
        precise, systematic, and verified by objective outcomes.
      </p>
    </div>

    <!-- Illustrated Services Preview -->
    <div class="grid md:grid-cols-3 gap-8 mb-16">
      <div class="group animate-on-scroll delay-100" use:intersection>
        <div class="mb-6 overflow-hidden rounded-2xl">
          <img
            src="{base}/images/service_test_realistic.png"
            alt="Hearing Test"
            class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
          />
        </div>
        <h4 class="text-lg font-bold">Comprehensive Assessment</h4>
      </div>
      <div class="group animate-on-scroll delay-200" use:intersection>
        <div class="mb-6 overflow-hidden rounded-2xl">
          <img
            src="{base}/images/service_fitting_realistic.png"
            alt="Device Fitting"
            class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
          />
        </div>
        <h4 class="text-lg font-bold">Precise Fitting</h4>
      </div>
      <div class="group animate-on-scroll delay-300" use:intersection>
        <div class="mb-6 overflow-hidden rounded-2xl">
          <!-- Reusing Fitting/Hero or generic generic placeholder since quota limit reached for 'Care' image. 
                Using family_realistic to denote 'Care' & 'Connection' for now as it fits the theme better than nothing. -->
          <img
            src="{base}/images/family_realistic.png"
            alt="Speech Therapy and Care"
            class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
          />
        </div>
        <h4 class="text-lg font-bold">Rehabilitation & Care</h4>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Credibility Block 1 -->
      <div
        class="card-medical border border-[#E5E5E5] bg-[#FAFAF9]/50 animate-on-scroll"
        use:intersection
      >
        <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
          Research-Driven
        </h4>
        <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
          Protocols adapted from leading global research institutes.
        </p>
      </div>

      <!-- Credibility Block 2 -->
      <div
        class="card-medical border border-[#E5E5E5] bg-[#FAFAF9]/50 animate-on-scroll delay-100"
        use:intersection
      >
        <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
          Expert Audiologists
        </h4>
        <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
          Board-certified professionals with years of specialized experience.
        </p>
      </div>

      <!-- Credibility Block 3 -->
      <div
        class="card-medical border border-[#E5E5E5] bg-[#FAFAF9]/50 animate-on-scroll delay-200"
        use:intersection
      >
        <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
          Real-Ear Measures
        </h4>
        <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
          We verify every fitting with objective in-ear measurements.
        </p>
      </div>

      <!-- Credibility Block 4 -->
      <div
        class="card-medical border border-[#E5E5E5] bg-[#FAFAF9]/50 animate-on-scroll delay-300"
        use:intersection
      >
        <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
          Global Standards
        </h4>
        <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
          Technology from world leaders like Oticon, Phonak, and Signia.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 5: HEARING SOLUTIONS (Not Product Cards) -->
<section class="py-32 bg-[#FAFAF9] border-t border-[var(--color-border)]">
  <div class="content-container">
    <div class="max-w-[720px] mb-20 animate-on-scroll" use:intersection>
      <h2 class="text-display-medium mb-6 text-[var(--color-text-heading)]">
        Modern solutions, tailored to your life.
      </h2>
      <p class="text-body-large">
        We move beyond "one-size-fits-all." Your solution is customized to your
        unique ear anatomy, lifestyle needs, and cosmetic preferences.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
      <!-- Solution 1 -->
      <div class="animate-on-scroll" use:intersection>
        <h4 class="text-xl font-bold text-[var(--color-text-heading)] mb-3">
          Personalized Precision
        </h4>
        <p class="text-body-base text-[var(--color-text-main)] mb-4">
          Using Real-Ear Measurement, we program devices to match your exact
          hearing prescription, ensuring natural sound quality from day one.
        </p>
        <a
          href="{base}/hearing-aids/types"
          class="text-[var(--color-primary)] font-medium text-sm hover:underline"
          >Learn about our fitting process &rarr;</a
        >
      </div>

      <!-- Solution 2 -->
      <div class="animate-on-scroll delay-100" use:intersection>
        <h4 class="text-xl font-bold text-[var(--color-text-heading)] mb-3">
          Adaptive Sound Processing
        </h4>
        <p class="text-body-base text-[var(--color-text-main)] mb-4">
          Intelligent microphones scan your environment 500 times per second,
          automatically reducing noise and sharpening speech.
        </p>
        <a
          href="{base}/technology"
          class="text-[var(--color-primary)] font-medium text-sm hover:underline"
          >Explore technology &rarr;</a
        >
      </div>

      <!-- Solution 3 -->
      <div class="animate-on-scroll delay-200" use:intersection>
        <h4 class="text-xl font-bold text-[var(--color-text-heading)] mb-3">
          Seamless Connectivity
        </h4>
        <p class="text-body-base text-[var(--color-text-main)] mb-4">
          Stream phone calls, music, and TV directly to your hearing aids.
          Adjust volume and settings discreetly via your smartphone.
        </p>
        <a
          href="{base}/connectivity"
          class="text-[var(--color-primary)] font-medium text-sm hover:underline"
          >See compatibility &rarr;</a
        >
      </div>

      <!-- Solution 4 -->
      <div class="animate-on-scroll" use:intersection>
        <h4 class="text-xl font-bold text-[var(--color-text-heading)] mb-3">
          Comfort & Discretion
        </h4>
        <p class="text-body-base text-[var(--color-text-main)] mb-4">
          From invisible-in-canal models to sleek behind-the-ear designs, we
          prioritize physical comfort and aesthetic confidence.
        </p>
        <a
          href="{base}/hearing-aids/styles"
          class="text-[var(--color-primary)] font-medium text-sm hover:underline"
          >View styles &rarr;</a
        >
      </div>

      <!-- Solution 5 -->
      <div class="animate-on-scroll delay-100" use:intersection>
        <h4 class="text-xl font-bold text-[var(--color-text-heading)] mb-3">
          Long-Term Care
        </h4>
        <p class="text-body-base text-[var(--color-text-main)] mb-4">
          Hearing changes over time. Our relationship continues with regular
          check-ups, recalibrations, and cleaning services.
        </p>
        <a
          href="{base}/care"
          class="text-[var(--color-primary)] font-medium text-sm hover:underline"
          >Our care promise &rarr;</a
        >
      </div>
    </div>
  </div>
</section>

<!-- SECTION 6: SPEECH & COMMUNICATION CARE -->
<section class="py-32 bg-[#F4E4C1]/20">
  <div class="content-container">
    <div class="max-w-[720px] mb-16 animate-on-scroll" use:intersection>
      <h2 class="text-display-medium mb-6 text-[var(--color-text-heading)]">
        Beyond hearing: Understanding.
      </h2>
      <p class="text-body-large">
        Hearing is the detection of sound. Understanding is the brain's ability
        to make sense of it. Our speech therapy services bridge that gap.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <div
        class="card-medical bg-white border-transparent shadow-sm animate-on-scroll delay-100"
        use:intersection
      >
        <h3 class="text-2xl font-bold text-[var(--color-text-heading)] mb-4">
          For Children
        </h3>
        <p class="text-body-base text-[var(--color-text-main)] mb-6">
          Early intervention is critical for language development. We treat
          articulation disorders, stuttering, and delayed speech to ensure your
          child finds their voice.
        </p>
        <ul class="space-y-3 mb-8 text-sm text-[var(--color-text-main)]">
          <li class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
            ></span>
            Articulation & Phonological Therapy
          </li>
          <li class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
            ></span>
            Fluency Disorders (Stuttering)
          </li>
          <li class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
            ></span>
            Language Delay Intervention
          </li>
        </ul>
        <a
          href="{base}/speech-therapy/children"
          class="btn-secondary inline-block">Pediatric Care</a
        >
      </div>

      <div
        class="card-medical bg-white border-transparent shadow-sm animate-on-scroll delay-200"
        use:intersection
      >
        <h3 class="text-2xl font-bold text-[var(--color-text-heading)] mb-4">
          For Adults
        </h3>
        <p class="text-body-base text-[var(--color-text-main)] mb-6">
          Whether recovering from a stroke or adjusting to new hearing aids, our
          auditory rehabilitation helps retrain your brain to interpret sound
          and speak with confidence.
        </p>
        <ul class="space-y-3 mb-8 text-sm text-[var(--color-text-main)]">
          <li class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
            ></span>
            Post-Stroke Aphasia Therapy
          </li>
          <li class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
            ></span>
            Auditory Training (Listening Skills)
          </li>
          <li class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
            ></span>
            Voice Therapy
          </li>
        </ul>
        <a
          href="{base}/speech-therapy/adults"
          class="btn-secondary inline-block">Adult Therapy</a
        >
      </div>
    </div>
  </div>
</section>

<!-- SECTION 7: CARE JOURNEY (Process Transparency) -->
<section class="py-32 bg-white">
  <div class="content-container">
    <div
      class="max-w-[720px] mb-20 text-center mx-auto animate-on-scroll"
      use:intersection
    >
      <h2 class="text-display-medium mb-6 text-[var(--color-text-heading)]">
        Your path to clearer hearing.
      </h2>
      <p class="text-body-large">
        We believe in transparency. Here is exactly what you can expect when you
        visit us.
      </p>
      <img
        src="{base}/images/process_timeline.png"
        alt="Patient Care Journey Steps"
        class="w-full h-auto mt-12 rounded-xl shadow-sm"
      />
    </div>

    <!-- Timeline Container -->
    <div class="relative">
      <!-- Horizontal Line (Desktop) -->
      <div
        class="hidden md:block absolute top-[24px] left-0 right-0 h-[2px] bg-[#E5E5E5] z-0"
      ></div>

      <div class="grid md:grid-cols-4 gap-8">
        <!-- Step 1 -->
        <div
          class="relative z-10 md:text-center flex md:block gap-6 items-start animate-on-scroll"
          use:intersection
        >
          <div
            class="w-12 h-12 rounded-full bg-[var(--color-background)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold flex items-center justify-center shrink-0 mx-auto"
          >
            1
          </div>
          <div class="pt-0 md:pt-8 text-left md:text-center">
            <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
              Assessment
            </h4>
            <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
              A comprehensive audiometric evaluation in our sound-treated centre
              to map your hearing thresholds.
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div
          class="relative z-10 md:text-center flex md:block gap-6 items-start animate-on-scroll delay-100"
          use:intersection
        >
          <div
            class="w-12 h-12 rounded-full bg-[var(--color-background)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold flex items-center justify-center shrink-0 mx-auto"
          >
            2
          </div>
          <div class="pt-0 md:pt-8 text-left md:text-center">
            <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
              Personal Plan
            </h4>
            <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
              We review your results together and design a treatment plan that
              fits your lifestyle and budget.
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div
          class="relative z-10 md:text-center flex md:block gap-6 items-start animate-on-scroll delay-200"
          use:intersection
        >
          <div
            class="w-12 h-12 rounded-full bg-[var(--color-background)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold flex items-center justify-center shrink-0 mx-auto"
          >
            3
          </div>
          <div class="pt-0 md:pt-8 text-left md:text-center">
            <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
              Fitting
            </h4>
            <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
              Calibration using Real-Ear Measures to ensure the device enhances
              speech exactly as prescribed.
            </p>
          </div>
        </div>

        <!-- Step 4 -->
        <div
          class="relative z-10 md:text-center flex md:block gap-6 items-start animate-on-scroll delay-300"
          use:intersection
        >
          <div
            class="w-12 h-12 rounded-full bg-[var(--color-background)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold flex items-center justify-center shrink-0 mx-auto"
          >
            4
          </div>
          <div class="pt-0 md:pt-8 text-left md:text-center">
            <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
              Therapy & Care
            </h4>
            <p class="text-sm text-[var(--color-text-main)] leading-relaxed">
              We don't just hand you a device. We provide rehabilitation to help
              your brain adapt to new sounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 8: WHO WE HELP -->
<section class="py-32 bg-[#FAFAF9] border-t border-[var(--color-border)]">
  <div class="content-container">
    <div class="max-w-[720px] mb-20 animate-on-scroll" use:intersection>
      <h2 class="text-display-medium mb-6 text-[var(--color-text-heading)]">
        Dedicated care for every stage of life.
      </h2>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Group 1 -->
      <div
        class="card-medical bg-white border border-[#E5E5E5] hover:border-[var(--color-primary)] transition-colors duration-300 animate-on-scroll"
        use:intersection
      >
        <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
          Adults
        </h4>
        <p class="text-sm text-[var(--color-text-main)] mb-0">
          Experiencing gradual hearing loss? We look for discreet solutions that
          keep you active in your career and social life.
        </p>
      </div>

      <!-- Group 2 -->
      <div
        class="card-medical bg-white border border-[#E5E5E5] hover:border-[var(--color-primary)] transition-colors duration-300"
      >
        <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
          Seniors
        </h4>
        <p class="text-sm text-[var(--color-text-main)] mb-0">
          Stay connected to family. We focus on comfort, ease of use, and
          clarity for television and phone conversations.
        </p>
      </div>

      <!-- Group 3 -->
      <div
        class="card-medical bg-white border border-[#E5E5E5] hover:border-[var(--color-primary)] transition-colors duration-300"
      >
        <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
          Parents
        </h4>
        <p class="text-sm text-[var(--color-text-main)] mb-0">
          Worried about your child's speech? We provide gentle, play-based
          therapy and pediatric hearing assessments.
        </p>
      </div>

      <!-- Group 4 -->
      <div
        class="card-medical bg-white border border-[#E5E5E5] hover:border-[var(--color-primary)] transition-colors duration-300"
      >
        <h4 class="text-lg font-bold text-[var(--color-text-heading)] mb-2">
          Caregivers
        </h4>
        <p class="text-sm text-[var(--color-text-main)] mb-0">
          Supporting a loved one? We offer guidance on how to communicate
          effectively and manage hearing devices.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 9: FAQ PREVIEW (Reassurance) -->
<section class="py-32 bg-white">
  <div class="content-container max-w-[800px]">
    <h2
      class="text-display-medium mb-12 text-center text-[var(--color-text-heading)]"
    >
      Common questions. Honest answers.
    </h2>

    <div class="space-y-6">
      <details
        class="group bg-[#FAFAF9] rounded-xl open:bg-white open:shadow-sm border border-transparent open:border-[#E5E5E5] transition-all duration-300"
      >
        <summary
          class="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-[var(--color-text-heading)]"
        >
          Is it too early for hearing aids?
          <span
            class="text-[var(--color-primary)] transition-transform group-open:rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              /></svg
            >
          </span>
        </summary>
        <div class="px-6 pb-6 text-body-base text-[var(--color-text-main)]">
          On average, people wait 7 years to treat hearing loss. Study after
          study confirms: earlier intervention preserves cognitive function and
          makes the adaptation process significantly easier. If you are noticing
          changes, it is the right time to check.
        </div>
      </details>

      <details
        class="group bg-[#FAFAF9] rounded-xl open:bg-white open:shadow-sm border border-transparent open:border-[#E5E5E5] transition-all duration-300"
      >
        <summary
          class="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-[var(--color-text-heading)]"
        >
          Will it feel natural?
          <span
            class="text-[var(--color-primary)] transition-transform group-open:rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              /></svg
            >
          </span>
        </summary>
        <div class="px-6 pb-6 text-body-base text-[var(--color-text-main)]">
          Modern devices are vastly different from those of the past. When
          programmed correctly using Real-Ear Measures (which we always do),
          they sound open and natural, not "boomy" or metallic.
        </div>
      </details>

      <details
        class="group bg-[#FAFAF9] rounded-xl open:bg-white open:shadow-sm border border-transparent open:border-[#E5E5E5] transition-all duration-300"
      >
        <summary
          class="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-[var(--color-text-heading)]"
        >
          Do children need lifelong therapy?
          <span
            class="text-[var(--color-primary)] transition-transform group-open:rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              /></svg
            >
          </span>
        </summary>
        <div class="px-6 pb-6 text-body-base text-[var(--color-text-main)]">
          Not necessarily. Our goal is graduation, not dependency. Many children
          who receive early intervention for speech delays catch up to their
          peers and no longer require services.
        </div>
      </details>

      <details
        class="group bg-[#FAFAF9] rounded-xl open:bg-white open:shadow-sm border border-transparent open:border-[#E5E5E5] transition-all duration-300"
      >
        <summary
          class="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-[var(--color-text-heading)]"
        >
          What happens after the first visit?
          <span
            class="text-[var(--color-primary)] transition-transform group-open:rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              /></svg
            >
          </span>
        </summary>
        <div class="px-6 pb-6 text-body-base text-[var(--color-text-main)]">
          You will receive a comprehensive report. If treatment is recommended,
          we discuss options. There is never pressure to decide on the spot. We
          encourage you to take the information home and discuss it with family.
        </div>
      </details>
    </div>
  </div>
</section>

<!-- SECTION 10: CONVERSION -->
<section class="py-32 bg-[#FAFAF9] relative overflow-hidden">
  <!-- Abstract Silhouette Background -->
  <div
    class="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-center items-center"
  >
    <img
      src="{base}/images/review_silhouettes.png"
      alt=""
      class="w-full max-w-[1000px] object-cover"
    />
  </div>

  <div
    class="content-container text-center relative z-10 animate-on-scroll"
    use:intersection
  >
    <div class="mb-8 flex justify-center animate-float">
      <!-- Hand illustration removed as requested for cleanliness/lack of realistic asset -->
    </div>

    <h2 class="text-display-medium text-[var(--color-text-heading)] mb-6">
      Let's start a conversation.
    </h2>
    <p class="text-body-large mb-10 max-w-[600px] mx-auto">
      You have questions? We have time. Schedule a free chat with our experts to
      discuss your hearing health—no obligation, just clarity.
    </p>
    <a
      href="{base}/book"
      class="btn-primary inline-flex items-center gap-2 text-lg px-10 py-5 shadow-xl shadow-[var(--color-primary)]/10"
    >
      Talk With Our Hearing Experts
    </a>
    <p class="mt-6 text-sm text-[var(--color-text-main)] opacity-80">
      <span class="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span> Available
      Mon-Sat, 9am - 7pm
    </p>
  </div>
</section>
