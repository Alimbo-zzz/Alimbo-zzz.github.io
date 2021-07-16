<template>
  <div class="gallery-item" @click="modal">
    <img :src=" require(`@/assets/gallery/${image_el.img}`)">
  </div>
</template>




<script>
  export default{
    props:{
      image_el:Object,
      index: Number,
    },
    methods:{
      modal(){
        this.$emit('modal-active', true);
        this.$emit('modal-el-data', this.image_el);
        this.$emit('modal-index', this.index+1);
        
      }
    },

  }

</script>


<style scoped>
  
  .gallery-item{
    border:0.3em solid #222;
    border-radius: 0.6em;
    cursor: pointer;
    transition: 0.5s;
    box-sizing: border-box;
    overflow: hidden;
    height: 150px;
    position: relative;
  }

  .gallery-item:hover img{
    width: 100%; height: 100%;
    filter: blur(0px);
  }

  img{
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%, -50%);
    width: 135%; height: 135%;
    transition: 0.35s;
    filter: blur(1px);
  }


  /*media*/


  @media (max-width: 800px) {
    
     img{
        filter: blur(0px);
      }
  }

</style>