import React, { useContext, useState } from "react";
import './Main.css'
import { Context } from "../Context/Context.jsx";
import Sidebar from '../Sidebar/Sidebar.jsx'

function Main() {

    const [bar, setBar] = useState(false)

    const { onSent, recentPrompt, showresult, loading, resultdata, setInput, input } = useContext(Context)

    const showSideBar = () => {
        setBar(prev => !prev)

        document.querySelector('.showbar').classList.toggle('hidden')
    }

    return (
        <div className="main">
            <div className="nav">
                <div className="navbar">
                    <div className="left">
                        <i onClick={showSideBar} className="bi bi-list listIcon"></i>
                        <p>Gemini</p>
                        <i className="bi bi-caret-down-fill dropdown"></i>
                    </div>
                    <div className="right">
                        <button><i className="bi bi-stars"></i>Try Gemini Advanced</button>
                        <i className="bi bi-clock-history clock"></i>
                        <img className="userImage" src="https://lh3.googleusercontent.com/-TrIvItqvLuQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklifSjFCWmYnwUxOjo_ClsHLTmTbA/photo.jpg?sz=46" alt="" />
                    </div>
                </div>
                <div className="showbar">

                    {bar ? <Sidebar /> : null}

                </div>
            </div>




            {/* Middle content */}

            <div className="container">

                {!showresult
                    ?
                    <>
                        <div className="middlecontainer">
                            <div className="container">
                                <div className="middlecontent">
                                    <h1 className="name">Hello, Sourabh</h1>
                                    <h1>How can I help you today?</h1>

                                    <div className="cards">
                                        <div className="card">
                                            <p>Write a product description for a new type of toothpaste.</p>
                                            <i className="bi bi-pencil-square"></i>
                                        </div>
                                        <div className="card">
                                            <p>Write a product description for a new type of toothpaste.</p>
                                            <i className="bi bi-pencil-square"></i>
                                        </div>
                                        <div className="card">
                                            <p>Write a product description for a new type of toothpaste.</p>
                                            <i className="bi bi-pencil-square"></i>
                                        </div>
                                        <div className="card">
                                            <p>Write a product description for a new type of toothpaste.</p>
                                            <i className="bi bi-pencil-square"></i>
                                        </div>
                                    </div>

                                    <div className="middleFooter">
                                        <div className="para">
                                            <i className="bi bi-shield-exclamation"></i>
                                            <p>Your conversations are processed by human reviewers to improve the technologies powering Gemini Apps. Don’t enter anything you wouldn’t want reviewed or used.
                                            </p>
                                        </div>
                                        <div className="buttons">
                                            <button>How it works</button>
                                            <button>Dismiss</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className="result">
                        <div className="result-title">
                            <img className="userImage" src="https://lh3.googleusercontent.com/-TrIvItqvLuQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklifSjFCWmYnwUxOjo_ClsHLTmTbA/photo.jpg?sz=46" alt="" />

                            <p>{recentPrompt}</p>
                        </div>
                        <div className="resultData">
                            <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" />

                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> : <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
                            }


                        </div>
                    </div>
                }
            </div>




            {/* Footer */}
            <div className="footer">
                <div className="container">
                    <div className="inputbox">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter a prompt here" />
                        <div className="icons">
                            <i className="bi bi-images"></i>
                            <i className="bi bi-mic"></i>
                            <i onClick={() => onSent()} className="bi bi-send"></i>
                        </div>
                    </div>
                    <p className="footerContent">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps </p>
                </div>
            </div>



        </div>
    )
}

export default Main

