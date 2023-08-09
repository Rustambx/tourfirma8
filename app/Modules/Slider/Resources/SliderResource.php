<?php

namespace App\Modules\Slider\Resources;

use App\Modules\Country\Resources\CountryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SliderResource extends JsonResource
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
            'img' => asset('storage/'. $this->img),
            'resized_image' => asset('storage/'. $this->resized_image),
            'price' => $this->price,
            'country_id' => $this->country_id,
            'country' => new CountryResource($this->country),
        ];
    }
}
