
import Navbar from './Navbar'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import init1 from './sketchesBoba/initial1.png'
import init2 from './sketchesBoba/initial2.png'
import init3 from './sketchesBoba/initial3.png'
import init4 from './sketchesBoba/initial4.png'
import init5 from './sketchesBoba/initial5.png'
import init6 from './sketchesBoba/initial6.png'
import init7 from './sketchesBoba/initial7.png'
import init8 from './sketchesBoba/initial8.png'
import init9 from './sketchesBoba/initial9.png'
import init10 from './sketchesBoba/initial10.png'
import ref1 from './sketchesBoba/ref1.png'
import ref2 from './sketchesBoba/ref2.png'
import ref3 from './sketchesBoba/ref3.png'
import ref4 from './sketchesBoba/ref4.png'
import ref5 from './sketchesBoba/ref5.png'
import ref6 from './sketchesBoba/ref6.png'
import ref7 from './sketchesBoba/ref7.png'
import ref8 from './sketchesBoba/ref8.png'
import ref9 from './sketchesBoba/ref9.png'
import ref10 from './sketchesBoba/ref10.png'
import ref102 from './sketchesBoba/ref10-2.png'


function BobaLockscreen() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Navbar isHomeActive={'activeFalse'} isResumeActive={'activeFalse'} isPortfolioActive={'activeTrue'} isAboutActive={'activeFalse'}/>

      <div className='projPageTitle'> Boba Shop Lockscreen</div>

   
      <div className='simpleBox3'>
      <div className='ProjTitle'> Overall Description: </div>
      <div className='projText'>For this lockscreen, your password is your regular bubble tea order- customized to your exact standards.  First, pick your drink of choice and mix it until the desired result is achieved.  Shake your drink (via shaking your phone) to mix it until it's just right- but be sure not to under or overmix or your order will be all wrong!  When you are done mixing and ready to unlock, stab the straw into your drink (via swinging your phone in a swift downwards motion).  If your drink is correct, you will be permitted to enter.</div>        
      <div className='ProjTitle'> Initial sketches: </div>
      <div className='projText'>Each group member came up with 10 initial sketches and we discussed them as a group. The one idea that stood out to us the most was Make Your Favorite Smoothie, so we proceeded with detailed sketches of it.</div>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init1} 
                alt='Slide 1'>
            </img>
            <div className='text-center'>
                <p>1.Make your favorite Smoothie (Seyeon): The passcode to unlock the phone is the recipe of your favorite smoothie. First, you have to select ingredients. When you are done selecting ingredients, you need to shake your phone to mix and blend selected ingredients to make your favorite smoothie. If selected ingredients are matching and the phone is shaken enough to blend everything, you will be able to unlock the phone.</p>
            </div>

        </Carousel.Item>
        
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={init2} 
                alt='Slide 2'>
            </img>
            <div className='text-center'>
                <p>2. Rotate a Cube(Se Yeon): You will be given a cube and each side of the cube will have different symbols or drawings on it. In order to unlock the phone, you have to tilt your phone in order to rotate a given cube. If you can set the cube so that it shows 3 predetermined sides of the cube, the phone will be unlocked.</p>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init3} 
                alt='Slide 3'>
            </img>
            <div className='text-center'>
                <p>3.Volleyball Serve Unlock (mackenzie) : Based on how volleyball players often have a unique serving routine- move your phone up and down a certain number of times as if bouncing the ball, then lift your phone and perform a throwing motion as if to serve the ball and unlock your phone.</p>
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
                4.	Secret Handshake Unlock (mackenzie) : Using the phone camera, perform a series of hand gestures in the correct order to unlock your phone.
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
                5.	Drawing Exercise Unlock (mackenzie): Ideal for people that want to improve their art skills.  Each time you go to unlock, you will be presented with a simple step by step drawing tutorial.  Take a picture after you complete each step in order to unlock your phone and ensure you get your practice in!
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
                6.	Phone Dropper/Tosser (Jane): Drop your phone a short distance and catch it to unlock or toss your phone to a (trusted) friend and have them catch it to unlock. If you are unable to catch your phone, not only will it stay locked but it may be broken as well!
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
                7.	Tapping Code (Jane): Tap your phone on an object the right number of times and with the right rhythm to unlock.
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
                8.	Find the Exit (Jane): Moving in real life will move your character on screen. Move your character to the correct exit to unlock your phone.
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
                9.	Colour Shuffle (Mar): Select different colours to combine, add them to the mixing bucket and shake your phone to mix the colours. The phone unlocks once the correct colour and shade has been reached
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
                10. Morning Routine  Lock (Mar): This phone lock is good for people that find themselves spending way too much time on their phone in the morning. To unlock your phone, you must complete your entire morning routine. (for example, eat breakfast, brush teeth, work out, shower) After completing each step in your routine you must take a picture of the task to prove that the task has been completed. Once all tasks are complete, the phone unlocks.
                </p>
            </div>

        </Carousel.Item>

      </Carousel>
     

      <div className='ProjTitle'> Refined Sketches: </div>

      <div className='projText'> During our refined sketching process we weren’t convinced on the idea of making a smoothie and our refined sketches reflect the different ideas of how we could use gestures to create different food and drinks. In the end we settled on a Bubble Tea Shop because we all love bubble tea and the gestures were interesting and easier to implement in the given time. At first we considered choosing different ingredients and having several steps like pouring the milk and adding the toppings. However we realized that this was a bit too much to implement and seemed a bit tedious for a lock screen so we chose a more simplified version. Thus, we came up with our final design of creating a customized bubble tea order by choosing a bubble tea flavor, shaking the phone to mix it and swinging your phone downward to put in the straw. </div>
     
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >

