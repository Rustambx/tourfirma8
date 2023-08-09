<?php

namespace App\Modules\City\Resources;

use App\Modules\Country\Resources\CountryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
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
            'preview_text' => $this->preview_text,
            'detail_text' => $this->detail_text,
            'country_id' => $this->country_id,
            'country' => new CountryResource($this->country),
        ];
    }
}
