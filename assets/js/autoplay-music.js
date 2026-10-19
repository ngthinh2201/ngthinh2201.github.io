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
            do {
                newIndex = Math.floor(Math.random() * songs.length);
            } while (newIndex === currentSongIndex);
        } else {
            newIndex = 0;
        }
        
        currentSongIndex = newIndex;
        console.log(`Äang phÃ¡t bÃ i sá»‘: ${currentSongIndex} - ${songs[currentSongIndex]}`);
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
            playPromise
                .then(() => {
                    console.log(`Nháº¡c Ä‘Ã£ Ä‘Æ°á»£c phÃ¡t tá»± Ä‘á»™ng: ${audio.src}`);
                    const toast = document.getElementById('toast-prompt');
                    if (toast) {
                        toast.style.display = 'none';
                    }
                })
                .catch(error => {
                    console.log('Cháº·n tá»± Ä‘á»™ng phÃ¡t (Autoplay Policy). Hiá»ƒn thá»‹ popup...');
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
                    <p style="margin: 0 0 8px 0; line-height: 1.4;">Báº¡n cÃ³ muá»‘n nghe nháº¡c trong khi lÆ°á»›t web khÃ´ng?</p>
                    <div class="prompt-actions" style="display: flex; gap: 8px;">
                        <button class="confirm-btn" style="background: #4CAF50; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-weight: bold;">CÃ³, phÃ¡t nháº¡c</button>
                        <button class="close-btn" style="background: #f44336; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">KhÃ´ng</button>
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
        console.log(`BÃ i hÃ¡t káº¿t thÃºc. Random bÃ i tiáº¿p theo...`);
        playNextSong().catch(e => console.error("Lá»—i chuyá»ƒn bÃ i:", e));
    });

   
    const passForm = document.getElementById('pass-form');
    const passInput = document.getElementById('pass-input');
    const passMsg = document.getElementById('pass-msg');

    if (passForm && passInput) {
        passForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const value = (passInput.value || '').trim();

            if (value === 'mie') {
                if (passMsg) {
                    passMsg.textContent = 'ÄÃºng rá»“i nÃ¨, má»Ÿ quÃ  cho báº¡n nÃ¨!';
                    passMsg.classList.remove('error', 'shake');
                }
               
                try {
                    playSpecificSong('10');
                } catch (err) {
                    console.warn('KhÃ´ng thá»ƒ phÃ¡t nháº¡c:', err);
                }
               
                try {
                    sessionStorage.setItem('unlocked', '1');
                } catch (_) {}
                setTimeout(() => {
                    window.location.href = 'index1.html';
                }, 600);
            } else {
                if (passMsg) {
                    passMsg.textContent = 'Sai máº­t kháº©u rá»“i, thá»­ láº¡i nha!';
                    passMsg.classList.add('error', 'shake');
                   
                    setTimeout(() => passMsg.classList.remove('shake'), 450);
                }
                passInput.value = '';
                passInput.focus();
            }
        });
    }

    window.addEventListener('load', () => {
       
        setTimeout(tryPlayMusic, 2000);
    });

})();

