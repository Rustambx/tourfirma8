<?php

namespace App\Modules\News\Controllers;

use App\Http\Controllers\Controller;
use News;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::all();

        return view('news::index', compact('news'));
    }

    public function show($id)
    {
        $news = News::find($id);

        return view('news::show', compact('news'));
    }
}
