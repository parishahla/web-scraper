export default function convertToCSV(data: any): string {
  const rows = data.map((item) => Object.values(item).join(",")).join("\n");
  const headers = Object.keys(data[0]).join(",");
  return `${headers}\n${rows}`;
}
