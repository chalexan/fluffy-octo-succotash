import "./App.css";
import BonusBar from "./components/BonusBar";

const ClientID = "2c44d8c2-c89a-472e-aab3-9a8a29142315";
const DeviceID = "7db72635-fd0a-46b9-813b-1627e3aa02ea";

function App() {
  return (
    <>
      <div className="text-logo">
        <font size="4"> ЛОГОТИП </font>
      </div>
      <BonusBar ClientID={ClientID} DeviceID={DeviceID} />
    </>
  );
}

export default App;
