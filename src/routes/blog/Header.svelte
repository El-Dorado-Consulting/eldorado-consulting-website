<script>
import logo from "./../../../static/logo-v2.png"
import logoSmall from "./../../../static/logo-v2-small.png"

console.log(logo)
</script>
  <header class="fixed top-0 z-10 bg-mustard flex w-full h-24 justify-between px-4">
    <div class="flex items-center">
      <a href="../."><img class= "max-h-16 hidden sm:block" src={logo} alt="logo" /></a>
      <a href="../."><img class= "max-h-16 block sm:hidden" src={logoSmall} alt="logo" /></a>
    </div>

    <nav class ="flex items-center invisible">
      <a href="@" class="text-white mx-1">About</a>
      <a href="@" class="text-white mx-1">Services</a>
      <a href="@" class="text-white mx-1">Blog</a>
      <a href="@" class="text-white mx-1">Contact</a>
    </nav>
  </header>

<style>
</style>

