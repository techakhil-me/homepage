import { useEffect, useRef, useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let isScrolling = false;

    const handleScroll = (e) => {
      if (e.deltaY !== 0) {
        isScrolling = true;
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    const stopScrolling = () => {
      isScrolling = false;
      setIsActive(false); // Disable the animation when scrolling stops
    };

    container.addEventListener('wheel', handleScroll, { passive: false });
    container.addEventListener('mouseleave', stopScrolling);
    container.addEventListener('mouseup', stopScrolling);
    container.addEventListener('mouseout', stopScrolling);

    return () => {
      container.removeEventListener('wheel', handleScroll);
      container.removeEventListener('mouseleave', stopScrolling);
      container.removeEventListener('mouseup', stopScrolling);
      container.removeEventListener('mouseout', stopScrolling);
    };
  }, []);

  useEffect(() => {
    // Enable the animation when isActive is true
    if (isActive) {
      containerRef.current.classList.add('active');
    } else {
      containerRef.current.classList.remove('active');
    }
  }, [isActive]);

  return (
    
    <div
      className="relative h-[818.69px] z-[4] text-left text-5xl text-gray-400 font-chakra-petch overflow-hidden"
      ref={containerRef}
    >
      <b className="fixed top-[0px] left-[-6.83px] text-341xl tracking-[0.1em] leading-[360px] uppercase text-center">
        FAQ
      </b>
      <div className={`faq-item ${styles['faq-item']}`}>
        <div className="absolute top-[315.26px] left-[-1.93px] bg-gray-300 [backdrop-filter:blur(40px)] box-border w-[323.2px] flex flex-col items-start justify-start p-5 gap-[20px] border-[0.2px] border-solid border-lightgray">
            <b className="self-stretch relative tracking-[0.1em] leading-[40px] uppercase">
                Some random ass question that no one asks ?
            </b>
            <div className="self-stretch relative text-lg leading-[24px] uppercase text-lightgray text-justify inline-block h-[281.63px] shrink-0">
                Lorem ipsum dolor sit amet consectetur. At sed nibh tincidunt
                pharetra. At enim elit in consectetur sed tellus sem tempor pretium.
                Quis feugiat egestas pretium orci risus gravida lobortis justo. Morbi
                parturient pellentesque donec vulputate elementum in eget tellus.
                Cursus porta.
            </div>
        </div>
      </div>
      <div className={`faq-item ${styles['faq-item']}`}>
        <div className="absolute top-[179.9px] left-[387.9px] bg-gray-300 [backdrop-filter:blur(40px)] box-border w-[323.2px] flex flex-col items-start justify-start p-5 gap-[20px] border-[0.2px] border-solid border-lightgray">
            <b className="self-stretch relative tracking-[0.1em] leading-[40px] uppercase">
                Some random ass question that no one asks ?
            </b>
            <div className="self-stretch relative text-lg leading-[24px] uppercase text-lightgray text-justify inline-block h-[281.63px] shrink-0">
                Lorem ipsum dolor sit amet consectetur. At sed nibh tincidunt
                pharetra. At enim elit in consectetur sed tellus sem tempor pretium.
                Quis feugiat egestas pretium orci risus gravida lobortis justo. Morbi
                parturient pellentesque donec vulputate elementum in eget tellus.
                Cursus porta.
            </div>
        </div>
      </div>
      <div className={`faq-item ${styles['faq-item']}`}>
        <div className="absolute top-[248.44px] left-[821.9px] bg-gray-300 [backdrop-filter:blur(40px)] box-border w-[323.2px] flex flex-col items-start justify-start p-5 gap-[20px] border-[0.2px] border-solid border-lightgray">
            <b className="self-stretch relative tracking-[0.1em] leading-[40px] uppercase">
                Some random ass question that no one asks ?
            </b>
            <div className="self-stretch relative text-lg leading-[24px] uppercase text-lightgray text-justify inline-block h-[281.63px] shrink-0">
                Lorem ipsum dolor sit amet consectetur. At sed nibh tincidunt
                pharetra. At enim elit in consectetur sed tellus sem tempor pretium.
                Quis feugiat egestas pretium orci risus gravida lobortis justo. Morbi
                parturient pellentesque donec vulputate elementum in eget tellus.
                Cursus porta.
            </div>
        </div>
      </div>
      <div className={`faq-item ${styles['faq-item']}`}>
        <div className="absolute top-[357.26px] left-[1174.9px] bg-gray-300 [backdrop-filter:blur(40px)] box-border w-[323.2px] flex flex-col items-start justify-start p-5 gap-[20px] border-[0.2px] border-solid border-lightgray">
            <b className="self-stretch relative tracking-[0.1em] leading-[40px] uppercase">
                Some random ass question that no one asks ?
            </b>
            <div className="self-stretch relative text-lg leading-[24px] uppercase text-lightgray text-justify inline-block h-[281.63px] shrink-0">
                Lorem ipsum dolor sit amet consectetur. At sed nibh tincidunt
                pharetra. At enim elit in consectetur sed tellus sem tempor pretium.
                Quis feugiat egestas pretium orci risus gravida lobortis justo. Morbi
                parturient pellentesque donec vulputate elementum in eget tellus.
                Cursus porta.
            </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;