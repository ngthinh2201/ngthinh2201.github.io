(function () {
    const songs = [
        '0.mp3',
        '1.mp3',
        '2.mp3',
        '3.mp3',
        '4.mp3',
        '5.mp3',
        '6.mp3',
        '7.mp3',
        '8.mp3',
        '10'
    ];
    let currentSongIndex = -1;

    const getNextSongSrc = () => {
        let newIndex;
        if (songs.length > 1) {
            do { newIndex = Math.floor(Math.random() * songs.length); }
            while (newIndex === currentSongIndex);
        } else { newIndex = 0; }
        currentSongIndex = newIndex;
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

    const playSpecificSong = (filename) => {
        audio.src = './assets/music/' + filename;
        audio.load();
        return audio.play();
    };

    const tryPlayMusic = () => {
        const playPromise = playNextSong();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                const toast = document.getElementById('toast-prompt');
                if (toast) toast.style.display = 'none';
            }).catch(() => {
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
                position: 'fixed', bottom: '20px', right: '20px', padding: '15px',
                backgroundColor: 'rgba(51,51,51,.95)', color: 'white',
                borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,.3)',
                zIndex: '9999', display: 'none', alignItems: 'center',
                gap: '15px', fontFamily: 'Arial,sans-serif', fontSize: '14px',
                maxWidth: '350px', border: '1px solid #555'
            });
            toast.innerHTML = `
                <div style="flex-shrink:0">
                    <img src="./assets/img/icon/undefined - Imgur.gif" width="32" height="32"
                         style="border-radius:50%;display:block"
                         onerror="this.style.display='none'">
                </div>
                <div style="flex-grow:1">
                    <p style="margin:0 0 8px;line-height:1.4">Bạn có muốn nghe nhạc trong khi lướt web không?</p>
                    <div style="display:flex;gap:8px">
                        <button class="confirm-btn" style="background:#4CAF50;color:white;border:none;padding:6px 12px;border-radius:4px;cursor:pointer;font-weight:bold">Có, phát nhạc</button>
                        <button class="close-btn" style="background:#f44336;color:white;border:none;padding:6px 12px;border-radius:4px;cursor:pointer">Không</button>
                    </div>
                </div>`;
            document.body.appendChild(toast);
        }
        toast.style.display = 'flex';
        const confirmBtn = toast.querySelector('.confirm-btn');
        if (confirmBtn) confirmBtn.onclick = () => { playNextSong(); toast.style.display = 'none'; };
        const closeBtn = toast.querySelector('.close-btn');
        if (closeBtn) closeBtn.onclick = () => { toast.style.display = 'none'; };
    };

    audio.addEventListener('ended', () => {
        playNextSong().catch(e => console.error("Lỗi chuyển bài:", e));
    });

    window.addEventListener('load', () => {
        setTimeout(tryPlayMusic, 2000);
    });

    const passForm = document.getElementById('pass-form');
    const passInput = document.getElementById('pass-input');
    const passMsg = document.getElementById('pass-msg');
    const passBtn = passForm ? passForm.querySelector('.pass-btn') : null;

    // Animation khi bấm nút Enter: heart-burst + ripple
    if (passBtn) {
        passBtn.addEventListener('pointerdown', (e) => {
            // Bỏ focus outline mặc định + tap highlight xanh dương
            passBtn.blur();
            // Ripple trắng từ vị trí bấm
            const rect = passBtn.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const size = Math.max(rect.width, rect.height) * 1.2;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            passBtn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
            // Heart-burst (chỉ chạy 1 lần, dùng class để reset)
            passBtn.classList.remove('clicked');
            void passBtn.offsetWidth; // reflow để restart animation
            passBtn.classList.add('clicked');
            setTimeout(() => passBtn.classList.remove('clicked'), 750);
        });
    }

    if (passForm && passInput) {
        passForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const value = (passInput.value || '').trim();
            if (value === 'mie') {
                if (passMsg) {
                    passMsg.textContent = 'Giỏi:)))';
                    passMsg.classList.remove('error', 'shake');
                }
                try { playSpecificSong('10'); } catch (err) {}
                try { sessionStorage.setItem('unlocked', '1'); } catch (_) {}
                setTimeout(() => { window.location.href = 'index1.html'; }, 600);
            } else {
                if (passMsg) {
                    passMsg.textContent = 'Pass là tên anh hay gọi em đó gà vl';
                    passMsg.classList.add('error', 'shake');
                    setTimeout(() => passMsg.classList.remove('shake'), 450);
                }
                passInput.value = '';
                passInput.focus();
            }
        });
    }

})();
