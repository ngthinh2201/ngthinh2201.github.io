(function () {
    const songs = [
        '1.mp3', // Chờ Em Trong Đêm
        '2.mp3', // Hẹn Hò Nhưng Không Yêu
        '3.mp3', // Hoa Nở Bên Đường
        '4.mp3', // Một Cú Lừa
        '5.mp3', // Nắng Dưới Chân Mây
        '6.mp3',  //Ai Là Người Thương Em
        '7.mp3', // Ngã Tư Đường
        '8.mp3'  // Bạn Tình Ơi
    ];
    let currentSongIndex = -1;

    const getNextSongSrc = () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        return './assets/music/' + songs[currentSongIndex];
    };

    const audio = document.createElement('audio');
    audio.loop = false;
    audio.volume = 0.5;

    audio.style.display = 'none';
    document.body.appendChild(audio);

    const playNextSong = () => {
        audio.src = getNextSongSrc();
        audio.load();
        return audio.play();
    };

    const tryPlayMusic = () => {
        const playPromise = playNextSong();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log(`Nhạc đã được phát tự động: ${audio.src}`);
                    const toast = document.getElementById('toast-prompt');
                    if (toast) {
                        toast.style.display = 'none';
                    }
                })
                .catch(error => {
                    console.log('Không thể tự động phát nhạc, hiển thị yêu cầu tương tác...');
                    showMusicPrompt();
                });
        }
    };

    const showMusicPrompt = () => {
        let toast = document.getElementById('toast-prompt');

        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-prompt';

            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.right = '20px';
            toast.style.padding = '15px';
            toast.style.backgroundColor = '#333';
            toast.style.color = 'white';
            toast.style.borderRadius = '8px';
            toast.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            toast.style.zIndex = '1000';
            toast.style.display = 'none';
            toast.style.alignItems = 'center';
            toast.style.gap = '10px';

            toast.innerHTML = `
                <img src="./assets/img/icon/undefined - Imgur.gif" width="32" height="32" onerror="this.style.display='none'">
                <p>Bạn có muốn cho phép vừa nghe nhạc vừa lướt trang web không?</p>
                <div class="prompt-actions" style="margin-left: 10px;">
                    <button class="confirm-btn">Cho phép</button>
                    <button class="close-btn">Không</button>
                </div>
            `;
            document.body.appendChild(toast);
        }

        toast.style.display = 'flex';

        const confirmBtn = toast.querySelector('.confirm-btn');
        if (confirmBtn) {
            confirmBtn.onclick = () => {
                playNextSong();
                toast.style.display = 'none';
            };
        }

        const closeBtn = toast.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.onclick = () => {
                toast.style.display = 'none';
            };
        }
    };

    audio.addEventListener('ended', () => {
        console.log(`Bài hát kết thúc. Chuyển sang bài tiếp theo...`);
        playNextSong().catch(e => console.error("Không thể phát bài hát kế tiếp:", e));
    });

    window.addEventListener('load', () => {
        setTimeout(tryPlayMusic, 2000);
    });


})();












