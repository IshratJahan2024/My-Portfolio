import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based Interactive Resume built with HTML and CSS, allowing users to showcase their skills dynamically",
        img: "/image 1.jpg",
        tags: ["HTML", "Node","CSS", "TypeScript"],
    },
    {
        id: 1,
        title: "IJ Travels",
        desc: "A Next.js and atypeScript based simple website to help peoples to traveling.",
        img: "/image 2.jpg",
        tags: ["HTML", "CSS", "TypeScript", "Next.js", "Node"],
    },
];

const projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading  title="My projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
      
    </div>
  )
}

export default projects
