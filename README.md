# NationalParksRUs-Front
Unit 4 Project: Jimmy Nguyen, Kerry Beth Richardson, Vlad Zborovets

Technologies Used:
------------------
* HTML
* CSS
* Python
* Django
* PostgresSQL
* React
* Heroku
* GitHub
* Trello

Approach Taken:
---------------
After we chose a topic, we set up a trello board and pinned all of our initial tasks to the board. We discussed user stories and what we wanted our application to be able to do. After that, we began to divide up the initial work. Vlad tackled the back end, Kerry Beth did the front end, and Jimmy handled set up for **GitHub** and **Heroku**.

Issues Along The Way:
---------------------
1. Deploying the back end. When **Jimmy** ran the `Heroku push` command,  the promopt said the deployment was successful but when Jimmy opened the app, it said error. After running the `Heroku logs --tail` command, thats when I saw the errors. We experienced 6 different `H10 errors`. It took a while to figure out that we needed to update our `Procfile` with our proper file name instead of the database name. Another classmate, **Moses**, helped me with solving this.
2. Deploying the front end. **Kerry Beth** created the Heroku front end app and noticed that her local machine didn't have the direct route in terminal to Heroku. When creating the react app, React automatically creates a directory for the app. If you create your react app inside of another directory, that means the the root of the directory where the `.git` file is, isn't on the same level as the app itself and Heroku doesn't like that. In the last project, **Jimmy** had this same issue so the catch was quick and the fix was easy. We just had to drag all the app files one level up to the root directory and delete that extra directory.
3. Vlad, while integrating Google Maps embed API faced an issue with creating API keys due to confusing UX on GCP website console! Also faced a 404 error, when was copiyng a sample iframe embed due to an ivnvisible whitespace being copied in as well. Resolved the issue quckly by using the network Tab on Google Chrome dev tools.

4.

Unsolved Problems:
------------------
1.

Future Improvements:
-------------------
1.
2.
3.


Link to my live site:
---------------------
Front end:
https://natl-parks-r-us-front.herokuapp.com/
Back End:
https://natl-parks-r-us-back.herokuapp.com/api/national-parks
