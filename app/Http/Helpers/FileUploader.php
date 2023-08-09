<?php

namespace App\Http\Helpers;

use Illuminate\Http\UploadedFile;

class FileUploader
{
    private $image = null;
    private $savedImage = null;

    /**
     * Доступные име типы
     * @var array
     */
    private $accessType = [
        "image/jpeg",
        "image/png"
    ];


    public function __construct($image)
    {
        $this->image = $image;
    }

    /**
     * Проверка миме типа файла
     * @return bool
     */
    public function checkMimeType ()
    {
        $mimeType = $this->image->getMimeType();
        if (in_array($mimeType, $this->accessType)) {
            return true;
        } else {
            return false;
        }
    }

    public function upload($path = '', $disk = 'public')
    {
        $fileTitle = md5($this->image->getClientOriginalName().time());

        $filename = $fileTitle.'.'.$this->image->getClientOriginalExtension();

        $this->image->storeAs($path, $filename, $disk);

        return $path.'/'.$filename;
    }
}
