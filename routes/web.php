<?php

use App\Http\Controllers\AjaxCityController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});

Route::get('/', [IndexController::class, 'index'])->name('index');
Route::match(['get', 'post'], '/contacts', [ContactController::class, 'index'])->name('contacts');
Route::match(['get', 'post'],'/ajax', [AjaxCityController::class, 'getCities'])->name('ajax');

Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => 'auth'],function() {
    Route::get('/', [IndexController::class, 'index'])->name('admin.index');
});

Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login']);
Route::get('logout', [LoginController::class, 'logout'])->name('logout');

// Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
