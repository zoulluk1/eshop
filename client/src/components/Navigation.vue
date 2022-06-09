<template>


  <nav class="navbar navbar-expand-lg " style="background-color: white ">
    <div class="container-fluid">
      <a class="navbar-brand mx-4 " href="/">Úžasný e-shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active mx-3" aria-current="page" href="/Eshop">Náhled e-shopu</a>
          </li>

          <li class="nav-item dropdown mx-3">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              Správa produktů
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/NewProduct">Přidat nový produkt</a></li>
              <li><a class="dropdown-item" href="/Management" >Sparavovat produkty</a></li>


            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link mx-3" href="/contats" >Kontakty</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="" > <i class="bi bi-cart"> Košík</i></a>
          </li>
        </ul>
        <form class="d-flex">


          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>





</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>