<template>
    <nav>
      <!-- untuk navbar-->
      <v-toolbar flat app>
        <img src = "../assets/LogoBrands.png" style="width:20px;height:20px" class="mr-2">
        <v-toolbar-title class="text-uppercase grey--text" light>
          <span class="font-weight-light">Lyric</span>
          <span>Libs</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        
        <!-- untuk dropdown-->
        <v-menu
        offset-y
        transition="slide-y-transition"
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn
            flat 
            slot="activator"
            v-on="on"
            text small color="primary"
          >
          <v-icon left small>mdi-file-document-box-outline</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in links"
            :key="item.text"
            router :to="item.route"
          >
            <v-icon small left>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

        <!-- untuk button navbar-->     
        <v-btn
          v-for="item in signin"
          :key="item.text" 
          flat color="primary"
          router :to="item.route"
          small
        >
          <span>Sign In</span>
          <v-icon dark right small>mdi-login-variant</v-icon>
        </v-btn>
        <v-btn
        flat 
        slot="activator"
        v-on="on"
        text small color="primary"
      >
      </v-btn>
      </v-toolbar> 
    </nav>
  </template>
  
<script>
  export default {
    data: () => ({
      drawer: false,
      links: [
        { icon:'mdi-home', title: 'Home', route: '/' },
        { icon:'mdi-format-align-justify', title: 'Lyric List', route: '/dashboard' },
        { icon:'mdi-information', title: 'About Us', route: '/about' }
      ],
      signin: [
        { text: 'Home', route: '/signin'}
      ]
    }),
  }
</script>
  
  <style>
  </style>