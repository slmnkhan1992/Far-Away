import './Logo.css';
import tree from './asset/tree.png'
import suitCase from './asset/suircase.png'

const Logo = () => {
    return (
        <div className='logo'>
            <div className='Image'>
            <img src={tree}/>
            </div>
            <h1>FAR AWAY</h1>
            <div className='Image'>
            <img src={suitCase}/>
            </div>
        </div>
    )
}

export default Logo