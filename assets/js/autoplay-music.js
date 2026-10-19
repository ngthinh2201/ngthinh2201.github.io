(function () {
    const songs = [
        '0.pm3',
        '1.mp3', 
        '2.mp3', 
        '3.mp3', 
        '4.mp3', 
        '5.mp3', 
        '6.mp3', 
        '7.mp3', 
        '8.mp3'  
    ];
    
    let currentSongIndex = -1;

    
    const getNextSongSrc = () => {
        let newIndex;
        
        if (songs.length > 1) {
            do {
                newIndex = Math.floor(Math.random() * songs.length);
            } while (newIndex === currentSongIndex);
        } else {
            newIndex = 0;
        }
        
        currentSongIndex = newIndex;
        console.log(`Đang phát bài số: ${currentSongIndex} - ${songs[currentSongIndex]}`);
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
                    console.log('Chặn tự động phát (Autoplay Policy). Hiển thị popup...');
                    showMusicPrompt();
                });
        }
    };

    const showMusicPrompt = () => {
        let toast = document.getElementById('toast-prompt');

        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-prompt';

            
            Object.assign(toast.style, {
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '15px',
                backgroundColor: 'rgba(51, 51, 51, 0.95)',
                color: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                zIndex: '9999',
                display: 'none',
                alignItems: 'center',
                gap: '15px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                maxWidth: '350px',
                border: '1px solid #555'
            });

            toast.innerHTML = `
                <div style="flex-shrink: 0;">
                    <img src="./assets/img/icon/undefined - Imgur.gif" width="32" height="32" 
                         style="border-radius: 50%; display: block;" 
                         onerror="this.style.display='none'">
                </div>
                <div style="flex-grow: 1;">
                    <p style="margin: 0 0 8px 0; line-height: 1.4;">Bạn có muốn nghe nhạc trong khi lướt web không?</p>
                    <div class="prompt-actions" style="display: flex; gap: 8px;">
                        <button class="confirm-btn" style="background: #4CAF50; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-weight: bold;">Có, phát nhạc</button>
                        <button class="close-btn" style="background: #f44336; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">Không</button>
                    </div>
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
        console.log(`Bài hát kết thúc. Random bài tiếp theo...`);
        playNextSong().catch(e => console.error("Lỗi chuyển bài:", e));
    });

    window.addEventListener('load', () => {
        
        setTimeout(tryPlayMusic, 2000);
    });

})();

