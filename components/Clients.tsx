import React from 'react';
import { TracingBeam } from './ui/TracingBeam';

const educationData =[
    {
      "college": "Jyothy Institute of Technology",
      "degree": "Bachelor of Computer Science and Engineering",
      "year": "2021 - 2025",
      "description": [
        "Completed Bachelor's Degree in Computer Science with a CGPA of 8.44.",
        "Participated in various coding competitions and hackathons, securing top positions.",
        "Completed a comprehensive course on Full Stack Development with hands-on projects.",
        "Continuously learning new technologies like React, Django, and Three.js to stay ahead in the field."
      ]
    },
    {
      "college": "Deeksha Jnana Sweekar PU College",
      "degree": "Pre University",
      "year": "2019 - 2021",
      "description": [
        "Studied Physics, Chemistry, Mathematics, and Computer Science with an 80% grade.",
        "Developed a strong foundation in mathematics and science that supports my current technical studies.",
        "Participated in school and college-level competitions."
      ]
    },
    {
      "college": "The Oxford English School",
      "degree": "Schooling",
      "year": "2008 - 2019",
      "description": [
        "Completed schooling with an 82% grade.",
        "Participated in various school activities and competitions.",
        "Built a foundation in various subjects, contributing to a well-rounded education.",
        
      ]
    }
    // Add more entries as needed
  ]
  

const Clients = () => {
  return (
    <div className='py-20' id="education">
       <h1 className='heading'>
            A Glimpse into my {' '}
            <span className='text-purple'>Education</span>

        </h1>
      <div className='flex flex-col items-center'>
        <TracingBeam>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-black-100 rounded-lg shadow-lg p-8 mt-8 w-full max-w-4xl mx-auto transform transition-transform duration-300 hover:scale-105"
            >
              <div className="border border-gray rounded-lg p-6 bg-gradient-to-r from-black-100 via-[#15022a] to-black-100">
                <h2 className="text-2xl font-semibold text-white">
                  {edu.college} <span className="text-md text-white">({edu.year})</span>
                </h2>
                <p className="text-md text-white mt-1">{edu.degree}</p>
                <div className="mt-4">
                  <ul className="list-none text-white-200">
                    {edu.description.map((desc, i) => (
                      <li key={i} className="text-lg mb-2">{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </TracingBeam>
      </div>
    </div>
  );
};

export default Clients;
