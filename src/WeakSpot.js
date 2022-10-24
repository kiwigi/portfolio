
import Navbar from './Navbar'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import init1 from './sketchesWeakspot/initial1.png'
import init2 from './sketchesWeakspot/initial2.png'
import init3 from './sketchesWeakspot/initial3.png'
import init4 from './sketchesWeakspot/initial4.png'
import init5 from './sketchesWeakspot/initial5.png'
import init6 from './sketchesWeakspot/initial6.png'
import init7 from './sketchesWeakspot/initial7.png'
import init8 from './sketchesWeakspot/initial8.png'
import init9 from './sketchesWeakspot/initial9.png'
import init10 from './sketchesWeakspot/initial10.png'
import ref1 from './sketchesWeakspot/ref1.png'
import ref2 from './sketchesWeakspot/ref2.png'
import ref3 from './sketchesWeakspot/ref3.png'
import ref4 from './sketchesWeakspot/ref4.png'
import ref5 from './sketchesWeakspot/ref5.png'
import ref6 from './sketchesWeakspot/ref6.png'
import ref7 from './sketchesWeakspot/ref7.png'
import ref8 from './sketchesWeakspot/ref8.png'
import ref9 from './sketchesWeakspot/ref9.png'
import ref10 from './sketchesWeakspot/ref10.png'


