import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";

export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div id="print_component">
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <Button>Imprimez-moi!</Button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}

// component to be printed
class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ color: "green" }}>Utilisateur</h2>
        <table>
          <thead>
            <th>S/N</th>
            <th>Nom</th>
            <th>Email</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Josée La Riccia</td>
              <td>joseelariccia@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Francis Do Monte</td>
              <td>Francis@gmail.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Grégoire</td>
              <td>gregoire@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}