import { useRef } from "react";

const HookUseRef = () => {

    // let myHeadLine = document.getElementById('myHeadLine');
    let myHeadLine=useRef();

    const change=()=>{
        myHeadLine.current.innerText = "Hello World";
    }

    return (
        <div>
            {/* <h1 id="myHeadLine">My name is Rafid</h1> */}

            <h1 ref={myHeadLine}>My name is Rafid</h1>

            <button onClick={change}>Click</button>
        </div>
    );
};

export default HookUseRef;