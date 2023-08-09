<?php
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'web',
    'prefix' => 'news',
    'namespace' => 'App\Modules\News\Controllers',
], function () {
    Route::get('/', 'NewsController@index')->name('news.index');
    Route::get('/{id}', 'NewsController@show')->name('news.show');
});

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix' => 'admin/news',
    'namespace' => 'App\Modules\News\Controllers\Admin',

], function () {
    Route::get('/', 'NewsController@index')->name('admin.news.index');
    Route::delete('/delete/{id}', 'NewsController@destroy')->name('admin.news.destroy');
    Route::post('/save', 'NewsController@save')->name('admin.news.save');
    Route::get('/all', 'NewsController@all')->name('admin.news.all');
});
