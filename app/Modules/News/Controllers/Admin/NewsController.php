<?php

namespace App\Modules\News\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use App\Modules\News\Requests\NewsRequest;
use App\Modules\News\Resources\NewsResource;
use News;

class NewsController extends AdminController
{
    public function index()
    {
        if (!auth()->user()->can('VIEW_ADMIN_NEWS')) {
            return back()->with(['error' => 'У вас нет прав для списка новостей']);
        }

        return view('news::admin.list');
    }

    public function destroy($id)
    {
        if (env('APP_ENV') != 'testing') {
            if (!auth()->user()->can('DELETE_NEWS')) {
                return back()->with(['error' => 'У вас нет прав для удаление новостей']);
            }
        }

        return News::destroy($id);
    }

    public function save(NewsRequest $request)
    {
        return News::save($request);
    }

    public function all()
    {
        $newsAll = News::all();
        $news = NewsResource::collection($newsAll);

        return $news;
    }
}
