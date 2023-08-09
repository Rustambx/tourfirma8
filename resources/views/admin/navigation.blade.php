<aside id="left-panel" class="left-panel">
    <nav class="navbar navbar-expand-sm navbar-default">

        <div class="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="./">Админ панель</a>

        </div>

        <div id="main-menu" class="main-menu collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li>
                    <a href="{{ route('admin.tours.index') }}">
                        Туры
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.galleries.index') }}">
                        Галерея
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.countries.index') }}">
                        Страны
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.hotels.index') }}">
                        Отели
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.cities.index') }}">
                        Города
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.news.index') }}">
                        Новости
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.sliders.index') }}">
                        Слайдер
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.users.index') }}">
                        Пользователи
                    </a>
                </li>
                <li>
                    <a href="{{ route('admin.permissions.index') }}">
                        Привилегии
                    </a>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</aside>
