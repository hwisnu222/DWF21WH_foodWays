import { Card } from "react-bootstrap";
import FoodWays from "../../assets/icon/foodways.svg";
import Logo from "../../assets/icon/logo.svg";

export default function CardHistoryUser({ orders, status }) {
  const product = orders.orders;
  return (
    <div>
      {product.map((item) => (
        <Card body className="mt-2 mb-3 border-0">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="font-weight-bold">{item.title}</h5>
              <p className="avenir-font">Saturday, 12 March 2021</p>
              <p className="font-weight-bold avenir-font text-red">
                Total : Rp {item.price}
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between">
              <div className="mb-2">
                <img src={FoodWays} alt="logortype" />
                <img src={Logo} alt="logo" />
              </div>
              {status == "on the way" ? (
                <span className="status-otw font-weight-bold avenir-font text-center">
                  {status}
                </span>
              ) : status == "failed" ? (
                <span className="status-failed font-weight-bold avenir-font text-center">
                  {status}
                </span>
              ) : (
                <span className="status-finished font-weight-bold avenir-font text-center">
                  {status}
                </span>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
