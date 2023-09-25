"use client";
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import deved from 'public/1234.png';
import pr1card from 'public/card1.jpg';
import pr2card from 'public/card3.jpg';
import pr3card from 'public/card4.jpg';
import blog1 from 'public/blog1.jpg'
import blog2 from 'public/blog2.jpg'
import blog3 from 'public/blog3.jpg'
import blog4 from 'public/blog4.png'

const imageLoader = ({ src, width, quality }) => {
  return `https://praveen-p-portfolio.web.app/${src}?w=${width}&q=${quality || 75}`
} 
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
  <div className={darkMode ? "dark" : "light"} > 
      <main className=' px-8 md:px-20 lg:px-40 bg-white dark:bg-gray-800'>
        <section className=' min-h-screen dark:bg-gray-90'>
      <nav className='py-10 mb-12 flex justify-between'>
        <div className=' bg-cover bg-center background'>
        
        <h1 className='text-3xl px-5 font-semibold mix-blend-lighten text-black bg-white'>TWRECKS</h1>
        </div>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode )} className=' cursor-pointer text-2xl dark:text-gray-300 '  />
        </li>
          <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 shadow-sm shadow-teal-400' href="#">Resume</a></li>
        </ul>
      </nav>
      <div className=' text-center p-10 '>
        <h2 className='text-4xl py-2 font-medium text-teal-500 md:text-5xl'> Praveen Prabhakaran</h2>
        <h3 className='text-2xl py-2 md:text-3xl  dark:text-gray-300 '>Developer and Designer</h3>
        <p className='text-md py-5 leading-8  dark:text-gray-300 text-gray-800 md:text-xl max-w-lg mx-auto'>
