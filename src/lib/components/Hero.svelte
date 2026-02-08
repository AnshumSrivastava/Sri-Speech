<script>
  export let onTest;
  export let onOrder;
</script>

<section class="flex flex-col items-center text-center py-16 bg-gray-50">
  <img src="{base}/hearing-aid.png" alt="Hearing Aid" class="w-64 mb-6" />
  <div class="space-x-4">
    <button on:click={onTest} class="px-6 py-3 bg-blue-600 text-white rounded-lg">
      Test Your Hearing
    </button>
    <button on:click={onOrder} class="px-6 py-3 bg-green-600 text-white rounded-lg">
      Order Your Hearing Aid
    </button>
  </div>
  <!-- Ticker -->
  <div class="mt-8 w-full overflow-hidden">
    <div class="animate-marquee whitespace-nowrap">
      <span class="mx-4">Company A</span>
      <span class="mx-4">Company B</span>
      <span class="mx-4">Company C</span>
      <span class="mx-4">Company D</span>
    </div>
  </div>
</section>

<style>
  .animate-marquee {
    display: inline-block;
    animation: marquee 15s linear infinite;
  }
  @keyframes marquee {
    from { transform: translateX(100%); }
    to { transform: translateX(-100%); }
  }
</style>
