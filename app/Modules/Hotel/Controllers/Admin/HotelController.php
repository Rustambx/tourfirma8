<?php

namespace App\Modules\Hotel\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use App\Lib\File\CImage;
use App\Modules\City\Resources\CityResource;
use App\Modules\Hotel\Requests\HotelRequest;
use App\Modules\Hotel\Resources\HotelResource;
use Hotel;
use City;


class HotelController extends AdminController
{
    public function index()
    {
        if (!auth()->user()->can('VIEW_ADMIN_HOTELS')) {
            return back()->with(['error' => 'У вас нет прав для списки отелей']);
        }

        $citiesAll = City::all();
        $hotels = Hotel::all();

        $cities = CityResource::collection($citiesAll);

        return view('hotel::admin.list', compact('cities'));
    }

    public function destroy($id)
    {
        if (env('APP_ENV') != 'testing') {
            if (!auth()->user()->can('DELETE_HOTELS')) {
                return back()->with(['error' => 'У вас нет прав для удаление отеля']);
            }
        }

        return Hotel::destroy($id);
    }

    public function save(HotelRequest $request)
    {
        return Hotel::save($request);
    }

    public function all()
    {
        $hotelsAll = Hotel::all();
        $hotels= HotelResource::collection($hotelsAll);
        
        return $hotels;
    }
}
