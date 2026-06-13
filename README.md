# Parking Management System

A web-based parking management system built with **Laravel 12**, **React** (via Inertia.js), and **Tailwind CSS**. Includes authentication scaffolding via Laravel Breeze.

## Tech Stack

- **Backend:** Laravel 12 (PHP 8.2+)
- **Frontend:** React 18 + Inertia.js
- **Styling:** Tailwind CSS v3
- **Auth:** Laravel Breeze
- **Build Tool:** Vite
- **Database:** MySQL / SQLite (configurable)

---

## Requirements

Before setting up the project, make sure you have the following installed:

- [PHP 8.2+](https://www.php.net/downloads)
- [Composer](https://getcomposer.org/)
- [Node.js 18+](https://nodejs.org/) and npm
- A database: [MySQL](https://www.mysql.com/) or SQLite

---

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/KeitaroJaeL/parking-management-system.git
cd parking-management-system
```

### 2. Install PHP dependencies

```bash
composer install
```

### 3. Install Node dependencies

```bash
npm install
```

### 4. Configure environment

Copy the example environment file and generate an application key:

```bash
cp .env.example .env
php artisan key:generate
```

### 5. Configure the database

Open `.env` and update the database connection settings:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=parking_management
DB_USERNAME=root
DB_PASSWORD=your_password
```

> **Using SQLite?** Set `DB_CONNECTION=sqlite` and create an empty database file:
> ```bash
> touch database/database.sqlite
> ```

### 6. Run database migrations

```bash
php artisan migrate
```

### 7. (Optional) Seed the database

```bash
php artisan db:seed
```

---

## Running the Application

You need two terminals — one for Laravel and one for Vite.

**Terminal 1 — Laravel development server:**
```bash
php artisan serve
```

**Terminal 2 — Vite asset bundler:**
```bash
npm run dev
```

The app will be available at [http://localhost:8000](http://localhost:8000).

---

## Building for Production

```bash
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## Running Tests

```bash
php artisan test
```

---

## Project Structure

```
app/
├── Http/
│   ├── Controllers/    # Application controllers
│   ├── Middleware/     # HTTP middleware
│   └── Requests/       # Form request validation
├── Models/             # Eloquent models
resources/
├── js/
│   ├── Components/     # Reusable React components
│   ├── Layouts/        # Page layout components
│   └── Pages/          # Inertia page components
├── css/                # Global styles
routes/
├── web.php             # Web routes
└── auth.php            # Authentication routes
database/
├── migrations/         # Database migrations
├── seeders/            # Database seeders
└── factories/          # Model factories
```

---

## License

This project is open-source and available under the [MIT license](https://opensource.org/licenses/MIT).
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
