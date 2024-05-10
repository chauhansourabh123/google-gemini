import React, { useContext, useState } from "react";
import './Sidebar.css'
import { Context } from '../Context/Context'

function Sidebar() {


    const [state, setState] = useState(true)

    const { onSent, prevPrompt, setRecentPrompt, newChat, showsidebar } = useContext(Context)

    const searchRecentPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (


        <div className="sidebar">

            {/* Top bar */}

            <div className="top">
                <div onClick={() => setState((prev) => !prev)} className="menubar" title="Collapse Menu">
                    <i className="bi bi-list"></i>
                </div>
                <div className="newChats" onClick={() => newChat()}>
                    <p><i className="bi bi-plus-lg"></i>{state ? "New Chats" : null}</p>
                </div>

                {state ? <div className="recent">
                    <p>Recent</p>

                    {prevPrompt.map((item, index) => {
                        return (
                            <div key={index} className="aboutChats">
                                <div onClick={() => searchRecentPrompt(item)} className="searchedTitile">
                                    <i className="bi bi-chat-left"></i>
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                                <div>
                                    <i className="bi bi-three-dots-vertical"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
                    : null
                }

            </div>

            <div className="bottom">

                <div className="help">
                    <div className="seprate">
                        <i className="bi bi-question-circle"></i>
                        {state ? <p>Help</p> : null}

                    </div>
                    {state ? <i className="bi bi-record-fill"></i> : null}

                </div>
                <div className="help">
                    <div className="seprate">
                        <i className="bi bi-clock"></i>
                        {state ? <p>Activity</p> : null}

                    </div>

                </div>
                <div className="help">
                    <div className="seprate">

                        <i className="bi bi-gear"></i>
                        {state ? <p>Settings</p> : null}

                    </div>
                    {state ? <i className="bi bi-record-fill"></i> : null}
                </div>

                {state ? <div className="description">

                    <i className="bi bi-record-fill"></i>
                    <p> Agra, Uttar Pradesh, India <br />
                        <span> From your IP address <i className="bi bi-record-fill"></i> update location</span>
                    </p>
                </div> : null}


            </div>

        </div>
    )
}

export default Sidebar;