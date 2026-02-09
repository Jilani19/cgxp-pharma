export const contactColumnDefs = [
  // =========================
  // Internal IDs
  // =========================
  {
    headerName: "DB ID",
    field: "_id",
    hide: true,
  },
  {
    headerName: "Excel ID",
    field: "externalId",
    hide: true,
  },

  // =========================
  // Core Profile Info
  // =========================
  {
    headerName: "Name",
    field: "name",
    editable: true,
    minWidth: 180,
    cellEditor: "agTextCellEditor",
  },
  {
    headerName: "Title",
    field: "title",
    editable: true,
    minWidth: 160,
    cellEditor: "agTextCellEditor",
  },
  {
    headerName: "Level",
    field: "level",
    editable: true,
    minWidth: 120,
    cellEditor: "agTextCellEditor",
  },
  {
    headerName: "Company",
    field: "company",
    editable: true,
    minWidth: 180,
    cellEditor: "agTextCellEditor",
  },

  // =========================
  // Contact Info
  // =========================
  {
    headerName: "Email",
    field: "email",
    editable: true,
    minWidth: 220,
    cellEditor: "agTextCellEditor",
  },
  {
    headerName: "Phone",
    field: "phone",
    editable: true,
    minWidth: 140,
    cellEditor: "agTextCellEditor",
  },

  // =========================
  // Social
  // =========================
  {
    headerName: "LinkedIn",
    field: "linkedin",
    editable: false,
    minWidth: 140,
    cellRenderer: (params) =>
      params.value ? (
        <a href={params.value} target="_blank" rel="noreferrer">
          Open
        </a>
      ) : (
        ""
      ),
  },

  // =========================
  // Status Flags
  // =========================
  {
    headerName: "Email Status",
    field: "email_check_status",
    editable: false,
    minWidth: 140,
  },
  {
    headerName: "Email Checked On",
    field: "email_check_date",
    editable: false,
    minWidth: 160,
    valueFormatter: (params) =>
      params.value
        ? new Date(params.value).toLocaleDateString()
        : "",
  },
  {
    headerName: "LinkedIn Status",
    field: "linkedin_check_status",
    editable: false,
    minWidth: 160,
  },
  {
    headerName: "LinkedIn Checked On",
    field: "linkedin_check_date",
    editable: false,
    minWidth: 180,
    valueFormatter: (params) =>
      params.value
        ? new Date(params.value).toLocaleDateString()
        : "",
  },

  // =========================
  // Unlock Flags
  // =========================
  {
    headerName: "Unlocked",
    field: "unlocked",
    editable: false,
    minWidth: 120,
    valueFormatter: (params) =>
      params.value ? "Yes" : "No",
  },
  {
    headerName: "Company Unlocked",
    field: "unlocked_company",
    editable: false,
    minWidth: 160,
    valueFormatter: (params) =>
      params.value ? "Yes" : "No",
  },

  // =========================
  // Audit Info
  // =========================
  {
    headerName: "Created At",
    field: "created_at",
    editable: false,
    minWidth: 180,
    valueFormatter: (params) =>
      params.value
        ? new Date(params.value).toLocaleString()
        : "",
  },
  {
    headerName: "Updated At",
    field: "updated_at",
    editable: false,
    minWidth: 180,
    valueFormatter: (params) =>
      params.value
        ? new Date(params.value).toLocaleString()
        : "",
  },
];
