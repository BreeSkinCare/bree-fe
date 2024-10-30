import { React, useState } from "react";
import { fetchData } from "../../services/api";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Input = (props) => {
    const [text, setText] = useState("");
    const isSmallScreen = window.innerWidth <= 792;

    const handleClick = async () => {
        props.addMessageToConversation({ role: 'user', content: text });
        setText(""); // Clear the input field immediately after sending the message

        const postRes = await fetchData(text);
        console.log('post res', postRes);

        let answerArray = '';
        for (let i = 0; i < postRes.length; i++) {
            if (postRes[i].type === "text") {
                answerArray += postRes[i].payload.message;
            }
        }
        console.log("ans" + answerArray);
        props.addMessageToConversation({ role: 'assistant', content: answerArray });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior of form submission
            handleClick(); // Call handleClick when Enter is pressed
        }
    };

    return (
        <div className="bottom--container">
            <div className="input--container">
                <Avatar className="input--B--image" src="/images/B.png" alt="B-png" />
                <input
                    className="input--input"
                    type="text"
                    placeholder="How’s your skin feeling today ?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
                    {isSmallScreen ? (
                        <button
                            className="arrow--button"
                            type="button"
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0px',
                                marginLeft: '7px',
                            }}
                            onClick={handleClick}
                        >
                            <svg style={{ marginTop: '4px' }} xmlns="http://www.w3.org/2000/svg" width="58" height="29" viewBox="0 0 18 19" fill="none">
                                <circle cx="8.98603" cy="9.03876" r="8.99042" fill="#F5EADC" />
                                <path d="M8.70933 12.4966C8.70933 12.7257 8.8951 12.9115 9.12427 12.9115C9.35343 12.9115 9.53921 12.7257 9.53921 12.4966L8.70933 12.4966ZM9.41768 5.56409C9.25563 5.40205 8.9929 5.40205 8.83086 5.56409L6.19018 8.20477C6.02814 8.36682 6.02814 8.62954 6.19018 8.79159C6.35223 8.95363 6.61495 8.95363 6.777 8.79159L9.12427 6.44432L11.4715 8.79159C11.6336 8.95363 11.8963 8.95363 12.0584 8.79159C12.2204 8.62954 12.2204 8.36682 12.0584 8.20477L9.41768 5.56409ZM9.53921 12.4966L9.53921 5.8575L8.70933 5.8575L8.70933 12.4966L9.53921 12.4966Z" fill="#ffff" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            className="arrow--button"
                            type="button"
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                marginLeft: '32px',
                                backgroundColor: 'white'
                            }}
                            onClick={handleClick}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="39"
                                viewBox="0 0 39 39"
                                fill="none"
                            >
                                <circle cx="19.5" cy="19.5" r="19.5" transform="rotate(90 19.5 19.5)" fill="#F5EADC" />
                                <path d="M12 18.8C11.4477 18.8 11 19.2478 11 19.8C11 20.3523 11.4477 20.8 12 20.8L12 18.8ZM27.1071 20.5072C27.4976 20.1166 27.4976 19.4835 27.1071 19.0929L20.7431 12.729C20.3526 12.3385 19.7195 12.3385 19.3289 12.729C18.9384 13.1195 18.9384 13.7527 19.3289 14.1432L24.9858 19.8L19.3289 25.4569C18.9384 25.8474 18.9384 26.4806 19.3289 26.8711C19.7195 27.2616 20.3526 27.2616 20.7431 26.8711L27.1071 20.5072ZM12 20.8L26.4 20.8L26.4 18.8L12 18.8L12 20.8Z" fill="#ffff" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            <div className="input--agree">
                By messaging Bree, you are agreeing to our&nbsp; 
                <Link to={"/privacy-policy"} style={{ fontWeight: '900' }} target="_blank">Terms of Service and Privacy Policy.</Link>
            </div>
        </div>
    );
};

export default Input;
