import ReactPannellum, { getConfig } from "react-pannellum";
import { Container } from "./styles";

export function Pannellum() {
  function click() {
    console.log(getConfig());
  }
  const config = {
    autoRotate: -2,
  };
  return (
    <Container>
      <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource="https://pannellum.org/images/alma.jpg"
          config={config}
        />
        <div onClick={click}>Click me</div>
    </Container>
  );
}

export default Pannellum;
