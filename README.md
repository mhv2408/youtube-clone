# YouTube Clone

## Introduction

Hello! This project is a full-stack application designed to mimic core functionalities of YouTube, such as uploading, transcoding, and viewing videos. The primary goal of this project is to test, demonstrate my proficiency in modern web development technologies and cloud services.

## Features

- User Authentication with Google Sign-In
- Video Upload and Storage
- Video Transcoding to Multiple Formats (360p, 720p)
- Listing of Uploaded Videos
- Viewing Individual Videos

## Tech Stack

- **Frontend**: TypeScript, Next.js
- **Backend**: Express.js, Firebase Functions
- **Database**: Firebase Firestore
- **Storage**: Google Cloud Storage
- **Processing**: FFmpeg, Google Cloud Pub/Sub, Google Cloud Run
- **Authentication**: Firebase Auth
- **Containerization**: Docker

## Architecture

![Architecture Diagram](https://github.com/mhv2408/youtube-clone/blob/main/yt_clone_arch.png)

### Components

- **Cloud Storage**: Stores raw and processed videos.
- **Pub/Sub**: Manages messaging for video processing.
- **Cloud Run**: Hosts the video processing service.
- **Firestore**: Stores video metadata.
- **Next.js App**: Serves as the web client.
- **Firebase Functions**: Handles API requests.

## Setup Instructions

### Prerequisites

- Node.js
- Docker
- Firebase CLI
- Google Cloud SDK

### Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Set up Firebase**
    - Install Firebase CLI if you haven't already:
      ```sh
      npm install -g firebase-tools
      ```
    - Login to Firebase:
      ```sh
      firebase login
      ```
    - Initialize Firebase in your project:
      ```sh
      firebase init
      ```

4. **Set up Google Cloud**
    - Install Google Cloud SDK if you haven't already.
    - Authenticate with Google Cloud:
      ```sh
      gcloud auth login
      ```
    - Configure your Google Cloud project and services.

5. **Run Docker for FFmpeg**
    ```sh
    docker build -t your-ffmpeg-image .
    docker run -d -p 8080:8080 your-ffmpeg-image
    ```

### Running the Application

1. **Start the development server**
    ```sh
    npm run dev
    ```

2. **Deploy Firebase Functions**
    ```sh
    firebase deploy --only functions
    ```

3. **Deploy Next.js app to Cloud Run**
    ```sh
    gcloud run deploy your-service-name --source .
    ```

## Usage

1. **Sign in**
   - Use Google Sign-In to create an account or log in.

2. **Upload a Video**
   - Navigate to the upload section, select a video, and upload.

3. **View Videos**
   - Browse the list of uploaded videos and click to watch.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
## Working Link
I would like to publish the working link, but due to security issues, I could not do so. Please react out to me directly if you would like a demo.

## License

This project is licensed under the MIT License.

## References

- [Firebase Auth](https://firebase.google.com/docs/auth)
- [Cloud Storage Signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls)
- [Pub/Sub Push subscriptions](https://cloud.google.com/pubsub/docs/push)
- [Using Pub/Sub with Cloud Storage](https://cloud.google.com/storage/docs/pubsub-notifications)
- [Using Pub/Sub with Cloud Run](https://cloud.google.com/run/docs/tutorials/pubsub)

