import { useState } from 'react'
import './Form.css'

const Form = ({ itemList, setItemList }) => {

    const [inputText, setinputText] = useState('')
    const [itemNumber, setItemNumber] = useState(0)

    const addHandler = () => {
        const myList = [...itemList]
        myList.push({
            inputText,
            itemNumber,
        })
        setItemList(myList)

    }

    return (
        <div className='Form'>
            <h4>What do you need for your <apan><i class="fa-regular fa-face-grin-hearts"></i></apan> trip?</h4>
            <select onChange={(e) => setItemNumber(e.target.value)}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => (
                    <option>{elem}</option>
                ))}
            </select>

            <input
                onChange={(e) => setinputText(e.target.value)}
                id='input' value={inputText} />
            <button className='AddBtn' onClick={addHandler}>ADD</button>

        </div>
    )
}

export default Form