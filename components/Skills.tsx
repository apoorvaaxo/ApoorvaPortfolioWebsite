import React from 'react'
import { Button } from './ui/MovingBorders'
import { MySkills } from '@/data'

const Skills = () => {
  return (
    <div className='py-20' id="education">
      <h1 className='heading'>
        My {' '}
        <span className='text-purple'>Skills</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-9 grid-cols-1 gap-10'>
        {MySkills.map((card) =>
          <Button 
            key={card.id}
            borderRadius='1.25rem' // Reduced border radius
            duration={Math.floor(Math.random() * 10000) + 10000}
            className='flex-1 text-white border-neutral-200 dark:border-slate-800'
          >
            <div className='flex flex-col items-center p-2 py-4 md:p-4 lg:p-6 gap-2'> {/* Reduced padding */}
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className='lg:w-24 md:w-16 w-12' // Reduced image sizes
              />
              <div className='text-center'>
                <h1 className='text-lg md:text-xl font-bold'> {/* Reduced font size */}
                  {card.title}
                </h1>
                <p className='mt-2 font-semibold'> {/* Reduced margin-top */}
                  {/* Additional text can go here */}
                </p>
              </div>
            </div>
          </Button>
        )}
      </div>
    </div> 
  )
}

export default Skills
