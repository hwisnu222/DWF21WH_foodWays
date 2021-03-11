import { Table, Container } from "react-bootstrap";
export default function Transaction() {
  return (
    <Container>
      <h3 className="mt-5 mb-3">Income Transaction</h3>
      <Table bordered hover className="bg-white">
        <thead className="thead-light">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Product Order</th>
            <th>Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <p className="waiting">Waiting Approve</p>
            </td>
            <td className="text-center">
              <span className="btn-cancel">Cancel</span>
              <span className="btn-approve">Approve</span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <p className="success">Success</p>
            </td>
            <td className="text-center">
              <span className="resolve text-center">
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <p className="otw">On The Way</p>
            </td>
            <td className="text-center">
              <span className="reject text-center">
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <p className="cancel">Cancel</p>
            </td>
            <td className="text-center">
              <span className="reject text-center">
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
