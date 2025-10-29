// by default, everything under the /app directory is server components
// so at first, this debug log prints as server

// to make it client cpn, have to put 'use client' at the top of the file

// given this is server cpn, I presume I want to make it client cpn
// since it doesn't need to fetch or perform any async tasks
// and component folder being on the same level as app folder does nothing

// it is similar to vue list rednering that it requires an unique key for each item
// Next doesn't like using index as key, so it keep screaming at me
// for some cases, using index would be a terrible idea as it's by nature not a unique piece of information
// but for this case the usage is fine, despite it keep screaming at me

// I may have returned wrong in the .map()
// now it stops screaming at me lol

// also for some reason it doesn't give much details in terminal
// it only tells me where exactly it is in the web console

import { aboutText } from './DUMMY.js';

export default function AboutMe() {
    // console.log('about me?');
    return aboutText.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>;
    });
}
