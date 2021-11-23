<template>
  <div>
    <p>{{x}}</p>
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