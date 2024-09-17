import './packinglist.css'
import { useState } from 'react'


const PackingList = ({ itemList, setItemList }) => {

    const handleDelete = (indexToDelete) => {
        const updatedList = itemList.filter((_, index) => index !== indexToDelete);
        setItemList(updatedList);
    };

    const clearList = () => {
        const list = true;
        document.querySelector('.itemList').innerHTML = ''
    }

    return (
        <div className='PackingList'>
            <div className='itemList'>
                {itemList.map((elem, index) => (
                    <ItemList
                        key={index}
                        item={elem}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
            </div>

            <div className='LowerArea'>
                <select className='Sort'>
                    {['largest to Lowest', 'Lowest to Largest', 'A to Z', 'Date Wise'].map((item)=> (
                        <option>{item}</option>
                    ))}
                </select>

                <button onClick={clearList} className='clearlist'>Clear List</button>
            </div>
        </div>



    )
}


export default PackingList


function ItemList({ item, onDelete }) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className='item'>
            <input onChange={handleCheckboxChange} checked={isChecked} type='checkBox' id='checkBox' />
            <p id='itemText' className={isChecked ? 'strikethrough' : ''}> {item.itemNumber} {item.inputText}</p>
            <i class="fa-solid fa-xmark" style={{ color: 'red', cursor: 'pointer' }} onClick={onDelete}></i>
        </div>
    )
}