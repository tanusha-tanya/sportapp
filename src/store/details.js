export default{
  state: {
    cards:[
      {
        title: 'For legs',
        level: 'Middle',
        imgSource: '../assets/for_legs.jpg',
        id: '1',
        time: '25 min',
        exercisesId: [0,1,2,4,5,7]
      },
      {
        title: 'Stretching',
        level: 'Beginner',
        imgSource: '../assets/stretching.jpg',
        id: '2',
        time: '25 min',
        exercisesId: [8]
      },
      {
        title: 'Strength',
        level: 'Hight',
        imgSource: '../assets/strength.jpg',
        id: '3',
        time: '25 min',
        exercisesId: [3,6,7]
      },
      {
        title: 'Abdominal muscles',
        level: 'Hight',
        imgSource: '../assets/abdominal_muscules.jpg',
        id: '4',
        time: '30 min',
        exercisesId: [7]
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
    },
  }
}
