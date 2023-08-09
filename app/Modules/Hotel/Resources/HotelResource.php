<?php

namespace App\Modules\Hotel\Resources;

use App\Modules\City\Resources\CityResource;
use Illuminate\Http\Resources\Json\JsonResource;

class HotelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'price' => $this->price,
            'img' => asset('storage/'. $this->img),
            'resized_image' => asset('storage/'. $this->resized_image),
            'detail_text' => $this->detail_text,
            'city_id' => $this->city_id,
            'city' => new CityResource($this->city),
        ];
    }
}
