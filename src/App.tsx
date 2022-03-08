import { Layout } from "./styles/layout";
import { Aside } from "./components/Aside";
import { Content } from "./components/Content";
function App() {
  return (
    <Layout>
      <Aside />
      <Content />
    </Layout>
  );
}

export default App;
