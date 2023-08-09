<?php

namespace App\Modules\Slider\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use App\Modules\Country\Resources\CountryResource;
use App\Modules\Slider\Requests\SliderRequest;
use App\Modules\Slider\Resources\SliderResource;
use Slider;
use Country;

class SliderController extends AdminController
{
    public function index()
    {
        if (!auth()->user()->can('VIEW_ADMIN_SLIDERS')) {
            return back()->with(['error' => 'У вас нет прав для списка слайдеров']);
        }

        $countriesAll = Country::all();
        $countries = CountryResource::collection($countriesAll);

        return view('slider::admin.list', compact('countries'));
    }

    public function destroy($id)
    {
        if (env('APP_ENV') != 'testing') {
            if (!auth()->user()->can('DELETE_SLIDERS')) {
                return back()->with(['error' => 'У вас нет прав для удаление слайдера']);
            }
        }

        return Slider::destroy($id);
    }

    public function save(SliderRequest $request)
    {
        return Slider::save($request);
    }

    public function all()
    {
        $slidersAll = Slider::all();
        $sliders = SliderResource::collection($slidersAll);
        
        return $sliders;
    }
}
