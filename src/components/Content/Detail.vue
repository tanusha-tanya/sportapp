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
              <v-icon right class="mr-1">access_time</v-icon>
              {{timeCard(card.exercisesId.length) + ' sec'}}
              <v-btn :color="IsTimerStarted? 'error' : 'success'" @click="ChangeTimer">{{IsTimerStarted? "Stop": "Start"}}</v-btn>
              <timer v-if="IsTimerStarted" :currentTime="timeCard(card.exercisesId.length)"/>
            </v-card-title>            
            <v-list two-line>
            <v-subheader>Set of exercises</v-subheader>
            <div v-for="exercisesId in card.exercisesId" :key="exercisesId" >  
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
import Timer from '@/components/MyComponents/Timer.vue'

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
  },
  data(){
    return{
      buttonText: 'Start',
      IsTimerStarted: false
    }
  },
  components: {
    Timer
  },
  methods:{
    ChangeTimer(){
      this.IsTimerStarted = !this.IsTimerStarted
    },
    timeCard(quantity){
      let time = quantity*20 + quantity*5;
      return time
    }
  }
}
</script>
