<?php

namespace App\Modules\City\Services;

use App\Http\Helpers\FileUploader;
use App\Lib\File\CImage;
use App\Lib\File\ImageUploader;
use App\Modules\City\Models\City;
use App\Modules\City\Requests\CityRequest;

class CityService
{
    public function all()
    {
        $cities = City::all();

        foreach ($cities as $city){
            if ($city->img) {
                $city->resized_image = CImage::resize($city->img, 200, 150);
            }
        }

        return $cities;

    }

    public function find($id)
    {
        return City::find($id);
    }

    public function arResult($city)
    {
        $arResult = [
            "hotels" => [],
            "tours" => []
        ];

        foreach ($city->arHotels as $hotel) {
            $arResult['hotels'][$hotel->id] = $hotel;
            foreach ($hotel->arTours as $tour) {
                $arResult['tours'][$tour->id] = $tour;
            }
        }

        return $arResult;
    }

    public function create($request)
    {
        $data = $request->except('_token', 'resized_image', 'img');

        if (empty($data)) {
            return ['error' => 'Нет данных'];
        }

        if ($request->hasFile('img')) {
            $image = $request->file('img');
            $imageHelper = new FileUploader($image);
            if ($imageHelper->checkMimeType()) {
                $imagePath = $imageHelper->upload('/images/cities');
                $data['img'] = $imagePath;
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        } else {
            if (env('APP_ENV') != 'testing') {
                return ['error' => 'Картинка не загружена!'];
            }
        }

        if (City::create($data)) {
            return ['status' => 'Город добавлен'];
        } else {
            return ['error' => 'Ошибка при сохранении'];
        }
    }

    public function update($request)
    {
        $city = City::find($request->id);

        $data = $request->except('_token', '_method', 'resized_image', 'img');

        if (empty($data)) {
            return ['error' => 'Нет данных'];
        }

        if ($request->hasFile('img')) {
            $image = $request->file('img');
            $imageHelper = new FileUploader($image);
            if ($imageHelper->checkMimeType()) {
                $imagePath = $imageHelper->upload('/images/cities');
                $data['img'] = $imagePath;
                $oldImageFile = $city->img;
                if (!empty($oldImageFile) && file_exists($_SERVER['DOCUMENT_ROOT']. $oldImageFile)) {
                    unlink($_SERVER['DOCUMENT_ROOT'] . $oldImageFile);
                }
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        }

        $city->fill($data);


        if ($city->update()) {
            return ['status' => 'Город обновлен'];
        }
    }

    public function destroy($id)
    {
        $city = City::find($id);

        if ($city->delete()) {
            return ['status' => 'Город удален'];
        }
    }

    public function save(CityRequest $request)
    {
        return $request->has('id') ? $this->update($request) : $this->create($request);
    }
}
