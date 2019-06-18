<template>
  <div>
    <v-container>
    <v-layout row>
      <v-flex>
        <h1 class="display-4" >Sport application</h1>
        <v-card>
      <v-container
        fluid
        grid-list-lg
        class="mt-3 mb-3"
        mt-5
      >
        <v-layout row wrap>
          <v-flex xs12  sm6  md4
            v-for="card of cards"
            :key="card.title"
          >
            <v-card
              :color="colorLevel(card.level)"
              class="white--text"
              :to="'/detail/' + card.id"
              >
              <v-layout row>
                <v-flex xs12>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{card.title}}</div>
                      <div>{{card.level}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12>
                  <v-img
                    :src="card.imgSource"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-flex mt-2 mb-2>
                <v-icon dark>access_time</v-icon>
                  {{
                    timer(
                      card.time,
                      card.resting,        
                      card.quantity,
                      card.exercisesId.length
                    )}}
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </div> 
</template>

<script>
export default{
  computed:{
    cards (){
      return this.$store.getters.cards
    },   
    colored(){
      return 'blue'
    },    
  }, 
  methods:{
     colorLevel(level){
      if(level === 'Beginner'){
        return 'purple'
      }
      else if(level === 'Middle'){
        return 'blue'
      }
      else{
        return 'pink'
      }
    },
    timer(time, resting, quantity, length){
      let timeInSeconds = quantity*(length*time + resting*length-1),
          timeInMinuts = timeInSeconds/60,
          min = null, 
          sec= null, 
          currentTime = '';
      if(timeInSeconds % 60 !== 0){
        min = Math.floor(timeInMinuts);
        sec = timeInSeconds - min * 60;
        currentTime = min + ' min ' + sec + ' sec'
      }
      else{
        currentTime = timeInMinuts + 'min'
      }
      return currentTime 
    }
  }
}
</script>
