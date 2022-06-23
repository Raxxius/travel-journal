import './App.css';
import Globe from './resources/images/globe.jsx'
import Card from './components/Card'

function App() {
    return (
        <>
            <div className='header'>
                <Globe />
                <h1 className='title'>my travel journal.</h1>
            </div>
            <Card />
        </>
    )
}

export default App;
