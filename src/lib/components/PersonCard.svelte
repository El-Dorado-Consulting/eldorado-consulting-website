<script lang="ts">
  type SocialLinks = {
    email: string,
    phone: string,
    linkedin: string,
    twitter: string
  }
  export let name:string = ''
  export let profileImage: string = ''
  export let description: string = ''
  export let socialLinks: SocialLinks = {
    email: '',
    phone: '',
    linkedin: '',
    twitter: ''
  }
</script>
<div class="mt-4 p-8 rounded-lg border-2 max-w-xl bg-white">
  <div class="flex">
    <div class='flex-1'>
      <img width="200" src={profileImage} alt="">
      <h3 class="mt-4 font-rale font-semibold text-2xl text-graphite-dark ">{name}</h3>
      <div class="flex h-12 items-center">
        <a class='pr-1' href={socialLinks.email}>
          <img width="24" class="opacity-60" src="/icons/email.png" alt="">
        </a>
        <a class="px-1" href={socialLinks.phone}>
          <img width="24" class="opacity-60" src="/icons/phone.png" alt="">
        </a>
        <a class="px-1" href={socialLinks.linkedin}>
          <img width="24" class="opacity-60" src="/icons/linkedin.png" alt="">
        </a>
        <a class="px-1" href={socialLinks.twitter}>
          <img width="24" class="opacity-60" src="/icons/twitter.png" alt="">
        </a>
      </div>
    </div>
    <div class="flex-1 flex items-center">
      <p class="text-graphite text-md">{description}</p>
    </div>
  </div>
</div>