# Full-Stack Blog Application

This is a full-stack blog application built with a Laravel API backend and a Vue.js 3 frontend.

## Project Structure

The repository is a monorepo containing two main projects:

-   [`blog-api/`](blog-api/): The Laravel backend that serves as a RESTful API.
-   [`blog-client/`](blog-client/): The Vue 3 frontend application built with Vite.

---

## Backend Setup (`blog-api`)

The backend is built with the [Laravel](https://laravel.com/) framework. For more details, see the original [README.md](blog-api/README.md) in the API directory.

### Prerequisites

-   PHP
-   Composer
-   A database (e.g., MySQL, PostgreSQL)

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

5.  Configure your database credentials in the `.env` file.

6.  Run the database migrations to create the necessary tables:
    ```sh
    php artisan migrate
    ```

### Running the Development Server

To start the Laravel development server (typically on `http://127.0.0.1:8000`):

```sh
php artisan serve
```

---

## Frontend Setup (`blog-client`)

The frontend is a single-page application built with [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/). For more details, see the original [README.md](blog-client/README.md) in the client directory.

### Prerequisites

-   Node.js (see `engines` in [`blog-client/package.json`](blog-client/package.json))
-   npm or another package manager

### Installation

1.  Navigate to the client directory:

    ```sh
    cd blog-client
    ```

2.  Install Node.js dependencies:

    ```sh
    npm install
    ```

3.  Create an environment file (`.env`) and set `VITE_API_URL` to your backend server's URL (e.g., `VITE_API_URL=http://127.0.0.1:8000`).

### Development

To compile and hot-reload for development, run:

```sh
npm run dev
```

### Production

To compile and minify for production, run:

```sh
npm run build
```
