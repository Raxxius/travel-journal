import './App.css';
import Globe from './resources/images/globe.jsx'
import Card from './components/Card'
import location from './resources/location'

function App() {
    const cards = location.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <>
            <div className='header'>
                <Globe />
                <h1 className='title'>my travel journal.</h1>
            </div>
            <div className='card-holder'>
                {cards}
            </div>
        </>
    )
}

export default App;
