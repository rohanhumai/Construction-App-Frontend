import { STATUS_STYLES } from "../constants/projectStatus";

export default function StatusBadge({ status }) {
  const badgeClass =
    STATUS_STYLES[status] ?? "bg-gray-100 text-gray-800 ring-1 ring-gray-200";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${badgeClass}`}
    >
      {status}
    </span>
  );
}
