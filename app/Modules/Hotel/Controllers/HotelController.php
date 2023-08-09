<?php

namespace App\Modules\Hotel\Controllers;

use App\Http\Controllers\Controller;
use Hotel;

class HotelController extends Controller
{
    public function index()
    {
        $hotels = Hotel::all();

        return view('hotel::index', compact('hotels'));
    }

    public function show($id)
    {
        $hotel = Hotel::find($id);

        return view('hotel::show', compact('hotel'));
    }
}
