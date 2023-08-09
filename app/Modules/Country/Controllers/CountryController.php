<?php

namespace App\Modules\Country\Controllers;

use App\Http\Controllers\Controller;
use Country;
use Illuminate\Database\Eloquent\Collection;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::all();

        return view('country::index', compact('countries'));
    }

    public function show($id)
    {
        $country = Country::find($id);

        $arResult = Country::arResult($country);

        return view('country::show', compact('country', 'arResult'));
    }
}
