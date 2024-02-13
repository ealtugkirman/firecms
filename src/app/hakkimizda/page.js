"use client"
import { useState } from 'react';

const Content = ({ section }) => {
  return (
    <div>
      { section === 'Law Service' && <p>Section 1 Content</p> }
      { section === 'Another Law Service' && <p>Section 2 Content</p> }
      { section === 'Another Service' && <p>Section 3 Content</p> }
      { section === 'Law' && <p>Section 1 Content</p> }
      { section === 'Digital Law Service' && <p>Section 2 Content</p> }
      { section === 'Another one Service' && <p>Section 3 Content</p> }
    </div>
  );
};

const Sidebar = ({ onSelectSection }) => {
  return (
    <div>
      <ul>
        <li onClick={ () => onSelectSection('Law Service') }>Law Service</li>
        <li onClick={ () => onSelectSection('Another Law Service') }>Another Law Service</li>
        <li onClick={ () => onSelectSection('Another Service') }>Another Service</li>
        <li onClick={ () => onSelectSection('Law') }>Law</li>
        <li onClick={ () => onSelectSection('Digital Law Service') }>Digital Law Service</li>
        <li onClick={ () => onSelectSection('Another one Service') }>Another one Service</li>
      </ul>
    </div>
  );
};

const Page = () => {
  const [currentSection, setCurrentSection] = useState('section1');

  const handleSelectSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className='bg-red-200 py-24 flex h-80 text-first' >
      <Sidebar onSelectSection={ handleSelectSection } />
      <Content section={ currentSection } />
    </div>
  );
};

export default Page;
