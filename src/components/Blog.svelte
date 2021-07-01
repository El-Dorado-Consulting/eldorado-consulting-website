<script>
  let currentBlog = {
    url: "./blog/blog-header.png",
    title: "Tying Shoes",
    subtitle: "Why technical training doesn't need to be terrible",
    date: "March 25th",
    blurb:
      "When I started writing this, I did not expect that tying shoes would so nicely summarise the many challenges facing training technicians. It was amusing to",
  };
</script>

<div class="flex flex-col w-full sm:flex-row ">
  <div class="flex-1 flex justify-center items-center mx-2 ">
    <h1 class="text-3xl mb-8 font-rale bg-white p-4 rounded-lg">Our Thoughts</h1>
  </div>

  <div class="flex-1 flex flex-col justify-center items-center">
    <div class="flex-1 max-w-md bg-white shadow-lg  rounded-lg">
      <img class="mb-2" src={currentBlog.url} alt="" />
      <div class="bg-white text-black mb-4 p-4">
        <h2 class="text-2xl mb-2 font-rale">{currentBlog.title}</h2>
        <h3 class="text-xl mb-4 font-quick">{currentBlog.subtitle}</h3>
        <p class="text-sm mb-2">{currentBlog.date}</p>
        <div class="">
          <p class="font-dm">
            {currentBlog.blurb}
            <span>...<a class="text-mint" href="@">continue reading</a></span>
          </p>
        </div>
      </div>
      <div class=" flex-1 flex justify-between mt-16">
      <div class="p-2"><span>←</span> POST ONE </div>
      <div class="p-2">POST TWO <span>→</span></div>


      </div>
    </div>
  </div>
</div>

<style>
</style>
