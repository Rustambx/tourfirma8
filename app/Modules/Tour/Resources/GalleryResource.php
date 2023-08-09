<?php

namespace App\Modules\Tour\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GalleryResource extends JsonResource
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
            'name' => $this->name,
            'img' => asset('storage/'. $this->img),
            'resized_image' => asset('storage/'. $this->resized_image),
            'tour_id' => $this->tour_id,
            'tour' => new TourResource($this->tour),
        ];
    }
}
