<script>
  let currentBlog = {
    url: "./blog/blog-header.png",
    title: "Tying Shoes: Why technical training doesn't need to be terrible",
    date: "March 25th",
    blurb:
      "When I started writing this, I did not expect that tying shoes would so nicely summarise the many challenges facing training technicians. It was amusing to",
  };
</script>

<div class="flex flex-col sm:flex-row ">
  <div class="flex-1 flex justify-center items-center mx-2">
    <h1 class="text-3xl">Our Thoughts</h1>
  </div>
  <div class="flex-1 flex flex-col justify-center items-center mx-2">
    <div class="bg-white text-black mb-4">
      <img class="mb-2" src={currentBlog.url} alt="" />
      <h2 class="text-xl mb-2">{currentBlog.title}</h2>
      <p class="text-sm">{currentBlog.date}</p>
      <div class="">
        <p>
          {currentBlog.blurb}
          <span>...<a class="text-mint" href="@">Continue Reading</a></span>
        </p>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex items-center">
        <p class=" mr-2 w-24">March 25th</p>
        <div class="text-lg">
          Trash Pandas: What racoons can teach us about data collection
        </div>
      </div>
      <div class="flex items-center">
        <p class=" mr-2 w-24">March 25th</p>
        <div class="text-lg">
          Trash Pandas: What racoons can teach us about data collection
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
