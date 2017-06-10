import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <p>Say something about the project here!!!</p>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    <h5>Team: the Gansters</h5>
    <h5>Contributors:</h5>
    <ul>
      <li></li>
    </ul>
  </div>
)

export default HomeView
