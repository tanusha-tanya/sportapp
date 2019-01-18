export default{
  state: {
    cards:[
      {title: 'For legs', level: 'beginner', imgSource: 'http://www.veincenteratiowaheart.com/upl/images/blog/three-exercises-your-legs-will-love-you-for.jpg'},
      {title: 'Stretching', level: 'beginner', imgSource: 'http://fitago.ru/images/cache/d93ec0593458c144668b70c4a8388e61_w800_h531.jpg'},
      {title: 'Strength', level: 'Hight', imgSource: 'http://stage.xcom-hobby.ru/var/files/84/ce/5731f2084ceea018561888_1000.jpg'}
    ]
  },
  mutations:{},
  actions:{},
  getters:{
    cards (state){
      return state.cards
    },
    cardById (state){
      return cardId => {
        return state.cards.find(card => card.id === cardId)
      }
    }
  }
}
