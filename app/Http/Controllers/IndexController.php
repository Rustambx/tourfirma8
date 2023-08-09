<?php

namespace App\Http\Controllers;

use App\Modules\Tour\Models\Type;
use Country;
use Tour;
use News;
use Slider;

class IndexController extends Controller
{
    public function index ()
    {
        $countries = Country::all();
        $types = Type::all();
        $tours = Tour::toursIndex();
        $news = News::newsIndex();
        $sliders = Slider::slidersIndex();

        return view('index', compact('countries', 'types', 'tours', 'news', 'sliders'));
    }
}
