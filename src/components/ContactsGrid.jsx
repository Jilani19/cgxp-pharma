import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import { contactColumnDefs } from "../grid/contactColumnDefs";
import { fetchContacts, updateContact } from "../services/contactsApi";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

function ContactsGrid() {
  const pageSize = 50;

  const datasource = {
    getRows: async (params) => {
      try {
        const page = params.startRow / pageSize + 1;

        const result = await fetchContacts({
          page,
          limit: pageSize,
        });

        params.successCallback(result.data, result.total);
      } catch (error) {
        console.error("Datasource error:", error);
        params.failCallback();
      }
    },
  };

  const onCellValueChanged = async (params) => {
    const { data, colDef, newValue, oldValue } = params;

    if (newValue === oldValue) return;
    if (!data?._id || !colDef.field) return;

    try {
      await updateContact(data._id, colDef.field, newValue);
    } catch (error) {
      console.error("Inline update failed:", error);
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
      <AgGridReact
        theme="legacy"              // ✅ THEME FIX
        columnDefs={contactColumnDefs}
        rowModelType="infinite"
        cacheBlockSize={pageSize}
        maxBlocksInCache={5}
        onGridReady={(params) => {
          // ✅ v33+ API FIX
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
