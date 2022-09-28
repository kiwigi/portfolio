
import Navbar from './Navbar'
import SngBob from './Spongebob.png'
import s1 from './sketches/Page1.jpeg'
import s2 from './sketches/Page2.png'
import ds1 from './sketches/detailed/Page1.jpeg'
import ds2 from './sketches/detailed/Page2.jpeg'
import ds3 from './sketches/detailed/Page3.jpeg'
import vs1 from './sketches/detailed/vs1.jpeg'
import vs2 from './sketches/detailed/vs2.jpeg'
import vs3 from './sketches/detailed/vs3.jpeg'
import as1 from './sketches/detailed/as1.png'
import as2 from './sketches/detailed/as2.png'
import ks1 from './sketches/detailed/ks1.png'
import ks2 from './sketches/detailed/ks2.png'
import xdmockup from './sketches/detailed/xdmockup.png'



function PortfolioProj1() {


  return (
    <div>
      <Navbar isHomeActive={'activeFalse'} isResumeActive={'activeFalse'} isPortfolioActive={'activeTrue'} isAboutActive={'activeFalse'}/>

      <div className='projPageTitle'> SpongeBob Task Tracker</div>

   
      <div className='simpleBox3'>
      <div className='ProjTitle'> Project Description: </div>
      <div className='projText'>Project 1 focuses on interacting with a button that is catered towards a specific character. We chose to center our button around the fictional character we all know and love, SpongeBob. The “SpongeBob Task Tracker” is an interactive application that SpongeBob uses to time the duration of his common daily tasks while simultaneously listening to his favorite tunes. Through different task buttons SpongeBob can listen to music for each task, once the music stops playing, he knows there is no more time allotted in his day for that task.</div>        
      <div className='ProjTitle'> Initial sketches: </div>
      <div className='projText'>To start the project off, each team member was tasked with creating 10 concept sketches each. For this project, the main idea was a button. </div>
      <img className='sketch' src={s1}></img>
      <div className='descContainer'>
        <div className='sketchDesc'> #1: My first sketch is a simple button that counts how many cups of water you drink a day. Each button press will add 1 cup to the tally, the longer you hold the button, the more that the cup gets filled. At the end of the day, a user would end up with a tally of how many cups they have drank. </div>
        <div className='sketchDesc'> #2: The second sketch idea plays a random YouTube video each time the button is pressed.</div>
        <div className='sketchDesc'> #3: The third sketch idea is a very simplified pet friend simulator. Each time the button is pressed, a treat is given to the cat. You can also tap on the cat to give it pets. At the top of the page, there is a “friendship meter” that goes up after petting the cat or giving it </div>
        <div className='sketchDesc'> #4: My fourth sketch idea was based on a popular aim trainer called “Aim Labs”. It is a mini-game that is meant to help you get better at first person shooter games like Valorant or CS:GO. The game has a crosshair in the center of the screen. Periodically, an orb will pop up in the window and the player must tap on the orb before it fades. There will also be a high score displayed at the very top of the screen, that keeps track of how many orbs the user has managed to hit in a row (before the orb fades away).</div>
        <div className='sketchDesc'> #5: My fifth sketch idea is basically a cat piano (I really like cats). The buttons are the paw pads displayed on the screen, when pressed the button will make a “meow” sound at a certain key. </div>
        <div className='sketchDesc'> #6: My sixth sketch is a simple “high five” button. This application would be used with a touch pad (like on a smartphone or tablet) the button simply says “good job” after you touch it. (you can tell I was running out of ideas at this point)</div>
        <div className='sketchDesc'> #7: My seventh button idea was aimed to alleviate a personal problem I tend to run into. Often, I find myself wanting to watch something while I eat dinner, but I tend to struggle to find things to watch. I decided it might be cool to have an application that recommends a random show or movie to you, which eliminates the energy and time from having to find one yourself. What’s fun about the application is that you won’t really know that you’ll be getting, and you might get bad recommendations that you end up watching. Which is cool since I find it hard to get myself to watch “bad” movies.</div>
      </div>

      
      <img className='sketch' src={s2}></img>
      <div className='sketchDesc'> #8: My eighth idea is based on how satisfying it is to pop bubble wrap. This idea would be executed to be used on a smartphone or tablet with haptic feedback. Each button will look like a bubble and when pressed, the button will generate some sort of haptic feedback and a popping sound and popping animation will also be played. The haptic feedback on the iPhone for example is very impressive and an application like this could work well on it. </div>

      <div className='descContainer'>
        <div className='sketchDesc'> #9 : My ninth idea is like other productivity apps that force you to be productive by limiting distractions coming from your phone. Here you have a simple button on the phone screen and when pressed, the phone gets locked making you unable to use the phone for a certain amount of time.</div>
        <div className='sketchDesc'> #10: My tenth and final idea is just a dress up game. Each piece of clothing is a button that once clicked will appear on the character. </div>
      </div>
      <div className='ProjTitle'> 10 Detailed Sketches: </div>

      <div className='projText'> For the next step of the project, my team and I discussed our ideas with one another and decided on which idea to do. We ended up going with my teammate’s idea. The idea was basically a way to time tasks and a way to make tasks more enjoyable with the help of music. The user would have buttons for different tasks, and each task would take a certain amount of time. For example, “brush teeth” will take 3 minutes and so on. When the user would press on the” brush teeth” button, the application would begin to play a song for the duration of the task. In this example, it would play a 3-minute song. With this project idea in mind, each teammate was tasked with making their own detailed sketches for a total of 10 detailed team sketches.</div>
      <img className='sketch' src={ds1}></img>
      <div className='sketchDesc'> For my sketches I focused on creating more detailed versions of the UI. My first detailed sketch is for a website. In the homepage, there are several task buttons. Each button will display the name of the task. Once you click on a task button you will be taken to a 2nd page containing an audio player. That will display an image of the album, and a bar showing the duration of the song. There is also a back button at the top left corner to go back to the tasks page. On the task page there is also a button that allows a user to add a new task. Pressing this button takes the user to a new page where they can add the name of the task, the duration of the task, and what kind of audio they want to play during this task. The menu would show song, playlist, or podcast as options. Once the user presses done, the task gets added to the main task page.</div>
      <div className='sketchDesc'> My second detailed sketch I thought about what the first sketch was missing. The first sketch might be a bit too overwhelming if there were many tasks. To fix this, the second sketch sorts tasks by categories and adds an icon to each task. This would hopefully help the user browse through their tasks better and easier when there are many tasks present. Once a task has been selected, again the player window will pop up. The player window looks very similar to the one on sketch one except for it displaying a playlist instead of a singular song and the progress bar now shows the progress of the entire playlist.</div>
      <img className='sketch' src={ds2}></img>
      <img className='sketch' src={ds3}></img>
      <div className='sketchDesc'> For my third sketch I wanted to do something a lot simpler. I based it off a simple kitchen timer. The button is the timer, and the user would drag the pointer to their desired time and once it is on the desired time they can press it to switch to the player page.  On the player page it shows how much time is remaining  as well as the song title and a progress bar.</div>
      <div className='ProjTitle'> Teammate's Detailed Sketches: </div>
      <img className='sketch' src={vs1}></img>
      <img className='sketch' src={vs2}></img>
      <img className='sketch' src={vs3}></img>
      <img className='sketch' src={as1}></img>
      <img className='sketch' src={as2}></img>
      <img className='sketch' src={ks1}></img>
      <img className='sketch' src={ks2}></img>
      <div className='ProjTitle'> Chosen Design: </div>
      <div className='projText'> Since we wanted to highlight how the central interactions throughout the application were with button(s), we chose the sketches where each routine or task was represented with a button of its own. We discussed how this would help us better organise our implementation of the responses to the button clicks since we have modularised each task and we can do so in our coding process as well. Also, there were a few variations that drew our attention (e.g., being able to add new tasks, collaborating with others on a task, etc.), but due to the time-constraint of the project, we had to choose some of the simpler detail sketches to implement instead.</div>
      <img className='sketch' src={xdmockup}></img>
      <div className='sketchDesc'> After we decided on a solid design, I decided to make a higher fidelity mockup on Adobe XD since I was in charge of the CSS for the website. This helped me visuallize what the website might look like. Although it ended up looking different, the colour scheme and circular buttons stay the same.</div>
      {/* <div className='ProjTitle'> Final Product
        <a href='https://purrfect-pepper-headstand.glitch.me/'> Final Product
        </a>
        </div> */}
        <div className='ProjTitle'> Demo Video: </div>
        <iframe width="854"  height="480" src="https://www.youtube.com/embed/JqFgT-a2bJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <div className='ProjTitle'> Final Product: </div> */}
        <div className='ProjTitle'> My Contributions: </div>
        <div className='sketchDesc'> For this project, I contributed through my sketches and ideas like the rest of the team. In addition to this, I made the mockup for the task page and worked on the CSS and JavaScript for the site. Lastly, I also edited the demo video for the project.</div>
        <a style={
            {fontSize: '40px', padding: '50px', color:'#ff57a6'}
        } href= 'https://purrfect-pepper-headstand.glitch.me/'> Click here to go to the website! </a>
        <a style={
            {fontSize: '25px', padding: '50px', color:'#696969'}
        }href='https://glitch.com/edit/#!/purrfect-pepper-headstand'>Source code</a>
        </div>
        

      
    </div>
  );
}

export default PortfolioProj1;
