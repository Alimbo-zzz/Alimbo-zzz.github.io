<template>
  <div class="modal_img">

    <div class="S_cont">
      <ul class="slider" ref="slider">
        <li class="slider-item" v-for="item in images" :key="item.id">
          <img class="slider_img" :src="require(`@/assets/gallery/${item.img}`)" >
        </li>
      </ul>

      <div class="index">{{active_Index}}</div>
    </div>
  
    <ul class="pag">
      <li class="pag-point" 
      :class="[index+1 !== active_Index ? ''  : 'active']" 
      v-for="(item, index) in images" :key="item.id"
      @click="pagSlide(index+1)"
      ></li>
    </ul>
    <div class="btn_box">
      <div class="prev" ref="prev" @click="prev">◄</div>
      <div class="next" ref="next" @click="next">►</div>
    </div>
    <div class="remove-btn" @click="rem_modal">+</div>
  </div>
</template>




<script>
  export default{
    data(){
      return{
        active_Index:Number, 
      }
    },
    props:{
      index:Number,
      data:Object,
      images:Array,
    },
    methods:{
      rem_modal(){
        this.$emit('removeModal', false)
      },
      next(){
        if(this.active_Index <= this.images.length -1){
          this.active_Index++;
        }
      },
       prev(){        
        if(this.active_Index > 1 ){
          this.active_Index--;
        }
      },
      pagSlide(index){
        this.active_Index = index;
      }

    },
    mounted(){
      this.active_Index = this.index;
    },
    watch:{
      active_Index(){
        const slider = this.$refs.slider;
        const next = this.$refs.next;
        const prev = this.$refs.prev;
        slider.style.transform = `translateX(${(this.active_Index-1) * -100}%)`;

        if(this.active_Index == 1){
          prev.classList.add('max')
        }else{
          prev.classList.remove('max')
        }
        if(this.active_Index == this.images.length){
          next.classList.add('max')
        }else{
          next.classList.remove('max')
        }
      }
    }


  }

</script>


<style>
  .modal_img{
    position: fixed;
    z-index: 100;
    top: 0;left: 0;
    background-color: rgba(22,22,22, 0.98);
    width: 100%;height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>


<style scoped>


  .S_cont{
    font-size: 30px;
    width: 26em; height: 13em;
    transition: 0.5s;
    overflow:hidden;
    position: relative;
  }
  
  .slider{
    user-select: none;
    padding: 0; margin: 0 auto;
    list-style: none;
    display: flex;
    width: 100%; height: 100%;
    transition:0.5s;
  }

  .slider-item{
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 0.1em solid #fff;
  }


  .slider_img{
    width: 100%;  height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .index{
    position: absolute;
    z-index: 100;
    user-select: none;
    top: 0.3em;left: 0.3em;
    border:0.08em solid #fff;
    padding: 0.2em 0.8em;
    backdrop-filter: blur(5px);
    background-color: rgba(22,22,22, 0.7);
    border-radius: 0.5em;
  }


  .pag{
    display: flex;
    list-style: none;
  }

  .pag .active{
    border-color: green;
    pointer-events: none;
  }
  .pag .active::before{
    background: green;
  }

  .pag-point{
    font-size: 20px;
    width: 0.8em;height: 0.8em;
    margin-right: 0.3em;
    transition:0.3s;
    cursor: pointer;
    border-radius: 50%;
    border:0.1em solid transparent;
    position: relative;
  }
  .pag-point::before{
    content: '';
    position: absolute;
    width: 50%;height: 50%;
    background-color: #fff;
    border-radius: 50%;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);

  }
  .pag-point:hover{
    border-color: #fff;
  }
  
  .btn_box{
    position: absolute; top: 0;left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
  }

  .next, .prev{
    transition: 0.3s;
    user-select: none;
    cursor: pointer;
    border:1px solid #fff;
    padding: 5px 20px;
  }
  .next:hover, .prev:hover{
    color:#206C06;
    border-color: #206C06;
    background-color: #2CAE39;

  }

  .max{
    pointer-events: none;
    opacity: 0.3;
  }

.img_box{
 max-width: 500px;
}
  .remove-btn{
    position: absolute;
    top: 0; right: 0;
    font-size: 50px;
    border:4px solid transparent;
    line-height: 0.55em;
    padding: 0.4em;
    user-select: none;
    cursor: pointer;
    border-radius: 50%;
    transform: rotate(45deg);
    transition: 0.3s;
  }

  .remove-btn:hover{
    border-color: #C73028;
    color:#C73028;
  }

  
  .remuve_class{
    pointer-events: none;
    opacity: 0;
  }

</style>