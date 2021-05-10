const BonusBar = () => {
  return (
    <div className="bonus-block">
      <table>
        <tr>
          <td className="text-block">
            <font size="5">
              <h4>300 бонусов</h4>
            </font>
          </td>
          <td className="arrow-block" rowspan="2">
            <div className="arrow"></div>
          </td>
        </tr>
        <tr>
          <td className="text-block">
            <font className="text-description" color="grey">
              29/03 сгорит 🔥 250 бонусов
            </font>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BonusBar;
