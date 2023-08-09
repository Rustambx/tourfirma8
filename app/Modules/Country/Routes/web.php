<?php
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'web',
    'prefix' => 'countries',
    'namespace' => 'App\Modules\Country\Controllers',

], function () {
    Route::get('/', 'CountryController@index')->name('countries.index');
    Route::get('/{id}', 'CountryController@show')->name('countries.show');
});

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix' => 'admin/countries',
    'namespace' => 'App\Modules\Country\Controllers\Admin',

], function () {
    Route::get('/', 'CountryController@index')->name('admin.countries.index');
    Route::post('/save', 'CountryController@save')->name('admin.countries.save');
    Route::delete('/delete/{id}', 'CountryController@destroy')->name('admin.countries.destroy');
    Route::get('/all', 'CountryController@all')->name('admin.countries.all');
});
