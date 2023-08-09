<?php

namespace App\Modules\City\Controllers;

use App\Http\Controllers\Controller;
use City;

class CityController extends Controller
{
    public function show($id)
    {
        $city = City::find($id);
        $arResult = City::arResult($city);

        return view('city::show' ,compact('city', 'arResult'));
    }
}
