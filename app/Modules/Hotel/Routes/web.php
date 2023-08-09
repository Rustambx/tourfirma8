<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'web',
    'prefix' => 'hotels',
    'namespace' => 'App\Modules\Hotel\Controllers',

], function () {
    Route::get('/', 'HotelController@index')->name('hotels.index');
    Route::get('/{id}', 'HotelController@show')->name('hotels.show');
});

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix' => 'admin/hotels',
    'namespace' => 'App\Modules\Hotel\Controllers\Admin',

], function () {
    Route::get('/', 'HotelController@index')->name('admin.hotels.index');
    Route::delete('/delete/{id}', 'HotelController@destroy')->name('admin.hotels.destroy');
    Route::post('/save', 'HotelController@save')->name('admin.hotels.save');
    Route::get('/all', 'HotelController@all')->name('admin.hotels.all');
});
