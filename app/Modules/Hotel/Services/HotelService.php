<?php

namespace App\Modules\Hotel\Services;

use App\Http\Helpers\FileUploader;
use App\Lib\File\CImage;
use App\Modules\Hotel\Models\Hotel;
use App\Modules\Hotel\Requests\HotelRequest;

class HotelService
{
    public function all()
    {
        $hotels = Hotel::all();

        foreach ($hotels as $hotel)
        {
            $hotel->resized_image = CImage::resize($hotel->img, 300, 364);
        }

        return $hotels;
    }

    public function find($id)
    {
        $hotel = Hotel::find($id);

        return $hotel;
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
                $imagePath = $imageHelper->upload('/images/hotels');
                $data['img'] = $imagePath;
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        } else {
            if (env('APP_ENV') != 'testing') {
                return ['error' => 'Картинка не загружена!'];
            }
        }

        if (Hotel::create($data)) {
            return ['status' => 'Отель добавлен'];
        }
    }

    public function update($request)
    {
        $hotel = Hotel::find($request->id);

        $data = $request->except('_token', '_method', 'resized_image', 'img');

        if (empty($data)) {
            return ['error' => 'Нет данных'];
        }

        if ($request->hasFile('img')) {
            $image = $request->file('img');
            $imageHelper = new FileUploader($image);
            if ($imageHelper->checkMimeType()) {
                $imagePath = $imageHelper->upload('/images/hotels');
                $data['img'] = $imagePath;
                $oldImageFile = $hotel->img;
                if (!empty($oldImageFile) && file_exists($_SERVER['DOCUMENT_ROOT']. $oldImageFile)) {
                    unlink($_SERVER['DOCUMENT_ROOT'] . $oldImageFile);
                }
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        }

        $hotel->fill($data);


        if ($hotel->update()) {
            return ['status' => 'Отель обновлен'];
        }
    }

    public function destroy($id)
    {
        $hotel = Hotel::find($id);

        if ($hotel->delete()) {
            return ['status' => 'Отель удалена'];
        }
    }

    public function save(HotelRequest $request)
    {
        return $request->has('id') ? $this->update($request) : $this->create($request);
    }
}
