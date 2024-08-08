import { Component } from "react";
import { Popular } from "../Popular/Popular";
import { New } from "../New/New";



export const withHighlight = (Component) => {
    return function (props) {
        const { views } = props;

        if (views > 1000) {
           return (
                <Popular>{<Component {...props} />}</Popular>
           ) 
        } else if (views < 100) {
            return (
                <New>{<Component {...props} />}</New>
            )
        } else {
            return <Component {...props} />
        }
    }
}