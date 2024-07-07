import { Avatar } from "@mui/material";
import React, {useEffect, useRef} from "react";

const Message = ({ role, content }) => {

    const ref = useRef()

    useEffect(()=>{
        ref.current?.scrollIntoView({behavior:"smooth"})
    },[content])

    return (
        <div ref={ref} className={`message ${role === "user" ? "client" : "admin"}`}>
            <div className="message--info">
                <Avatar className="input--B--image" src={`/images/${role === "user" ? "usi-small.png" : "B.png"}`} alt={role === "user" ? "User" : "Assistant"} />

            </div>
            <div className="message--content">
                {content.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </div>
        </div>

    );
};

export default Message;
