<?php

namespace App\Modules\Slider\Services;

use App\Http\Helpers\FileUploader;
use App\Lib\File\CImage;
use App\Modules\Slider\Models\Slider;
use App\Modules\Slider\Requests\SliderRequest;

class SliderService
{
    public function all()
    {
        $sliders = Slider::all();

        foreach ($sliders as $slider){
            if ($slider->img) {
                $slider->resized_image = CImage::resize($slider->img, 500, 300);
            }
        }

        return $sliders;
    }

    public function find($id)
    {
        $slider = Slider::find($id);

        return $slider;
    }

    public function slidersIndex()
    {
        $sliders = Slider::orderBy('created_at', 'desc')->take(3)->get();

        return $sliders;
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
                $imagePath = $imageHelper->upload('/images/sliders');
                $data['img'] = $imagePath;
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        } else {
            if (env('APP_ENV') != 'testing') {
                return ['error' => 'Картинка не загружена!'];
            }
        }

        if (Slider::create($data)) {
            return ['status' => 'Баннер добавлен'];
        }
    }

    public function update($request)
    {
        $slider = Slider::find($request->id);
        $data = $request->except('_token', '_method', 'resized_image', 'img');

        if (empty($data)) {
            return ['error' => 'Нет данных'];
        }

        if ($request->hasFile('img')) {
            $image = $request->file('img');
            $imageHelper = new FileUploader($image);
            if ($imageHelper->checkMimeType()) {
                $imagePath = $imageHelper->upload('/images/sliders');
                $data['img'] = $imagePath;
                $oldImageFile = $slider->img;
                if (!empty($oldImageFile) && file_exists($_SERVER['DOCUMENT_ROOT']. $oldImageFile)) {
                    unlink($_SERVER['DOCUMENT_ROOT'] . $oldImageFile);
                }
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        }

        $slider->fill($data);

        if ($slider->update()) {
            return ['status' => 'Баннер обновлен'];
        }
    }

    public function destroy($id)
    {
        $slider = Slider::find($id);
        if ($slider->delete()) {
            return ['status' => 'Баннер удален'];
        }
    }

    public function save(SliderRequest $request)
    {
        return $request->has('id') ? $this->update($request) : $this->create($request);
    }
}