function BobaLockscreen() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Navbar isHomeActive={'activeFalse'} isResumeActive={'activeFalse'} isPortfolioActive={'activeTrue'} isAboutActive={'activeFalse'}/>

      <div className='projPageTitle'> Weak Spot</div>
      
   
      <div className='simpleBox3'>
      <div className='ProjTitle'> Overall Description: </div>
      <div className='projText'>The lock screen appears to be any other ordinary lock screen with numbers 0-9.  However, no matter how many 4 number combinations you try, the phone remains locked! The main idea is that only the user knows the true way to unlock the phone.  This can be done by tapping repeatedly along a predetermined weak spot in order to break through the fake lock screen and into the phone. When the user taps on the predetermined weak spot, the screen will reveal the previously hidden cracks.</div>        
      <div className='ProjTitle'> Initial sketches: </div>
      <div className='projText'>During the initial design phase of the project, each team member created 10 initial sketches. Then, we met as a group to discuss the initial sketches and decided upon which ones we found most promising. There were a few initial sketches that stood out including darts, orchestra, and dress up concepts.</div>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init1} 
                alt='Slide 1'>
            </img>
            <div className='text-center'>
                <p>1. Orchestra (seyeon): The passcode is playing a specific combination of instruments together. The user needs to use multiple fingers to tap on multiple instruments at the same time to play orchestrated sounds in order to unlock the phone.</p>
            </div>

        </Carousel.Item>
        
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={init2} 
                alt='Slide 2'>
            </img>
            <div className='text-center'>
                <p>2. Pop the Balloon (seyeon): Each balloon will be given different colors and the user has to pop the specific color of the balloon in a predetermined sequence to unlock the phone. Using a slingshot, the user can aim and release the slingshot to pop the balloon</p>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init3} 
                alt='Slide 3'>
            </img>
            <div className='text-center'>
                <p>3.Pinata (seyeon): The user needs to keep tapping on pinata until pinata breaks open. When pinata finally breaks open, the phone will be unlocked as well.</p>
            </div>

        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init4} 
                alt='Slide 4'>
            </img>
            <div className='text-center'>
                <p>
                4. Quiz Unlock (mackenzie): In order to open your phone, you must answer 5 quiz questions and score above 80%.  Ideal for prepping for an upcoming exam and keeping you from being distracted from studying by your phone.
                </p>
            </div>

        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init5} 
                alt='Slide 5'>
            </img>
            <div className='text-center'>
                <p>
                5. Dress Up Unlock (mackenzie): Set your password based on your sense of style!  Pick the correct outfit combination to unlock your phone.
                </p>
            </div>

        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init6} 
                alt='Slide 6'>
            </img>
            <div className='text-center'>
                <p>
                6. Weak Spot Unlock (mackenzie): The lock screen looks completely ordinary, but it can only be unlocked by repeatedly tapping a weak spot to break into your phone.
                </p>
            </div>

        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init7} 
                alt='Slide 7'>
            </img>
            <div className='text-center'>
                <p>
                7. Darts Unlock (Jane): There is a dart board, and each ring is a different number of points that you can click. To unlock the phone you have to get the right number of points. Could use a dart-like object to throw and hit the board for more fun!
                </p>
            </div>

        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init8} 
                alt='Slide 8'>
            </img>
            <div className='text-center'>
                <p>
                8. Draw Unlock (Jane): Draw the correct image to unlock your phone. The user chooses the object they have to draw beforehand, and image recognition software is used to match their drawing to the object. 
                </p>
            </div>

        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init9} 
                alt='Slide 9'>
            </img>
            <div className='text-center'>
                <p>
                9. Pet Lock (Mar): Your virtual pet guards your phone at all times. You can interact with your pet through the lock screen. You can feed it, pet it, play with it and more. Your pet learns your interaction patterns in order! You must do these interactions in the correct order to unlock your phone.
                </p>
            </div>

        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init10} 
                alt='Slide 10'>
            </img>
            <div className='text-center'>
                <p>
                10. Song Swipe (Mar): The user picks their favourite song and hides it inside of a 10 song playlist. For each song, a random 10 second snippet will be played. The user swipes right on the song if it is the correct song and left to go to the next song. Once the correct song is guessed the phone will unlock.
                </p>
            </div>

        </Carousel.Item>

      </Carousel>
      <div className='projText'>We created refined sketches for the darts, orchestra, and dress up concepts. However, none of them seemed to be quite right. We took a look back at our initial sketches and decided to create refined sketches for the Weak Spot concept as well. We found it promising so we settled on that idea. We all seem to like the weak spot idea because there is a twist. The interface looks like the user has to input a passcode to unlock the phone. However, none of the passcodes will let the user unlock the phone. The user has to find a hidden weak spot and repeatedly taps on the weak spot to break into the phone.</div>

      <div className='ProjTitle'> Refined Sketches: </div>

      <div className='projText'> We decided to create refined sketches based on the Weak Spot idea from the initial sketches. We explored different variations based on a weak spot idea. Our initial design of the weak spot idea was quite simple. Hence, we wanted to add some sort of complexity to the design to make it more interesting and fun. From refined sketches, we ended up choosing a Battleship Weak Spot idea. This variation idea was a mix of the game Battleship and our initial idea of a weak spot. The user has to choose a ‘weak spot’ in advance that later will act as a hidden passcode. The cracks are hidden along a predetermined ‘weak spot,’ and the user can only see a fake ordinary lock screen interface with number 0-9 that prompts for a pin. Similar to the game Battleship, the user then has to find and tap on the correct ‘weak spot’ on the screen. Once the weak spot has been tapped, it reveals a hidden crack. The user has to tap along the hidden weak spot to reveal the rest of the cracks. Once all of the cracks has been revealed, the phone unlocks</div>
     
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >

<Carousel.Item>
    <img 
        className="d-block w-100" 
        src={ref1} 
        alt='Slide 1'>
    </img>
    <div className='text-center'>
        <p>1.Hammering a Nail (Seyeon): Similar to weak spots, this interface will have a predetermined spot where you have to hammer a nail in. Swipe gesture will move the hammer so that it can push the nail in. If you are able to recognize a predetermined spot and hammer the nail in at the correct spot, you will be able to unlock the phone.</p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className='d-block w-100'
        src={ref2} 
        alt='Slide 2'>
    </img>
    <div className='text-center'>
        <p>2.Crack an Egg (Seyeon): Similar to weak spots, this interface will give you an egg with cracks in the shell. You have to tap multiple times in order to crack an egg. If you can crack an egg by tapping repeatedly on cracks in the shell, you will be able to unlock the phone.</p>
    </div>
