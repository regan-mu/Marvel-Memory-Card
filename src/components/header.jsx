import Scores from "./scores";
const Header = (props) => {
    return (
        <div className="header">
            <h1>Marvel Memory</h1>
            <div className="scores">
                <Scores type="current-score" text="Current Score" score={props.currentScore}/>
                {props.bestScore > 0 ? <Scores type="high-score" text="High Score" score={props.bestScore}/>: null }
            </div>
        </div>
    )
}

export default Header;