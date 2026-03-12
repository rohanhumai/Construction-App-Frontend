import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DPRForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [description, setDescription] = useState("");
  const [workers, setWorkers] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      setError("You can upload a maximum of 3 images.");
      return;
    }
    setImages(files);
    setError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !weather || !description || !workers) {
      setError("Please fill in all fields.");
      return;
    }

    alert("DPR submitted successfully!");
    navigate("/projects");
  };
  return (
    <div className="min-h-screen bg-gray-200 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-5 shadow sm:p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            DPR Form (Project #{id})
          </h1>
          <p className="text-sm text-gray-600 sm:text-base">
            Record the daily progress update with site conditions, workforce,
            and supporting images.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700">Date</span>
              <input
                type="date"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black sm:text-base"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700">Weather</span>
              <select
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black sm:text-base"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
              >
                <option value="">Select Weather</option>
                <option value="Sunny">Sunny</option>
                <option value="Cloudy">Cloudy</option>
                <option value="Rainy">Rainy</option>
              </select>
            </label>
          </div>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Work Description
            </span>
            <textarea
              placeholder="Describe completed work, delays, or milestones"
              className="min-h-32 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black sm:text-base"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Worker Count
            </span>
            <input
              type="number"
              placeholder="Enter total workers on site"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black sm:text-base"
              value={workers}
              onChange={(e) => setWorkers(e.target.value)}
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Upload Images
            </span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-black file:px-4 file:py-2 file:text-sm file:text-white"
            />
          </label>

          {images.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt={`preview ${index + 1}`}
                  className="h-28 w-full rounded-xl object-cover sm:h-32"
                />
              ))}
            </div>
          )}

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="w-full rounded-xl bg-black px-4 py-3 text-sm text-white sm:text-base"
            >
              Submit DPR
            </button>
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
            >
              Back To Projects
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
