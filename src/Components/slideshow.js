import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const fadeImages = [
  {
    url: 'https://source.unsplash.com/random/900×700/?makeup,products',
  },
  {
    url: 'https://source.unsplash.com/random/900×700/?makeup',
  },
  {
    url: 'https://source.unsplash.com/random/900×700/?dress',
  },
];

const Slideshow = () => {
  return (


    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img 
            style={{ filter:'brightness(30%)',width: '100%' ,height:'500px',marginTop:'5px' ,textAlign:'center',marginLeft:'auto' ,marginRight:'auto',display:'block' }} 
            
            src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;
