$(function () {
    const typingText = document.getElementById("typing-text");

    if (!typingText) {
        console.error("#typing-text element not found!");
        return;
    }

    const texts = ["WEB DESIGNER", "UI UX DESIGNER"];
    let currentIndex = 0;
    let charIndex = 0;
    let typingSpeed = 100;
    let eraseSpeed = 50;
    let delayBetweenWords = 1500;

    function type() {
        if (charIndex < texts[currentIndex].length) {
            typingText.textContent += texts[currentIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = texts[currentIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, eraseSpeed);
        } else {
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, 3000); // 바로 시작하면 됨


    // 메뉴이동

    const headerEl = document.querySelector('header')

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            headerEl.classList.add('on')
        } else {
            headerEl.classList.remove('on')
        }
    })

    const animationMove = function (selector) {
        const targetEl = document.querySelector(selector)
        const bsy = window.scrollY
        const tsy = targetEl.getBoundingClientRect().top + bsy
        window.scrollTo({
            top: tsy,
            behavior: 'smooth'
        })
    }

    const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
    for (let i = 0; i < scrollMove.length; i++) {
        scrollMove[i].addEventListener('click', function () {
            const target = this.dataset.target
            animationMove(target)
        })
    }


    //두번쨰

    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.fade-in');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });

    // 스크롤 이벤트로 타이핑 시작
    window.addEventListener('scroll', () => {
        const element = document.querySelector('.bottom-text');
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (
            elementTop < window.innerHeight - elementVisible &&
            !element.classList.contains('typed')
        ) {
            element.classList.add('typed');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';

            const text = `복잡한 것은 단순하게, 단순한 것은 아름답게
생각은 유연하게, 태도는 부드럽게
감기, 피로, 세상 모든 귀찮음에도 출석하는 나 = 진짜 찐 성실러`;

            startTypingEffect(element, text, 50);
        }
    });


    // 툴 아이콘 호버 효과
    document.querySelectorAll('.tool-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.2)';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.boxShadow = 'none';
        });
    });

    // 페이지 로드 시 애니메이션 시작
    window.addEventListener('load', () => {
        document.querySelectorAll('.fade-in').forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

      // 디테일 자바

    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");

    function openModal(projectNumber) {
        let content = `
    <h2>Project ${projectNumber} Title</h2>
    <p>This is a detailed description for Project ${projectNumber}. Replace this with your actual content.</p>
    <img src="https://placekitten.com/600/400" alt="Project ${projectNumber} Full" style="width:100%; margin-top: 1rem;">
  `;
        modalBody.innerHTML = content;
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    };

    //카드뉴스 팝업

    // 이미지 클릭 시 모달 열기
    document.querySelectorAll('.swiper-slide img').forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });

    // 닫기 버튼 클릭
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('imageModal').style.display = 'none';
    });

    // 바깥 클릭 시 닫기
    window.addEventListener('click', e => {
        const modal = document.getElementById('imageModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });


    // 반응형 카드

    var swiper = new Swiper('.card-slide', {
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      grid: { rows: 1 },
    },
    1024: {
      slidesPerView: 3,
      grid: { rows: 2 },
    },
    768: {
      slidesPerView: 2,
      grid: { rows: 2 },
    },
    425: {
      slidesPerView: 1,
      grid: { rows: 2 },
    }
  }
});


    
    // swiper 초기화 시
var swiper = new Swiper('.card-slide', {
  slidesPerView: 2,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: 'row' // 'row' 기준으로 채우기
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      grid: { rows: 1 },
    },
    1024: {
      slidesPerView: 3,
      grid: { rows: 2 },
    },
    768: {
      slidesPerView: 2,
      grid: { rows: 2 },
    },
    425: {
      slidesPerView: 1,
      grid: { rows: 2 },
    }
  }
});


// 고탑
    $(window).scroll(function(){
        // console.log($(window).scrollTop())
        if($(window).scrollTop() >= 200){
            $('.gotop').fadeIn()
        }else {
            $('.gotop').fadeOut()
        }
    })

    $('.gotop').click(function(e){
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop : 0
        },500)

    })

    //

    

});
