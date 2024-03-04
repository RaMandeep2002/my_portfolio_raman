import { motion } from 'framer-motion'
import React from 'react'
import ExperinceCard from './ExperinceCard'

type Props = {}

function Experince({ }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className='h-screen flex flex-col relative  text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experince</h3>

      {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-10 ' /> */}
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12'/>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {/* Experice */}
        <ExperinceCard
          image="https://i.postimg.cc/nL7RHSTN/Group-67387.png"
          title="Blockchain Student"
          company="ASB (Antier School of BlockTech)"
          skill={[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg"
          ]}
          startDate="2022-01-01"
          endDate="2022-12-31"
          summaryPoints={[
            // "Summary Point 1 ",  
            // "Summary Point 2",
            // "Summary Point 3"
          ]}
        />
        <ExperinceCard
          image='https://dev.anryton.com/assets/images/footer-logo.svg'
          title="Blockchain Devloper"
          company="Virtual IT Tech"
          skill={[
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", 
          ]}
          startDate="2022-01-01"
          endDate="2022-12-31"
          summaryPoints={[
            // "Summary Point 1",  
            // "Summary Point 2",
            // "Summary Point 3"
          ]}
        />
        <ExperinceCard
          image='https://dev.anryton.com/assets/images/footer-logo.svg'
          title="Blockchain Devloper"
          company="Virtual IT Tech"
          skill={[
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
            // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", 
          ]}
          startDate="2022-01-01"
          endDate="2022-12-31"
          summaryPoints={[
            // "Summary Point 1",  
            // "Summary Point 2",
            // "Summary Point 3"
          ]}
        />


        {/* // <ExperinceCard /> */}

      </div>
    </motion.div>
  )
}

export default Experince