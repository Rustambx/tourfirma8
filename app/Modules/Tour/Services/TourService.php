<?php

namespace App\Modules\Tour\Services;

use App\Http\Helpers\FileUploader;
use App\Lib\File\CImage;
use App\Modules\Tour\Models\Tour;
use App\Modules\Tour\Requests\TourRequest;

class TourService
{
    public function all()
    {
        $tours = Tour::all();
        foreach ($tours as $tour) {
            $tour->resized_image = CImage::resize($tour->img, 200, 150);
        }

        return $tours;
    }

    public function query()
    {
        return Tour::query();
    }

    public function find($id)
    {
        return Tour::find($id);
    }

    public function toursIndex()
    {
        $tours = Tour::where('hot', 'Y')->take(3)->get();

        foreach ($tours as $tour){
            if ($tour->img) {
                $tour->resized_image = CImage::resize($tour->img, 300, 364);
            }
        }

        return $tours;
    }

    public function create($request)
    {
        $data = $request->except('_token', 'resized_image', 'img');

        if (empty($data)) {
            return ['error' => 'Нет данных'];
        }

        if ($data['hot'] == 'true') {
            $data['hot'] = true;
        } else {
            $data['hot'] = false;
        }

        if ($request->hasFile('img')) {
            $image = $request->file('img');
            $imageHelper = new FileUploader($image);
            if ($imageHelper->checkMimeType()) {
                $imagePath = $imageHelper->upload('/images/tours');
                $data['img'] = $imagePath;
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        } else {
            if (env('APP_ENV') != 'testing') {
                return ['error' => 'Картинка не загружена!'];
            }
        }

        $hotelsId = array_map('intval', explode(',', $request->get('hotels')));

        $tour = new Tour();
        if ($tour->fill($data)->save()) {
            if ($hotelsId) {
                $tour->hotels()->attach($hotelsId);
            }
            return ['status' => 'Тур добавлен'];

        }
    }

    public function update($request)
    {
        $tour = Tour::find($request->id);
        $data = $request->except('_token', '_method', 'resized_image', 'img');

        if (empty($data)) {
            return ['error' => 'Нет данных'];
        }

        if ($data['hot'] == 'true') {
            $data['hot'] = true;
        } else {
            $data['hot'] = false;
        }

        if ($request->hasFile('img')) {
            $image = $request->file('img');
            $imageHelper = new FileUploader($image);
            if ($imageHelper->checkMimeType()) {
                $imagePath = $imageHelper->upload('/images/tours');
                $data['img'] = $imagePath;
                $oldImageFile = $tour->img;
                if (!empty($oldImageFile) && file_exists($_SERVER['DOCUMENT_ROOT']. $oldImageFile)) {
                    unlink($_SERVER['DOCUMENT_ROOT'] . $oldImageFile);
                }
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        }

        $hotelsId = array_map('intval', explode(',', $request->get('hotels')));

        $tour->fill($data);

        if ($tour->update()) {
            if ($hotelsId) {
                $tour->hotels()->sync($hotelsId);
            }
            return ['status' => 'Тур обновлен'];
        }
    }

    public function destroy($id)
    {
        $tour = Tour::find($id);
        $tour->hotels()->detach();
        $tour->galleries()->delete();

        if ($tour->delete()) {
            return ['status' => 'Тур удален'];
        }
    }

    public function save(TourRequest $request)
    {
        return $request->has('id') ? $this->update($request) : $this->create($request);
    }
}
