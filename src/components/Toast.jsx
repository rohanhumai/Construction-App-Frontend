export default function Toast({ message, onClose }) {
  if (!message) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 top-4 z-50 mx-auto max-w-sm rounded-2xl border border-emerald-200 bg-white p-4 text-sm text-slate-800 shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <p className="font-medium">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="text-slate-500 transition hover:text-slate-800"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
}
