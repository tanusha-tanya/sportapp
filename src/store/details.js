export default{
  state: {
    cards:[
      {
        title: 'For legs',
        level: 'Middle',
        imgSource: '../assets/for_legs.jpg',
        id: 'forlegs',
        time: '20',
        resting: '15',        
        quantity: '5',
        exercisesId: [0,1,2,4,5,7]       
      },
      {
        title: 'Stretching',
        level: 'Beginner',
        imgSource: '../assets/stretching.jpg',
        id: 'stretching',
        time: '20',
        resting: '15',        
        quantity: '5',
        exercisesId: [8]       
      },
      {
        title: 'Strength',
        level: 'Hight',
        imgSource: '../assets/strength.jpg',
        id: 'strength',
        time: '20',
        resting: '15',        
        quantity: '5',
        exercisesId: [3,6,7]     
      },
      {
        title: 'Abdominal muscles',
        level: 'Hight',
        imgSource: '../assets/abdominal_muscules.jpg',
        id: 'abdominal',
        time: '20',
        resting: '15',        
        quantity: '5',
        exercisesId: [7]        
      }
    ]
  },  
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
