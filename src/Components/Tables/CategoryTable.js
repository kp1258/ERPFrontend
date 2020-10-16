import React from "react";
import { MDBTable, MDBBtn, MDBTableHead, MDBTableBody } from "mdbreact";

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
            <MDBBtn
              size="sm"
              onClick={() => {
                props.handleClick(row.id);
              }}
            >
              Edit
            </MDBBtn>
          ),
        };
      }),
    ],
  };
  return (
    <div class="d-flex justify-content-center">
      <MDBTable responsiveSm>
        <MDBTableHead columns={data.columns} />
        <MDBTableBody rows={data.rows} />
      </MDBTable>
    </div>
  );
};

export default CategoryTable;
