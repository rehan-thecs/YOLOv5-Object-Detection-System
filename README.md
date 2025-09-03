# YOLOv5-based-Object-Detection-System  

⚡ Full-stack **YOLOv5 Object Detection System** powered by **FastAPI** and **React**.  
Detect objects in images or live camera streams with real-time bounding boxes, labels, and confidence scores.  
Modular, production-ready design with clean UI, REST APIs, and easy deployment for AI-driven applications.  

---

## 📂 Project Structure

YOLOv5-Object-Detection-System/
│
├── backend/
│   ├── server.py            # FastAPI entry point
│   ├── detection.py         # YOLOv5 model loading & inference
│   ├── camera.py            # Live camera streaming
│   ├── requirements.txt     # Python dependencies
│   ├── uploads/             # Uploaded images
│   └── static/              # Annotated detection results
│
├── frontend/
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite + React config
│   ├── index.html           # Root HTML
│   └── src/
│       ├── main.jsx         # React entry point
│       ├── App.jsx          # Main App wrapper
│       ├── api.js           # Axios API calls
│       ├── components/
│       │   ├── ImageUpload.jsx
│       │   └── LiveCamera.jsx
│
└── README.md



---

## 🛠️ Tech Stack

### **Backend**
- [FastAPI](https://fastapi.tiangolo.com/) → REST API  
- [Uvicorn](https://www.uvicorn.org/) → ASGI server  
- [PyTorch](https://pytorch.org/) → ML framework  
- [YOLOv5 (Ultralytics)](https://github.com/ultralytics/yolov5) → Pretrained object detection model  
- [OpenCV](https://opencv.org/) → Image & video processing  
- [Pillow](https://pillow.readthedocs.io/) → Image handling  
- [Pandas](https://pandas.pydata.org/) → Data utilities (used internally by YOLOv5)  
- [tqdm](https://tqdm.github.io/) → Progress bars (used internally by YOLOv5)  

### **Frontend**
- [React](https://react.dev/) → UI framework  
- [Vite](https://vitejs.dev/) → Development bundler  
- [Axios](https://axios-http.com/) → API communication  

---

## ⚙️ Backend Setup  

```bash
# Go to backend folder
cd backend

# Create virtual environment
python -m venv venv

# Activate venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn server:app --reload

# Go to frontend folder
cd frontend

# Install dependencies
npm install

# Start React app
npm run dev


## 🏗️ System Architecture  

```mermaid
flowchart LR
    User[👤 User] -->|Uploads Image / Enables Camera| React[💻 React Frontend]
    React -->|API Call (Axios)| FastAPI[⚡ FastAPI Backend]
    FastAPI -->|Inference| YOLO[🧠 YOLOv5 Model]
    YOLO -->|Detections + Bounding Boxes| FastAPI
    FastAPI -->|JSON + Annotated Image / MJPEG Stream| React
    React -->|Displays Results| User
