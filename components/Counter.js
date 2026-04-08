"use client";
import CountUp from "react-countup";

const Counter = ({ end, decimals }) => {
    return (
        <CountUp
            end={end ? end : 100}
            duration={3}
            decimals={decimals ? decimals : 0}
            enableScrollSpy
            scrollSpyOnce
        />
    );
};

export default Counter;
