<script>
  import { base } from "$app/paths";
  let isMenuOpen = false;
</script>

<nav
  class="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200/60 shadow-sm transition-all duration-300"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <!-- Logo -->
      <a href="{base}/" class="flex items-center gap-3 group">
        <!-- Logo Icon -->
        <img
          src="{base}/images/srilogo.svg"
          alt="Sri Speech & Hearing Logo"
          class="w-10 h-10 object-contain"
        />
        <div class="flex flex-col">
          <span
            class="font-serif font-bold text-slate-800 text-lg leading-none tracking-tight group-hover:text-blue-800 transition-colors"
          >
            Sri Speech & Hearing
          </span>
          <span
            class="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5"
          >
            Ludhiana Centre
          </span>
        </div>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-10">
        <a
          href="{base}/"
          class="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-blue-700 transition-colors"
          >Home</a
        >

        <!-- Hearing Aids Dropdown -->
        <div class="relative group">
          <button
            class="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-blue-700 transition-colors focus:outline-none"
          >
            Technology
          </button>
          <div
            class="absolute top-full -left-4 w-72 glass-panel rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 py-4 mt-4"
          >
            <!-- Dropdown Arrow removed for cleaner look or kept subtle -->
            <div
              class="absolute -top-2 left-8 w-4 h-4 bg-white rotate-45 border-l border-t border-slate-100"
            ></div>
            <a
              href="{base}/hearing-aids/styles"
              class="block px-6 py-3 hover:bg-slate-50 transition-colors"
            >
              <span class="block text-slate-900 font-bold text-lg"
                >Styles & Types</span
              >
              <span class="block text-slate-500 text-xs mt-0.5"
                >Invisible, RIC, BTE</span
              >
            </a>
            <a
              href="{base}/hearing-aids/education"
              class="block px-6 py-3 hover:bg-slate-50 transition-colors"
            >
              <span class="block text-slate-900 font-bold text-lg"
                >How It Works</span
              >
              <span class="block text-slate-500 text-xs mt-0.5"
                >The science of hearing</span
              >
            </a>
            <a
              href="{base}/hearing-aids/reality"
              class="block px-6 py-3 hover:bg-slate-50 transition-colors"
            >
              <span class="block text-slate-900 font-bold text-lg"
                >Myths vs Reality</span
              >
              <span class="block text-slate-500 text-xs mt-0.5"
                >Facts you need to know</span
              >
            </a>
          </div>
        </div>

        <!-- Hearing Loss Dropdown -->
        <div class="relative group">
          <button
            class="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-blue-700 transition-colors focus:outline-none"
          >
            Hearing Loss
          </button>
          <div
            class="absolute top-full -left-4 w-72 glass-panel rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 py-4 mt-4"
          >
            <div
              class="absolute -top-2 left-10 w-4 h-4 bg-white rotate-45 border-l border-t border-slate-100"
            ></div>
            <a
              href="{base}/hearing-loss/signs"
              class="block px-6 py-3 hover:bg-slate-50 transition-colors"
            >
              <span class="block text-slate-900 font-bold text-lg"
                >Signs & Symptoms</span
              >
              <span class="block text-slate-500 text-xs mt-0.5"
                >Checklist & early signs</span
              >
            </a>
            <a
              href="{base}/hearing-loss/types"
              class="block px-6 py-3 hover:bg-slate-50 transition-colors"
            >
              <span class="block text-slate-900 font-bold text-lg"
                >Causes & Types</span
              >
              <span class="block text-slate-500 text-xs mt-0.5"
                >Medical understanding</span
              >
            </a>
          </div>
        </div>

        <!-- Specialized Care Dropdown -->
        <div class="relative group">
          <button
            class="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-blue-700 transition-colors focus:outline-none"
          >
            Care
          </button>
          <div
            class="absolute top-full -left-4 w-72 glass-panel rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 py-4 mt-4"
          >
            <div
              class="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-l border-t border-slate-100"
            ></div>
            <a
              href="{base}/speech-therapy"
              class="block px-6 py-3 hover:bg-slate-50 transition-colors"
            >
              <span class="block text-slate-900 font-bold text-lg"
                >Speech Therapy</span
              >
              <span class="block text-slate-900 font-bold text-lg"
                >Speech Therapy</span
              >
              <span class="block text-slate-500 text-xs mt-0.5"
                >Adult & Pediatric</span
              >
            </a>
            <a
              href="{base}/children"
              class="block px-6 py-3 hover:bg-slate-50 transition-colors"
            >
              <span class="block text-slate-900 font-bold text-lg"
                >Pediatric Care</span
              >
              <span class="block text-slate-900 font-bold text-lg"
                >Pediatric Care</span
              >
              <span class="block text-slate-500 text-xs mt-0.5"
                >Milestones & screening</span
              >
            </a>
            <a
              href="{base}/research"
              class="block px-6 py-3 hover:bg-slate-50 transition-colors"
            >
              <span class="block text-slate-900 font-bold text-lg"
                >Clinical Evidence</span
              >
              <span class="block text-slate-900 font-bold text-lg"
                >Clinical Evidence</span
              >
              <span class="block text-slate-500 text-xs mt-0.5"
                >Research-backed care</span
              >
            </a>
          </div>
        </div>

        <a
          href="{base}/articles"
          class="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-blue-700 transition-colors"
          >Articles</a
        >

        <a
          href="{base}/book"
          class="bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-bold shadow-md hover:bg-blue-800 transition-all duration-300"
        >
          Book Appointment
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none transition-colors"
        onclick={() => (isMenuOpen = !isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {#if !isMenuOpen}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          {:else}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div
      class="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl h-screen overflow-y-auto pb-32"
    >
      <div class="px-4 pt-4 pb-6 space-y-2">
        <a
          href="{base}/"
          onclick={() => (isMenuOpen = false)}
          class="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors"
          >Home</a
        >

        <!-- Mobile Hearing Aids Links -->
        <div class="px-4 py-2 bg-slate-50 rounded-2xl space-y-1">
          <span
            class="text-xs font-bold text-slate-400 uppercase tracking-wider pl-3 mb-2 block"
            >Hearing Aids</span
          >
          <a
            href="{base}/hearing-aids/education"
            onclick={() => (isMenuOpen = false)}
            class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm"
            >How Hearing Aids Work</a
          >
          <a
            href="{base}/hearing-aids/styles"
            onclick={() => (isMenuOpen = false)}
            class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm"
            >Styles & Pricing</a
          >
          <a
            href="{base}/hearing-aids/reality"
            onclick={() => (isMenuOpen = false)}
            class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm"
            >Myths & Reality</a
          >
        </div>

        <div class="px-4 py-2 bg-slate-50 rounded-2xl space-y-1">
          <span
            class="text-xs font-bold text-slate-400 uppercase tracking-wider pl-3 mb-2 block"
            >Hearing Loss</span
          >
          <a
            href="{base}/hearing-loss/signs"
            onclick={() => (isMenuOpen = false)}
            class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm"
            >Signs & Symptoms</a
          >
          <a
            href="{base}/hearing-loss/types"
            onclick={() => (isMenuOpen = false)}
            class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm"
            >Causes & Types</a
          >
        </div>

        <div class="px-4 py-2 bg-slate-50 rounded-2xl space-y-1">
          <span
            class="text-xs font-bold text-slate-400 uppercase tracking-wider pl-3 mb-2 block"
            >Specialized Care</span
          >
          <a
            href="{base}/speech-therapy"
            onclick={() => (isMenuOpen = false)}
            class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm"
            >Speech Therapy</a
          >
          <a
            href="{base}/children"
            onclick={() => (isMenuOpen = false)}
            class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm"
            >Pediatric Care</a
          >
          <a
            href="{base}/research"
            onclick={() => (isMenuOpen = false)}
            class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm"
            >Clinical Evidence</a
          >
        </div>

        <a
          href="{base}/articles"
          onclick={() => (isMenuOpen = false)}
          class="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors"
          >Articles</a
        >
        <a
          href="{base}/faq"
          onclick={() => (isMenuOpen = false)}
          class="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors"
          >FAQ</a
        >

        <div class="pt-6 px-4">
          <a
            href="tel:+919417780505"
            class="block w-full text-center px-6 py-4 bg-blue-700 text-white rounded-xl font-bold shadow-md"
            >Call Now</a
          >
          <a
            href="{base}/book"
            class="block w-full text-center px-6 py-4 mt-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold shadow-sm"
            >Book Online</a
          >
        </div>
      </div>
    </div>
  {/if}
</nav>
