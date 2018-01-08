var storyArray = [
{
  //index 0
  title:"The Start",
  text:"You wake up in your hotel room. The hot Californian climate seeping through the windows, and then you realised. There's no one next to you...your husband's missing! You leap out of bed and instantly look around for clues.",
  choices:[
    {
      text:"Check Husband's Suitcase",
      index:1
    },
    {
      text:"Check Open Window",
      index:2
    },
    {
      text:"Check Carpet Stain",
      index:3
    }
  ]
},
{
  //index 1
  title:"Suitcase",
  text:"You rummage through his suitcase frantically. You know he always leaves his wallet in here. Nothing. His wallet is missing too. Suddenly, there's a knock at the door.",
  choices:[
    {
      text:"Look through the peep hole",
      index:4
    },
    {
      text:"Open the door",
      index:5
    }
  ]
},
{
  //index 2
  title:"Window",
  text:"You walk towards to window that is letting the Californian breeze inside. It's open further than usual, enough to let someone inside. You notice tool scratches on the side of the window as if someone were to pry open the window from the outside. Suddenly, there's a knock at the door.",
  choices:[
    {
      text:"Look through the peep hole",
      index:4
    },
    {
      text:"Open the door",
      index:5
    }
  ]
},
{
  //index 3
  title:"Carpet Stain",
  text:"You walk over to the red stain on the carpet. You kneel down to investigate it further. Then you are hit with the smell of alcohol, along with the realisation that it was split wine that you both had last night. Will probably have to pay for that when you leave. Suddenly, there's a knock at the door.",
  choices:[
    {
      text:"Look through the peep hole",
      index:4
    },
    {
      text:"Open the door",
      index:5
    }
  ]
},
{
  //index 4
  title:"Peephole",
  text:"You walk towards the door slowly. You look through the peephole slowly and see a man with an expressionless face, dressed in a Black suit with sunglasses on. You take a moment to debate what to do next. In that moment, the man barges at the door and it fly’s open, making you tumble to the ground.",
  choices:[
    {
      text:"Fight the man",
      index:6
    },
    {
      text:"Run Away",
      index:7
    }
  ]
},
{
  //index 5
  title:"Open Door",
  text:"You run to the door and instantly open it. You don't even have that long to look at the person on the other side before he tumbles you to the floor.",
  choices:[
    {
      text:"Run Away",
      index:7
    }
  ]
},
{
  //index 6
  title:"Fight the Man",
  text:"You are slightly dazed but are able to fight. You jump to your feet and wait for the next attack. He runs at you ready to take you down to the floor again and you dodge his attack, pick up the empty wine bottle and smash across his head. He falls the floor limply and seems unconscious.",
  choices:[
    {
      text:"Explore the Hotel",
      index:8
    },
    {
      text:"Go to the Hotel’s Reception",
      index:9
    }
  ]
},
{
  //index 7
  title:"Run Away",
  text:"Your head is pounding from hitting the floor hard. You pull yourself up and just manage to dodge his attack towards you and you run towards the door away from him.",
  choices:[
    {
      text:"Explore the Hotel",
      index:8
    },
    {
      text:"Go to the Hotel’s Reception",
      index:9
    }
  ]
},
{
  //index 8
  title:"Explore the Hotel",
  text:"You decide the look for more clue throughout the hotel. You run up and down the corridors trying to find anything to do with your husband. You then realise something. Something that sends a shiver down your spine. There's nobody else in the hotel. It's just you. You're alone.",
  choices:[
    {
      text:"Go to the Hotel’s Reception",
      index:9
    },
    {
      text:"Check other floors",
      index:10
    }
  ]
},
{
  //index 9
  title:"Go to Hotel’s Reception",
  text:"You run straight down the stairs. The lift would have been too risky. You run straight to the main desk and there's no one there. You shout for someone to help and there's no reply.",
  choices:[
    {
      text:"Call the police",
      index:11
    },
    {
      text:"Look at Security Cameras",
      index:12
    }
  ]
},
{
  //index 10
  title:"Check Other Floors",
  text:"You begin to look at each floor, just in case you find another clue. When you reach the 2nd floor you see a room open just a crack and you hear talking inside. One voice sounds like your husband's.",
  choices:[
    {
      text:"Listen at the door",
      index:15
    },
    {
      text:"Barge in the room",
      index:16
    }
  ]
},
{
  //index 11
  title:"Call the Police",
  text:"You hop over the counter and pick up the phone and dial '911' into the keypad. The phone doesn't have any dial tone at all. The phone lines must have been disconnected.",
  choices:[
    {
      text:"Look at Security Cameras",
      index:12
    }
  ]
},
{
  //index 12
  title:"Look at Security Cameras",
  text:"You hop over the counter of the reception and go the computer screen and start looking through the security footage and you see your husband being dragged out of your room at night after answering the door to someone. They take your husband to a room on the second floor. At 4 am everyone in the hotel seems to get up and leave the hotel. Nobody seemed panicked, they just left.",
  choices:[
    {
      text:"Try Main Door",
      index:13
    },
    {
      text:"Go to Second Floor",
      index:14
    }
  ]
},
{
  //index 13
  title:"Try Main Door",
  text:"You try opening the main door and it's locked tight.",
  choices:[
    {
      text:"Go to Second Floor",
      index:14
    }
  ]
},
{
  //index 14
  title:"Go to Second Floor",
  text:"You make your way to the room where you saw your husband being taken into. You find the room door open just a crack and voices talking, one of which is your husband's.",
  choices:[
    {
      text:"Listen at the door",
      index:15
    },
    {
      text:"Barge in the room",
      index:16
    }
  ]
},
{
  //index 15
  title:"Listen at the Door",
  text:"You listen at the door and hear their conversation. They talk about us exploring a meteor that had crashed in the Nevada desert. My husband defending us from the accusations. We have only been here in California. We had only been here for two days too! What are they on about.",
  choices:[
    {
      text:"Barge in the room",
      index:16
    },
    {
      text:"Carry on listening",
      index:17
    }
  ]
},
{
  //index 16
  title:"Barge in the Room",
  text:"You barge into the room and a man in black suit instantly pulls out a gun and shoots you. You're dead. (Press refresh to try again.)",
},
{
  //index 17
  title:"Carry on Listening ",
  text:"You carry on listening at the door and you hear the people in suits talking about aliens. Your husband carries on denying that he had no part in any of their accusations. Which is completely true. What do these guys want with us? What do they think we did?",
  choices:[
    {
      text:"Barge in the room",
      index:16
    },
    {
      text:"Listen even more",
      index:18
    }
  ]
},
{
  //index 18
  title:"Listen even more",
  text:"Again, you carry on listening and you can hear the people in suits getting angrier with your husband. You start getting worried that they are going to kill your husband. Then you feel a hand on your shoulder. You quickly turn around and your legs to turn jelly and you see something, not human...an alien. It enters the room, leaving you to fall the floor. Sounds of gunshots can be heard but you feel paralysed on the floor. Suddenly, you see your husbands face as he lifts you off the floor and running. Your vision is blurry but you feel safe in his arms. You begin to feel yourself coming around as your husband falls to the floor with you in his arms. You turn around and see the alien about 5 meters away and he's got your husband by the legs.",
  choices:[
    {
      text:"Run for the doors",
      index:19
    },
    {
      text:"Fight the alien",
      index:20
    }
  ]
},
{
  //index 19
  title:"Run for the Doors",
  text:"You get up and try to run for the main door but the alien lets go of your husband and grab your leg throwing you to the floor. The alien then kills you. (Press refresh to try again.) ",
},
{
  //index 20
  title:"Fight the Alien",
  text:"You get up and grab the nearest available weapon which is a fire extinguisher and you smash it down on the alien's arm. It squeals in pain and retracts its arm. You help your husband up as you spray the extinguisher in the alien's face. You drop the extinguisher and run for the fire exit. You instantly run towards the main road and wave to the oncoming traffic. Some police car pulls over and asks you if you're okay.",
  choices:[
    {
      text:"Lie",
      index:21
    },
    {
      text:"Tell the Truth",
      index:22
    }
  ]
},
{
  //index 21
  title:"Lie",
  text:"You tell him an elaborate lie about how someone stole all your important details and that the hotel refused to investigate it and how they need to get home as soon as possible. The police officer thankfully gives them and lift to the airport and helps them get home. Away from a story, they may never forget.",
},
{
  //index 22
  title:"Tell the Truth",
  text:"You tell them all the recent events that just occurred and the policeman just laughs at you. He tells you that you must have had too much to drink last night and advises you to rest for the day. You tell him you need to get a lift to the airport as soon as possible. He advises you to take the bus before pulling off.",
}
]



//{
//  title:"",
//  text:"",
//  choices:[
//    {
//      text:"",
//      index:
//    }
//  ]
//}
