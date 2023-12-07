function setupYouTubePlayer() {
  // Замените VIDEO_URL на фактическую полную ссылку на ролик YouTube
  var videoUrl = document.currentScript.dataset.videoUrl;

  // Извлечение ID видео из URL
  var urlParams = new URLSearchParams(new URL(videoUrl).search);
  var videoId = urlParams.get("v");

  // Создание элемента плеера YouTube
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: videoId,
      playerVars: {
        'autoplay': 1,
        'controls': 0,
        'mute': 1,
        'egm': 0,
        'fs': 1,
        'autohide': 1,
        'showinfo': 0,
        'loop': 1,
        'rel': 0,
        'hl': 'ru_RU',
        'modestbranding': 1,
        'quality': 'large',
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: onPlayerError
      }
    });
  }

  // Функция, которая будет выполнена после загрузки плеера
  function onPlayerReady(event) {
    // Скрыть постер и показать плеер после загрузки видео
    document.getElementById("player-poster").style.display = "none";
    event.target.playVideo();
  }

  // Обработчик события изменения состояния плеера
  function onPlayerStateChange(event) {
    // Если состояние плеера равно 0 (видео завершилось), то перезапустить видео
    if (event.data === 0) {
      player.playVideo();
    }
  }

  // Обработчик события ошибки плеера
  function onPlayerError(event) {
    // Скрыть плеер и показать постер при ошибке загрузки видео
    document.getElementById("player-poster").style.display = "block";
    document.getElementById("player").style.display = "none";
  }

  // Функция для включения/выключения звука у трейлера
  function toggleMute() {
    if (player.isMuted()) {
      player.unMute();
      isMuted = false;
      document.getElementById("unmuteButton").textContent = "Мут";
      document.querySelector(".full-screen__content").classList.remove("show");
      document.querySelector(".full-screen__content").classList.add("hide");
    } else {
      player.mute();
      isMuted = true;
      document.getElementById("unmuteButton").textContent = "Размут";
      document.querySelector(".full-screen__content").classList.remove("hide");
      document.querySelector(".full-screen__content").classList.add("show");
    }
  }

  // Функция для воспроизведения/паузы видео
  function togglePlayPause() {
    if (player.getPlayerState() === 1) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  }

  // Обработчик клика на кнопке "Unmute"
  document.getElementById("unmuteButton").addEventListener("click", function () {
  toggleMute();
  });

  // Обработчик клика на кнопке "Пауза"
  document.getElementById("pauseButton").addEventListener("click", function () {
  togglePlayPause();
  });

  // Вызов функции onYouTubeIframeAPIReady при загрузке скрипта YouTube IFrame API
  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
}

// Вызов функции для настройки YouTube плеера
setupYouTubePlayer();



function setupAutoHideBlocks() {
  // Определение блоков
  var logoBlock = document.querySelector('.navbar__logo');
  var searchBlock = document.querySelector('.navbar__search');
  var controlButton = document.querySelector('.controls');

  // Функция для скрытия блоков
  function hideBlocks() {
    logoBlock.style.opacity = '0';
    searchBlock.style.opacity = '0';
    controlButton.style.opacity = '0';
  }

  // Функция для отображения блоков
  function showBlocks() {
    logoBlock.style.opacity = '1';
    searchBlock.style.opacity = '1';
    controlButton.style.opacity = '1';
  }

  // Таймер для скрытия блоков после 5 секунд без активности
  var timerId;
  function startTimer() {
    timerId = setTimeout(hideBlocks, 4000);
  }

  // Обработчик события активности пользователя
  function handleUserActivity() {
    clearTimeout(timerId); // Сбросить предыдущий таймер
    showBlocks();
    startTimer();
  }

  // Запуск таймера при загрузке страницы
  document.addEventListener('DOMContentLoaded', function() {
  startTimer();
  });

  // Обработчики событий активности пользователя
  document.addEventListener('mousemove', handleUserActivity);
  document.addEventListener('keydown', handleUserActivity);
  document.addEventListener('scroll', handleUserActivity);
}

// Вызов функции для настройки автоматического скрытия блоков
setupAutoHideBlocks();


