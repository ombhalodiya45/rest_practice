# RESTful Post Management App

A simple RESTful web application built with **Express.js** and **EJS** that allows users to create, view, update, and delete posts.

## 🚀 Features

- View all posts
- Create a new post
- View a single post by ID
- Edit existing posts
- Delete posts
- Uses UUID for unique post IDs
- Simple UI with EJS templates

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- Method-Override (for handling PUT and DELETE requests from forms)
- UUID (for generating unique IDs)

📝 Routes Overview

| Method | Path              | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/posts`          | View all posts          |
| GET    | `/posts/new`      | Form to create new post |
| POST   | `/posts`          | Create a new post       |
| GET    | `/posts/:id`      | View a single post      |
| GET    | `/posts/:id/edit` | Form to edit a post     |
| PATCH  | `/posts/:id`      | Update a post           |
| DELETE | `/posts/:id`      | Delete a post           |

📦 Dependencies

-express

-ejs

-method-override

-uuid


