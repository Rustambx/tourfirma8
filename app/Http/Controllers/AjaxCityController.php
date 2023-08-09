<?php

namespace App\Http\Controllers;

use DB;

class AjaxCityController extends Controller
{
    public function getCities()
    {
        if ($_POST['country_id'] > 0) {
            $countryId = intval($_POST['country_id']);
            $data = DB::table('cities')->where('country_id', $countryId)->get();
            header('Content-Type: application/json');
            echo json_encode($data);
        }
    }
}