export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div>
        <audio controls src={props.phonetics.audio}></audio>
        <br />
        <p>{props.phonetics.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
