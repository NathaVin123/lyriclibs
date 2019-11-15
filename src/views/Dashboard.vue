<template v-slot:body="{ items }">
        <div class="dashboard">
          <h1 class="subheading grey--text">Lyric List</h1>
      
          <v-container class="my-5">
      
            <v-layout row justify-start class="mb-3">
                    <v-flex xs6>
                        <v-dialog v-model="dialog" persistent max-width="290">
                            <template v-slot:activator="{ on }">
                            <v-btn depressed dark rounded style="text-transform: none !important;" color="green accent-3" v-on="on">
                              <v-icon size="18" class="mr-1">mdi-pencil-plus</v-icon>
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title class="headline">Whoops !</v-card-title>
                            <v-card-text>Seems you're interested to post your lyrics. Just sign up then you can post your favorite lyrics or sign in if you've create your account </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary" text @click="dialog = false">Back</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                          </v-flex>
                          <v-flex xs6 class="text-right">
                            <v-text-field v-model="keyword" append-icon="mdi-search" label="Search" hide-details>
                            </v-text-field>
                          </v-flex>
            </v-layout>
            
            <v-data-table
            :headers="headers"
            :items="users"
            :search="keyword"
            :loading="load">
              <tbody>
                <tr v-for="(item,index) in items" :key="item.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.artist }}</td>
                  <td>{{ item.genre }}</td>
                  <td class="text-center">
                    <v-btn icon color="indigo" light @click="editHandler(item)">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon color="error" light @click="deleteData(item.id)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
          </v-data-table>
                
          </v-container>         
        </div>
      </template>
      
      <script>
      export default {
        data() {
          return {
            dialog:false,
            headers: [
          {
            text: 'No',
            value: 'no',
          },
          {
            text: 'Title',
            value: 'title'
          },
          {
            text: 'Artist',
            value: 'artist'
          },
          {
            text: 'Genre',
            value: 'genre'
          },
          {
            text: 'Action',
            value: null
          },
        ],
          }
        },
        methods: {
          sortBy(prop) {
            this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
          }
        }
      }
      </script>
      
      <style>
      </style>