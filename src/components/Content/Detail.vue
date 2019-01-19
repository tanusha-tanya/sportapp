<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <h1 class="display-4">{{card.title}}</h1>
        <v-flex xs12 md12 mt-5>
          <v-card>
            <v-img
              :src="card.imgSource"
              height="500"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">{{card.level}}
              <v-icon left right>access_time</v-icon>
              {{card.time}}
            </v-card-title>
          </v-card>
        </v-flex>        
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default{
  props: ['id'],
  computed: {
    card (){
      const id = this.id
      return this.$store.getters.cardById(id)
    }
  }
}
</script>
