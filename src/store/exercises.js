export default{
    state: {
        exercises: [
            {
                avatar: '../assets/lunges_forward.gif',
                title: 'Lunges forward',
                subtitle: 'Stand with your legs slightly apart with your hands on your hips. Stabilize your abdomen, straighten your back and look straight ahead. Take a large step forward with your right leg. Slowly transfer your weight onto your right leg as flex your knee and hip to lunge forward. Keeping your torso as erect as possible, lower your hips until your thigh is horizontal to the floor and your left knee is nearly touching the floor. Forcefully press through with your right heel to extend your leg and hip, and return to the standing position. Repeat the forward lunge with your left leg.',
                id: 'lunges_forward'
            },
            {
                avatar: '../assets/lunges_back.gif',
                title: 'Lunges back',
                subtitle: 'Position your feet on the floor so they’re hip-width apart with your toes pointed directly forward. Lift your right leg and step to the side. Once your foot is fully planted, push your hips back and bend your right knee to lower into a lunge. Descend until your right thigh is about parallel to the floor, then extend your hips and knee to come back up. Return your right foot to the starting position and then perform the next repetition, this time stepping to the side with your left foot. Continue back and forth until you complete all of your desired repetitions.',
                id: 'lunges_back'
            },
            {
                avatar: '../assets/lunges_slanting.gif',
                title: 'Lunges slanting',
                subtitle: 'Position your feet on the floor so they’re hip-width apart with your toes pointed directly forward. Lift your right leg and step to the side. Once your foot is fully planted, push your hips back and bend your right knee to lower into a lunge. Descend until your right thigh is about parallel to the floor, then extend your hips and knee to come back up. Return your right foot to the starting position and then perform the next repetition, this time stepping to the side with your left foot. Continue back and forth until you complete all of your desired repetitions.',
                id: 'lunges_slanting'
            },
            {
                avatar: '../assets/burpee.gif',
                title: 'Burpee',
                subtitle: 'You must begin this exercise in a standing posture and then place your both hands on the ground in front of you. Your feet must be shoulder width apart. Lower yourself and kick your feet back and attain the push-up position. Keep your hands firmly on the floor to provide proper support to your body. Lower your chest to perform the push-up and return your feet to squat position and then leap up high as possible. Maintain a quick pace for doing this exercise. Jump as high as possible by you from the squat position. Clap your hands in the squat position. End in the squat position',
                id: 'burpee'
            },
            {
                avatar: '../assets/curtsy.gif',
                title: 'Curtsy lunge',
                subtitle: 'The initial position: stand straight with your feet wider than shoulder width apart. Hold your hands on your hips. Then step your left leg behind you and to the right so your thighs cross, bending both knees as if you are curtsying. Return to the starting position, and switch legs.',
                id: 'curtsy'
            },
            {
                avatar: '../assets/lifting_the_leg_to_the_side.gif',
                title: 'Lifting the leg to the side',
                subtitle: 'Lie on your side with your head resting on your hand above your elbow. Lie down on one side and prop your head and neck up with your elbow. Look straight ahead of you. Using your elbow to prop up your head will keep you from straining your neck. Keep your other arm in front of you with your palm facing down. Slowly lift your top leg as high as it will go. The leg should go up at least one or two feet. You can keep your free hand either on your hip or on the floor in front of you for some additional support. Keep looking straight in front of you instead of looking up at the leg. Make sure you keep your hips stacked and your torso still. Gently lower your leg. Keep your body in the same position except for the leg, and slowly lower it until it meets the other leg. Remember to keep your spine straight and to avoid caving forward as you lift your leg. For more of a challenge, lower it, but keep it about an inch away from the bottom leg to feel an extra burn in your side.',
                id: 'lifting_the_leg_to_the_side'
            },
            {
                avatar: '../assets/push_ups.gif',
                title: 'Push ups',
                subtitle: 'Place a mat on the floor. Start in a high plank position as if you are about to do a real push up. Do not lock your elbows; they should be slightly bent. Then slowly lower your body all the way to the ground until it is resting on the mat. This is one negative push up. Do three sets of five to ten negative push ups. Practice this three times a week. Make sure to tighten your abdominal muscles while you perform this exercise.',
                id: 'push_ups'
            },
            {
                avatar: '../assets/rock_climber.gif',
                title: 'Mountain Climbers',
                subtitle: 'Start in a plank position with arms and legs long. Beginning in a solid plank is the key to proper form and good results in the Mountain Climber. At its heart, the Mountain Climber is a form of plank. Keep your abs pulled in and your body straight. Squeeze your glutes and pull your shoulders away from your ears. Pull your right knee into your chest.  As the knee draws to the chest, pull your abs in even tighter to be sure your body doesn’t sag or come out of its plank position. Quickly switch and pull the left knee in. At the same time you push your right leg back, pull your left knee in to the chest using the same form. Continue to switch knees. Pull the knees in right, left, right, left—always switching simultaneously so that you are using a “running” motion. As you begin to move more quickly be in constant awareness of your body position and be sure to keep a straight line in your spine and don’t let your head droop. Core body stability is crucial.',
                id: 'rock_climber'
            },
            {
                avatar: '../assets/seatedforwardbend.gif',
                title: 'Seated forward bend',
                subtitle: 'Stretch your spine and the backs of your legs as you tone your tummy muscles with the seated forward bend. This video shows you how to perform the basic yoga pose, along with a variation that increases difficulty of the exercise.',
                id: 'seatedforwardbend'
            },
        ]
      },
    getters:{
        exercises (state){
            return state.exercises
        },
        exerciseById (state){
            return exerciseId => {
                return state.exercises.find(exercise => exercise.id === exerciseId)
            }
        }
    }
}