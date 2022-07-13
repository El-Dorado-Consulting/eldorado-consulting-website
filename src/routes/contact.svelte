<script>
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";


</script>

 <Nav/>

<div class="flex flex-col sm:flex-row w-full my-8 h-screen max-w-6xl mx-auto mt-16 font-source text-graphite">
  <div class="flex-1 flex flex-col px-4 w-full">
    <div class="max-w-xl">
      <h1 class="text-4xl mb-16 sm:mb-4 font-rale text-graphite-dark">Contact Us</h1>
      <h2 class="sm:text-xl text-lg font-quick mb-8">
        Every company is unique! Schedule a one-hour session with us to understand where we can help elevate your operation.
      </h2>
    </div>
  </div>
  <div class="flex-1 px-4 w-full">
    <form 
      class="flex flex-col w-full"
      action="https://formspree.io/f/xjvpoebg"
      method="POST"
      >
      <input
        class="p-2 mb-2 bg-gray-50 rounded focus:outline-none"
        type="text"
        name="user_name"
        placeholder="Name"
      />
      <input
        class="p-2 mb-2 bg-gray-50 rounded focus:outline-none "
        type="email"
        name="user_email"
        placeholder="Email"
      />
      <input
        class="p-2 mb-2 bg-gray-50 rounded focus:outline-none"
        type="text"
        name="user_subject"
        placeholder="Subject"
      />
      <textarea
        class="p-2 mb-2 bg-gray-50 rounded-lg focus:outline-none"
        rows="4"
        name="user_message"
        placeholder="Your Message"
      />
      <input class="bg-mustard rounded text-white p-2" type="submit" value="Submit" />
    </form>
  </div>
</div>

<Footer/>

<style>

</style>