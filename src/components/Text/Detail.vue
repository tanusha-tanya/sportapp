<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <h1 class="display-4">For legs</h1>

        <v-flex md12 lg6>
          <v-time-picker
            v-model="time"
            :allowed-hours="allowedHours"
            :allowed-minutes="allowedMinutes"
            class="mt-3"
            format="24hr"
            scrollable
            min="9:30"
            max="22:15"
          ></v-time-picker>
        </v-flex>
        <v-flex xs12 md12>
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">height</v-card-title>
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
