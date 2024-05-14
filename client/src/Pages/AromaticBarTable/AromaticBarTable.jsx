import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./AromaticBarTable.css";

const AromaticBarTable = (props) => {
  const { value, index } = props;
  const feedbackData = JSON.parse(localStorage.getItem("feedback")) || [];
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    {
      field: "serviceQuality",
      headerName:
        "Please rate the quality of the service you received from your host",
      width: 450,
    },
    {
      field: "beverageQuality",
      headerName: "Please rate the quality of your beverage",
      width: 300,
    },
    {
      field: "cleanliness",
      headerName: "Was our restaurant clean",
      width: 200,
    },
    {
      field: "overallExperience",
      headerName: "Please rate your overall dining experience",
      width: 300,
    },
  ];
  const rows = feedbackData.map((feedback, index) => ({
    id: index + 1,
    name: feedback.name,
    email: feedback.email,
    phone: feedback.phone,
    serviceQuality: feedback.serviceQuality,
    beverageQuality: feedback.beverageQuality,
    cleanliness: feedback.cleanliness,
    overallExperience: feedback.overallExperience,
  }));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      )}
      {value === index && (
        <button className="delete-selected-button">Delete</button>
      )}
    </div>
  );
};

export default AromaticBarTable;
