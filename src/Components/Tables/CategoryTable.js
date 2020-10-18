import React from "react";
import {
  MDBTable,
  MDBCard,
  MDBBtn,
  MDBTableHead,
  MDBTableBody,
} from "mdbreact";

const CategoryTable = (props) => {
  var data = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Nazwa",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Action",
        field: "handle",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [
      ...props.data.map((row) => {
        return {
          ...row,
          handle: (
            <button
              class="btn btn-primary"
              size="sm"
              onClick={() => {
                props.handleClick(row.id);
              }}
            >
              Edit
            </button>
          ),
        };
      }),
    ],
  };
  return (
    <div class="d-flex justify-content-center">
      <MDBCard>
        <MDBTable responsiveSm>
          <MDBTableHead columns={data.columns} />
          <MDBTableBody rows={data.rows} />
        </MDBTable>
      </MDBCard>
    </div>
  );
};

export default CategoryTable;
