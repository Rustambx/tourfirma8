<?php
namespace App\Http\Helpers;

use Image;

/**
 * Class CImage
 * @package App\Lib\File
 */
class CImage
{
    /**
     * Ресайз изображений
     * @param string $fileRelativePath
     * @param int $width
     * @param int $height
     * @return string
     */

    /// Изменение размера картинок
    public static function resize (string $fileRelativePath, int $width, int $height)
    {
        $imageRealPath = storage_path('app/public/' . $fileRelativePath);

        if (!file_exists($imageRealPath)) {
            $imageRealPath = $_SERVER['DOCUMENT_ROOT'] . '/storage/images/test/no_image.jpg';
        }

        $arImage = pathinfo($imageRealPath);

        $resizeFileName = $arImage['filename'] . "_resize_" . $height . "x" . $width . "." . $arImage['extension'];
        $resizeRelativePath = str_replace(storage_path('app/public/'), '', $arImage['dirname']) . '/' . $resizeFileName;
        $resizeRealPath = storage_path('app/public/' . $resizeRelativePath);

        if (!file_exists($resizeRealPath)) {
            $obImage = Image::make($imageRealPath);
            $obImage->fit($width, $height);
            $obImage->save($resizeRealPath);
        }

        return $resizeRelativePath;
    }

    public static function resizeFor($val, $width, $height)
    {

    }
}
