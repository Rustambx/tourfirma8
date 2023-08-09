<?php
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'web',
    'prefix' => 'tours',
    'namespace' => 'App\Modules\Tour\Controllers',

], function () {
    Route::get('/', 'TourController@index')->name('tours.index');
    Route::get('/{id}', 'TourController@show')->name('tours.show');
});

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix' => 'admin/tours',
    'namespace' => 'App\Modules\Tour\Controllers\Admin',

], function () {
    Route::get('/', 'TourController@index')->name('admin.tours.index');
    Route::delete('/delete/{id}', 'TourController@destroy')->name('admin.tours.destroy');
    Route::post('/save', 'TourController@save')->name('admin.tours.save');
    Route::get('/all', 'TourController@all')->name('admin.tours.all');
});

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix' => 'admin/galleries',
    'namespace' => 'App\Modules\Tour\Controllers\Admin',

], function () {
    Route::get('/', 'GalleryController@index')->name('admin.galleries.index');
    Route::delete('/delete/{id}', 'GalleryController@destroy')->name('admin.galleries.destroy');
    Route::post('/save', 'GalleryController@save')->name('admin.galleries.save');
    Route::get('/all', 'GalleryController@all')->name('admin.galleries.all');
});
