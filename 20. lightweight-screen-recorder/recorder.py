import cv2
import numpy as np
import pyautogui
import sounddevice as sd
from scipy.io.wavfile import write
import subprocess

# Video
width, height = pyautogui.size()
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter('output.mp4', fourcc, 20.0, (width, height))

# Audio
fs = 44100
seconds = 10

mic_audio = sd.rec(int(seconds * fs), samplerate=fs, channels=1, dtype='int16')
print("Recording... Press Ctrl+C to stop recording.")

try:
    while True:
        img = pyautogui.screenshot()
        frame = np.array(img)
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        out.write(frame)

except KeyboardInterrupt:
    # Release the video writer
    out.release()

    # Release the resources used by sounddevice
    sd.stop()

    # Save microphone audio to a WAV file
    write('mic.wav', fs, mic_audio)

    # Combine video and audio
    subprocess.run(['ffmpeg', '-i', 'output.mp4', '-i', 'mic.wav', 'final_video.mp4'])
