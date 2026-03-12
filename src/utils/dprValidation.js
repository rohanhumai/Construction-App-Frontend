export function validateDprForm(formData) {
  const errors = {};

  if (!formData.projectId) {
    errors.projectId = "Select a project before submitting the report.";
  }

  if (!formData.date) {
    errors.date = "Choose the report date.";
  }

  if (!formData.weather) {
    errors.weather = "Select the weather condition.";
  }

  if (!formData.description.trim()) {
    errors.description = "Add a short work description for the day.";
  }

  if (!formData.workers) {
    errors.workers = "Enter the worker count.";
  } else if (Number(formData.workers) <= 0) {
    errors.workers = "Worker count must be greater than zero.";
  }

  if (formData.images.length === 0) {
    errors.images = "Upload at least one site photo.";
  } else if (formData.images.length > 3) {
    errors.images = "Upload between 1 and 3 images.";
  }

  return errors;
}
