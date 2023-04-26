import React from "react";
import Card from "../Counter-card";
const Counter = () => {
    const [count,setCount] = React.useState(0);
    const incrementNum = () => {
        setCount(count + 1);
    }
    const decrementNum = () => {
        setCount(count > 0 ? count - 1 : 0);
    }
    return (
        <>
            <Card
            count={count}
            incrementNum={incrementNum}
            decrementNum={decrementNum}
            />
        </>
    )
}

export default Counter;