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
          <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                >
                  {{ item.header }}
                </v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-tile
                  v-else
                  :key="item.title"
                  avatar
                  @click=""
                >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
          </template>
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
    }
  },
  data () {
      return {
        items: [
          { header: 'Set of exercises' },
          {
            avatar: 'http://lovelybody.ru/wp-content/uploads/2018/08/%D0%BF%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F.gif',
            title: 'Lunges forward',
            subtitle: "Stand with your legs slightly apart with your hands on your hips. Stabilize your abdomen, straighten your back and look straight ahead. Take a large step forward with your right leg. Slowly transfer your weight onto your right leg as flex your knee and hip to lunge forward. Keeping your torso as erect as possible, lower your hips until your thigh is horizontal to the floor and your left knee is nearly touching the floor. Forcefully press through with your right heel to extend your leg and hip, and return to the standing position. Repeat the forward lunge with your left leg."
          },
          { divider: true, inset: true },
          {
            avatar: 'http://lovelybody.ru/wp-content/uploads/2018/08/%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B-%D0%BD%D0%B0%D0%B7%D0%B0%D0%B4-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F.gif',
            title: 'Lunges back',
            subtitle: "Position your feet on the floor so they’re hip-width apart with your toes pointed directly forward. Lift your right leg and step to the side. Once your foot is fully planted, push your hips back and bend your right knee to lower into a lunge. Descend until your right thigh is about parallel to the floor, then extend your hips and knee to come back up. Return your right foot to the starting position and then perform the next repetition, this time stepping to the side with your left foot. Continue back and forth until you complete all of your desired repetitions."
          },
          { divider: true, inset: true },
          {
            avatar: 'http://lovelybody.ru/wp-content/uploads/2018/08/%D0%BA%D0%BE%D1%81%D1%8B%D0%B5-%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B-%D0%BD%D0%B0%D0%B7%D0%B0%D0%B4-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F.gif',
            title: 'Lunges slanting',
            subtitle: "Position your feet on the floor so they’re hip-width apart with your toes pointed directly forward. Lift your right leg and step to the side. Once your foot is fully planted, push your hips back and bend your right knee to lower into a lunge. Descend until your right thigh is about parallel to the floor, then extend your hips and knee to come back up. Return your right foot to the starting position and then perform the next repetition, this time stepping to the side with your left foot. Continue back and forth until you complete all of your desired repetitions."
          }
        ]
      }
    }
}
</script>
