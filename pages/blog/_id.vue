<template>
  <div class="p-2 m-2 bg-white">
   <h1 class="text-2xl mb-2 border-b-2 border-gray-300">{{post.title}}</h1>
   <p class="text-xl">{{post.content}}</p>
   <comments :id="id"/>
  </div>
</template>
<script>
export default {
 data(){
  return{
   id:'',
   post:{}
  }
 },
 mounted(){
  this.id=this.$route.params.id;
  axios.get(`/blog/${this.id}`)
  .then(res=>{
   this.post=res.data;
  })
 }
}
</script>