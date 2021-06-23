<template>
  <b-card header-bg-variant="transparent" header-border-variant="light" class="border-0 w-100 mx-auto">
    <template v-slot:header>
      <div class="media align-items-center text-center">
        <img src="https://jwt.io/img/pic_logo.svg" class="mr-3" width="100"/>
        <div class="media-body">
          <h1 class="h1 font-weight-bold">Laravel Jwt</h1>
        </div>
      </div>
    </template>
    <router-view />
  </b-card>
</template>

<style>
html,
body {
  height: 100%;
  width: 600px;
  max-height: 500px;
  background-color: #f5f5f5;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 35px;
}
</style>
