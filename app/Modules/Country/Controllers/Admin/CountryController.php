<?php

namespace App\Modules\Country\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use App\Modules\Country\Requests\CountryRequest;
use App\Modules\Country\Resources\CountryResource;
use Country;

class CountryController extends AdminController
{
    public function index()
    {
        if (!auth()->user()->can('VIEW_ADMIN_COUNTRIES')) {
            return back()->with(['error' => 'У вас нет прав для списки стран']);
        }

        $countriesAll = Country::all();
        $countries = CountryResource::collection($countriesAll);

        return view('country::admin.list', compact('countries'));
    }

    public function destroy($id)
    {
        if (env('APP_ENV') != 'testing') {
            if (!auth()->user()->can('DELETE_COUNTRIES')) {
                return back()->with(['error' => 'У вас нет прав для удаление страны']);
            }
        }

        return Country::destroy($id);
    }

    public function save(CountryRequest $request)
    {
        return Country::save($request);
    }

    public function all()
    {
        $countriesAll = Country::all();
        $countries = CountryResource::collection($countriesAll);

        return $countries;
    }
}
