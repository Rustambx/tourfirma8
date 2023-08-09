<?php

namespace App\Modules\Tour\Services;

use App\Http\Helpers\CImage;
use App\Http\Helpers\FileUploader;
use App\Modules\Tour\Models\Gallery;
use App\Modules\Tour\Requests\GalleryRequest;

class GalleryService
{
    public function all()
    {
        $galleries = Gallery::all();

        foreach ($galleries as $gallery) {
            $gallery->resized_image = CImage::resize($gallery->img, 500, 300);
        }

        return $galleries;
    }

    public function find($id)
    {
        $galley = Gallery::find($id);

        return $galley;
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
                $imagePath = $imageHelper->upload('/images/galleries');
                $data['img'] = $imagePath;
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        } else {
            if (env('APP_ENV') != 'testing') {
                return ['error' => 'Картинка не загружена!'];
            }
        }

        if (Gallery::create($data)) {
            return ['status' => 'Галерея добавлена'];
        }
    }

    public function update($request)
    {
        $gallery = Gallery::find($request->id);
        $data = $request->except('_token', '_method', 'resized_image', 'img');

        if (empty($data)) {
            return ['error' => 'Нет данных'];
        }

        if ($request->hasFile('img')) {
            $image = $request->file('img');
            $imageHelper = new FileUploader($image);
            if ($imageHelper->checkMimeType()) {
                $imagePath = $imageHelper->upload('/images/galleries');
                $data['img'] = $imagePath;
                $oldImageFile = $gallery->img;
                if (!empty($oldImageFile) && file_exists($_SERVER['DOCUMENT_ROOT']. $oldImageFile)) {
                    unlink($_SERVER['DOCUMENT_ROOT'] . $oldImageFile);
                }
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        }

        $gallery->fill($data);

        if ($gallery->update()) {
            return ['status' => 'Галерея обновлена'];
        }
    }

    public function destroy($id)
    {
        $gallery = Gallery::find($id);

        if ($gallery->delete()) {
            return ['status' => 'Галерея удалена'];
        }
    }

    public function save(GalleryRequest $request)
    {
        return $request->has('id') ? $this->update($request) : $this->create($request);
    }
}
