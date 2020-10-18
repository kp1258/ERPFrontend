import React from "react";
import { MDBBtn, MDBDataTableV5 } from "mdbreact";
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
    </div>
  );
};

export default MaterialInfoTable;
