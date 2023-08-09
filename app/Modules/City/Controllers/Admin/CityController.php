<?php

namespace App\Modules\City\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use App\Modules\City\Requests\CityRequest;
use App\Modules\City\Resources\CityResource;
use App\Modules\Country\Resources\CountryResource;
use City;
use Country;

class CityController extends AdminController
{
    public function index()
    {
        if (!auth()->user()->can('VIEW_ADMIN_CITIES')) {
            return back()->with(['error' => 'У вас нет прав для списки городов']);
        }

        $citiesAll = City::all();
        $countryAll = Country::all();

        $cities = CityResource::collection($citiesAll);
        $countries = CountryResource::collection($countryAll);

        return view('city::admin.list', compact('cities', 'countries'));
    }
    
    public function destroy($id)
    {
        if (env('APP_ENV') != 'testing') {
            if (!auth()->user()->can('DELETE_CITIES')) {
                return back()->with(['error' => 'У вас нет прав для удаление города']);
            }
        }

        return City::destroy($id);
    }

    public function save(CityRequest $request)
    {
        return City::save($request);
    }

    public function all()
    {
        $citiesAll = City::all();
        $cities = CityResource::collection($citiesAll);
        
        return $cities;
    }
}
