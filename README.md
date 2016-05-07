# FoodReview Database CP344 Assignment

Current version database is ported to MongoDB v3.0.7

#Note

To Run Basic Node.js commands, use the "node" command followed by the .js file you want to run.
	
	Example: node app.js launches the app.js file

## Instructions for Use

1.	Make sure that both Node.js v4.3.2 and NPM v2.14.12 are installed on your computer.

2.	Install and configure a local MongoDB (v3.0.7) isntance, directions here : https://docs.mongodb.com/manual/			installation.

3.	Since I did not provide the actuall CSV file through git, because it was to large. So navigate to your own copy 	of "Review.csv" or whatever it is called, and rename all columns from left to right in the file with 				the following names. Save the .csv into the "data" directory of the project.
	
	reviewId , productId, userId, profilename, helpfulnessNum, helpfulnessDen, score, time, summary, reviewText

	It is required for that you do this to properly insert all of the data into MongoDB later. 

4.	Once your csv is formated appropriately, and start your MongoDB local server and run the command:
	node --max-old-space-size=8192 CSVtoMongoDB.js

### Another Note:

	This will take quite a while, so I suggest you leave your computer alone for a few hours while this process is running, make sure your computer is plugged in.
	We run this command becuase we're trying to populate a database with around 300MB of data, so we need to allocate the appropraite amount of resources to the node process.

5.	Once the process is over, Navigate to the FoodReview directory, and run the command “npm install”
6.	Enter “npm start” into the terminal ( Launches the express-server ) 
7.	Visit your browser at  http://localhost:3000.

	Now you can start messing around.
	
	
