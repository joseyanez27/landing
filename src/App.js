import { Helmet } from "react-helmet";
import { GlobalStyle } from "./assets/styles/Global.style";
import RouterApp from "./routes/RouterApp";

function App() {
  return (
    <>
      <Helmet>
        <title>Estética Brujas Blancas</title>
        <meta name="description" content="Estética Brujas Blancas"/>
      </Helmet>

      <GlobalStyle />
      <RouterApp />
    </>
  );
}

export default App;
