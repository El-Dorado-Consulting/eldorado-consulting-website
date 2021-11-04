<script>
  import {assets } from '$app/paths';
  let erik = `${assets}/erik.png`
  let sarah = `${assets}/sarah.png`
  let thomas = `${assets}/thomas.png`
</script>

<div class=" w-full flex flex-row h-full text-sm"> 
    <div class = "flex-1 flex flex-col items-center w-full p-4">
      <img class=" rounded-full " src={erik} alt="">
      <p class="mt-4 font-bold">Erik </p>
    </div>
    <div class = "flex-1 flex flex-col items-center w-full p-4">
      <img class="rounded-full " src={sarah} alt="">
      <p class="mt-4 font-bold">Sarah </p>
    </div>
    <div class = "flex-1 flex flex-col items-center w-full p-4">
      <img class="rounded-full " src={thomas} alt="">
      <p class="mt-4 font-bold">Thomas</p>
    </div>
  </div>

