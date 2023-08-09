<?php

namespace App\Modules\Tour\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use App\Modules\Tour\Requests\GalleryRequest;
use App\Modules\Tour\Resources\GalleryResource;
use App\Modules\Tour\Resources\TourResource;
use Gallery;
use Tour;

class GalleryController extends AdminController
{
    public function index()
    {
        if (!auth()->user()->can('VIEW_ADMIN_GALLERIES')) {
            return back()->with(['error' => 'У вас нет прав для списка галереи']);
        }

        $toursAll = Tour::all();
        $tours = TourResource::collection($toursAll);

        return view('tour::admin.gallery.list', compact('tours'));
    }

    public function destroy($id)
    {
        if (env('APP_ENV') != 'testing') {
            if (!auth()->user()->can('DELETE_GALLERIES')) {
                return back()->with(['error' => 'У вас нет прав для удаление галереи']);
            }
        }
        return Gallery::destroy($id);
    }

    public function save(GalleryRequest $request)
    {
        return Gallery::save($request);
    }

    public function all()
    {
        $galleriesAll = Gallery::all();
        $galleries= GalleryResource::collection($galleriesAll);
        
        return $galleries;
    }
}
