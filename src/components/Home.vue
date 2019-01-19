<template>
  <div v-if="!loading">
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
              color="purple"
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
                {{card.time}}
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
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex  xs12 class="text-xs-center">
          <v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
         ></v-progress-circular>
       </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default{
  computed:{
    cards(){
      return this.$store.getters.cards
    }
  }
}
</script>
