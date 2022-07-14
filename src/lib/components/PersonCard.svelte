<script lang="ts">
  type SocialLinks = {
    email: string;
    phone: string;
    linkedin: string;
    twitter: string;
  };
  export let name: string = "";
  export let profileImage: string = "";
  export let description: string = "";
  export let socialLinks: SocialLinks = {
    email: "",
    phone: "",
    linkedin: "",
    twitter: "",
  };
</script>

<div class="mt-4 p-4 rounded-lg border-2 bg-white customWidth">
  <div class="flex flex-col">
    <img width="200" class="rounded-md" src={profileImage} alt="" />
    <div class="flex items-center mt-4">
      <h3 class="font-rale font-semibold text-2xl text-graphite-dark ">
        {name}
      </h3>
      <div class="flex items-center ml-2 ">
        <a class="pr-1" href={socialLinks.email}>
          <img width="24" class="opacity-60" src="/icons/email.png" alt="" />
        </a>
        <!-- <a class="px-1" href={socialLinks.phone}>
          <img width="24" class="opacity-60" src="/icons/phone.png" alt="" />
        </a> -->
        <a class="px-1" href={socialLinks.linkedin}>
          <img width="24" class="opacity-60" src="/icons/linkedin.png" alt="" />
        </a>
        <!-- <a class="px-1" href={socialLinks.twitter}>
          <img width="24" class="opacity-60" src="/icons/twitter.png" alt="" />
        </a> -->
      </div>
    </div>
    <p class="text-graphite text-md">{description}</p>
  </div>
</div>


<style>

  .customWidth {
    max-width: 360px;
  }



</style>