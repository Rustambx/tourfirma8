<template>
    <div class="card-body card-block">
        @include('includes.result_messages')
        <form action="{{ route('admin.countries.store') }}" method="post" enctype="multipart/form-data" class="form-horizontal" novalidate>
            @csrf
            <div class="row form-group">
                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Название</label></div>
                <div class="col-12 col-md-9">
                    <input type="text" id="title" name="title" placeholder="Text" class="form-control">
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Анонс</label></div>
                <div class="col-12 col-md-9">
                    <textarea name="preview_text" id="preview_text" rows="9" placeholder="Текст..." class="form-control html-editor"></textarea>
                </div>
            </div>

            <div class="row form-group">
                <div class="col col-md-3"><label for="textarea-input" class=" form-control-label">Детальный текст</label></div>
                <div class="col-12 col-md-9">
                    <textarea name="detail_text" id="detail_text" rows="9" placeholder="Текст..." class="form-control html-editor"></textarea>
                </div>
            </div>
            <div class="row form-group">
                <div class="col col-md-3"><label for="file-input" class=" form-control-label">Изображение</label></div>
                <div class="col-12 col-md-9"><input type="file" id="img" name="img" class="form-control-file"></div>
            </div>

            <div class="card-footer">
                <input type="submit" value="Сохранить" class="btn btn-primary btn-sm">
            </div>

        </form>
    </div>
</template>

<script>

</script>