<Carousel.Item>
    <img 
        className="d-block w-100" 
        src={ref1} 
        alt='Slide 1'>
    </img>
    <div className='text-center'>
        <p>1.Baking Simulator (mackenzie): Similar to the smoothie idea, but instead using baking ingredients and steps.  This includes swinging your phone to cut ingredients, and rotating the phone to change the oven temperature.  Your password is based on how many times you cut and the oven temperature.</p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className='d-block w-100'
        src={ref2} 
        alt='Slide 2'>
    </img>
    <div className='text-center'>
        <p>2.Bubble Tea Shop (mackenzie): Choose flavor, toppings and sugar level as part of your password.  Then, shake to mix until you get the desired result.  The status of how much you have mixed your drink will be indicated by a progress bar.</p>
    </div>
</Carousel.Item>

<Carousel.Item>
    <img 
        className="d-block w-100" 
        src={ref3} 
        alt='Slide 3'>
    </img>
    <div className='text-center'>
        <p>3.Baking Simulator v2 (mackenzie): Similar to ideas above, but you are able to choose which preparation steps are needed for your recipe password.  (You can choose which type of sensor based activity needed to unlock your phone).</p>
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
        4.	Bubble Tea Shop v2 (Jane): Rather than choosing the flavor, toppings and sugar levels, you simply choose your favorite kind of bubble tea. Then, you shake your phone to mix the drink and perform a downward motion to put in your straw. If you mixed it the correct amount and performed the downward motion correctly, your phone is unlocked.
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
        5.	Pancake Recipe (Jane): Select the correct pancake ingredients and perform the correct gestures to unlock your phone. For example if you selected an egg, you would tap your phone to crack the egg. If you selected flour, you would have to pour the correct amount of flour.         </p>
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
        6.	Bubble Tea Shop v3: Similar to Bubble tea shop idea, but you are able to choose tea flavor and select boba type. Then, you shake your phone to mix the drink and tilt your phone to pour tea in a cup.        </p>
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
        7.	Bubble Tea Shop V4:Similar to Bubble tea shop idea, but you are able to choose sugar level, ice level, and toppings. Then, you shake your phone to mix the drink and tilt your phone to pour tea in a cup        </p>
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
        8.	Recipe Lock (Mar): For the first recipe lock detailed idea, we had to find a way to unlock the phone using the user’s favourite recipe.  I tried to think about the types of screens and motions the user might have to do in order to create their favourite recipe and recreate it. The user will first have a screen with a variety of different ‘stations’. Each station will represent a different step in the cooking process. For example, there could be a cutting station, blending station and so on. Each station would also have a different motion associated with it. For example, the pouring station has the user tilt their phone as if they were pouring. To unlock the phone, the user would have to click on the correct stations and do the correct movements in the correct order.        </p>
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
        9.	Pancake Recipe v2 (Mar): Since the first version was a bit complicated and had many steps, this version is more simple with 1 single screen that contains all ingredients and utensils necessary to prepare the food. Here you simply press on both of the things you want to ‘combine’ (for example flour and a bowl) and shake your phone to combine. Progress is shown by showing that the flour is now inside the bowl. Once the correct pancake is cooked, the phone unlocks.
        </p>
    </div>

</Carousel.Item>

<Carousel.Item>
    <img 
        className="sketch" 
        src={ref10} 
        alt='Slide 10'>
    </img>
    <img 
        className="sketch" 
        src={ref102} 
        alt='Slide 10'>
    </img>
    <div className='text-center'>
        <p>
        10.	Bubble Tea Shop v5 (Mar): I took the same idea from Pancake Recipe but made it work for bubble tea. Everything you need is still in one screen and to “combine” things you have to select both of them and pour your phone instead of shaking since I thought pouring might make more sense for a drink.        </p>
    </div>

</Carousel.Item>

</Carousel>



      
      
        <div className='ProjTitle'> The final outcome :</div>
   
        <iframe width="1024" height="646" src="https://www.youtube.com/embed/pzoRjrdpPuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <iframe width="1024"  height="576" src="https://www.youtube.com/watch?v=pzoRjrdpPuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        {/* <div className='ProjTitle'> Final Product: </div> */}
        <div className='ProjTitle'> My Contributions: </div>
        <div className='sketchDesc'> For this project, I contributed through my sketches and ideas like the rest of the team. In addition to this, I designed the UI for the ‘select flavour’ screen as well as the ‘shake screen’. This was done in Adobe XD. I also coded the HTML, CSS and JavaScript for those 2 screens. I also contributed by making all the animations on After Effects using the Bodymovin extension and by recording and implementing the mix sound effect. Lastly, I filmed and edited the demo video.</div>
        <a style={
            {fontSize: '40px', padding: '50px', color:'#ff57a6'}
        } href= 'https://kiwigi.github.io/581RecipeLockscreen/'> Click here to go to the website! </a>
        <a style={
            {fontSize: '25px', padding: '50px', color:'#696969'}
        }href='https://github.com/kiwigi/581RecipeLockscreen'>Click here to see the source code.</a>
        </div>
        

      
    </div>
  );
}

export default BobaLockscreen;
