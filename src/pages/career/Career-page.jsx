import React from 'react'
import './career.css'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import CareerIcons from '../../components/careerfloat/CareerIcons'
import Footer from '../../components/footer/Footer'
import Diploma from '../../assets/fullstack.jpeg'
import Tech from '../../components/tecnologies/Tech'



const Career = () => {
  return (
    <div className='career-container'>
        <div className='title-container-career'>

          <div className='title-box'>

            <div className='logo-container'>
          <div>
            <BsJournalBookmarkFill className='logo-vsc'/>
          </div>
          <div>
          <p className='icon-njs'>Nahuel.js</p>
          <h2>Studies & career</h2>
          <p className='text-career'>Here you can see my career and my travel that's start 1 year ago...</p>
          </div>
            </div>

          </div>

         <div className='shape-container'>
          <CareerIcons/>
         </div>
        </div>


        <div className='text-career-1'>
          <div className='text-carrer-inner'>
          <p>As i said,</p>
          <h2>Some steps, change your life...</h2>
          <p className='box-career-inner'>
          In 2020 I had to return to Mar del Plata, my hometown, since I became unemployed in Buenos Aires, and I had no way to support my rent.
Like many people, I didn't know what to do for a while, until a message appeared in my email, offering me to study fullstack development for 0 initial cost, and that's where I began my adventure in the bootcamp Soy Henry, where I had many challenges, and I met very good friends and fellow students.
          </p>
          </div>

        <div className='box-title-career'>
          <img src={Diploma} alt='diploma'/>
        </div>
        </div>

      <div className='sub-title'>
        What i learned? Well...
      </div>



      <div className='learn-container'>
        <div className='boxes'>
          Javascript

          <div className='text-cards'>
            <p>In the first module, we learned to use Javascript as a programming language, doing exercises on logic and data structures, such as linked lists, and binary trees.</p>
          </div>

              {/* <p>Technologies:</p> */}
          <div className='technologies-cards-container'>

              <p className='tech-cards'>Javascript</p>
            </div>
        </div>



        <div className='boxes'>
          Frontend
          <div className='text-cards'>
            <p>
            In the second module, we start to understand what HTML and CSS are, and then fully learn React as the main framework.
            </p>

              
            <div className='technologies-cards-container'>

              <p className='tech-cards'>HTML</p>
              <p className='tech-cards'>Css</p>
              <p className='tech-cards'>React</p>
              <p className='tech-cards'>Redux</p>
            </div>
          </div>
        </div>
        <div className='boxes'>
          Backend

          <div className='text-cards'>
            <p>
            The third and fourth modules focus on learning how to build a server in express, and be able to connect it to a postgreSQL database, using Sequelize as ORM.
            </p>
          </div>

          <div className='technologies-cards-container'>
              <p className='tech-cards'>Node.js</p>
              <p className='tech-cards'>Express</p>
              <p className='tech-cards'>Postgre SQL</p>
              <p className='tech-cards'>Sequelize</p>
        </div>
        </div>
      </div>
      
      <div className='technologies-career-container'>
      <Tech/>

      </div>
         <div className='footer-cont-career' id='Footer'>
          <Footer/>
         </div>
    </div>
  )
}

export default Career