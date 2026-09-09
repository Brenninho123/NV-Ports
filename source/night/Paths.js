export class Paths {
    static currentLevel = null;

    static setCurrentLevel(name) {
        Paths.currentLevel = name.toLowerCase();
    }

    static getPath(file, type = 'TEXT', library = null) {
        if (library != null) return `assets/${library}/${file}`;

        if (Paths.currentLevel != null) {
            const levelPath = `assets/${Paths.currentLevel}/${file}`;
            return levelPath;
        }

        return `assets/shared/${file}`;
    }

    static file(file, type = 'TEXT', library = null) {
        return Paths.getPath(file, type, library);
    }

    static txt(key, library = null) {
        return Paths.getPath(`data/${key}.txt`, 'TEXT', library);
    }

    static xml(key, library = null) {
        return Paths.getPath(`data/${key}.xml`, 'TEXT', library);
    }

    static json(key, library = null) {
        return Paths.getPath(`data/${key}.json`, 'TEXT', library);
    }

    static shaderFragment(key, library = null) {
        return Paths.getPath(`shaders/${key}.frag`, 'TEXT', library);
    }

    static shaderVertex(key, library = null) {
        return Paths.getPath(`shaders/${key}.vert`, 'TEXT', library);
    }

    static video(key, library = null) {
        return Paths.getPath(`videos/${key}.mp4`, 'VIDEO', library);
    }

    static sound(key, library = null) {
        return Paths.getPath(`sounds/${key}.ogg`, 'SOUND', library);
    }

    static soundRandom(key, min, max, library = null) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return Paths.sound(`${key}${randomNum}`, library);
    }

    static music(key, library = null) {
        return Paths.getPath(`music/${key}.ogg`, 'MUSIC', library);
    }

    static voices(song) {
        return `assets/songs/${song.toLowerCase()}/Voices.ogg`;
    }

    static inst(song) {
        return `assets/songs/${song.toLowerCase()}/Inst.ogg`;
    }

    static image(key, library = null) {
        return Paths.getPath(`images/${key}.png`, 'IMAGE', library);
    }

    static font(key, library = null) {
        return Paths.getPath(`fonts/${key}.ttf`, 'FONT', library);
    }

    static fontXml(key, library = null) {
        return Paths.getPath(`fonts/${key}.fnt`, 'TEXT', library);
    }

    static pack(key) {
        return `assets/${key}`;
    }
}
