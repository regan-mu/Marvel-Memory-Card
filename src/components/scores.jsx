const Scores = props => {
    return  (
        <span className={props.type}>{props.text}: {props.score}</span>
    )
}

export default Scores;