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
    <div className="min-h-screen bg-gray-200 p-4 sm:p-6 md:p-8">
      <div className="max-w-xl mx-auto bg-white p-5 sm:p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">DPR Form (Project #{id})</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            className="w-full rounded-xl border border-black p-2 transition duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            className="w-full rounded-xl border border-black p-2 transition duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          >
            <option value="">Select Weather</option>
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Rainy">Rainy</option>
          </select>

          <textarea
            placeholder="Work Description"
            className="w-full rounded-xl border border-black p-2 transition duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="number"
            placeholder="Worker Count"
            className="w-full rounded-xl border border-black p-2 transition duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
            value={workers}
            onChange={(e) => setWorkers(e.target.value)}
          />

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full rounded-xl border border-black p-2 transition duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
          />

          {images.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded-xl"
                />
              ))}
            </div>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-xl border border-black bg-black p-3 text-white transition duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
          >
            Submit DPR
          </button>
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="w-full rounded-xl border border-black p-2 transition duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
          >
            Back To Projects
          </button>
        </form>
      </div>
    </div>
  );
}
