
import Navbar from './Navbar'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import init1 from './sketchesCampus/init1.png'
import init2 from './sketchesCampus/init2.png'
import init3 from './sketchesCampus/init3.png'
import init4 from './sketchesCampus/init4.png'
import init5 from './sketchesCampus/init5.png'
import init6 from './sketchesCampus/init6.png'
import init7 from './sketchesCampus/init7.png'
import init8 from './sketchesCampus/init8.png'
import init9 from './sketchesCampus/init9.png'
import init10 from './sketchesCampus/init10.png'
import ref1 from './sketchesCampus/ref1.png'
import ref2 from './sketchesCampus/ref2.png'
import ref3 from './sketchesCampus/ref3.png'
import ref4 from './sketchesCampus/ref4.png'
import ref5 from './sketchesCampus/ref5.png'
import ref6 from './sketchesCampus/ref6.png'
import ref7 from './sketchesCampus/ref7.png'
import ref8 from './sketchesCampus/ref8.png'
import ref10 from './sketchesCampus/ref9.png'
import ref9 from './sketchesCampus/ref10.png'

import uimocks from './sketchesCampus/uimocks.png'


function CampusConfessions() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Navbar isHomeActive={'activeFalse'} isResumeActive={'activeFalse'} isPortfolioActive={'activeTrue'} isAboutActive={'activeFalse'}/>

      <div className='projPageTitle'>Campus Confessions</div>

   
      <div className='simpleBox3'>
      <div className='ProjTitle'> Overall Description </div>

        <div className='projText'> Have a confession to make? Send it here! Send us your most funny, embarrassing, truthful, inspiring, and straight out entertaining anonymous confessions here! You will be able to see all confessions sent from nearby locations of yours. And If you send a confession, it will be visible to all people when they are at a nearby location where you sent the confession from. Campus Confessions connects the minds and hearts of university students through interactive contents that reflect and aid their daily lives and struggles.
</div>
<div className='ProjTitle'> Concept Video: </div>

   <iframe width="1080" height="720" src="https://www.youtube.com/embed/rAPSK5KHSHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div className='ProjTitle'> Project Goal: </div>
      <div className='projText'>For this project, our goal is to create a novel interface to augment in-person/or remote communication and collaboration. Our group decided to create a Campus Confessions website which will connect hundreds of university students through entertaining and interactive contents. People can anonymously share their confessions and spill tea. Then only people at nearby locations where the confession was sent will be able to view those confessions.</div>        
      <div className='ProjTitle'> Initial sketches: </div>
      <div className='projText'>During the initial design phase of the project, each team member created 10 initial sketches. Then we met as a group to discuss the initial sketches and decide upon which ones we found most promising. There were a few initial sketches that stood out including ComSci Tinder, Left Behind Messages, and AR Pizza Order. We chose those three of our initial sketches to create detailed sketches. </div>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init1} 
                alt='Slide 1'>
            </img>
            <div className='text-center'>
                <p>1.ComSci Tinder (Seyeon): Like Tinder app, you will be able to find a computer science student to build a side project together. It will show you some basic information such as what year they are in, interests, language preferences. If both of the people swiped right (Yes, want to build a project together), you will be matched and will be able to chat with that person.  </p>
            </div>

        </Carousel.Item>
        
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={init2} 
                alt='Slide 2'>
            </img>
            <div className='text-center'>
                <p>2. AR Pizza Order (Seyeon): You can make your own pizza in AR. And you can submit what you made as an order. This is a more interactive and fun way to order food.</p>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={init3} 
                alt='Slide 3'>
            </img>
            <div className='text-center'>
                <p>3.Remote Dermatologist (Seyeon): If you have any skin related problems, take a picture of your skin and submit it. Then the dermatologist will be able to provide diagnosis and prescribe a medicine.</p>
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
                4.	Study With Me (Seyeon): You can live-stream your study session and people can join your study session and study with you. You can also chat with people and ask and answer questions through chat. 


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
                5.	Left Behind Messages (Jane): You can write messages and put them in a certain location in AR. If someone goes to that location, they can see the message through their camera. In this way you can connect with others and get to know the thoughts of people nearby. 

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
                6.	Capture The Flag (Jane): Go to different locations and solve puzzles in AR. Each puzzle is worth a certain amount of points and the person with the most points wins a prize. Based on the capture the flag security competitions.  


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
                7.	How Was Your Day? (Mar): A way to see how other people’s day has been through AR. AR text will show up above them displaying an overview of that person’s day. This includes how the person feels about their day and what events are contributing to that feeling.

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
                8.	Asynchronous Video Calls (Mar): A way to have meetings Asynchronously for people who work remotely. The meeting host will post an initial video and others can reply to that video with their own videos.


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
                9.	Remote Art Critique (Mackenzie): Ideal for learning art remotely.  The student will show their work using their camera to the instructor and the instructor is able to make edits and add comments on the piece using their own device.

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
                10. Direction Assist (Mackenzie): This is a way to direct your friends to where you are sitting when you are meeting up in a busy location!  The friend already seated will draw directions on a map and arrows will appear on the other’s camera in AR to direct them.

                </p>
            </div>

        </Carousel.Item>

      </Carousel>
     

      <div className='ProjTitle'> Refined Sketches: </div>

      <div className='projText'> We created detailed sketches for ComSci Tinder, AR Pizza Order and Left Behind Messages. We explored different variations based on some of our most promising initial sketch ideas. We liked all of the refined sketches based on ComSci Tinder such as Game Jam Group Finder, Mentorship, and Game Development. However, we thought that it would not be feasible to build an entire app in a given timeframe.

