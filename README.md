# Message Board with Node.js
This is a simple message board web application built with Node.js and MongoDB. Users can view and add messages to the board.

## Setup
1. Clone this repository to your local machine.
2. Install the dependencies using npm install.
3. Create a .env file in the root directory of the project.

4. Add the following environment variables to the .env file:

```env
MONGODB_URI=<MONGODB connection string>
PORT=<port number>
```
```
Note: Replace the MONGODB_URI value with your own MongoDB URI.
```

5. Start the server using npm start.

## Usage
Once the server is running, open your web browser and navigate to http://localhost:PORT to view the message board. You can add new messages by filling out the form at the bottom of the page and clicking the "Add Message" button.