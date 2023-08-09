<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use ZipArchive;

class ZipImagesCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'load:images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $zip = new ZipArchive();
        $status = $zip->open(storage_path("app/images.zip"));
        if ($status !== true) {
         throw new \Exception($status);
        }
        else{
            $storageDestinationPath= storage_path("app/public/");
       
            if (!\File::exists( $storageDestinationPath)) {
                \File::makeDirectory($storageDestinationPath, 0755, true);
            }
            $zip->extractTo($storageDestinationPath);
            $zip->close();
        }
    }
}
