import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = ({ iconClass, title, count }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const titleStyle = {
    color:'white',
    // Add more styles as needed
  };
 const numberStyle = {
    fontSize: '4vw', // Change to your desired font size
    fontWeight: 'bold', // Add font weight for emphasis
    color: 'white', // Change to your desired color
    // Add more styles as needed
  };
  return (
    <div className="col-lg-3 col-md-6" ref={ref}>
      <div className="d-flex">
        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
          <i className={`fa ${iconClass} fs-4 text-white `}style={{ width: 'auto' }}></i>
        </div>
        <div className="ps-4">
          <h5 className=" " style={titleStyle}>
            {title}
          </h5>
          {inView && <CountUp start={0} end={count} style={numberStyle} duration={2} separator="," />}
        </div>
      </div>
    </div>
  );
};

export default Counter;
