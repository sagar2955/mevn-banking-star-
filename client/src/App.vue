<template>
  <div>
      <nav class="navbar navbar-dark bg-primary justify-content-between flex no-wrap flex-row">
        <div class="container mt-3">
          <a class="navbar-brand float-left">BANKING APP</a>
          <ul class="nav navbar-nav flex-row">

            <li class="nav-item">
              <router-link class="nav-link pr-3" to="/">Home</router-link>
            </li>
           
            <li class="nav-item">
              <router-link class="nav-link" to="/addCustomer">Add Customer</router-link>
            </li>

             <li class="nav-item">
              <router-link class="nav-link" to="/customers">Customers</router-link>
            </li>

          </ul>
        </div>
      </nav>


      <!--Router View-->
      <div class="container mt-5">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>

export default {
    name:'App'
}
</script>

<style>

</style>
