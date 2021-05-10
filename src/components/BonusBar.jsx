import { useEffect, useState } from "react";

const BonusBar = (props) => {
  useEffect(() => {
    getDataFromAPI();
  }, []);

  const [currentQuantity, setcurrentQuantity] = useState(0);
  const [forBurningQuantity, setforBurningQuantity] = useState(0);
  const [dateBurning, setdateBurning] = useState(0);

  const getDataFromAPI = async () => {
    const urlToken = "http://localhost:8080/token";
    const preResult = await fetch(urlToken, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idClient: props.ClientID,
        accessToken: "",
        paramName: "device",
        paramValue: props.DeviceID,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      }),
    });
    const result = await preResult.json();
    setcurrentQuantity(result.fx.currentQuantity);
    setforBurningQuantity(result.fx.forBurningQuantity);
    setdateBurning(result.fx.dateBurning);
  };

  return (
    <div className="bonus-block">
      <table>
        <tr>
          <td className="text-block">
            <font size="5">
              <h4>{currentQuantity} бонусов</h4>
              {console.log(props)}
            </font>
          </td>
          <td className="arrow-block" rowspan="2">
            <div className="arrow"></div>
          </td>
        </tr>
        <tr>
          <td className="text-block">
            <font className="text-description" color="grey">
              {dateBurning} сгорит 🔥 {forBurningQuantity} бонусов
            </font>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BonusBar;
