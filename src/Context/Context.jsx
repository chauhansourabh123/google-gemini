import { createContext, useState } from "react";
import runChat from '../confiq/Gemini'

export const Context = createContext()

const ContextProvider = (props) => {

    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState('')
    const [prevPrompt, setPrevPrompt] = useState([])
    const [showresult, setShowresult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultdata, setResultData] = useState('')


    const delayPara = (index, next) => {
        setTimeout(() => {
            setResultData((prev) => prev + next)
        }, 75 * index)
    }

    
    const newChat = () =>{
        setLoading(false)
        setShowresult(false)
    }


    const onSent = async (prompt) => {

        setResultData("")
        setShowresult(true)
        setLoading(true)
        let response;
        if(prompt !== undefined){
            response = await runChat(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompt(prev => [...prev, input])
            setRecentPrompt(input)
            response = await runChat(input)
        }

       
        let responseArr = response.split("**");
        let newResponse="";
        for (let i = 0; i < responseArr.length; i++) {

            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArr[i];
            }
            else {
                newResponse += "<b>" + responseArr[i] + "</b>";
            }

        }
        let responseArr2 = newResponse.split('*').join("<br />")
        let newArr = responseArr2.split(" ")

        for (let i = 0; i < newArr.length; i++) {

            const nextword = newArr[i]
            delayPara(i, nextword + " ")

        }

        setInput("")
        setLoading(false)
    }


    const contextValue = {
        onSent,
        setInput,
        input,
        loading,
        prevPrompt,
        setPrevPrompt,
        setRecentPrompt,
        recentPrompt,
        showresult,
        resultdata,
        newChat,
        
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider

