const utils = {
    filingZero(number) {
        return number <= 9 ? `0${number}` : number;
    },

    formatSeconds(seconds) {
        const minutes = Math.floor(seconds / 60);
        const restSeconds = (seconds - (60 * minutes))
        return minutes < 60 ?
            `${utils.filingZero(minutes)}:${utils.filingZero(restSeconds)}`
            : '1H+';
    },

    byteToMb(bytes) {
        return ((bytes / 1024) / 1024).toFixed(2);
    },

    eltDisplay(elt, value = 'none') {
        return {
            elt,
            value
        };
    },

    changeElementDisplay(element) {
        const elt = element.elt;
        const value = element.value;
        elt.style.display = value;
    },

    changeElementsDisplay(elements) {
        elements.forEach(utils.changeElementDisplay);
    },

    controlDisplayName(string, length) {
        if (string.length > length) {
            return string.substring(0, length) + "...";
        }

        return string;
    },

    getFilename(string, downloadType) {
        const videoName = string
            .replace(/\s+/g, '-')
            .replace(/([^\w-])+/g, "");
        const extension = downloadType === 'video' ? '.mp4' : '.mp3';
        return videoName + extension;
    },

    between(value, min, max) {
        return value >= min && value <= max;
    },

    toQualityObject({ container, itag, audioBitrate, qualityLabel }) {
        return {
            label: qualityLabel || audioBitrate + "k",
            quality: String(itag),
            extension: container,
        }
    },

    byQualityValue({ itag: a }, { itag: b }) {
        return a - b;
    }
}

module.exports = utils;
