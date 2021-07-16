<template>
  <div class="G-container">
    
    <gallery_item 
      v-for="(item, i) in images" :key="item.id"
      :index="i"
      :image_el="item"
      @modal-active="modalActive"
      @modal-el-data="modalData"
      @modal-index="modalIndex"
     />      
  </div>
</template>




<script>
  import gallery_item from './gallery-item.vue';

  export default{
    components:{
      gallery_item,
    },
    props:{
      images:Array,
    },
    methods:{
      modalActive(e){
        this.$emit('modalActive', e);
      },
      modalIndex(e){
        this.$emit('modalIndex', e);
      },
      modalData(e){
        this.$emit('modalData', e);
      }
    }

  }

</script>


<style scoped>

  .G-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }


  /*media*/

  @media (max-width: 800px) {
    
    .G-container{grid-template-columns: repeat(3, 1fr);}
  }

  @media (max-width: 500px) {
    
    .G-container{grid-template-columns: repeat(2, 1fr);}
  }

</style>