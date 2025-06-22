export default function InputComponent({inputValue, setInputValue}){
    return (
        <>
            <input
                type="text"
                placeholder="Enter name"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
            >
            </input>
        </>
    );
}