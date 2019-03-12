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
              <v-btn color="success">Start</v-btn>
            </v-card-title>            
            <v-list two-line>
            <v-subheader>Set of exercises</v-subheader>
            <div v-for="exercisesId in card.exercisesId" :key="exercisesId">  
              <v-list-tile :to="'/exercise/' + exercises[exercisesId].id">
                  <v-list-tile-avatar>
                    <img :src="exercises[exercisesId].avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="exercises[exercisesId].title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="exercises[exercisesId].subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>                 
                </v-list-tile>                
            </div>
          </v-list>            
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
    },
    exercises (){
       return this.$store.getters.exercises
    },
  }
}
</script>
