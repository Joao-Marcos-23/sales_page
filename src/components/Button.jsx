import { useState } from 'react'; 

export default function Button() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
     setText(event.target.value);
    }
    
    return (
        <>
        <input onChange={handleChange} type='text'/>
       <p>{text}</p> 

     </>
    );
}
