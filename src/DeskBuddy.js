
import Navbar from './Navbar'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import init1 from './sketchesDeskBuddy/init1.png'
import init2 from './sketchesDeskBuddy/init2.png'
import init3 from './sketchesDeskBuddy/init3.png'
import init4 from './sketchesDeskBuddy/init4.png'
import init5 from './sketchesDeskBuddy/init5.png'
import init6 from './sketchesDeskBuddy/init6.png'
import init7 from './sketchesDeskBuddy/init7.png'
import init8 from './sketchesDeskBuddy/init8.png'
import init9 from './sketchesDeskBuddy/init9.png'
import init10 from './sketchesDeskBuddy/init10.png'
import ref1 from './sketchesDeskBuddy/ref1.png'
import ref2 from './sketchesDeskBuddy/ref2.png'
import ref3 from './sketchesDeskBuddy/ref3.png'
import ref4 from './sketchesDeskBuddy/ref4.png'
import ref5 from './sketchesDeskBuddy/ref5.png'
import ref6 from './sketchesDeskBuddy/ref6.png'
import ref7 from './sketchesDeskBuddy/ref7.png'
import ref8 from './sketchesDeskBuddy/ref8.jpg'
import ref9 from './sketchesDeskBuddy/ref10.png'
import ref10 from './sketchesDeskBuddy/ref10.png'


function DeskBuddy() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Navbar isHomeActive={'activeFalse'} isResumeActive={'activeFalse'} isPortfolioActive={'activeTrue'} isAboutActive={'activeFalse'}/>

      <div className='projPageTitle'>Desk Buddy</div>

   
      <div className='simpleBox3'>
      <div className='ProjTitle'> Overall Description </div>

        <div className='projText'> Desk Buddy is designed for people who often work while sitting for prolonged periods of time! (Such as computer science students, artists, or anyone that works remotely)

Desk Buddy was created to remind and motivate you to get up and move around regularly. After a certain amount of sitting time, the bot will approach you to remind you to stand up and exercise. The bot doubles as a weight, so you can pick up the bot, and do some exercises with it until it’s time to go back to work. It also has a cute design to look aesthetic on your desk and to feel more like a supportive buddy rather than a boring old reminder box. 

The bot uses an accelerometer sensor for input to detect that the user is actually getting up and moving around. The number display outputs how many squats the user completes while up from their desk. Once the user has completed a set of squats, the display will show “done” and the user can go back to work. The timer will then reset and start counting down from one hour again.

        </div>
<div className='ProjTitle'> Concept Video: </div>

