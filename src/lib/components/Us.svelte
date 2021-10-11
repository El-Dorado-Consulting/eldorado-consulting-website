<script>
  import {assets } from '$app/paths';
  let erik = `${assets}/erik.png`
  let sarah = `${assets}/sarah.png`
  let thomas = `${assets}/thomas.png`
</script>

<div class=" w-full flex flex-row h-full"> 
    <div class = "flex flex-col items-center w-full">
      <img class="rounded-full w-5/12" src={erik} alt="">
      <p class="mt-4 font-bold">Erik </p>
    </div>
      <img class="rounded-full w-5/12" src={sarah} alt="">
      <p class="mt-4 font-bold">Sarah </p>
    </div>
    <div class = "flex flex-col items-center w-full">
      <img class="rounded-full w-5/12" src={thomas} alt="">
      <p class="mt-4 font-bold">Thomas</p>
</div>

