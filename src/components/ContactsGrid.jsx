import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  ClientSideRowModelModule,
  InfiniteRowModelModule,
} from "ag-grid-community";

import { contactColumnDefs } from "../grid/contactColumnDefs";
import { fetchContacts, updateContact } from "../services/contactsApi";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// ✅ ONLY Community modules
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  InfiniteRowModelModule,
]);

function ContactsGrid() {
  const pageSize = 20;

  const datasource = {
    getRows: async (params) => {
      try {
        const page = params.startRow / pageSize + 1;

        const result = await fetchContacts({
          page,
          limit: pageSize,
        });

        // IMPORTANT: total must be 10500
        params.successCallback(result.data, result.total);
      } catch (err) {
        console.error(err);
        params.failCallback();
      }
    },
  };

  const onCellValueChanged = async (params) => {
    const { data, colDef, newValue, oldValue } = params;
    if (newValue === oldValue) return;

    try {
      await updateContact(data._id, colDef.field, newValue);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact
        theme="legacy"
        columnDefs={contactColumnDefs}
        rowModelType="infinite"     // ✅ THIS IS THE KEY
        pagination={true}
        paginationPageSize={20}
        paginationPageSizeSelector={[20, 50, 100]}
        cacheBlockSize={20}
        onGridReady={(params) => {
          params.api.setGridOption("datasource", datasource);
        }}
        onCellValueChanged={onCellValueChanged}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
        }}
      />
    </div>
  );
}

export default ContactsGrid;
