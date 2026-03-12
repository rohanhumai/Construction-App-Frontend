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
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">DPR Form (Project #{id})</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            className="w-full border p-2 rounded-xl"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            className="w-full border p-2 rounded-xl"
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
            className="w-full border p-2 rounded-xl"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="number"
            placeholder="Worker Count"
            className="w-full border p-2 rounded-xl"
            value={workers}
            onChange={(e) => setWorkers(e.target.value)}
          />

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />

          <div className="flex gap-2 mt-2">
            {images.map((img, index) => (
              <img
                key={index}
                src="{URL.createObjectURL(img)}"
                alt="preview"
                className="w-20 h-20 object-cover rounded-xl"
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-xl"
          >
            Submit DPR
          </button>
          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="w-full border p-2 rounded-xl"
          >
            Back To Projects
          </button>
        </form>
      </div>
    </div>
  );
}
