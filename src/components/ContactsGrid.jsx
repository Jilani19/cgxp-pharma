import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

// ✅ AG Grid module imports MUST be at top
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import { contactColumnDefs } from "../grid/contactColumnDefs";
import { fetchContacts, updateContact } from "../services/contactsApi";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// ✅ Module registration AFTER imports
ModuleRegistry.registerModules([AllCommunityModule]);

function ContactsGrid() {
  const [rowData, setRowData] = useState([]);

  // Load all data once (client-side pagination)
  useEffect(() => {
    const loadAllData = async () => {
      try {
        const result = await fetchContacts();
        console.log("TOTAL ROWS LOADED:", result.total);
        setRowData(result.data);
      } catch (error) {
        console.error("Failed to load contacts:", error);
      }
    };

    loadAllData();
  }, []);

  // 🔥 INLINE EDIT HANDLER
  const onCellValueChanged = async (params) => {
    const { data, colDef, newValue, oldValue } = params;

    // No change → no API call
    if (newValue === oldValue) return;

    // Safety checks
    if (!data || !data._id || !colDef.field) return;

    try {
      await updateContact(data._id, colDef.field, newValue);
      console.log(
        `Updated ${colDef.field} for ${data._id}:`,
        newValue
      );
    } catch (error) {
      console.error("Inline update failed:", error);
    }
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 600, width: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={contactColumnDefs}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 50, 100]}
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
