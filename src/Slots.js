
export default function Slots(props) {
    const { icons, winner } = props;
    const win = winner ? "Winner" : "Loser";
    return (
        <>
            <h1>{icons.map(icon => <b>{icon} </b>)}</h1>
            <h2 className={win}>
                {icons.length === 3 ? win + "!" : null}
            </h2>
        </>
    );
}
