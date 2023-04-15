'use client';
import Image from 'next/image';
import styles from './Carousel.module.css';
import { useEffect, useRef } from 'react';
import Router from 'next/router';

export default function Carousel() {
  const carouselRef = useRef();

  var handleEvent = function () {
    carouselRef.current.scrollLeft =
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0) * 2.5;
  };

  async function leaveMainPage() {
    await document.body.removeEventListener('scroll', handleEvent);
    await document.body.removeEventListener('mousewheel', handleEvent);
  }

  useEffect(() => {
    return () => {
      Router.events.off('routeChangeStart', leaveMainPage());
    };
  }, [Router]);

  useEffect(() => {
    document.body.addEventListener('scroll', handleEvent);
    document.body.addEventListener('mousewheel', handleEvent);
  }, []);

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <Image
        src={'/Carousel1.svg'}
        alt="Carousel image 1"
        width={464}
        height={499}
        style={{ marginRight: 40 }}
      />
      <Image
        src={'/Carousel2.svg'}
        alt="Carousel image 1"
        width={464}
        height={499}
        style={{ marginRight: 40 }}
      />
      <Image
        src={'/Carousel3.svg'}
        alt="Carousel image 1"
        width={464}
        height={499}
      />
    </div>
  );
}
