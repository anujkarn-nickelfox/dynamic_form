function exportToCsv(columns, data) {
  if (data?.length === 0) {
    return;
  }
  const csv = [columns.join(",")];
  data.forEach((row) => {
    csv.push(row.map((column) => column.toString()).join(","));
  });
  const csvData = csv.join("\n");
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.csv";
  link.click();
  URL.revokeObjectURL(url);
}

export { exportToCsv };
