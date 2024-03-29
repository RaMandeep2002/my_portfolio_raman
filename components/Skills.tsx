import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'


type Props = {}

const Skills = ({ }: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className='flex flex-col relative  text-center md:text-left  xl:flex-row max-w-[2000px] xl:px-10 md:flex-row min-h-screen xl:space-y-0 mx-auto  justify-evenly items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover Over a Skill For Currency Profieciency</h3>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12' />
      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />

      </div>
    </motion.div>
  )
}

export default Skills