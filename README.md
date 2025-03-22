# VistaShare

**VistaShare** is a full-stack location-sharing web application designed for hikers and urban explorers to discover, review, and share lesser-known locations. Built with a focus on community engagement and user-driven content, VistaShare bridges the gap left by traditional mapping tools by offering an interactive platform for sharing hidden gems.

## 🌟 Features

- Interactive map interface with dynamic location markers
- User authentication (login/signup)
- Explore page with user-submitted locations
- City guides and detailed travel logs
- Commenting and review system with voting features
- Interest-based group functionality for users to connect
- Responsive and visually engaging UI

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Mapping & Geolocation:** Leaflet.js with OpenStreetMap  
- **Authentication:** Custom login/signup system  


## 🖼️ Screenshots

### 🔐 Login 
<img src="https://github.com/Ahmed-Jawad-Tahmid/VistaShare/blob/main/Screenshots/Login.png?raw=true" width="500" height="400" />

### 🌍 Explore locations
<img src="https://github.com/Ahmed-Jawad-Tahmid/VistaShare/blob/main/Screenshots/Landing%20page.png?raw=true" width="500"/>

### 📝 Reviewing & Travel Logs
<img src="https://github.com/Ahmed-Jawad-Tahmid/VistaShare/blob/main/Screenshots/Location%20Review.png?raw=true" width="500"/>

<img src="https://github.com/Ahmed-Jawad-Tahmid/VistaShare/blob/main/Screenshots/My%20Travel%20Log.png?raw=true" width="500"/>

> *More screenshots available in the `/Screenshots` folder.*

## 🚀 Running VistaShare Locally

Follow these steps to set up and run the project on your local machine.

### 🛠️ Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

---

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository</p>

```
git clone https://github.com/Ahmed-Jawad-Tahmid/VistaShare.git
```

<p>2. Go to the project directory</p>

```
cd VistaShare
```

<p>3. Start MySQL Server (if not already running)</p>

```
net start MySQL91
```

<p>4. Set Up the Database</p>

```bash
- Open MySQL Workbench or any MySQL database tool.
- Create a new database (e.g., vistashare).
- Run the SQL schema from /database/schema.sql to create tables.
```
<p>4. Backend Setup</p>

- Navigate to the backend directory
```
cd backend
```
- Install dependencies
```
npm install
```
 - Create a .env file in the backend folder and configure your database credentials:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=vistashare
```

- Start the backend server:
```
node app.js
```
<p>5. Frontend Setup</p>

- Navigate to the frontend directory:
```
 cd ../frontend
```

- Install dependencies
```
npm install
```

- Start the frontend server
```
npm start
```
<p>6. Open VistaShare in Your Browser</p>

Once both the backend and frontend are running, the website should open automatically but if it doesn't then open your browser and go to:

```
http://localhost:3000/
```




