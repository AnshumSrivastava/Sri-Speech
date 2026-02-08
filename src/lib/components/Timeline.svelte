<script>
  let steps = [
    { title: "Order Online", desc: "Select your hearing aid from our online store." },
    { title: "Receive Your Package", desc: "Fast and secure shipping to your doorstep." },
    { title: "Online Call Setup", desc: "We’ll fine-tune your device remotely." }
  ];
</script>

<section class="py-12 bg-gray-100 text-center">
  <h2 class="text-2xl font-bold mb-8">How It Works</h2>
  <div class="flex justify-center gap-8">
    {#each steps as step, i}
      <div class="w-48">
        <div class="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
          {i+1}
        </div>
        <h3 class="mt-4 font-semibold">{step.title}</h3>
        <p class="text-sm text-gray-600">{step.desc}</p>
      </div>
    {/each}
  </div>
</section>
