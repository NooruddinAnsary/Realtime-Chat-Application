import React, { useEffect, useRef } from 'react'
import './chatLists.css'
//import './style.css'

const ChatLists = ({chats}) => {
    const endOfMessages = useRef()
    const user = localStorage.getItem('user')
    function SenderChat ({message, username, avatar}) {
        return (
            <div className='chat_sender' style={{ marginBottom: "10px" }}>
                <img src={avatar} alt="" />
                <p>
                    <strong>{username}</strong> <br/>
                    {message}
                </p>
            </div>
        )
    }
    function ReceiverChat ({message, username, avatar}) {
        return (
            <div className='chat_receiver' style={{ marginBottom: "10px" }}>
                <img src={avatar} alt="" />
                <p>
                    <strong>{username}</strong> <br/>
                    {message}
                </p>
            </div>
        )
    }
    useEffect(() => {
        scrollToBottom()
    }, [chats])

    const scrollToBottom = () => {
        endOfMessages.current?.scrollIntoView({behavior: "smooth"})
    }
  return (
    <div className='chats_list example'>
        {
            chats.map((chat, index) => {
                if(chat.username === user) {
                    return <SenderChat 
                    key={index}
                    message = {chat.message}
                    username = {chat.username}
                    avatar = {chat.avatar}/>
                }
                 else {
                    return <ReceiverChat 
                    key={index}
                    message = {chat.message}
                    username = {chat.username}
                    avatar = {chat.avatar}/>
                 }
            })
        }
        <div ref={endOfMessages}></div>
    </div>
  )
}

export default ChatLists