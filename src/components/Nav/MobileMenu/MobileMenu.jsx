import { memo } from 'react';
import './mobileMenu.css';

let active = false;

export function activateMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const listSmall = document.querySelector('.list-small');
  const html = document.querySelector('html');

  if (active === false) {
    setMobileMenu(1, 15, 0.3);
    setMobileMenu(300, -25, 0.3);
    setMobileMenu(500, 0, 0.7);
    setTimeout(() => active = false, 750);
    listSmall.classList.toggle('active');
    html.classList.toggle('static');
    active = true;
  }

  function setMobileMenu(delay, position, speed) {
    setTimeout(() => mobileMenu.style = `--position: ${position}px; --speed: ${speed}s`, delay);
  }
}

function MobileMenu() {
  return (
    <div className='mobile-menu' onClick={() => activateMobileMenu()}>
      <div className='ribbon' />
    </div>
  );
}

export default memo(MobileMenu);
