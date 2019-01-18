<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <h1 class="display-4" >Sport application</h1>
        <v-card>
      <v-container
        fluid
        grid-list-lg
        class="mt-3 mb-3"
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
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{card.title}}</div>
                      <div>{{card.level}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    :src="card.imgSource"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