</Carousel.Item>

<Carousel.Item>
    <img 
        className="d-block w-100" 
        src={ref3} 
        alt='Slide 3'>
    </img>
    <div className='text-center'>
        <p>Glue in Cracks (Seyeon): To unlock the phone, you have to fix cracks with glue. Tap on glue to use glue and fill cracks with glue. Swipe along cracks in order to glue them together. If you fill every cracks with glue, the phone will be unlocked</p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className="d-block w-100" 
        src={ref4} 
        alt='Slide 4'>
    </img>
    <div className='text-center'>
        <p>
        4.	Randomized Weak Spots (mackenzie) : Every time you go to unlock, the weak spot will appear in a different place.  The owner of the phone will know to look for small inconsistencies with the lock screen in order to know where to tap.

        </p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className="d-block w-100" 
        src={ref5} 
        alt='Slide 5'>
    </img>
    <div className='text-center'>
        <p>
        5.	Wallpaper Hide & Seek (mackenzie): Tap on objects in what appears to be the lock screen wallpaper to search for objects to break the screen and get into the phone.
    </p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className="d-block w-100" 
        src={ref6} 
        alt='Slide 6'>
    </img>
    <div className='text-center'>
        <p>
        6.	Physical Tapping (Jane): Tap the correct side of your phone on an object to unlock. As you tap a crack appears and grows as you tap more until it breaks and your phone is unlocked. </p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className="d-block w-100" 
        src={ref7} 
        alt='Slide 7'>
    </img>
    <div className='text-center'>
        <p>
        7.	Tap to Reveal (Jane): Tap the right location on your phone to unlock. As you tap, a crack will appear and that part of the screen will “break” to reveal an object. Select this object and your phone will be unlocked.
</p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className="sketch2" 
        src={ref8} 
        alt='Slide 8'>
    </img>
    <div className='text-center'>
        <p>
        8. Tap to Break (Jane): Tap the correct location on your phone to “crack” it and it keeps growing until the whole screen is cracked. When the whole screen is cracked it shatters, thereby unlocking the phone. 

          </p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className="sketch2" 
        src={ref9} 
        alt='Slide 9'>
    </img>
    <div className='text-center'>
        <p>
        9.	Battleship Weak Spot (Mar): The user chooses the ‘weak spot’ in advance which is where the crack is later hidden behind a fake lock screen that prompts for a pin or a password. Much like Battleship, the user then has to tap the correct places on the screen. Once the weak spot has been tapped, it reveals a crack. The rest of the crack must be tapped as well and once all of the crack has been found, the phone unlocks.

        </p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className="d-block w-100" 
        src={ref10} 
        alt='Slide 10'>
    </img>
    
    <div className='text-center'>
        <p>
        10.	Secret Symbol (Mar): The user draws a secret symbol in advance and picks where to hide it on the screen. To unlock the phone, the user must draw the same secret symbol in the same location on the screen.
</p>
    </div>

</Carousel.Item>

</Carousel>



      
      
        <div className='ProjTitle'> The final outcome :</div>
        <iframe width="1024" height="646" src="https://www.youtube.com/embed/dEEn2CTEXO0" title="Weak Spot Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div className='ProjTitle'> My Contributions: </div>
        <div className='sketchDesc'> For this project, I contributed through my sketches and ideas like the rest of the team. My main contribution was the Battleship idea where the owner of the device would choose where the weak spot is placed Since we split part 1 and part 2 of this project between the 4 of us. I mostly worked on the Boba Shop part instead of Weak Spot.</div>
        <a style={
            {fontSize: '40px', padding: '50px', color:'#ff57a6'}
        } href= 'https://slender-tremendous-jaguar.glitch.me/'> Click here to go to the website! </a>
        <a style={
            {fontSize: '25px', padding: '50px', color:'#696969'}
        }href='https://glitch.com/edit/#!/slender-tremendous-jaguar'>Click here to see the source code.</a>
        </div>
        

      
    </div>
  );
}

export default BobaLockscreen;
