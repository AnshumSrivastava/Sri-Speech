<script>
    import { onMount } from "svelte";
    import { fade, fly, scale } from "svelte/transition";

    let isOpen = false;
    let isMobile = false;

    onMount(() => {
        // Simple check for mobile device
        isMobile =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent,
            ) || window.innerWidth < 768;
    });

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<div
    class="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100] flex flex-col items-center gap-4"
>
    <!-- Options (Animate in when open) -->
    {#if isOpen}
        <!-- Secondary Option: Call or Email -->
        <a
            href={isMobile ? "tel:+919417780505" : "mailto:bvimlesh@gmail.com"}
            transition:scale={{ duration: 200, delay: 100 }}
            class="w-12 h-12 rounded-full bg-white text-stone-700 shadow-lg flex items-center justify-center hover:bg-stone-50 transition-colors"
            aria-label={isMobile ? "Call Us" : "Email Us"}
        >
            {#if isMobile}
                <!-- Phone Icon -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                </svg>
            {:else}
                <!-- Mail Icon -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            {/if}
        </a>

        <!-- Google Maps Option -->
        <a
            href="https://www.google.com/maps/dir//Sri+Speech+Hearing+AID+Centre+-+Hearing+Aid+Near+me+-+Rechargeable+hearing+aid+-+CIC+digital+hearing+aid.,+SRI+SPEECH+HEARING+AID+CENTRE+WR2R%2B58G+PNB+ATM+Kochar+Market+Road,+ESI+Hospital+Rd,+adj.+PUNJAB+NATIONAL+BANK,+Near+ESI+Hospital,+Model+Gram,+Ludhiana,+Punjab+141001/@30.9449799,75.8185984,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391a83d4f541dc67:0x97a616df873274d5!2m2!1d75.8408125!2d30.9004375?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            transition:scale={{ duration: 200, delay: 50 }}
            class="w-12 h-12 rounded-full bg-white text-stone-700 shadow-lg flex items-center justify-center hover:bg-stone-50 transition-colors"
            aria-label="Get Directions"
        >
            <!-- Location Icon -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        </a>

        <!-- WhatsApp Option -->
        <a
            href="https://wa.me/919417780505"
            target="_blank"
            rel="noopener noreferrer"
            transition:scale={{ duration: 200 }}
            class="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors"
            aria-label="WhatsApp"
        >
            <!-- WhatsApp Icon -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
            </svg>
        </a>
    {/if}

    <!-- Main Toggle Button -->
    <button
        onclick={toggle}
        class="w-14 h-14 rounded-full bg-blue-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all focus:outline-none ring-4 ring-blue-100"
        aria-label="Support Options"
    >
        {#if isOpen}
            <!-- Close Icon (X) -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                transition:scale={{ duration: 200 }}
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        {:else}
            <!-- Support Icon (Chat/Headset) -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                transition:scale={{ duration: 200 }}
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
        {/if}
    </button>
</div>
