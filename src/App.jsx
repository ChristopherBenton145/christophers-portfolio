import { memo } from 'react';
import Header from './sections/Header/Header';

function App() {
  return (
    <>
      <Header />
      <p style={{'height': '150vh'}}></p>
      <h1 className='about'>About</h1>
    </>
  );
}

export default memo(App);
