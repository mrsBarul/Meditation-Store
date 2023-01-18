function Buttons({ filtering }) {
    return(
        <div className="buttonsContainer">
            <div className="buttons">
                <button onClick={ ()=>filtering('book') }>Книги</button>
                <button onClick={ ()=>filtering('incense') }>Благовония</button>
                <button onClick={ ()=>filtering('clothes') }>Одежда</button>
                <button onClick={ ()=>filtering('inventory') }>Инвентарь</button>
            </div>
        </div>
    )
}

export default Buttons;

