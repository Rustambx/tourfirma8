<?php

namespace App\Modules\Tour\Resources;

use App\Modules\Hotel\Resources\HotelResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TourResource extends JsonResource
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
            'hot' => $this->hot,
            'type_tour_id' => $this->type_tour_id,
            'hotels' => HotelResource::collection($this->hotels),
            'hotels_id' => $this->hotels_id,
        ];
    }
}
