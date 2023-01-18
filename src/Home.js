import meditation from './picture/medit.jpg';

function Home() {
    return(
        <div className='homeContainer'>
            <div className='imageContainer'>
                <img className='meditImage' src={ meditation } alt='meditation'/>
            </div>
            <div className='titleContainer'>
                <h1>Откройся новому</h1>
                <h3>Обучающий сервис по медитации</h3>
            </div>
            <div className='ellipseContainer'>
                <div className='ellipse ellipseOne'>
                    <p>1000+ довольных клиентов</p>
                </div>
                <div className='ellipse ellipseTwo'>
                    <p>9 курсов для твоей души</p>
                </div>
                <div className='ellipse ellipseThree'>
                    <p>Победитель премии GQ 2022 “Лучший обучающий проект года”</p>
                </div>
            </div>
        </div>
    )
}

export default Home;