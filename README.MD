# Full-Stack Blog Application

A modern full-stack blog application with Laravel Sanctum authentication, featuring a RESTful API backend and a responsive Vue.js 3 frontend.

## Features

- **Backend**: Laravel RESTful API with Sanctum token-based authentication
- **Frontend**: Vue 3 with Composition API and Vite build system
- **Authentication**: Secure token-based auth with Laravel Sanctum
- **Modern Stack**: Laravel 12 and Vue.js 3
- **Monorepo Structure**: Organized codebase with separate API and client directories

## Project Structure

The repository is a monorepo containing two main projects:

-   [`blog-api/`](blog-api/): The Laravel backend that serves as a RESTful API with Sanctum authentication
-   [`blog-client/`](blog-client/): The Vue 3 frontend application built with Vite and integrated with Sanctum

## Quick Start

### 1. Clone the Repository

```sh
git clone <repository-url>
cd full-stack-blog
```

### 2. Backend Setup

```sh
cd blog-api
composer install
cp .env.example .env
php artisan key:generate
```

Configure your database in `.env`, then:

```sh
php artisan migrate
php artisan serve
```

### 3. Frontend Setup

```sh
cd ../blog-client
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://127.0.0.1:8000
```

```sh
npm run dev
```

---

## Backend Setup (`blog-api`)

The backend is built with the [Laravel](https://laravel.com/) framework and uses Laravel Sanctum for API authentication. For more details, see the [README.md](blog-api/README.md) in the API directory.

### Prerequisites

-   PHP (8.1 or higher recommended)
-   Composer
-   A database (MySQL, PostgreSQL, SQLite)

### Installation

1.  Navigate to the API directory:

    ```sh
    cd blog-api
    ```

2.  Install PHP dependencies:

    ```sh
    composer install
    ```

3.  Create a copy of the environment file:

    ```sh
    cp .env.example .env
    ```

4.  Generate an application key:

    ```sh
    php artisan key:generate
    ```

5.  Configure your database credentials and other settings in the `.env` file:
    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=blog_db
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    
    ```

6.  Run the database migrations and seeders:
    ```sh
    php artisan migrate --seed
    ```

### Laravel Sanctum Configuration

The API uses Laravel Sanctum for token-based authentication:

- **Token Generation**: Secure API tokens for frontend authentication
- **Protected Routes**: API endpoints secured with Sanctum middleware
- **Token Management**: Automatic token expiration and refresh

### API Endpoints

- `POST /api/register` - User registration
- `POST /api/login` - User login (returns Sanctum token)
- `POST /api/logout` - User logout (revokes token)
- `GET /api/user` - Get authenticated user
- `GET /api/posts` - Get blog posts
- `POST /api/posts` - Create new post (authenticated)
- `GET /api/posts/{id}` - Get specific post
- `PUT /api/posts/{id}` - Update post (authenticated)
- `DELETE /api/posts/{id}` - De