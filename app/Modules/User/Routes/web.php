<?php
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix' => 'admin/users',
    'namespace' => 'App\Modules\User\Controllers',

], function () {
    Route::get('/', 'UserController@index')->name('admin.users.index');
    Route::delete('/delete/{id}', 'UserController@destroy')->name('admin.users.destroy');
    Route::post('/save', 'UserController@save')->name('admin.users.save');
    Route::get('/all', 'UserController@all')->name('admin.users.all');
});

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix' => 'admin/permissions',
    'namespace' => 'App\Modules\User\Controllers',

], function () {
    Route::get('/', 'PermissionController@index')->name('admin.permissions.index');
    Route::post('/store', 'PermissionController@store')->name('admin.permissions.store');
});
