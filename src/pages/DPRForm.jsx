import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "../components/Toast";
import { WEATHER_OPTIONS } from "../constants/projectStatus";
import { projects } from "../data/projects";
import { validateDprForm } from "../utils/dprValidation";

export default function DPRForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedProject = projects.find((project) => String(project.id) === id);

  const [formData, setFormData] = useState(() => ({
    projectId: selectedProject ? String(selectedProject.id) : "",
    date: "",
    weather: "",
    description: "",
    workers: "",
    images: [],
  }));
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  const previewUrls = useMemo(
    () => formData.images.map((image) => URL.createObjectURL(image)),
    [formData.images],
  );

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    updateField("images", files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateDprForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setToastMessage("Daily progress report submitted successfully.");
    window.setTimeout(() => navigate("/projects"), 1200);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 sm:py-8 md:px-8">
      <Toast message={toastMessage} onClose={() => setToastMessage("")} />

      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Daily Progress Report
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            {selectedProject ? selectedProject.name : "Project Report"}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Record today&apos;s site activity, workforce, and photo evidence.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Project
            </span>
            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-slate-900"
              value={formData.projectId}
              onChange={(e) => updateField("projectId", e.target.value)}
            >
              <option value="">Select project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
            {errors.projectId && (
              <p className="mt-1 text-sm text-red-600">{errors.projectId}</p>
            )}
          </label>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Date
              </span>
              <input
                type="date"
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-slate-900"
                value={formData.date}
                onChange={(e) => updateField("date", e.target.value)}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">{errors.date}</p>
              )}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Weather
              </span>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-slate-900"
                value={formData.weather}
                onChange={(e) => updateField("weather", e.target.value)}
              >
                <option value="">Select weather</option>
                {WEATHER_OPTIONS.map((weather) => (
                  <option key={weather} value={weather}>
                    {weather}
                  </option>
                ))}
              </select>
              {errors.weather && (
                <p className="mt-1 text-sm text-red-600">{errors.weather}</p>
              )}
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Work Description
            </span>
            <textarea
              placeholder="Describe the completed work, progress, and site notes."
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-slate-900"
              rows="5"
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Worker Count
            </span>
            <input
              type="number"
              min="1"
              placeholder="Enter the number of workers on site"
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-slate-900"
              value={formData.workers}
              onChange={(e) => updateField("workers", e.target.value)}
            />
            {errors.workers && (
              <p className="mt-1 text-sm text-red-600">{errors.workers}</p>
            )}
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Site Photos
            </span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition focus:border-slate-900"
            />
            <p className="mt-2 text-xs text-slate-500">
              Upload between 1 and 3 images.
            </p>
            {errors.images && (
              <p className="mt-1 text-sm text-red-600">{errors.images}</p>
            )}
          </label>

          {previewUrls.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {previewUrls.map((url, index) => (
                <img
                  key={url}
                  src={url}
                  alt={`Upload preview ${index + 1}`}
                  className="h-24 w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 p-3 text-white transition hover:bg-slate-700 focus:outline-none"
          >
            Submit DPR
          </button>
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="w-full rounded-xl border border-slate-300 p-3 text-slate-900 transition hover:border-slate-500 focus:outline-none"
          >
            Back to Projects
          </button>
        </form>
      </div>
    </div>
  );
}
