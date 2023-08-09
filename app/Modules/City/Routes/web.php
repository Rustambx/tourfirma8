<?php
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'web',
    'prefix' => 'cities',
    'namespace' => 'App\Modules\City\Controllers',

], function () {
    Route::get('/{id}', 'CityController@show')->name('cities.show');
});

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix' => 'admin/cities',
    'namespace' => 'App\Modules\City\Controllers\Admin',

], function () {
    Route::get('/', 'CityController@index')->name('admin.cities.index');
    Route::delete('/delete/{id}', 'CityController@destroy')->name('admin.cities.destroy');
    Route::post('/save', 'CityController@save')->name('admin.cities.save');
    Route::get('/all', 'CityController@all')->name('admin.cities.all');
});
