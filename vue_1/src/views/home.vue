<template>
  <div>
    <h2>Home page</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi quos possimus officiis ex, nihil earum expedita ab saepe id dolore ipsa recusandae repellendus tempore? Omnis eius corrupti tempore soluta explicabo, totam in eos? Adipisci mollitia tempore, dolores praesentium illum.</p>

    
    <div class="al">
      <img class="alimbo" src="../assets/Alimbo.jpg" alt="Alimbo">
    </div>
    <h2 class="title">Alim Mambetov</h2>
  </div>

</template>


<script>
  export default{



  }

</script>



<style scoped> 
  
  .title{
    text-align: center;
    color:#222;
    font-size: 35px;
  }

  .alimbo{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .al{
    border:8px solid #222;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }
</style>