Eager fresher seeking dynamic work environment to apply skills, learn, and contribute effectively. Adaptable, motivated, and ready to make a positive impact</p>
      </div>
      <div className='text-5xl justify-center gap-16 py-3 flex  dark:text-gray-400'>
        <AiFillFacebook href='#'/>
        <AiFillLinkedin href='#'/>
        <AiFillInstagram href='#'/>
      </div>
      <div className='relative mx-auto mb-4 bg-gradient-to-b from-teal-300 rounded-full overflow-hidden w-80 h-80 mt-20 md:h-96 md:w-96'>
    <Image loader={imageLoader} src={deved} layout='' alt="nice" objectFit='cover' className='p-10' />
      </div>
        
        <div>
        <h3 className='text-3xl py-1  dark:text-teal-400'>
                About Me
              </h3>
          <p className='text-md py-2 leading-8  dark:shadow-cyan-400 text-gray-800  dark:text-gray-300'>
          As a hardworking, <span className='text-teal-400'>positive-thinking</span>, and <span className=' text-green-400'>creatively-driven individual</span>,
           I am passionately seeking new opportunities to contribute my skills. 
           With a determined mindset and a penchant for innovative solutions, I 
           strive to excel in any role. I am eager to collaborate and bring fresh
           perspectives to a dynamic team, making a lasting impact.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
          Highly proficient in <span className=' text-teal-400'>programming, OOP concepts</span>, and skilled in both coding 
          and designing. I bring a strong passion for innovation and a keen eye for detail. Ready to leverage 
          my expertise to tackle challenging projects and create exceptional solutions.
          </p>
          </div>
          {/*this is skill Block*/}
          <h3 className='text-3xl text-teal-400 my-5 '>Skills</h3>
          <div className=' lg:flex gap-10 text-gray-300'>
            <div className='shadow-lg p-5 rounded-lg dark:shadow-cyan-400 basis-1/2 mb-10'>
              <h2 className='text-2xl my-3'>Programming Skills</h2>
              <ul className='my-6'>
                <li className='mx-2 mr-4 text-lg'>Java</li>
                <li className='flex  w-full bg-gradient-to-r from-yellow-300 to-pink-600 rounded-full h-2 m-2'></li>
              </ul>
              <ul className='my-6'>
                <li className='mx-2 mr-4 text-lg'>C</li>
                <li className='flex w-full bg-gradient-to-r from-yellow-300 to-pink-600 rounded-full h-2 m-2'></li>
              </ul>
              <ul className='my-6'>
                <li className='mx-2 mr-4 text-lg'>Python</li>
                <li className='flex w-2/4 bg-gradient-to-r from-yellow-300 to-pink-600 rounded-full h-2 m-2'></li>
              </ul>
            </div>
            <div className='shadow-lg p-5 rounded-lg dark:shadow-cyan-400 basis-1/2 mb-10 '>
              <h2 className='text-2xl my-3'>Technical Skills</h2>
           <ul>
                <li className='mx-2 mr-4 text-lg'>HTML / CSS</li>
                <li className='flex w-full bg-gradient-to-r from-yellow-300 to-pink-600 rounded-full h-2 m-2'></li>
              </ul>
              <ul>
                <li className='mx-2 mr-4 text-lg'>JavaScript</li>
                <li className='flex w-full bg-gradient-to-r from-yellow-300 to-pink-600 rounded-full h-2 m-2'></li>
              </ul>
              <ul>
                <li className='mx-2 mr-4 text-lg'>Next.js / Tailwind CSS</li>
                <li className='flex w-3/4 bg-gradient-to-r from-yellow-300 to-pink-600 rounded-full h-2 m-2'></li>
              </ul>
              <ul>
                <li className='mx-2 mr-4 text-lg'>Microsoft Azure</li>
                <li className='flex w-1/4 bg-gradient-to-r from-yellow-300 to-pink-600 rounded-full h-2 m-2'></li>
              </ul>
            </div>
          </div>
           {/*this is skill Block*/}
           {/* end */}
          <div className='lg:flex gap-10'>
            <div className=' text-center shadow-lg p-10  dark:shadow-cyan-400 rounded-xl my-10  dark:text-gray-300'>
              <Image loader={imageLoader} src={pr1card} alt="nice" className='rounded-xl w-60 mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-8'>Gesture-Based Home Automation</h3>
              <p className='py-2'>
              Gesture-Based Home Automation allows users to 
              control smart home devices using hand gestures. A camera 
              captures the gestures, a machine learning model recognizes them, 
              and the system executes corresponding commands to control the devices.
               It offers a hands-free and intuitive
               way to interact with the smart home, enhancing convenience and accessibility.
              </p>
              <h4 className='py-4 text-teal-500'>
                Design tools I Use
              </h4>
              <p className=' text-grey-800 py-1'>Python -Mediapipe</p>
              <p className=' text-grey-800 py-1'>Convolutional Neural Network</p>
              <p className=' text-grey-800 py-1'>OpenCv</p>
            </div>

            <div className=' text-center shadow-lg dark:shadow-cyan-400 p-10 rounded-xl my-10  dark:text-gray-300'>
              <Image loader={imageLoader} src={pr2card} alt="nice" className='rounded-xl h-40 w-60 mx-auto' objectFit='cover'/>
              <h3 className='text-lg font-medium pt-8 pb-8'>AI-Powered Healthcare Assistant for Common Ailments</h3>
              <p className='py-2'>
              The AI-Powered Healthcare Assistant for Common Ailments
              is a chatbot using Naive Bayes classification. It provides medical advice 
              by analyzing user input and categorizing symptoms into common ailment categories
              . Continuously learning from user feedback, it offers accurate and 
              informative responses, enhancing healthcare support for everyday health issues.
              </p>
              <h4 className='py-4 text-teal-500'>
                Design tools I Use
              </h4>
              <p className=' text-grey-800 py-1'>Natural Language Processing (NLP) Libraries</p>
              <p className=' text-grey-800 py-1'>Machine Learning Libraries</p>
              <p className=' text-grey-800 py-1'>Web Development Frameworks-flask</p>
            </div>
            <div className=' text-center shadow-lg  dark:shadow-cyan-400 p-10 rounded-xl my-10  dark:text-gray-300'>
              <Image loader={imageLoader} src={pr3card} className='rounded-xl h-40 w-60 mx-auto' objectFit='cover' alt=""/>
              <h3 className='text-lg font-medium pt-8 pb-8'>Smart Home Switch Box Automation: Seamless Remote Control and Network Connectivity</h3>
              <p className='py-2'>
              Revolutionize your home affordably with our Smart
               Switch Box Automation project. Enjoy remote control of devices and 
               appliances from anywhere using network connectivity. Experience seamless 
               integration and enhance your 
              lifestyle with effortless smart home management at a fraction of the cost.
              </p>
              <h4 className='py-4 text-teal-500'>
                Design tools I Use
              </h4>
              <p className=' text-grey-800 py-1'>Wi-Fi Module</p>
              <p className=' text-grey-800 py-1'>Node MCU</p>
              <p className=' text-grey-800 py-1'>Voice Assistant Integration</p>
            </div>
          </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1  dark:text-teal-400'>
                Blogger Posts
              </h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
              <span className=' text-teal-500'>Dear [User Name],</span><br></br>I hope this message finds you well. I am writing to reflect on my growth as a blogger and to extend my sincerest apologies for some of the past blog posts I published that may have been perceived as silly or inappropriate.Looking back, I recognize that everyone makes mistakes, and I am no exception. Those past posts do not reflect the level of thoughtfulness and responsibility that I now strive to maintain in my content creation. </p>
              <p className='text-md py-2 leading-8 text-gray-800  dark:text-gray-300'>As I have grown as a person and blogger, I have learned valuable lessons from those experiences.I want to assure you that I have since taken steps to be more conscious of the impact of my words and to provide valuable and meaningful content. I am committed to continuously improving as a blogger and ensuring that my work brings value and positivity to those who read it.Once again, I apologize sincerely for any discomfort my past posts may have caused. Thank you for allowing me the opportunity to reflect and grow.Best regards,</p><br/><span className=' text-red-400'>[Praveen Prabhakaran]</span>
           </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 shadow-lg p-3 dark:shadow-teal-400 rounded-lg  dark:text-gray-300'><a href="https://oc-domain.blogspot.com/2020/05/android-in-pc-without-emulator_27.html">
              <Image loader={imageLoader} alt="nice" src={blog1} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
              <h3 className='m-1 text-2xl text-purple-800 font-semibold'>Android In PC Without Emulator</h3>
              <p className=' m-2 text-grey-300'>Run Android in your PC/laptop with minimum requirements (512mb ram) and no lag.</p></a>
              </div>
              <div className='basis-1/3 flex-1 dark:shadow-teal-400 rounded-lg shadow-lg p-3'><a href="https://oc-domain.blogspot.com/2020/06/block-and-remove-and-fire-on-android_4.html">
              <Image loader={imageLoader} alt="nice" src={blog2} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
              <h3 className='m-1 text-2xl text-purple-800 font-semibold'>Block And Remove PUBG And Free Fire On Android Play Store.</h3>
              <p className=' m-2 text-grey-300  dark:text-gray-300'>Here Is A Smart Way To Block PUBG And 
