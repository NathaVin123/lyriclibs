<template>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
        <v-col cols="12" sm="6">
                <v-text-field
                    v-model="email"
                    label="Email"
                    :rules="emailRules"
                    hint="Input your valid email"
                    required
                    outlined
                ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
                <v-text-field
                v-model="password"
                :append-icon="show1 ? 'visibility' : 'mdi-visibility-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                outlined
                @click:append="show1 = !show1"
                ></v-text-field>
        </v-col>
      
          <v-btn
            color="primary"
            class="mr-2"
            @click="validate"
          >
            Login
          </v-btn>
          <small>*Not have an account ? </small>
          <v-btn
          text small color="primary"
          class="mr-4"
          @click="dialog = true"
        >
         Sign Up Here
        </v-btn>
        <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Sign Up</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field label="Username*" v-model="form.name" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" v-model="form.email" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Password*" v-model="form.password" type="password" required></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required fields</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="setForm()">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
        
        </v-form>
        
      </template>

      <script>
            export default {
              data: () => ({
                valid: true,
                dialog: false,
                show1: false,
                show2: true,
                name: '',
                nameRules: [
                  v => !!v || 'Name is required',
                  v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                  v => !!v || 'E-mail is required',
                  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                password: 'Password',
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => ('The email and password you entered don\'t match'),
        },
        text: '',
        load: false,
        form: {
          name: '',
          email: '',
          password: '',
        },
                
              }),
          
              methods: {
                validate () {
                  if (this.$refs.form.validate()) {
                    this.snackbar = true
                  }
                },
              },
            }
          </script>