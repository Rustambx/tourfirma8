<?php

namespace App\Modules\Tour\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use App\Modules\Hotel\Resources\HotelResource;
use App\Modules\Tour\Models\Type;
use App\Modules\Tour\Requests\TourRequest;
use App\Modules\Tour\Resources\TourResource;
use App\Modules\Tour\Resources\TypeResource;
use Tour;
use Hotel;

class TourController extends AdminController
{
    public function index()
    {
        if (!auth()->user()->can('VIEW_ADMIN_TOURS')) {
            return back()->with(['error' => 'У вас нет прав для списка туров']);
        }

        $tour = Tour::find(19);

        $hotelsAll = Hotel::all();
        $typesAll = Type::all();

        $hotels = HotelResource::collection($hotelsAll);
        $types = TypeResource::collection($typesAll);

        return view('tour::admin.list', compact('hotels', 'types'));
    }

    public function destroy($id)
    {
        if (env('APP_ENV') != 'testing') {
            if (!auth()->user()->can('DELETE_TOURS')) {
                return back()->with(['error' => 'У вас нет прав для удаление тура']);
            }
        }

        return Tour::destroy($id);
    }

    public function save(TourRequest $request)
    {
        return Tour::save($request);
    }

    public function all()
    {
        $toursAll = Tour::all();
        $tours= TourResource::collection($toursAll);
        
        return $tours;
    }
}
