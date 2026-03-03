"use client";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Counter = ({ end, decimals }) => {
  return (
    // There is an error in the console about this component and I will disable it for now, but I will try to fix it later
    // <CountUp
    //   end={end ? end : 100}
    //   duration={3}
    //   decimals={decimals ? decimals : 0}
    // >
    //   {({ countUpRef, start }) => (
    //     // <ReactVisibilitySensor onChange={start} delayedCall>
    //     //   <span className="count" data-from="0" data-to={end} ref={countUpRef}>
    //     //     0
    //     //   </span>
    //     // </ReactVisibilitySensor>
    //   )}
    // </CountUp>
    <></>
  );
};

export default Counter;
