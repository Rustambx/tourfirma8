<?php
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['web', 'auth'],
    'prefix' => 'admin/sliders',
    'namespace' => 'App\Modules\Slider\Controllers\Admin',

], function () {
    Route::get('/', 'SliderController@index')->name('admin.sliders.index');
    Route::delete('/delete/{id}', 'SliderController@destroy')->name('admin.sliders.destroy');
    Route::post('/save', 'SliderController@save')->name('admin.sliders.save');
    Route::get('/all', 'SliderController@all')->name('admin.sliders.all');
});
