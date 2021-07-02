<script>

  export let blogs;
  $: currentBlog = blogs[1];
  $: blogURL = `./blog/${currentBlog.slug}`;
  $: imgURL = `./blog/${currentBlog.slug}.png`


  function rotateFoward() {
    blogs.unshift(blogs.pop());
    blogs = blogs;
  }
  function rotateBackward() {
    blogs.push(blogs.shift());
    blogs = blogs;
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
      <img class="mb-2 rounded-t-lg" src={imgURL} alt="" />
      <div class="bg-white text-black mb-4 p-4">
        <h2 class="text-2xl mb-2 font-rale">{currentBlog.metadata.title}</h2>
        <h3 class="text-xl mb-4 font-quick">{currentBlog.metadata.subtitle}</h3>
        <p class="text-sm mb-2">{currentBlog.metadata.date}</p>
        <div class="">
          <p class="font-dm">
            {currentBlog.metadata.blurb}
            <span
              >...<a class="text-mint" href={blogURL}>continue reading</a
              ></span
            >
          </p>
        </div>
      </div>
      <div class=" flex-1 flex justify-between mt-16">
        <button on:click={rotateBackward} class="p-2"
          ><span>←</span>{blogs[2].metadata.title}</button
        >
        <button on:click={rotateFoward} class="p-2"
          >{blogs[0].metadata.title}<span>→</span></button
        >
      </div>
    </div>
  </div>
</div>

<style>
</style>
