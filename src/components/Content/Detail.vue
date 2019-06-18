<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <h1 class="display-4">{{card.title}}</h1>
        <v-flex xs12 md12 mt-5>
          <v-card>
            <v-img v-if="!IsTimerStarted"
              :src="card.imgSource"
              height="500"
              class="grey darken-4"
            ></v-img>
            <v-img v-else
              :src="exerciseAvatar"
              height="900"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">{{card.level}}
              <v-icon right class="mr-1">access_time</v-icon>
              {{timer}}
              <v-btn :color="IsTimerStarted? 'error' : 'success'" @click="ChangeTimer">{{IsTimerStarted? "Stop": "Start"}}</v-btn>
              <timer v-if="IsTimerStarted" :currentTime="timeCard()"/>
              <span v-if="IsTimerStarted" class="ml-5">{{exerciseTitle}}</span>
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
    exerciseAvatar(){
      let numderOfExercises = this.card.exercisesId[0]      
      return this.exercises[numderOfExercises].avatar
    },
    exerciseTitle(){
      let numderOfExercises = this.card.exercisesId[0]      
      return this.exercises[numderOfExercises].title
    },
    timer(){     
      let quantity = this.card.quantity,
          length = this.card.exercisesId.length,
          time = this.card.time,
          resting = this.card.resting,
          timeInSeconds = quantity*(length*time + resting*length-1),
          timeInMinuts = timeInSeconds/60,
          min = null, 
          sec= null, 
          fullTime = '';
      if(timeInSeconds % 60 !== 0){
        min = Math.floor(timeInMinuts);
        sec = timeInSeconds - min * 60;
        fullTime = min + ' min ' + sec + ' sec'
      }
      else{
        fullTime = timeInMinuts + 'min'
      }
      return fullTime 
    }
  },
  data(){
    return{
      buttonText: 'Start',
      IsTimerStarted: false,      
    }
  },
  components: {
    Timer
  },
  methods:{
    ChangeTimer(){
      this.IsTimerStarted = !this.IsTimerStarted
    },
    timeCard(){      
      let quantity = this.card.quantity,
          length = this.card.exercisesId.length,
          time = this.card.time,
          resting = this.card.resting;
        for(let i = 0; i< quantity; i++){
          for(let j = 0; j< length; j++){
            //time
            //resting
          }
        }
      return quantity
    },    
  }
}
</script>
