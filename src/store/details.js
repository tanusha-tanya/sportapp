export default{
  state: {
    cards:[
      {
        title: 'For legs',
        level: 'beginner',
        imgSource: 'http://www.veincenteratiowaheart.com/upl/images/blog/three-exercises-your-legs-will-love-you-for.jpg',
        id: '1',
        time: '25 min'
      },
      {
        title: 'Stretching',
        level: 'beginner',
        imgSource: 'http://fitago.ru/images/cache/d93ec0593458c144668b70c4a8388e61_w800_h531.jpg',
        id: '2',
        time: '25 min'
      },
      {
        title: 'Strength',
        level: 'Hight',
        imgSource: 'http://stage.xcom-hobby.ru/var/files/84/ce/5731f2084ceea018561888_1000.jpg',
        id: '3',
        time: '25 min'
      },
      {
        title: 'abdominal muscles',
        level: 'Hight',
        imgSource: 'http://pyshnenko.com.ua/wp-content/uploads/2015/09/20140111205131-50611-908x480.jpg',
        id: '4',
        time: '30 min'
      }
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
