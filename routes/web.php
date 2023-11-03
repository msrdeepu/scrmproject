<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OverviewController;
use App\Http\Controllers\MediamanagerController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LeadController;
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
});

require __DIR__.'/auth.php';
