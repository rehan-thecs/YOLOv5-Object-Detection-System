from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import shutil
from pathlib import Path
from detection import detect_objects_image
from camera import gen_frames

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

@app.post("/detect-image/")
async def detect_image(file: UploadFile = File(...)):
    file_path = UPLOAD_DIR / file.filename
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    save_path = f"static/{file.filename}"
    detections = detect_objects_image(str(file_path), save_path)

    return JSONResponse({"detections": detections, "result_image": save_path})

@app.get("/detect-camera/")
async def detect_camera():
    return StreamingResponse(gen_frames(), media_type="multipart/x-mixed-replace; boundary=frame")
