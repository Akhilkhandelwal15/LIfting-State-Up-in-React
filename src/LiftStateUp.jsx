import { useState } from "react";
import DisplayComponent from "./components/DisplayComponent";
import InputComponent from "./components/InputComponent";

export default function LiftingStateUp(){
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    );
}