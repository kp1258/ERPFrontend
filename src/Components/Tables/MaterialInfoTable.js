import React from "react";
import { MDBDataTableV5, MDBCard } from "mdbreact";
const MaterialInfoTable = (props) => {
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
        label: "Akcja",
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
        <MDBDataTableV5
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={data}
          pagingTop
          searchTop
          searchBottom={false}
        />
      </MDBCard>
    </div>
  );
};

export default MaterialInfoTable;
