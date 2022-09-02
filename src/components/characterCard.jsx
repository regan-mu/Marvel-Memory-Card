const CharacterCard = (props) => {
    const click = (e) => {
        props.handleClick(e)
    }
    return (
        <div className="card" onClick={click}>
            <div className="img-section">
                <img src={props.characterImg} alt={props.name} />
            </div>
            <h3>{props.name.toUpperCase()}</h3>
            <div className="overlay" id={props.cardId}></div>
        </div>
    )
}

export default CharacterCard;