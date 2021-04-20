import { useQuery } from "react-query";
import { API_BASE } from "../../config/api";
import { Table, Container } from "react-bootstrap";

export default function Transaction() {
  const { data: transaction, loading, error } = useQuery(
    "getTransaction",
    async () => {
      const response = await API_BASE.get("transactions");
      return response;
    }
  );

  const transactionIncome = transaction.data.data.transactions;
  console.log(transaction.data.data.transactions);

  return (
    <Container>
      <h3 className="mt-5 mb-3">Income Transaction</h3>
      <Table bordered hover className="bg-white rounded">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>No</th>
            <th style={{ width: "20%" }}>Name</th>
            <th style={{ width: "20%" }}>Address</th>
            <th style={{ width: "20%" }}>Product Order</th>
            <th style={{ width: "20%" }}>Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactionIncome?.map((item) => (
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <span
                  className={
                    item.status == "on the way"
                      ? "otw"
                      : item.status == "success"
                      ? "success"
                      : item.status == "failed"
                      ? "cancel"
                      : "waiting"
                  }
                >
                  {item.status}
                </span>
              </td>
              {item.status == "on the way" ? (
                <td className="text-center">
                  <span className="text-center">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                  </span>
                </td>
              ) : item.status == "success" ? (
                <td>
                  <div className="resolve d-flex justify-content-center align-items-center m-auto">
                    <i class="fa fa-check" aria-hidden="true"></i>
                  </div>
                </td>
              ) : item.status == "failed" ? (
                <td>
                  <span className="reject  d-flex justify-content-center align-items-center m-auto">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </span>
                </td>
              ) : (
                <td className="text-center">
                  <span className="btn-cancel">Cancel</span>
                  <span className="btn-approve">Approve</span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
