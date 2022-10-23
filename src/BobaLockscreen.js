
import Navbar from './Navbar'




function BobaLockscreen() {


  return (
    <div>
      <Navbar isHomeActive={'activeFalse'} isResumeActive={'activeFalse'} isPortfolioActive={'activeTrue'} isAboutActive={'activeFalse'}/>

      <div className='projPageTitle'> Boba Shop Lockscreen</div>

   
      <div className='simpleBox3'>
      <div className='ProjTitle'> Overall Description: </div>
      <div className='projText'>For this lockscreen, your password is your regular bubble tea order- customized to your exact standards.  First, pick your drink of choice and mix it until the desired result is achieved.  Shake your drink (via shaking your phone) to mix it until it's just right- but be sure not to under or overmix or your order will be all wrong!  When you are done mixing and ready to unlock, stab the straw into your drink (via swinging your phone in a swift downwards motion).  If your drink is correct, you will be permitted to enter.</div>        
      <div className='ProjTitle'> Initial sketches: </div>
      <div className='projText'>Each group member came up with 10 initial sketches and we discussed them as a group. The one idea that stood out to us the most was Make Your Favorite Smoothie, so we proceeded with detailed sketches of it.</div>
      {/* <img className='sketch' src={s1}></img> */}
      <div className='descContainer'>
        <div className='sketchDesc'> 1. Make your favorite Smoothie (Seyeon): The passcode to unlock the phone is the recipe of your favorite smoothie. First, you have to select ingredients. When you are done selecting ingredients, you need to shake your phone to mix and blend selected ingredients to make your favorite smoothie. If selected ingredients are matching and the phone is shaken enough to blend everything, you will be able to unlock the phone.</div>
        <div className='sketchDesc'> 2.	Rotate a Cube(Se Yeon): You will be given a cube and each side of the cube will have different symbols or drawings on it. In order to unlock the phone, you have to tilt your phone in order to rotate a given cube. If you can set the cube so that it shows 3 predetermined sides of the cube, the phone will be unlocked.</div>
        <div className='sketchDesc'> 3.	Volleyball Serve Unlock (mackenzie) : Based on how volleyball players often have a unique serving routine- move your phone up and down a certain number of times as if bouncing the ball, then lift your phone and perform a throwing motion as if to serve the ball and unlock your phone.</div>
        <div className='sketchDesc'> 4.	Secret Handshake Unlock (mackenzie) : Using the phone camera, perform a series of hand gestures in the correct order to unlock your phone.</div>
        <div className='sketchDesc'> 5.	Drawing Exercise Unlock (mackenzie): Ideal for people that want to improve their art skills.  Each time you go to unlock, you will be presented with a simple step by step drawing tutorial.  Take a picture after you complete each step in order to unlock your phone and ensure you get your practice in!</div>
        <div className='sketchDesc'> 6.	Phone Dropper/Tosser (Jane): Drop your phone a short distance and catch it to unlock or toss your phone to a (trusted) friend and have them catch it to unlock. If you are unable to catch your phone, not only will it stay locked but it may be broken as well! </div>
        <div className='sketchDesc'> 7.	Tapping Code (Jane): Tap your phone on an object the right number of times and with the right rhythm to unlock.</div>
      </div>

      
      {/* <img className='sketch' src={s2}></img> */}
      <div className='sketchDesc'> </div>

      {/* <div className='descContainer'> */}
        <div className='sketchDesc'> 8.	Find the Exit (Jane): Moving in real life will move your character on screen. Move your character to the correct exit to unlock your phone.</div>
        <div className='sketchDesc'> 9.	Colour Shuffle (Mar): Select different colours to combine, add them to the mixing bucket and shake your phone to mix the colours. The phone unlocks once the correct colour and shade has been reached.</div>
        <div className='sketchDesc'> 10. Morning Routine  Lock (Mar): This phone lock is good for people that find themselves spending way too much time on their phone in the morning. To unlock your phone, you must complete your entire morning routine. (for example, eat breakfast, brush teeth, work out, shower) After completing each step in your routine you must take a picture of the task to prove that the task has been completed. Once all tasks are complete, the phone unlocks.</div>
      {/* </div> */}
      <div className='projText'> On September 16, 2022, our group had a team meeting to share and discuss which idea we wanted to pursue. The meeting began with each member presenting the 10 initial sketches they created. Once all ideas had been shared, we each voiced which sketches presented by others in the group we thought were exceptional and why. After collecting five of our best ideas, we conducted a google forms vote to see which idea was the favorite. We came to a tie between Alexis’s routine task tracker and Kathryn’s internal time tester. We ran another google forms for the tie, and the results showed we all were ambitious towards Alexis’s routine task tracker. By voting through google forms each member of the team was able to voice their opinion anonymously without being influenced and enticed to choose an option.</div>

      <div className='ProjTitle'> 10 Detailed Sketches: </div>

      <div className='projText'> With the project idea we decided on in mind, each teammate was tasked with making their own detailed sketches for a total of 10 detailed team sketches.</div>
      {/* <img className='sketch' src={ds1}></img> */}
      <div className='sketchDesc'> For my sketches I focused on creating more detailed versions of the UI. My first detailed sketch is for a website. In the homepage, there are several task buttons. Each button will display the name of the task. Once you click on a task button you will be taken to a 2nd page containing an audio player. That will display an image of the album, and a bar showing the duration of the song. There is also a back button at the top left corner to go back to the tasks page. On the task page there is also a button that allows a user to add a new task. Pressing this button takes the user to a new page where they can add the name of the task, the duration of the task, and what kind of audio they want to play during this task. The menu would show song, playlist, or podcast as options. Once the user presses done, the task gets added to the main task page.</div>
      <div className='sketchDesc'> My second detailed sketch I thought about what the first sketch was missing. The first sketch might be a bit too overwhelming if there were many tasks. To fix this, the second sketch sorts tasks by categories and adds an icon to each task. This would hopefully help the user browse through their tasks better and easier when there are many tasks present. Once a task has been selected, again the player window will pop up. The player window looks very similar to the one on sketch one except for it displaying a playlist instead of a singular song and the progress bar now shows the progress of the entire playlist.</div>
      {/* <img className='sketch' src={ds2}></img>
      <img className='sketch' src={ds3}></img> */}
      <div className='sketchDesc'> For my third sketch I wanted to do something a lot simpler. I based it off a simple kitchen timer. The button is the timer, and the user would drag the pointer to their desired time and once it is on the desired time they can press it to switch to the player page.  On the player page it shows how much time is remaining  as well as the song title and a progress bar.</div>
      <div className='ProjTitle'> Teammate's Detailed Sketches: </div>
      {/* <img className='sketch' src={vs1}></img>
      <img className='sketch' src={vs2}></img>
      <img className='sketch' src={vs3}></img>
      <img className='sketch' src={as1}></img>
      <img className='sketch' src={as2}></img>
      <img className='sketch' src={ks1}></img>
      <img className='sketch' src={ks2}></img> */}
      <div className='ProjTitle'> Final Design: </div>
      <div className='projText'> During our refined sketching process we weren’t convinced on the idea of making a smoothie and our refined sketches reflect the different ideas of how we could use gestures to create different food and drinks. In the end we settled on a Bubble Tea Shop because we all love bubble tea and the gestures were interesting and easier to implement in the given time. At first we considered choosing different ingredients and having several steps like pouring the milk and adding the toppings. However we realized that this was a bit too much to implement and seemed a bit tedious for a lock screen so we chose a more simplified version. Thus, we came up with our final design of creating a customized bubble tea order by choosing a bubble tea flavor, shaking the phone to mix it and swinging your phone downward to put in the straw. </div>
      {/* <img className='sketch' src={xdmockup}></img> */}
      <div className='sketchDesc'> After we decided on a solid design, I decided to make a higher fidelity mockup on Adobe XD. This helped me visuallize what the website might look like. Although it ended up looking different, the colour scheme and circular buttons stay the same.</div>
      {/* <div className='ProjTitle'> Final Product
        <a href='https://purrfect-pepper-headstand.glitch.me/'> Final Product
        </a>
        </div> */}
        <div className='ProjTitle'> Demo Video: </div>
        <iframe width="1024"  height="576" src="https://www.youtube.com/embed/JqFgT-a2bJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <div className='ProjTitle'> Final Product: </div> */}
        <div className='ProjTitle'> My Contributions: </div>
        <div className='sketchDesc'> For this project, I contributed through my sketches and ideas like the rest of the team. In addition to this, I made the mockup for the task page and worked on the CSS and JavaScript for the site. Lastly, I also edited the demo video for the project.</div>
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
