/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
        "./src/partials/**/*.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                cormorant: ['Cormorant', 'serif'],
                'cormorant-infant': ['Cormorant Infant', 'serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                dark: '#333535',
            },
            // СИСТЕМНЫЕ РАЗМЕРЫ ШРИФТОВ ДЛЯ АДАПТИВА
            // Формат: [размер, { lineHeight }]
            fontSize: {
                // Главные заголовки H3 (Hero, Каталог, Процесс)
                'h3-mob': ['30px', { lineHeight: '36px' }],
                'h3-tab': ['44px', { lineHeight: '48px' }],
                'h3-desk': ['58px', { lineHeight: '50px' }],
                
                // Подзаголовки и важные параграфы (Hero-описание, карточки)
                'sub-mob': ['16px', { lineHeight: '24px' }],
                'sub-desk': ['22px', { lineHeight: '32px' }],
                
                // Стандартный текстовый контент (Списки процессов, описание в каталоге)
                'body-mob': ['14px', { lineHeight: '20px' }],
                'body-desk': ['14px', { lineHeight: '22px' }],
            },
            spacing: {
                // Твои оригинальные десктопные значения (сохраняем, чтобы ничего не съехало)
                '2.75': '11px',
                '4_5': '18px',
                '5.25': '21px',
                '5.5': '22px',
                '6.25': '25px',
                '6.5': '26px',
                '7.5': '30px',
                '9.25': '37px',
                '11': '44px',
                '13': '52px',
                '17.5': '70px',  
                '19': '76px',       
                '21.75': '87px',
                '22.5': '90px',     
                '24.5': '98px',     
                '34.5': '138px',
                '46': '184px',
                '62.5': '250px',
                '66': '264px',
                '82.5': '330px',
                '108.25': '433px',
                '157.5': '630px',
                '169.25': '677px',
                '190': '760px',
                '198.25': '793px',
                '200': '800px',
                '206': '824px',
                '242.5': '970px',
                '292.5': '1170px',

                // --- ЕДИНАЯ СЕТКА ОТСТУПОВ (PADDING, MARGIN, GAP) ДЛЯ ВСЕХ СЕКЦИЙ ---
                
                // Крупные секционные паддинги (pt / pb)
                'section-pt-mob': '40px',   // Для мобильных верхних отступов сечений
                'section-pb-mob': '50px',   // Для мобильных нижних отступов сечений
                
                // Внутренние отступы элементов (карточки цели, плашки процесса)
                'card-p-mob': '16px',
                'card-p-desk': '24px',
                
                // Межблочные зазоры (flex / grid gap)
                'gap-mob': '16px',
                'gap-tab': '24px',
                'gap-desk': '44px',
            }
        },
    },
    plugins: [],
}