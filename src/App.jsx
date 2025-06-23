import React from 'react'
import Accordion from './Accordion/Accordion ';


const App = () => {
 const allData = [
  {
    title: "Understanding JavaScript Closures",
    context: "Closures allow functions to access variables from an enclosing scope, even after that scope has closed."
  },
  {
    title: "Benefits of Responsive Web Design",
    context: "Responsive design ensures a consistent user experience across devices by adapting layout and content dynamically."
  },
  {
    title: "Introduction to REST APIs",
    context: "REST APIs enable communication between client and server through standard HTTP methods like GET, POST, PUT, and DELETE."
  },
  {
    title: "CSS Flexbox vs Grid",
    context: "Flexbox is ideal for one-dimensional layouts, while Grid is more powerful for creating two-dimensional designs."
  },
  {
    title: "Importance of Web Accessibility",
    context: "Making websites accessible ensures that people with disabilities can navigate and interact with content effectively."
  }
];

  return (
    <div>
      <Accordion data={allData}/>
    </div>
  )
}

export default App
