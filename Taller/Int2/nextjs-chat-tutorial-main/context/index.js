import React, { useState, createContext } from "react";

export const Constext = createContext();

export const ConstextPovider = () =>{
    const[username, setUserName] = useState("");
    const[secret, setSecret] = useState("");

    const value = {
        username,
        setUserName,
        secret,
        setSecret,

    };

 return <Constext.Povider value={value}>{props.children}</Constext.Povider>;
}