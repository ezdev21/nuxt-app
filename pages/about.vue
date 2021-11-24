<template>
  <div>
    <p class="tetx-primary text-xl">this app is simple blog</p>
  </div>
</template>
<script>
export default {
 head(){
  return{
   title:"about",
   meta:[
    {
     hid:"about",
     name:"about",
     content:"about us" 
    }
   ]
  }
 },
 data(){
  return{
   x:0
  }
 }
}
</script>