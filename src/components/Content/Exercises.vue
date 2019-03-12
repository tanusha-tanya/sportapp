<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 mt-5>
      <v-card>
        <v-img
          :src="exercise.avatar"
          aspect-ratio="1.5"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{exercise.title}}</h3>
            <div> {{exercise.subtitle}} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange" @click="goBack">To back</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default{
    props: ['id'],
    computed: {
        exercise (){
            const id = this.id
            return this.$store.getters.exerciseById(id)
        }
    },
    methods: {
        goBack (){
            history.back()
        }
    }
}
</script>