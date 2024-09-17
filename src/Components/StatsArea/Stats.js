import './Stats.css'


const Stats = ({ itemList }) => {
    return(
        <div className='Stats'>
            <h4>You have <span style={{color:'brown', fontSize:'1.3rem', fontWeight:'800'}}>{itemList.length}</span> items on your list, and you already packed 0 (0%)</h4>
        </div>
    )
}

export default Stats