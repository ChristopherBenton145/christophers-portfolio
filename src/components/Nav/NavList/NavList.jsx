import { memo } from 'react';
import './NavList.css';
import { gotoSection } from '../Nav';

function NavList({ className }) {
  return (
    <ul className={className}>
      <div className='ribbon1'></div>
      <li className='active' onClick={() => gotoSection(document.querySelector('header'), 0)}>Home</li>
      <li>About</li>
      <li>Experience</li>
      <li>Projects</li>
      <li>Skills</li>
      <li>Contact</li>
      <div className='ribbon2'></div>
    </ul>
  );
}

export default memo(NavList);
