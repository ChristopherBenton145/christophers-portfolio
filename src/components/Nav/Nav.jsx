import { useEffect, memo } from 'react';
import './nav.css';
import NavList from './navList/NavList';
import MobileMenu, { activateMobileMenu } from './mobileMenu/MobileMenu';
import $ from 'jquery';

export function gotoSection(element, offset) {
  const listSmall = document.querySelector('.list-small');
  listSmall.classList.contains('active') && activateMobileMenu();

  $('html, body').animate({
    scrollTop: $(element).offset().top + offset
  }, 1000);
}

function Nav() {
  useEffect(() => document.addEventListener('scroll', () => {
    if (onScreen(document.querySelector('header'))) {
      activateMenu(1);
    }
  }), []);

  function onScreen(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  function activateMenu(index) {
    const listItemActive = document.querySelector('.list li.active');
    const list = document.querySelector('.list');
    const listSmall = document.querySelector('.list-small');

    listItemActive.classList.remove('active');
    list.childNodes[index].classList.add('active');
    listSmall.childNodes[index].classList.add('active');
  }

  return (
    <nav>
      <NavList className='list' />
      <NavList className='list-small' />
      <MobileMenu />
    </nav>
  );
}

export default memo(Nav);