Hence, we decided to go with Campus Confession. This refined sketch is based on a Left Behind Message initial sketch. This website will let students share their confessions anonymously. And only people at nearby locations from where the confession was sent will be able to view shared confessions. We all liked this idea because most of the Campus Confessions start with “The girl who was sitting at …”, or “To the girl I saw at…” We thought that it would be great to add location information to confessions. This will make Campus Confession more private since it will limit the visibility to only those people who are in that location.
</div>
     
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={ref1} 
                alt='Slide 1'>
            </img>
            <div className='text-center'>
                <p>1.AR Restaurant Review (Seyeon): When you capture restaurant sign/name through your phone camera, it will show you some of the reviews of restaurants in AR.</p>
            </div>

        </Carousel.Item>
        
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={ref2} 
                alt='Slide 2'>
            </img>
            <div className='text-center'>
                <p>2. Left Behind a talking AR character (Seyeon): Record a voice message and the AR character will deliver your voice message for you. This AR character shows people talking animation while delivering your voice message.</p>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <img 
                className="d-block w-100" 
                src={ref3} 
                alt='Slide 3'>
            </img>
            <div className='text-center'>
                <p>3.AR Left Behind Messages Pictures/Video Version (Seyeon):  Leave behind a AR picture or video you want to share with your friends. </p>
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
                4.	Music Messages (Jane): Leave behind a song you’ve been listening to. Can show the name of the artist and song. Potentially could play a clip of the song as well. 

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
                5.	AR Geocaching (Jane): Similar to real life geocaching, except you leave behind a cache in AR. Follow the hints to locate the cache.

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
                6.	AR Reply (Jane): Leave behind messages that you can reply to. Start conversations with new people!

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
                7.	AR Confessions (Mar): Like UofC confessions but in AR! Share anonymous confessions with those around you. Users can use their camera to see your confession if they’re near where you sent the confession from.
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
                8.	Left Behind Messages - friends only mode (Mar): Leave special secret AR notes behind in certain locations for your friends that can’t be seen by anyone else.

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
                9.	Anonymous Critiques- leave anonymous messages on pieces during a critique that will show up in AR.
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
                10. Study Spot Reviews (Mackenzie)- Leave reviews for study spots around campus so that new students can view them in AR and pick the best ones.
                </p>
            </div>

        </Carousel.Item>

      </Carousel>

      <div className='ProjTitle'> High Fidelity Mockups:</div>

        <img style={{maxWidth: '500px'}}src={uimocks}></img>


      
      
        <div className='ProjTitle'> The final outcome :</div>
        <iframe width="1024" height="646" src="https://www.youtube.com/embed/VFI7ZmMDF4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <iframe width="1024"  height="576" src="https://www.youtube.com/watch?v=pzoRjrdpPuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        {/* <div className='ProjTitle'> Final Product: </div> */}
        <div className='ProjTitle'> My Contributions: </div>
        <div className='sketchDesc'> For this project, I contributed through my sketches and ideas like the rest of the team. In addition to this, I designed the UI for the main screen as well as the post confession screen. This was done in Adobe XD. I also helped with getting the location of the user and some of the CSS for the webpage. Lastly, I edited the demo video.</div>
        <a style={
            {fontSize: '40px', padding: '50px', color:'#ff57a6'}
        } href= 'https://buttoned-wobbly-acoustic.glitch.me/'> Click here to go to the website! </a>
        <a style={
            {fontSize: '25px', padding: '50px', color:'#696969'}
        }href='https://glitch.com/edit/#!/buttoned-wobbly-acoustic?path=public%2FconfessionsDashboard.html%3A1%3A0'>Click here to see the source code.</a>
        </div>
        

      
    </div>
  );
}

export default CampusConfessions;