<iframe width="1080" height="720" src="https://www.youtube.com/embed/6F5d0ht7ycA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div className='ProjTitle'> Initial sketches: </div>
      <div className='projText'>Since we were working with hardware design for the first time, it was initially difficult to come up with ideas as we weren’t sure what would be possible to make.  We came up with a range of designs, mostly related to self care ideas.
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init1} 
                alt='Slide 1'>
            </img>
            <div className='text-center'>
                <p>
                Gesture Drawing Timer (Mackenzie): Use for quick art practice.  Set the timer using an app on your phone and specify which type of reference you want.  Each reference image is timed and will switch after a certain period.

                </p>
            </div>

        </Carousel.Item>
        
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={init2} 
                alt='Slide 2'>
            </img>
            <div className='text-center'>
                <p>
                Snack Security System (Mackenzie): Fill your bowl with your favorite snack.  When you leave, set the bowl to remember the weight as you left it.  While you are away, you will be notified if there is a change in weight so you know if someone is taking your snacks!
                </p>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init3} 
                alt='Slide 3'>
            </img>
            <div className='text-center'>
                <p>
                Desk Pal (Mackenzie): Mobile pencil/stationery holder that moves towards you when you need it.

                </p>
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
                Empty Water Bowl Detector (Seyeon): Lights up to let the user know that their pet’s water bowl is low or empty.

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
                Avoid Obstacles (Seyeon): Wearable device that alerts visually impaired when an obstacle is nearby.
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
                It’s Time To Move! (Mar): Bot that reminds you to stand up after working at your desk for a long time.

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
                Healthy Coping Reminder (Mar): Can detect crying sounds and will offer helpful coping strategies as a response.
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
                Workout Buddy (Jane): Press button to start workout.  The workout will be displayed and you will have a set timer for each workout.

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
                Plant Care (Jane): To be placed in the soil of the plant pot- will measure sunlight and moisture levels to ensure the plant is having its needs met.
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
                Short Story Generator (Jane):  Press a button on the top of the box when you’re bored and a short story will be dispensed.

                </p>
            </div>

        </Carousel.Item>

      </Carousel>
     

      <div className='ProjTitle'> Refined Sketches: </div>

      <div className='projText'> 
      For the Refined Sketches, we decided to focus on the stand-up reminder idea from the above Concept Sketches.  We ended up deciding on a bot that you can actually pick up and use as a part of your exercise break.  It will detect your movement to ensure that you are getting the most out of your break.
    </div>
     
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={ref1} 
                alt='Slide 1'>
            </img>
            <div className='text-center'>
                <p>
                Far Away (Jane): Device is placed far away so you must physically get up to turn it off.

                </p>
            </div>

        </Carousel.Item>
        
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={ref2} 
                alt='Slide 2'>
            </img>
            <div className='text-center'>
                <p>
                Eye Exercise (Jane): Suggests eye exercises after staring at a screen for prolonged periods of time.  The device uses a laser beam/light to direct your eyes away from the screen.
                </p>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={ref3} 
                alt='Slide 3'>
            </img>
            <div className='text-center'>
                <p>
                Wrist Band (Jane): Wearable device that will buzz to alert you to stand up.

                </p>
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
                Walk With Me (Mar): You must pick up and walk with the device so it can detect your movement.

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
                Productivity Timer (Seyeon): Times how long you are productive for and lets you take breaks at different intervals
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
                Stretch Reminder (Seyeon): Device is attached to an arm band so it can detect when you stretch.
                </p>
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
                Posture Corrector (Seyeon): Set the device behind you while you are sitting.  If your posture slips, the device will alert you to correct it.
                </p>
            </div>

        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={ref8} 
                alt='Slide 8'>
            </img>
            <div className='text-center'>
                <p>
                Weighted Bot (Jane): The bot will include a weight in it so you are able to incorporate the bot in your workout.

                </p>
            </div>

        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={ref9} 
                alt='Slide 9'>
            </img>
            <div className='text-center'>
                <p>
                Annoying Bot (Mackenzie): Bot will move towards you and repeatedly bump into you/beep at you until you pick it up and move around with it.                </p>
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
                Sitting Too Long (Jane): Sit on the button while you are working.  If you sit for too long, the device will beep until you stand up.
                </p>
            </div>

        </Carousel.Item>

      </Carousel>


      
        <div className='ProjTitle'> The final outcome :</div>
        <div className='projText'>
        This project was implemented using an Arduino Uno, ADXL345 Three Axis Acceleration, 4 digit 7 segment Display, and Sony Toio. We used a cardboard box to hide all wires and boards that did not need to be exposed to increase aesthetic appeal. 
        </div>
        <iframe width="1080" height="720" src="https://www.youtube.com/embed/G9hVUIF753s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className='ProjTitle'> My Contributions: </div>
        <div className='sketchDesc'> For this project, I contributed through my sketches and ideas like the rest of the team. In addition to this, I also edited both videos</div>
         <a style={
            {fontSize: '40px', padding: '50px', color:'#ff57a6'}
        } href= 'https://create.arduino.cc/editor/sysim123/8bd99e83-c9d7-4401-a1d1-d673d0c96625/preview'> Click here to see the Arduino code </a>
        <a style={
            {fontSize: '25px', padding: '50px', color:'#696969'}
        }href='https://glitch.com/edit/#!/grandiose-evanescent-wolf'>Click here to see the Toio code</a> 
        </div>
        

      
    </div>
  );
}

export default DeskBuddy;
