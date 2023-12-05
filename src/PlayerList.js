import Player from "./Player";
import { players } from "./players";
import Row from "react-bootstrap/Row";
function PlayerList() {
  return (
    <Row>
      {players.map((element) => (
        <Player user={element} key={element.id}>
          {" "}
        </Player>
      ))}
    </Row>
  );
}
export default PlayerList;
