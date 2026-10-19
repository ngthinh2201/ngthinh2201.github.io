!function (n) {
    function t(n, t, e) {
        let i = new Date(Date.now() + 864e5 * e).toUTCString();
        document.cookie = `${n}=${t}; expires=${i}; path=/`
    }
    function e(n) {
        let t = document.cookie.split("; ").reduce((n, t) => {
            let [e, i] = t.split("=");
            return n[e] = i,
                n
        }
            , {});
        return t[n]
    }
    function i(n) {
        let e = $(".ri-sun-line")
            , i = $(".ri-moon-clear-line");
        "light" === n ? ($("html").removeClass("dark").addClass("light"),
            i.slideUp(300, function () {
                e.slideDown(300)
            }),
            t("theme", "light", 365)) : ($("html").removeClass("light").addClass("dark"),
                e.slideUp(300, function () {
                    i.slideDown(300)
                }),
                t("theme", "dark", 365))
    }
    let h = e("theme");
    function c() {
        let n = Math.floor(100 * Math.random()), t = Math.floor(100 * Math.random()), e = ["+", "-", "*", "/"], i = e[Math.floor(Math.random() * e.length)], h;
        switch (i) {
            case "+":
                h = n + t;
                break;
            case "-":
                h = n - t;
                break;
            case "*":
                h = n * t;
                break;
            case "/":
                h = 0 !== t ? (n / t).toFixed(2) : n
        }
        let c = h < 10 ? "0" + h : h;
        return `${n < 10 ? "0" + n : n}.${t < 10 ? "0" + t : t}.${c}`
    }
    "light" === h ? i("light") : i("dark"),
        $("body").on("click", ".change-theme", function () {
            let n = $("html").hasClass("dark");
            i(n ? "light" : "dark")
        }),
        "close" === e("toast") && $("#toast-prompt").hide(),
        $("body").on("click", ".close-btn", function () {
            $("#toast-prompt").slideUp("fast", function () {
                let n = new Date(Date.now() + 6e5).toUTCString();
                document.cookie = `toast=close; expires=${n}; path=/`
            }),
                FuiToast.success("Kh\xf4ng hiá»ƒn thá»‹ láº¡i trong 10 ph\xfat.")
        }),
      

    document.getElementById('year').textContent = new Date().getFullYear();
    let o = 0;
    $("body").append(`<div id="fui-toast"></div><div class="td-lock-screen"><section class="td-welcome"><div class="medias"><video class="pc item_video" autoplay loop muted playsinline><source src="assets/video/pc.mp4?v=${c()}" type="video/mp4"></video><video class="mobile item_video" autoplay loop muted playsinline><source src="assets/video/mb1.mp4?v=${c()}" type="video/mp4"></video><div class="date"></div></div><div class="infos"><div class="logo-web-title"><img class="logo-ws" src="https://files.catbox.moe/9rcm0j.jpg" alt=" Nguyen Duc Thinh"><span class="web-title">${$("html").attr("data-title-loader") || "M\xe0n H\xecnh Kho\xe1"}</span></div><span class="web_desc"></span><div><i class="ri-arrow-down-line close-lockscreen"></i></div></div></section></div>`);
    let a = (n, t) => Math.floor(Math.random() * (t - n + 1)) + n
        , s = n => {
            n.style.setProperty("--star-left", `${a(-10, 100)}%`),
                n.style.setProperty("--star-top", `${a(-40, 80)}%`),
                n.style.animation = "none",
                n.offsetHeight,
                n.style.animation = ""
        }
        ;
    for (let r of document.getElementsByClassName("magic-star"))
        setTimeout(() => {
            s(r),
                setInterval(() => s(r), 1e3)
        }
            , o++ * (1e3 / 3));
    let l = document.getElementById("croll-to-top")
        , g = l.querySelector(".text")
        , m = l.querySelector("i");
    0 === window.scrollY && (l.style.display = "none"),
        window.addEventListener("scroll", function () {
            let n = window.scrollY
                , t = document.documentElement.scrollHeight
                , e = window.innerHeight
                , i = 0;
            t > e && (i = n / (t - e) * 100),
                g.textContent = Math.round(i),
                n > 0 ? l.style.display = "block" : l.style.display = "none"
        }),
        l.addEventListener("mouseenter", function () {
            g.style.display = "none",
                m.style.display = "inline-block"
        }),
        l.addEventListener("mouseleave", function () {
            g.style.display = "inline-block",
                m.style.display = "none"
        }),
        l.addEventListener("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, "fast")
        }),
        $(document).on({
            contextmenu: function (n) {
                console.log("ctx menu button:", n.which),
                    n.preventDefault()
            }
        });
    var d = 0
        , u = ["#ff6651", "#42a5f5", "#66bb6a", "#ab47bc", "#ffa726", "#ec407a", "#26c6da", "#78909c", "#ffca28", "#5c6bc0", "#8d6e63", "#26a69a"];
    jQuery(document).ready(function (n) {
        n("body").click(function (t) {
            var e = ["â™¥ï¸ NÄƒm má»›i vui váº»", "â¤ï¸ Cung há»‰ ph\xe1t t\xe0i", "\uD83D\uDC9B Tiá»n v\xf4 nhÆ° nÆ°á»›c", "\uD83D\uDC9A Vá»£ Ä‘áº¹p con ngoan", "\uD83D\uDC99 T\xe0i lá»™c v\xe0o nh\xe0", "\uD83D\uDC9C Ph\xfac thá» v\xf4 bi\xean", "\uD83D\uDDA4 Sá»‘ng khoáº» Ä‘\xf3n xu\xe2n", "\uD83D\uDC96 Ph\xfa qu\xfd c\xe1t tÆ°á»ng", "\uD83D\uDC9D Äáº¯c lá»™c to\xe0n gia", "\uD83D\uDC99 Háº¡nh ph\xfac m\xeanh mang", "â¤ï¸ Váº¡n sá»± th\xe0nh c\xf4ng", "\uD83D\uDC9A M\xe3 Ä‘\xe1o th\xe0nh c\xf4ng", "\uD83D\uDC99 Tiá»n v\xf4 tá»· tá»·", "\uD83D\uDC9C T\xe0i váº¡n c\xf4ng danh", "\uD83D\uDC9B Háº¡nh ph\xfac gia an", "\uD83D\uDC96 Sá»©c khoáº» nhÆ° voi", "\uD83D\uDC9B Th\xf4ng minh vÆ°á»£t trá»™i", "\uD83D\uDC96 Ph\xfac lá»™c trong tay", "\uD83D\uDC9A Gia chá»§ ph\xe1t t\xe0i", "\uD83D\uDC9A Váº¡n sá»± nhÆ° \xfd", "\uD83D\uDC9A T\xfai tiá»n náº·ng k\xfd ", "\uD83D\uDDA4 L\xe0m Äƒn ph\xe1t Ä‘áº¡t", "\uD83D\uDC9B V\xe0ng báº¡c cao sang", "\uD83D\uDC99 Sá»©c khá»e an nh\xe0n", "\uD83D\uDC9C C\xf4ng danh háº¿t \xfd", "\uD83D\uDDA4 Cung há»· cung há»·", "\uD83D\uDC9D Háº¡nh ph\xfac triá»n mi\xean", "\uD83D\uDDA4 Sung sÆ°á»›ng nhÆ° ti\xean"]
                , i = n("<span style='font-family:sans-serif;'>").text(e[d])
                , h = u[Math.floor(Math.random() * u.length)];
            d = (d + 1) % e.length;
            var c = t.pageX
                , o = t.pageY;
            i.css({
                "z-index": Math.floor(9990001 * Math.random()) + 9999,
                top: o - 20,
                left: c,
                position: "absolute",
                "font-weight": "bold",
                color: h
            }),
                n("body").append(i),
                i.animate({
                    top: o - 180,
                    opacity: 0
                }, 1500, function () {
                    i.remove()
                })
        })
    });
    class p {
        constructor(n) {
            this.element = $(n),
                this.TimeNows(),
                setInterval(() => this.TimeNows(), 1e3)
        }
        TimeNows() {
            let n = new Date
                , t = n.getHours().toString().padStart(2, "0")
                , e = n.getMinutes().toString().padStart(2, "0")
                , i = n.getSeconds().toString().padStart(2, "0");
            this.element.text(`${t}:${e}:${i}`)
        }
    }
    function y() {
        $.ajax({
            url: "https://api.meliodas.info.vn/cham-ngon/",
            type: "GET",
            dataType: "json",
            success: function (response) {
               
                if (response.msg) {
                    $("#cham-ngon").fadeOut(300, function () {
                        $(this).text(response.msg).fadeIn(300);
                    });
                } else {
                    console.error("Response does not contain 'msg':", response);
                }
            },
            error: function (xhr, status, error) {
                console.error("Error:", error, "Status:", status, "XHR:", xhr);
            }
        });
    }

    new p("#real-time"),
        $("[data-fancybox]").length && Fancybox.bind("[data-fancybox]", {}),
        y();
    let f = new class n {
        constructor(n) {
            this.element = n
        }
        MessageRmd() {
            let n = new Date().getHours(), t;
            return (t = n >= 3 && n <= 10 ? ["Ch\xfac c\xe1c báº¡n c\xf3 má»™t buá»•i s\xe1ng vui váº», v\xe0 may máº¯n \uD83D\uDE07", "S\xe1ng nay tháº­t Ä‘áº¹p, h\xe3y báº¯t Ä‘áº§u má»™t ng\xe0y má»›i tr\xe0n Ä‘áº§y nÄƒng lÆ°á»£ng nh\xe9! â˜€ï¸", "Ch\xe0o buá»•i s\xe1ng, Ä‘á»«ng qu\xean Äƒn s\xe1ng Ä‘á»ƒ c\xf3 nÄƒng lÆ°á»£ng cho cáº£ ng\xe0y!", "Khi \xf4ng Máº·t trá»i thá»©c dáº­y, máº¹ l\xean ráº«y, em Ä‘áº¿n trÆ°á»ng rá»“i m\xe0 sao m\xe0y váº«n c\xf2n ngá»§ háº£, dáº­y m\xe0 Ä‘\xf3n láº¥y \xe1nh náº¯ng t\xedch cá»±c, khá»Ÿi Ä‘áº§u ng\xe0y má»›i tr\xe0n Ä‘áº§y nÄƒng lÆ°á»£ng Ä‘i.",] : n >= 11 && n <= 15 ? ["Buá»•i trÆ°a n\xe0y, Ä‘á»«ng qu\xean Äƒn uá»‘ng Ä‘áº§y Ä‘á»§ Ä‘áº¥y nh\xe9 \uD83E\uDD24", "TrÆ°a nay hÆ¡i n\xf3ng, náº¿u c\xf3 cáº§n mua g\xec th\xec nháº¯n anh mua gi\xfap cho nh\xe9 \uD83C\uDF24ï¸", "Ch\xfac báº¡n c\xf3 má»™t buá»•i nghá»‰ trÆ°a tr\xe0n Ä‘áº§y sá»©c khoáº»!",] : n >= 16 && n <= 18 ? ["Ch\xfac báº¡n c\xf3 má»™t buá»•i chiá»u thÆ° gi\xe3n sau nhá»¯ng giá» l\xe0m viá»‡c cÄƒng tháº³ng.", "Ch\xfac buá»•i chiá»u tr\xe0n Ä‘áº§y nÄƒng lÆ°á»£ng t\xedch cá»±c, Ä‘á»ƒ tá»‘i nay c\xf3 thá»ƒ c\xe0y phim tháº£ ga!", "Cáº£ ng\xe0y h\xf4m nay t\xf4i kh\xf4ng thá»ƒ ngá»«ng nghÄ© vá» báº¡n ch\xfac báº¡n má»™t buá»•i chiá»u vui váº»! \uD83C\uDF05",] : n >= 19 && n <= 21 ? ["Ch\xfac c\xe1c báº¡n c\xf3 má»™t buá»•i tá»‘i tr\xe0n Ä‘áº§y háº¡nh ph\xfac!", "Buá»•i tá»‘i l\xe0 l\xfac Ä‘á»ƒ thÆ° gi\xe3n v\xe0 táº­n hÆ°á»Ÿng cuá»™c sá»‘ng \uD83C\uDF19", "Ch\xe0o buá»•i tá»‘i, Ä‘á»«ng qu\xean d\xe0nh thá»i gian cho gia Ä‘\xecnh nh\xe9 â¤ï¸",] : ["Onichan~ sao giá» n\xe0y chÆ°a ngá»§ ná»¯a à­§(à¹‘â€¢Ì€âŒ„â€¢Ìà¹‘)à«­", "Khuya rá»“i, h\xe3y Ä‘i ngá»§ Ä‘á»ƒ mÆ¡ nhá»¯ng giáº¥c mÆ¡ tháº­t Ä‘áº¹p nh\xe9 \uD83C\uDF0C", "Ä\xeam muá»™n tháº¿ n\xe0y, Ä‘á»«ng qu\xean chÄƒm s\xf3c sá»©c khá»e nha \uD83C\uDF19",])[Math.floor(Math.random() * t.length)]
        }
    }
        ($("#waiting-loader"));
    setTimeout(() => {
        let n = f.MessageRmd();
        $("#waiting-loader").text(n)
    }
        , 111),
        setInterval(y, 5321);
    let b = new class n {
        constructor(n) {
            this.descriptions = n,
                this.element = $(".web_desc"),
                this.Description()
        }
        Description() {
            let n = this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
            this.element.fadeOut(500, () => {
                this.element.html(n).fadeIn(500)
            }
            )
        }
    }
        (["Gá»i em l\xe0 c\xf4ng ch\xfaa v\xec ho\xe0ng tá»­ Ä‘ang Ä‘á»©ng chá» em n\xe8!", "ChÆ°a Ä‘Æ°á»£c sá»± cho ph\xe9p m\xe0 Ä‘\xe3 tá»± \xfd th\xedch em, anh xin lá»—i nh\xe9 c\xf4ng ch\xfaa!", "Em nh\xecn ráº¥t giá»‘ng ngÆ°á»i há» h\xe0ng cá»§a anh, Ä‘\xf3 ch\xednh l\xe0 con d\xe2u cá»§a máº¹ anh!", "Tr\xe1i Äáº¥t quay quanh Máº·t Trá»i, c\xf2n em th\xec quay m\xe3i trong t\xe2m tr\xed anh!", "Vector chá»‰ c\xf3 má»™t chiá»u, anh d\xe2n chuy\xean to\xe1n chá»‰ y\xeau má»™t ngÆ°á»i.", "Anh b\xe9o tháº¿ n\xe0y l\xe0 bá»Ÿi v\xec trong l\xf2ng anh c\xf3 em ná»¯a.", "Nghe Ä‘\xe2y! Em Ä‘\xe3 bá»‹ báº¯t v\xec tá»™i qu\xe1 xinh Ä‘áº¹p.", "Anh chá»‰ muá»‘n b\xean cáº¡nh em hai láº§n Ä‘\xf3 l\xe0 b\xe2y giá» v\xe0 m\xe3i m\xe3i.", "Bao nhi\xeau c\xe2n th\xednh cho vá»«a, bao nhi\xeau c\xe2n báº£ má»›i lá»«a Ä‘Æ°á»£c em?", "VÅ© trá»¥ cá»§a ngÆ°á»i ta l\xe0 m\xe0u Ä‘en huyá»n b\xed, c\xf2n vÅ© trá»¥ cá»§a anh b\xe9 t\xed, thu nhá» láº¡i l\xe0 em.", "Anh ráº¥t y\xeau th\xe0nh phá»‘ n\xe0y, kh\xf4ng pháº£i v\xec n\xf3 c\xf3 g\xec, m\xe0 v\xec n\xf3 c\xf3 em.", "Anh báº­n vá»›i táº¥t cáº£ má»i Ä‘iá»u, nhÆ°ng váº«n lu\xf4n ráº£nh Ä‘á»ƒ nhá»› Ä‘áº¿n em.", "C\xe0nh c\xe2y c\xf2n c\xf3 l\xe1. Ch\xfa c\xe1 váº«n Ä‘ang bÆ¡i, sao em cá»© máº£i chÆ¡i. Cháº³ng chá»‹u y\xeau anh tháº¿!", "Em nh\xe0 á»Ÿ Ä‘\xe2u tháº¿? Cá»© tá»›i lui trong tim anh kh\xf4ng biáº¿t Ä‘Æ°á»ng vá» nh\xe0 \xe0?", "Cuá»™c Ä‘á»i anh vá»‘n l\xe0 má»™t Ä‘Æ°á»ng tháº³ng, chá»‰ v\xec gáº·p em m\xe0 ráº½ ngang.", "Vá»›i tháº¿ giá»›i em chá»‰ l\xe0 má»™t ngÆ°á»i, nhÆ°ng vá»›i anh, em l\xe0 cáº£ tháº¿ giá»›i.", "Em c\xf3 thá»ƒ Ä‘á»«ng cÆ°á»i ná»¯a Ä‘Æ°á»£c kh\xf4ng, da anh Ä‘en háº¿t rá»“i.", "Anh Ä‘\xe2y cháº³ng th\xedch nhiá»u lá»i, nh\xecn em l\xe0 biáº¿t cáº£ Ä‘á»i cá»§a anh.", "Cáº£m láº¡nh c\xf3 thá»ƒ do gi\xf3, nhÆ°ng, cáº£m náº¯ng th\xec cháº¯c cháº¯n do em.", "Trá»©ng r\xe1n cáº§n má»¡, báº¯p cáº§n bÆ¡, y\xeau kh\xf4ng cáº§n cá»›, cáº§n em cÆ¡!", "Cafe Ä‘áº¯ng th\xeam Ä‘Æ°á»ng sáº½ ngá»t, c\xf2n cuá»™c Ä‘á»i anh th\xeam em sáº½ háº¡nh ph\xfac.", "Giá»¯a cuá»™c Ä‘á»i h\xe0ng ng\xe0n c\xe1m dá»—, nhÆ°ng, anh váº«n chá»‰ cáº§n báº¿n Ä‘á»— l\xe0 em.", "C\xf3 ngÆ°á»i rá»§ anh Ä‘i Äƒn tá»‘i, nhÆ°ng anh tá»« chá»‘i v\xec thá»±c Ä‘Æ¡n kh\xf4ng c\xf3 em.", "Em c\xf3 biáº¿t v\xec sao Ä‘áº§u tuáº§n láº¡i báº¯t Ä‘áº§u báº±ng thá»© hai kh\xf4ng, bá»Ÿi v\xec em l\xe0 thá»© nháº¥t!", "Oxy l\xe0 nguá»“n sá»‘ng cá»§a nh\xe2n loáº¡i, c\xf2n em ch\xednh l\xe0 nguá»“n sá»‘ng cá»§a anh.", "Em bá»‹ cáº­n thá»‹ \xe0? Náº¿u kh\xf4ng táº¡i sao kh\xf4ng nh\xecn tháº¥y anh th\xedch em chá»©?", "H\xf4m qua anh gáº·p \xe1c má»™ng v\xec trong giáº¥c má»™ng Ä‘\xf3 kh\xf4ng c\xf3 em.", "Uá»‘ng nháº§m má»™t \xe1nh máº¯t, cÆ¡n say theo cáº£ Ä‘á»i, thÆ°Æ¡ng nháº§m má»™t ná»¥ cÆ°á»i, cáº£ má»™t Ä‘á»i phi\xeau l\xe3ng.", "Dáº¡o n\xe0y em c\xf3 tháº¥y má»i ch\xe2n kh\xf4ng, sao cá»© Ä‘i m\xe3i trong Ä‘áº§u anh tháº¿?", "H\xecnh nhÆ° em th\xedch tr\xe0 sá»¯a láº¯m pháº£i kh\xf4ng, anh cÅ©ng th\xedch em nhÆ° tháº¿ Ä‘áº¥y.", "Náº¿u em l\xe0 nÆ°á»›c máº¯t th\xec anh sáº½ kh\xf4ng bao giá» kh\xf3c Ä‘á»ƒ láº¡c máº¥t em Ä‘\xe2u.", "Ä\xf4i máº¯t em c\xf2n xanh hÆ¡n cáº£ Äáº¡i T\xe2y DÆ°Æ¡ng v\xe0 anh th\xec bá»‹ láº¡c tr\xean biá»ƒn cáº£ máº¥t rá»“i.", "Náº¿u ná»¥ h\xf4n l\xe0 nhá»¯ng b\xf4ng tuyáº¿t th\xec anh sáº½ gá»­i Ä‘áº¿n em má»™t cÆ¡n b\xe3o tuyáº¿t", "Pháº£i chÄƒng em l\xe0 má»™t áº£o thuáº­t gia, bá»Ÿi má»—i khi anh nh\xecn em l\xe0 má»i thá»© xung quanh Ä‘á»u biáº¿n máº¥t.", "Anh c\xf3 thá»ƒ chá»¥p áº£nh em Ä‘Æ°á»£c kh\xf4ng, Ä‘á»ƒ chá»©ng minh vá»›i lÅ© báº¡n ráº±ng thi\xean tháº§n l\xe0 c\xf3 tháº­t.", "Anh c\xf3 thá»ƒ Ä‘i theo em Ä‘Æ°á»£c kh\xf4ng, bá»Ÿi anh Ä‘Æ°á»£c bá»‘ máº¹ dáº¡y ráº±ng pháº£i theo Ä‘uá»•i giáº¥c mÆ¡ cá»§a m\xecnh.", "Náº¿u khi anh nghÄ© Ä‘áº¿n em m\xe0 c\xf3 má»™t ng\xf4i sao biáº¿n máº¥t, váº­y cháº¯c cáº£ báº§u trá»i n\xe0y kh\xf4ng c\xf2n sao.",]);
    setInterval(() => b.Description(), 7e3),
        $(".td-lock-screen").click(function () {
            $(".td-welcome").slideUp("slow"),
                $(".td-lock-screen").animate({
                    opacity: 0
                }, "slow").css("pointer-events", "none")
        }),
        $(document).on("swiperight", function () {
            $(".td-welcome").slideDown("slow"),
                $(".td-lock-screen").animate({
                    opacity: 1
                }, "fast").css("pointer-events", "auto")
        }),
        $(document).on("swipeleft", function () {
            $(".td-welcome").slideUp("slow"),
                $(".td-lock-screen").animate({
                    opacity: 0
                }, "slow").css("pointer-events", "none")
        }),
        $(document).on("visibilitychange", function () {
            document.hidden || setTimeout(function () {
                var n = $(window).scrollTop()
                    , t = $(window).height()
                    , e = $(document).height();
                0 === n && ($(".td-welcome").slideDown("slow"),
                    $(".td-lock-screen").animate({
                        opacity: 1
                    }, "fast").css("pointer-events", "auto")),
                    100 == n / (e - t) * 100 && ($(".td-welcome").slideUp("slow"),
                        $(".td-lock-screen").animate({
                            opacity: 0
                        }, "slow").css("pointer-events", "none"))
            }, 200)
        }),
        new p(".date");
    let v = $("#loading-percentage"), w;
    w = setInterval(function () {
        var n = $(".pace-progress");
        if (n.length) {
            var t = n.attr("data-progress-text");
            if (t !== v.text()) {
                v.text(t);
                var e = parseInt(t);
                n.css("transform", "translate3d(" + e + "%, 0px, 0px)"),
                    "100%" === t && ($(".pace-active").animate({
                        top: "-100px"
                    }, "slow", function () {
                        $(this).hide()
                    }),
                        $("#loading-box").is(":visible") ? (x(),
                            WsLoaded = !0,
                            $(".td-loading-v2").fadeOut("slow"),
                            $("#loading-box").fadeOut("slow")) : $(".td-loading-v2").fadeOut("slow"),
                        clearInterval(w))
            }
        }
    }, 100);
    let k = {
        endLoading() {
            x(),
                $(".td-loading-v2").fadeOut("slow"),
                $("#loading-box").fadeOut("slow"),
                WsLoaded = !0
        },
        initLoading() {
            document.body.style.overflow = "",
                $("#loading-box").removeClass("loaded")
        }
    };
    function x() {
        $("body").removeClass("loading")
    }
    $(window).on("load", () => {
        k.endLoading()
    }
    ),
        $(document).on("pjax:send", () => {
            k.initLoading()
        }
        ),
        $(document).on("pjax:complete", () => {
            k.endLoading()
        }
        ),
        console.log("ngthinhface", "color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;", "color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;");
    var _, C, T = new Image;
    function E(n, t, e, i, h) {
        this.x = n,
            this.y = t,
            this.s = e,
            this.r = i,
            this.fn = h
    }
    function q(n) {
        var t, e;
        switch (n) {
            case "x":
                t = Math.random() * window.innerWidth;
                break;
            case "y":
                t = Math.random() * window.innerHeight;
                break;
            case "s":
                t = Math.random();
                break;
            case "r":
                t = 6 * Math.random();
                break;
            case "fnx":
                e = -.5 + 1 * Math.random(),
                    t = function (n, t) {
                        return n + .5 * e - 1.7
                    }
                    ;
                break;
            case "fny":
                e = 1.5 + .7 * Math.random(),
                    t = function (n, t) {
                        return t + e
                    }
                    ;
                break;
            case "fnr":
                e = .03 * Math.random(),
                    t = function (n) {
                        return n + e
                    }
        }
        return t
    }
    function S() {
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        var n, t, e, i, h, c, o, a, s = document.createElement("canvas");
        C = !0,
            s.height = window.innerHeight,
            s.width = window.innerWidth,
            s.setAttribute("style", "position: fixed;left: 0;top: 0;pointer-events: none;z-index: 8888;"),
            s.setAttribute("id", "canvas_sakura"),
            document.getElementsByTagName("body")[0].appendChild(s),
            a = s.getContext("2d");
        for (var r = new SakuraList, l = 0; l < 10; l++)
            t = q("x"),
                e = q("y"),
                h = q("r"),
                i = q("s"),
                c = q("fnx"),
                o = q("fny"),
                randomFnR = q("fnr"),
                (n = new E(t, e, i, h, {
                    x: c,
                    y: o,
                    r: randomFnR
                })).draw(a),
                r.push(n);
        _ = requestAnimationFrame(function () {
            a.clearRect(0, 0, s.width, s.height),
                r.update(),
                r.draw(a),
                _ = requestAnimationFrame(arguments.callee)
        })
    }
    function A() {
        if (C) {
            var n = document.getElementById("canvas_sakura");
            n.parentNode.removeChild(n),
                window.cancelAnimationFrame(_),
                C = !1
        } else
            S()
    }
    sakura = "//i.ibb.co/nbW2BwJ/hongson.png",
        leaf = "//i.ibb.co/nbW2BwJ/hongson.png",
        maple = "//i.ibb.co/nbW2BwJ/hongson.png",
        user = "",
        T.src = maple,
        E.prototype.draw = function (n) {
            n.save(),
                this.s,
                n.translate(this.x, this.y),
                n.rotate(this.r),
                n.drawImage(T, 0, 0, 30 * this.s, 30 * this.s),
                n.restore()
        }
        ,
        E.prototype.update = function () {
            this.x = this.fn.x(this.x, this.y),
                this.y = this.fn.y(this.y, this.y),
                this.r = this.fn.r(this.r),
                (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) && (this.r = q("fnr"),
                    Math.random() > .4 ? (this.x = q("x"),
                        this.y = 0,
                        this.s = q("s"),
                        this.r = q("r")) : (this.x = window.innerWidth,
                            this.y = q("y"),
                            this.s = q("s"),
                            this.r = q("r")))
        }
        ,
        (SakuraList = function () {
            this.list = []
        }
        ).prototype.push = function (n) {
            this.list.push(n)
        }
        ,
        SakuraList.prototype.update = function () {
            for (var n = 0, t = this.list.length; n < t; n++)
                this.list[n].update()
        }
        ,
        SakuraList.prototype.draw = function (n) {
            for (var t = 0, e = this.list.length; t < e; t++)
                this.list[t].draw(n)
        }
        ,
        SakuraList.prototype.get = function (n) {
            return this.list[n]
        }
        ,
        SakuraList.prototype.size = function () {
            return this.list.length
        }
        ,
        window.onresize = function () {
            document.getElementById("canvas_snow")
        }
        ,
        T.onload = function () {
            S()
        }
        ,
        $("body").on("click", "[data-ws-copy]", function (n) {
            n.preventDefault();
            var t = $(this).data("ws-copy");
            if (navigator.clipboard)
                navigator.clipboard.writeText(t).then(function () {
                    FuiToast.success("Ä\xe3 sao ch\xe9p v\xe0o bá»™ nhá»› táº¡m!")
                }, function (n) {
                    FuiToast.error("Sao ch\xe9p tháº¥t báº¡i: " + n)
                });
            else {
                var e = $("<textarea>").val(t).appendTo("body").select();
                try {
                    document.execCommand("copy"),
                        FuiToast.success("Ä\xe3 sao ch\xe9p v\xe0o bá»™ nhá»› táº¡m!")
                } catch (i) {
                    FuiToast.error("Sao ch\xe9p tháº¥t báº¡i: " + i)
                }
                e.remove()
            }
        })
}();
