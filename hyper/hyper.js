module.exports = {
    config: {
        // default font size in pixels for all tabs
        fontSize: 14,

        // font family with optional fallbacks
        fontFamily: `
            "Fira Code",
	        "Roboto Mono for Powerline",
            "Roboto Mono",
            "Source Code Pro",
            "Fira Code",
            Menlo,
            "DejaVu Sans Mono",
            Consolas,
            "Lucida Console",
            monospace`,
        // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorColor: 'rgba(248, 28, 229, 1)',

        // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
        cursorShape: 'BEAM',
        cursorBlink: true,

        // color of the text
        foregroundColor: 'rgba(255, 255, 255, 1)',

        // terminal background color
        backgroundColor: 'rgba(20, 20, 20, 1)',

        // border color (window, tabs)
        borderColor: 'rgba(33, 33, 33, 0.8)',

        // custom css to embed in the main window
        css: ``,

        // custom css to embed in the terminal window
        termCSS: `
            .unicode-node {
                position: relative !important;
                width: 1.15em;
            }
            * {
                font-variant-ligatures: normal;
            }
        `,

        // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
        // default: `false` on Linux, `true` on Windows (ignored on macOS)
        showHamburgerMenu: '',

        // set to `false` if you want to hide the minimize, maximize and close buttons
        // additionally, set to `'left'` if you want them on the left, like in Ubuntu
        // default: `true` on windows and Linux (ignored on macOS)
        showWindowControls: '',

        // custom padding (css format, i.e.: `top right bottom left`)
        padding: '12px 14px',

        // the full list. if you're going to provide the full color palette,
        // including the 6 x 6 color cubes and the grayscale map, just provide
        // an array here instead of a color map object
        /* colors: {
            black: '#000000',
            red: '#ff0000',
            green: '#33ff00',
            yellow: '#ffff00',
            blue: '#0066ff',
            magenta: '#cc00ff',
            cyan: '#00ffff',
            white: '#d0d0d0',
            lightBlack: '#808080',
            lightRed: '#ff0000',
            lightGreen: '#33ff00',
            lightYellow: '#ffff00',
            lightBlue: '#0066ff',
            lightMagenta: '#cc00ff',
            lightCyan: '#00ffff',
            lightWhite: '#ffffff'
        }, */


        // BEGIN NORD COLORS
        colors: {
            black: '#3B4252',
            red: '#BF616A',
            green: '#A3BE8C',
            yellow: '#EBCB8B',
            blue: '#81A1C1',
            magenta: '#B48EAD',
            cyan: '#88C0D0',
            white: '#d0d0d0',
            lightBlack: '#808080',
            lightRed: '#BF616A',
            lightGreen: '#A3BE8C',
            lightYellow: '#EBCB8B',
            lightBlue: '#81A1C1',
            lightMagenta: '#B48EAD',
            lightCyan: '#88C0D0',
            lightWhite: '#ffffff'
        },
        cursorColor: '#D8DEE9',
        foregroundColor: '#D8DEE9',
        backgroundColor: 'rgba(20, 20, 20, 1)',
        borderColor: 'rgba(33, 33, 33, 0.8)',
        // END NORD COLORS

        // SPRING NIGHT
        /* colors: {
            black: '#000000',
            red: '#fd8489',
            green: '#a9dd9d',
            yellow: '#fedf81',
            blue: '#a8d2eb',
            magenta: '#e7d5ff',
            cyan: '#a8d2eb',
            white: '#fffeeb',
            lightBlack: '#808080',
            lightRed: '#fb8965',
            lightGreen: '#a9dd9d',
            lightYellow: '#fedf81',
            lightBlue: '#a8d2eb',
            lightMagenta: '#e7d5ff',
            lightCyan: '#a8d2eb',
            lightWhite: '#ffffff'
        },
        cursorColor: '#fffeeb',
        foregroundColor: '#fffeeb',
        backgroundColor: '#334152',
        borderColor: '#3a4b5c', */
        // END SPRING NIGHT

        // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
        // if left empty, your system's login shell will be used by default
        // make sure to use a full path if the binary name doesn't work
        // (e.g `C:\\Windows\\System32\\bash.exe` instad of just `bash.exe`)
        // if you're using powershell, make sure to remove the `--login` below
        shell: 'zsh',

        // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
        // by default ['--login'] will be used
        shellArgs: ['--login'],

        // for environment variables
        env: {},

        // set to false for no bell
        bell: 'SOUND',

        // if true, selected text will automatically be copied to the clipboard
        copyOnSelect: false,

        base16: {
            scheme: 'default'
        }

        // if true, on right click selected text will be copied or pasted if no
        // selection is present (true by default on Windows)
        // quickEdit: true

        // URL to custom bell
        // bellSoundURL: 'http://example.com/bell.mp3',

        // for advanced config flags please refer to https://hyper.is/#cfg
    },

    // a list of plugins to fetch and install from npm
    // things I sometimes install:
    //   nord-hyper
    //   hyperline
    plugins: ["hypercwd", "hyperlinks", "nord-hyper" /* "hypersixteen" */],

    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: []
};
