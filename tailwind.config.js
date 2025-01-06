tailwind.config = {
    theme:{
            gridTemplateColumns:{
                'auto' : 'repeat(auto-fit, minmax(200px, 1fr))',
            },
            fontFamily:{
                Outfit:["Outfit", 'serif'],
                Ovo:["Ovo", 'serif']
            },
            animation:{
                spin_slow: 'spin 6s linear infinite'
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F',
                white: '#ffffff',
                transparent: 'transparent',
                rose: '#fff1f2',
                black: '#000000',
                lime: '#bef264'

            },
            boxShadow:{
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        

    },

    darkMode:  'selector',

}

