<?php

namespace App\Modules\News\Services;

use App\Http\Helpers\FileUploader;
use App\Lib\File\CImage;
use App\Modules\News\Models\News;
use App\Modules\News\Requests\NewsRequest;

class NewsService
{
    public function all()
    {
        $news = News::all();

        foreach ($news as $item)
        {
            $item->resized_image = CImage::resize($item->img, 364, 300);
        }

        return $news;
    }

    public function find($id)
    {
        return News::find($id);
    }

    public function newsIndex()
    {
        $news = News::orderBy('created_at', 'desc')->take(3)->get();

        return $news;
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
                $imagePath = $imageHelper->upload('/images/news');
                $data['img'] = $imagePath;
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        } else {
            if (env('APP_ENV') != 'testing') {
                return ['error' => 'Картинка не загружена!'];
            }
        }

        if (News::create($data)) {
            return ['status' => 'Новость добавлена'];
        }
    }

    public function update($request)
    {
        $news = News::find($request->id);
        $data = $request->except('_token', '_method', 'resized_image', 'img');

        if (empty($data)) {
            return ['error' => 'Нет данных'];
        }

        if ($request->hasFile('img')) {
            $image = $request->file('img');
            $imageHelper = new FileUploader($image);
            if ($imageHelper->checkMimeType()) {
                $imagePath = $imageHelper->upload('/images/news');
                $data['img'] = $imagePath;
                $oldImageFile = $news->img;
                if (!empty($oldImageFile) && file_exists($_SERVER['DOCUMENT_ROOT']. $oldImageFile)) {
                    unlink($_SERVER['DOCUMENT_ROOT'] . $oldImageFile);
                }
            } else {
                return ['error' => 'Доступны только jpg и png форматы изображений'];
            }
        }

        $news->fill($data);


        if ($news->update()) {
            return ['status' => 'Новость обновлена'];
        }
    }

    public function destroy($id)
    {
        $news = News::find($id);
        if ($news->delete()){
            return ['status' => 'Новость удалена'];
        }
    }

    public function save(NewsRequest $request)
    {
        return $request->has('id') ? $this->update($request) : $this->create($request);
    }
}
