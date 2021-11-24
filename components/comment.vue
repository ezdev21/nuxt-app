<template>
  <div class="mt-2">
   <div v-for="comment in comments" :key="comment">
     <p class="text-xl">{{comment.body}}</p>
   </div>
  </div>
</template>
<script>
export default {
 props:['id'],
 data(){
  return{
   comments:[]
  }
 },
 mounted(){
  axios.get(`blog/${id}comments`)
  .then(res=>{
   this.comments=res.data;
  })
 }
}
</script>