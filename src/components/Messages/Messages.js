import React from 'react';
import './Messages.css';
import ScrollToBottom from "react-scroll-to-bottom";
const Messages = ({ message }) => (
    <ScrollToBottom>
        {Messages.map((message, i) => <div key={i} ><Messages message={message} name={name}></Messages> </div>}
    </ScrollToBottom>

)

export default Messages;