Free Fire From Android Play Store.</p></a>
              </div>
              <div className='basis-1/3 flex-1 dark:shadow-teal-400 rounded-lg shadow-lg p-3'><a href="https://oc-domain.blogspot.com/2020/06/make-best-use-of-parental-control_4.html">
              <Image loader={imageLoader} alt="nice" src={blog3} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
              <h3 className='m-1 text-2xl text-purple-800 font-semibold'>Make Best Use Of Parental Control Option On Your children devices</h3>
              <p className=' m-2 text-grey-300  dark:text-gray-300'>Internet Has many Good Contents But It May not be true Always See Your Child Activity Through This app.</p></a>
              </div>
              <div className='basis-1/3 flex-1 dark:shadow-teal-400 rounded-lg shadow-lg p-3'><a href="https://oc-domain.blogspot.com/2020/07/2020-engineering-cut-off-calculator-2020.html">
              <Image loader={imageLoader} src={blog4} className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
              <h3 className='m-1 text-2xl text-purple-800 font-semibold'>பொறியியல் கட்டாப் கால்குலேட்டர் 2020 | Engineering Cut Off Calculator 2020.</h3>
              <p className=' m-2 text-grey-300  dark:text-gray-300'>Engineering Cutoff Calculator For 12th Students Of the year 2020.</p></a>
              </div>
              </div>
            <div className='flex m-5 h-18 overflow-hidden'>
              <a href="https://oc-domain.blogspot.com/" className='flex w-full h-4 items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 p-10 text-justify text-white font-semibold text-sm'>View My Blogs</a>
              </div>
          </section>
          
      </main>
      <nav className=' bg-gradient-to-r from-cyan-400 to-teal-500 text-sm p-3 px-6 flex justify-between'>
      <h3 className='w-full font-sans dark:text-gray-300'>Get Connected With Me</h3>
      <ul className='flex justify-between'><li><AiFillFacebook className='ml-2'/></li><li><AiFillInstagram className='ml-2' /></li><li><AiFillLinkedin className='ml-2'/></li></ul>
      </nav>
      <div className=' flex bg-gray-300 h-4 w-full justify-center items-center'> 
      &copy; copyrights: Oc-domain.co
  </div>
      
  </div>
   )
  }
    
 
