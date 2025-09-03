import torch
import cv2
import numpy as np
from pathlib import Path

# Load YOLOv5 pretrained model (downloads on first run)
MODEL = torch.hub.load('ultralytics/yolov5', 'yolov5s')

def detect_objects_image(image_path: str, save_path: str):
    """Run YOLOv5 on an image and save results."""
    results = MODEL(image_path)
    results.save(save_dir=Path(save_path).parent)

    detections = []
    for *box, conf, cls in results.xyxy[0].tolist():
        detections.append({
            "bbox": [float(x) for x in box],
            "confidence": float(conf),
            "class": MODEL.names[int(cls)]
        })
    return detections

def detect_objects_frame(frame):
    """Run YOLOv5 on a video frame (for live camera)."""
    results = MODEL(frame)

    annotated = np.squeeze(results.render())
    detections = []
    for *box, conf, cls in results.xyxy[0].tolist():
        detections.append({
            "bbox": [float(x) for x in box],
            "confidence": float(conf),
            "class": MODEL.names[int(cls)]
        })
    return annotated, detections
