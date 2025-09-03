import axios from "axios";

// point to your backend
const API_URL = "http://127.0.0.1:8000";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API_URL}/detect-image/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const getCameraStream = () => `${API_URL}/detect-camera/`;
