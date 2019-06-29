

# Backend Documentation

> Deliverable D1


### General group information

| Member    | Role          | First name | Last Name | ID Number |           Email address            |
| --------- | ------------- | ---------- | --------- | --------- | ---------------------------------- |
|     1     | administrator | Marco      | Buratti   | 845766    | marco1.buratti@mail.polimi.it      |
|     2     | member        | Sergio     | Canzoneri | 920187    | sergio.canzoneri@mail.polimi.it    |
|     3     | member        | Christian  | Cammareri | 920915    | christian.cammareri@mail.polimi.it |


### Links to other deliverables [this address](https://example.com/backend).

> Deliverable D0: the web application is accessible at this address INSERIRE IL LINK GENERATO DA HEROKU.

> Deliverable D2 D3: the YAML file containing the specification of the appAPI can be found at INSERIRE LINK,
                     the SwaggerUI page of the same API is available at INSERIRE LINK.

> Deliverable D4: the source code of D0 is available as a zip file at INSERIRE LINK.

> Deliverable D5: the address of the online source control repository is available LINK GIT REPO. 
                  We hereby declare that this is a private repository and, upon request, we will give access to the 
                  instructors.


### Web Architecture

- backend/architecture.pdf

### Data model

- backend/datamodel.pdf

### Tools used

- We used VisualStudio Code as an IDE to develop our site and thanks to swagger.io we have generated a server. The server is entirely written in JavaScript with the help of knex.js to generate the database and to fill it up. The server source code is generated from a nodejs-server application.
As an interface to the DB we used pgAdmin4 and MySQL. The following JS tools have been used:
body-parser": "^1.18.3", "connect": "^3.2.0","cookie-parser": "^1.4.4", "cookie-session": "^1.3.3", "js-yaml": "^3.3.0", "knex": "^0.14.6", "lodash": "^4.17.10", "pg": "^7.11.0", "process": "^0.11.10", "serve-static": "^1.14.0", "swagger-tools": "^0.10.4".

### Discussion

- We followed the guidelines of the slides shown in class to organize the paths of folders and files.
- The functions that modify the database status are those related to the user. User/login, User/register, Cart/insert, Cart/cartdelete and Cart/bookDelete. The User functions can let us register and log while the cart functions fill the cart if we want to buy the book and empty it when the purchase is made
- For data management we relied on knex.js and we implemented a relational database through the MySQL protocol, the database consists of six tables, four of which for the management of books, authors and events and the others two dedicated to managing user data.

## Other information

### Task assignment

- Marco Buratti worked on front end (30% of the time) and OpenAPI Spec (50% of the time) and on the server code (50% of the time)
- Sergio Canzoneri worked on front end (90% of the time) and OpenAPI Spec (10% of the time) and on the server code (20% of the time)
- Christian Cammareri worked on front end (10% of the time) and OpenAPI Spec (50% of the time) and on the server code (50% of the time)