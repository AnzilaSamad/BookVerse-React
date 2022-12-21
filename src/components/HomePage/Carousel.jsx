import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import { data } from '../../data';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const PreviousBtn=(props) =>
{
  console.log(props);
  const {className,onClick} =props
  return(
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{color:'black'}}/>
    </div>
  );
};
const NextBtn=(props) =>
{
  console.log(props);
  const {className,onClick} =props
  return(
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{color:'black'}}/>
    </div>
  );
};
const Carousel = () => {
  return (
    <div style={{margin:"px"}}>
    <Slider autoplay autoplaySpeed = {2000} dots initialSlide={2} infinite
    prevArrow={<PreviousBtn/>}
    nextArrow={<NextBtn/>}>
      {
        data.map(item=>(
      <div className='img'>
         <Link to="/discount">
                  <img src={item} alt="" style={{width:"100%",height:"50vh",cursor:"pointer"}}/>
        
        </Link>
      </div>

        ))
      }
      
    </Slider>
    </div>
  )
}
export default Carousel;