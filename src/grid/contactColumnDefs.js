export const contactColumnDefs = [
  // Internal IDs
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

  // Core Profile Info
  {
    headerName: "Name",
    field: "name",
    editable: true,
    minWidth: 180,
  },
  {
    headerName: "Title",
    field: "title",
    editable: true,
    minWidth: 160,
  },
  {
    headerName: "Level",
    field: "level",
    editable: true,
    minWidth: 120,
  },
  {
    headerName: "Company",
    field: "company",
    editable: true,
    minWidth: 180,
  },

  // Contact Info
  {
    headerName: "Email",
    field: "email",
    editable: true,
    minWidth: 220,
  },
  {
    headerName: "Phone",
    field: "phone",
    editable: true,
    minWidth: 140,
  },

  // Social
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

  // Status Flags
  {
    headerName: "Email Status",
    field: "email_check_status",
    minWidth: 140,
  },
  {
    headerName: "Email Checked On",
    field: "email_check_date",
    minWidth: 160,
    valueFormatter: (params) =>
      params.value ? new Date(params.value).toLocaleDateString() : "",
  },
  {
    headerName: "LinkedIn Status",
    field: "linkedin_check_status",
    minWidth: 160,
  },
  {
    headerName: "LinkedIn Checked On",
    field: "linkedin_check_date",
    minWidth: 180,
    valueFormatter: (params) =>
      params.value ? new Date(params.value).toLocaleDateString() : "",
  },

  // Unlock Flags
  {
    headerName: "Unlocked",
    field: "unlocked",
    minWidth: 120,
    valueFormatter: (params) => (params.value ? "Yes" : "No"),
  },
  {
    headerName: "Company Unlocked",
    field: "unlocked_company",
    minWidth: 160,
    valueFormatter: (params) => (params.value ? "Yes" : "No"),
  },

  // Audit Info (🔥 FIXED)
  {
    headerName: "Created At",
    field: "createdAt",
    minWidth: 180,
    valueFormatter: (params) =>
      params.value ? new Date(params.value).toLocaleString() : "",
  },
  {
    headerName: "Updated At",
    field: "updatedAt",
    minWidth: 180,
    valueFormatter: (params) =>
      params.value ? new Date(params.value).toLocaleString() : "",
  },
];
