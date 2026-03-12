import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import { STATUS_OPTIONS } from "../constants/projectStatus";
import { projects } from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedStatus === "All") {
      return projects;
    }

    return projects.filter((project) => project.status === selectedStatus);
  }, [selectedStatus]);

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Construction Field Management
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Projects
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Open a project to submit its daily progress report.
            </p>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Filter by status
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="min-w-40 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-slate-900"
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="flex min-h-52 flex-col items-start justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-lg focus:border-slate-900 focus:outline-none sm:p-6"
              onClick={() => navigate(`/projects/dpr/${project.id}`)}
            >
              <div className="space-y-4">
                <StatusBadge status={project.status} />
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Start Date: {project.startDate}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Location: {project.location}
                  </p>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-900">
                Open DPR Form
              </p>
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-600">
            No projects match the selected status.
          </div>
        )}
      </div>
    </div>
  );
}
