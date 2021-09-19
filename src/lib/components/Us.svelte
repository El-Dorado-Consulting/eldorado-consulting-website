<script>
  import {assets } from '$app/paths';
  let erik = `${assets}/erik-headshot.png`
  let sarah = `${assets}/sarah-headshot.png`
  let thomas = `${assets}/thomas-headshot.png`
</script>



<div class=" w-full flex flex-row justify-between h-full"> 
    <div class = "flex flex-col items-center">
      <img class="rounded-full w-5/12" src={erik} alt="">
      <p class="mt-4">Erik </p>
    </div>
    <div class = "flex flex-col items-center">
      <img class="rounded-full w-5/12" src={sarah} alt="">
      <p class="mt-4">Sarah </p>
    </div>
    <div class = "flex flex-col items-center">
      <img class="rounded-full w-5/12" src={thomas} alt="">
      <p class="mt-4">Thomas</p>
    </div>

  </div>

