<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OverviewController;
use App\Http\Controllers\MediamanagerController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\EstimateController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/scrm-overview', [OverviewController::class, 'index'])->name('overview.index');

    Route::get('/scrm-media', [MediamanagerController::class, 'index'])->name('media.index');
    
    
    Route::get('/scrm-contacts', [ContactController::class, 'index'])->name('contacts.index');
    Route::get('/scrm-contacts/create', [ContactController::class, 'create'])->name('contacts.create');
    Route::post('/scrm-contacts/store', [ContactController::class, 'store'])->name('contacts.store');
    Route::get('/scrm-contacts/{id}/edit',[ContactController::class, 'edit'])->name('contacts.edit');
    Route::patch('/scrm-contacts/{id}', [ContactController::class, 'update'])->name('contacts.update');
    Route::post('/scrm-contacts/{id}/{asset}', [ContactController::class, 'deleteasset'])->name('contacts.deleteasset');
    Route::delete('/scrm-contacts/{id}', [ContactController::class, 'destroy']) -> name('contacts.destroy');

    Route::get('/scrm-leads', [LeadController::class, 'index'])->name('leads.index');
    Route::get('/scrm-leads/create', [LeadController::class, 'create'])->name('leads.create');
    Route::post('/scrm-leads/store', [LeadController::class, 'store'])->name('leads.store');
    Route::get('/scrm-leads/{id}/edit',[LeadController::class, 'edit'])->name('leads.edit');
    Route::patch('/scrm-leads/{id}', [LeadController::class, 'update'])->name('leads.update');
    Route::delete('/scrm-leads/{id}', [LeadController::class, 'destroy']) -> name('leads.destroy');

    Route::get('/scrm-settings', [SettingController::class, 'index'])->name('settings.index');
    Route::get('/scrm-settings/create', [SettingController::class, 'create'])->name('settings.create');
    Route::post('/scrm-settings/store', [SettingController::class, 'store'])->name('settings.store');
    Route::get('/scrm-settings/{id}/edit',[SettingController::class, 'edit'])->name('settings.edit');
    Route::patch('/scrm-settings/{id}', [SettingController::class, 'update'])->name('settings.update');
    Route::delete('/scrm-settings/{id}', [SettingController::class, 'destroy']) -> name('settings.destroy');

    Route::get('/scrm-activity', [ActivityController::class, 'index'])->name('activity.index');
    Route::get('/scrm-activity/create', [ActivityController::class, 'create'])->name('activity.create');
    Route::post('/scrm-activity/store', [ActivityController::class, 'store'])->name('activity.store');
    Route::get('/scrm-activity/{id}/edit',[ActivityController::class, 'edit'])->name('activity.edit');
    Route::patch('/scrm-activity/{id}', [ActivityController::class, 'update'])->name('activity.update');
    Route::delete('/scrm-activity/{id}', [ActivityController::class, 'destroy']) -> name('activity.destroy');

    Route::get('/scrm-employee', [EmployeController::class, 'index'])->name('employee.index');
    Route::get('/scrm-employee/create', [EmployeController::class, 'create'])->name('employee.create');
    Route::post('/scrm-employee/store', [EmployeController::class, 'store'])->name('employee.store');
    Route::get('/scrm-employee/{id}/edit',[EmployeController::class, 'edit'])->name('employee.edit');
    Route::patch('/scrm-employee/{id}', [EmployeController::class, 'update'])->name('employee.update');
    Route::delete('/scrm-employee/{id}', [EmployeController::class, 'destroy']) -> name('employee.destroy');

    Route::get('/scrm-projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('/scrm-projects/create', [ProjectController::class, 'create'])->name('projects.create');
    Route::post('/scrm-projects/store', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('/scrm-projects/{id}/edit',[ProjectController::class, 'edit'])->name('projects.edit');
    Route::patch('/scrm-projects/{id}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('/scrm-projects/{id}', [ProjectController::class, 'destroy']) -> name('projects.destroy');

    Route::get('/scrm-tasks', [TaskController::class, 'index'])->name('tasks.index');
    Route::get('/scrm-tasks/create', [TaskController::class, 'create'])->name('tasks.create');
    Route::post('/scrm-tasks/store', [TaskController::class, 'store'])->name('tasks.store');
    Route::get('/scrm-tasks/{id}/edit',[TaskController::class, 'edit'])->name('tasks.edit');
    Route::patch('/scrm-tasks/{id}', [TaskController::class, 'update'])->name('tasks.update');
    Route::delete('/scrm-tasks/{id}', [TaskController::class, 'destroy']) -> name('tasks.destroy');

    Route::get('/scrm-estimates', [EstimateController::class, 'index'])->name('estimates.index');
    Route::get('/scrm-estimates/create', [EstimateController::class, 'create'])->name('estimates.create');
    Route::post('/scrm-estimates/store', [EstimateController::class, 'store'])->name('estimates.store');
    Route::get('/scrm-estimates/{id}/edit',[EstimateController::class, 'edit'])->name('estimates.edit');
    Route::patch('/scrm-estimates/{id}', [EstimateController::class, 'update'])->name('estimates.update');
    Route::delete('/scrm-estimates/{id}', [EstimateController::class, 'destroy']) -> name('estimates.destroy');
});

require __DIR__.'/auth.php';
