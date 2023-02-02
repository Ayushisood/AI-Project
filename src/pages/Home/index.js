import React from 'react';
import { HomeWrapper } from './style';
import Yoga from '../../images/Yoga-blur.png';
import YogaP from '../../images/yoga_set1.jpeg';

export const Home = () => {
  return (
    <HomeWrapper>
    <div className='home-wrapper'>
        <p className='home-text'>"Inhale the future , exhale the past" Tired, Stressed and Pressurized ?
A healthy workforce directly translates to increased productivity and decreased student absenteeism. Besides improving student health, Yogai help studnets to become more satisfied and motivated in their work and personal lives.</p>
        <img src={Yoga} alt=""/>
    </div>
    <div className='home-lower-content'>
        <p>Get Started</p>
        <div className='pic-holder'>
            <img src={YogaP} alt=''/>
            <button>Classify Image</button>
        </div>
    </div>
    </HomeWrapper>
  )
}
