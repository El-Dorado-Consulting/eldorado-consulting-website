<script>
  export let blogs;
  let image
  console.log("Blogs", blogs);
 
  let i = 0
  $: currentBlog = blogs[i];
  $: currentURL = `./blog/${currentBlog.slug}`

  function nextBlog() {
    i ++
  }
  function previousBlog() {
    i --
  }
</script>

<div class="flex flex-col w-full sm:flex-row ">
  <div class="flex-1 flex justify-center items-center mx-2 ">
    <h1 class="text-3xl mb-8 font-rale bg-white p-4 rounded-lg">
      Our Thoughts
    </h1>
  </div>

  <div class="flex-1 flex flex-col justify-center items-center">
    <div class="flex-1 max-w-md bg-white shadow-xl  rounded-lg">
      <img class="mb-2" src={image} alt="" />
      <div class="bg-white text-black mb-4 p-4">
        <h2 class="text-2xl mb-2 font-rale">{currentBlog.metadata.title}</h2>
        <h3 class="text-xl mb-4 font-quick">{currentBlog.metadata.subtitle}</h3>
        <p class="text-sm mb-2">{currentBlog.metadata.date}</p>
        <div class="">
          <p class="font-dm">
            {currentBlog.metadata.blurb}
            <span>...<a class="text-mint" href={currentURL}>continue reading</a></span>
          </p>
        </div>
      </div>
      <div class=" flex-1 flex justify-between mt-16">
        <button on:click={previousBlog} class="p-2"><span>←</span>{blogs[1].metadata.title}</button>
        <button on:click={nextBlog} class="p-2">{blogs[0].metadata.title}<span>→</span></button>
      </div>
    </div>
  </div>
</div>

<style>
</style>
