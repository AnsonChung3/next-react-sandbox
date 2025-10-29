// this is my attempt to do it in the style of the senior example I saw
// it does read better than my standard way of putting the return div at the bottom of the file
// but to get to the UseQuack function was difficult because I am not familiar with Rect hooks/reactivity

// at one point I tried to use the Image cpn from Next
// but that seems to require extra set up so I kept the vanila img tag

// I tried 'use client' with this cpn, but it doesn't seem to make much difference
// the debug log in UseQuack() is still printed twice on web console
// and printed once in terminal
// I still have no idea why it runs over it twice while I only press the button once
// maybe something to do with preloading?

'use client';
import { useState } from 'react';

export default function PressForQuack() {
    const { imgUrl, passQuack } = UseQuack();
    return (
        <div>
            <button onClick={passQuack}>Press for Quack</button>
            {imgUrl && <img src={imgUrl} alt="quack" id="quackImg" />}
        </div>
    );
}

const quackUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpe5ldzOqLc30ZNy94C-g__N0w-ed_ixap7Q&s';

function UseQuack() {
    console.log('moo moo');
    const [imgUrl, setImgUrl] = useState('');
    const passQuack = () => setImgUrl(quackUrl);
    return { imgUrl, passQuack };
}
