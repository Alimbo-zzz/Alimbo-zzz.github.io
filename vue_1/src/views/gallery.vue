<template>
  <div class="gallery">
    <h2 class="title">Image Gallery</h2>
    <Gallery_img 
      :images="images" 
      @modalActive="modalActive"
      @modalIndex="modal_index"
      @modalData="modal_data"

    />
    <Modal_img v-if="modal"
      @removeModal="remove_modal"
      :index="el_index"
      :data="el_data"      
      :images="images" 
    />
  </div>


</template>



<script>

import Gallery_img from '@/components/gallery/gallery-images.vue';
import Modal_img from '@/components/gallery/modal-img.vue';

export default{
  data(){
    return{
      modal: false,
      el_index: Number,
      el_data: Object,
      /*____________________________*/
      images:[
      {id: 1,name: 'img_1' , img: '1.jpg'},
      {id: 2,name: 'img_2' , img: '2.jpg'},
      {id: 3,name: 'img_3' , img: '3.jpg'},
      {id: 4,name: 'img_4' , img: '4.jpg'},
      {id: 5,name: 'img_5' , img: '5.jpg'},
      {id: 6,name: 'img_6' , img: '6.jpg'},
      {id: 7,name: 'img_7' , img: '7.jpg'},
      {id: 8,name: 'img_8' , img: '8.jpg'},
      {id: 9,name: 'img_9' , img: '9.jpg'},
      {id: 10,name: 'img_10' , img: '10.jpg'},
      {id: 11,name: 'img_11' , img: '11.jpg'},
      {id: 12,name: 'img_12' , img: '12.jpg'},
      {id: 13,name: 'img_13' , img: '13.jpg'},
      {id: 14,name: 'img_14' , img: '14.jpg'},
       ],
    }
  },
  components:{
    Gallery_img,
    Modal_img
  },
  methods:{
    modalActive(e_true){
      this.modal = e_true;
    },
    remove_modal(e_false){
      this.modal = e_false;
    },
    modal_index(index){
      this.el_index = index;
    },
    modal_data(data){
      this.el_data = data;
    }
  }

}
</script>


<style>
  .title{
    text-align: center;
  }

  .gallery{
    position: relative;
  }
</style>

