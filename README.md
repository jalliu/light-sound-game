# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's FTL Program. 

Submitted by: Jana Liu

Time spent: **4-5** hours spent in total

Link to site: https://pear-majestic-track.glitch.me
Link to code: https://glitch.com/edit/#!/pear-majestic-track

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Displayed Win/Lose message on screen (not as an alert message)
- [X] Special light sequence when player wins

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
* Win: 
<br><img src="https://media.giphy.com/media/aAzvf4d3yuKQIq2INJ/giphy.gif" width=400><br>
* Lose:
<br><img src="https://media.giphy.com/media/8qBQFSXkH23Wcaa6cy/giphy.gif" width=400><br>

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Stackoverflow, W3Schools, Canva.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
* A challenge I faced when creating this project was programming in JavaScript, particularly with implementing the increased playback and winning light sequence feature. I am not very familiar with JavaScript and so was initially confused about how the setTimeout function worked (which is the key function needed for both features). I’m comfortable with Java so the basic logic and approach to problem solving wasn’t bad, but it still took some time working with a new-ish language. The main issue I encountered with the playback feature was figuring out how exactly setTimeout worked and what exactly the variables clueHoldTime, cluePauseTime, and nextClueWaitTime, represented. I solved these issues by googling and re-reading the tutorial. From there, I worked through the functions used to play a clue/sequence of clues, but eventually ran into a roadblock, which ultimately occurred because I didn’t realize clueHoldTime, cluePauseTime, and nextClueWaitTime, were all const vars. At this point, I had gone over the correct program logic so many times, that I almost cried when realizing the cause was such a simple mistake. From there it was (relatively) smooth sailing!
* A little blip that I encountered, somewhat related to the setTimeout function, was working with the alert function. I did not realize that you could not delay alert, which made implementing the winning light sequence feature (which plays a special sequence of tiles when the player wins before displaying the message), challenging. I figured out the issue by reading stackoverflow, and ultimately fixed the issue by removing the feature entirely and instead displaying a more customized (and in my opinion, cute!) win/lose message on the site itself. 
* Another challenge, or moreso something new (and really interesting!), that I faced was working with the JavaScript HTML DOM object. This is something I had never seen nor worked with, but was super cool! I didn’t realize that JavaScript was so interwoven with pure HTML. After reading some tutorials on the feature, I realized the basics of how it manipulated HTML elements by first finding the element, and then proceeding to change the values/styling of the identified HTML element. From there I utilized the feature in implementing the multiple chances feature, and presentation of "YOU WIN" or "YOU LOSE" announcement.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
* How does the backend work ??
  * This is sort of related to the next question, but how exactly does the frontend work with the backend (with a framework I’m assuming…). I’m not familiar with backend web development at all, and all my experience with web development has been working with frontend and design work as a tech organizer at my university’s hackathon. I’m not familiar with how frameworks work, but have been learning it on my own and am still confused but very fascinated with what exactly backend operations of a website “look” like and entail. 
* How are websites which handle tons and tons of traffic developed and maintained? 
  * I thought about this a lot when considering some of the other features I wanted to add to the game, which included creating a player base and leaderboard. I’m really interested in learning how companies create websites that handle that much traffic and ensure security of their user’s information. 
* What do best practices look like? Particularly in regards to the accessibility of websites?
  * This is a topic I’ve always been incredibly interested in. Like everyone else, I love sleek and exciting animations and color schemes, but a lot of times those design choices come at the cost of limiting the accessibility of a website or application. So, I’m interested in how professional software developers approach this topic, especially in a time where the Internet and technology is becoming an essential part all of our daily lives. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
* Issues I’d fix: 
  * I would first clean up my code (reformatting, refactoring parts of code to reduce redundancy) and add better documentation.
  * I want to make the website more responsive. Currently, the game doesn’t really work on my phone because the rightmost/leftmost buttons get partially cut off. It also just doesn’t look or feel (touch/scroll behavior) very clean on mobile devices. I’d probably use Bootstrap and media queries to make it more compatible with smaller devices. 
  * Fix issue with user pressing buttons while the current clue is being played. Sometimes what happens is the user clicks on a tile while the pattern is being presented, which causes a lot of confusion and sometimes messes up the presentation sequence/lives counter. To fix this, I’d make it so that user interactions with the buttons during a play sequence will be ignored (not produce any response). 

* Some features I’d want to add would be: 
  * Hard mode where the order of the tiles would change every round. This would make the game a lot more difficult and force the player to focus on the color/sound association rather than plain old muscle memory with the positioning of the tiles. 
  * Add a rhythm aspect to the game. This would be done by making clues have varying wait/play times, which would allow us to create rhythms with the patterns. I think this feature would not only add an interesting dimension to the game, but also be a cool way to introduce people to basic music theory concepts. The actual rhythm of the pattern sequence could even be displayed, which would be a fun way to teach people how to read rhythms and keep musical time.

## Interview Recording URL Link

[My 5-minute Interview Recording] https://youtu.be/hNL6C5m93Vs


## License

    Copyright JANA LIU

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
