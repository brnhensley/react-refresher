
export default function Slots(props) {
    const { i, winner } = props;
    return (
        <div>
            <h3>{i[0]} {i[1]} {i[2]} </h3>
            {winner}
        </div>
    );
}
