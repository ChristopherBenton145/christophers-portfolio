import { memo } from 'react';
import './Header.css';
import Nav from '../../components/Nav/Nav';

function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}

export default memo(Header);
