import { useState } from 'react';
import envelope from './img/envelope.png'
import VideoLaunch from './VideoLaunch';

function Letter() {
     const [isLetterOpen, setIsLetterOpen] = useState(true);
      const handleOpenLetter = () => {
        setIsLetterOpen(false);
    
      };

       if (!isLetterOpen) {
        return (
          <div><VideoLaunch /></div>
        
        )
      };
    return(
        <div>
        <div className='letter'>
            <img className='letter_img'
           src= {envelope}
           alt="Envelope"
          />
          
        </div>
        <button className='letter_btn' onClick={handleOpenLetter}>Открыть</button>
      </div>
    )
}

export default Letter;