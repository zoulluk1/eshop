<template>
  <div class="card">
    <div class="card-header bg-light">
      <h1>Kontakty: </h1>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item ">

        <i class="bi bi-phone-fill"></i>: +420 444 444 444 </li>

      <li class="list-group-item"><span class="glyphicon" >&#x2709;</span> example@email.cz</li>
      <li class="list-group-item"><p>Adresa</p>
            <p>Ulice: Studničkova 7 </p>
            <p>Město: Nové Město </p>
            <p>PSČ: 12800 </p>
      </li>
    </ul>
    <!--Google map-->
    <div id="map-container" class="z-depth-1-half map-container-3 ">
      <iframe style="border:none" src="https://frame.mapy.cz/s/ramupurota" width="1300" height="500" frameborder="0"></iframe>
    </div>
  </div>


</template>

<script>
export default {
  name: "Contats"
}
</script>

<style scoped>
.map-container-3{
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
}
.map-container-3 iframe{
  left:100px;

  top:100px;

  position:absolute;
}
</style>