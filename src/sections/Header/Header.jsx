import { memo } from 'react';
import './header.css';
import Nav from '../../components/nav/Nav';

function Header() {
  return (
    <header>
      <Nav />
      <div className='container'>
        <h1>Hey, I'm <span>Christopher</span></h1>
        <h2>A passionate developer who builds things for the web</h2>
        <button>Learn More</button>
      </div>
    </header>
  );
}

export default memo(Header);
