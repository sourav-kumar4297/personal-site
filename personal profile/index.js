// space, scary, military, romantic, cowboy, fantasy, superhero
favouriteMovieGenre("military")

// sharp, soft, round
favouriteEdgeStyle("soft")


function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

function favouriteEdgeStyle(style) {
    setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
    if (font) {
        setProp("--font", "var(--" + font + ")");    
    }
}

