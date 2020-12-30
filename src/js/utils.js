const utils = {
    filingZero(number) {
        return number <= 9 ? `0${number}` : number;
    },

    formatSeconds(seconds) {
        const minutes = Math.floor(seconds / 60);
        const restSeconds = (seconds - (60 * minutes))
        return minutes < 60 ?
            `${utils.filingZero(minutes)}:${utils.filingZero(restSeconds)}` :
            '1H+';
    },

    byteToMb(bytes) {
        return ((bytes / 1024) / 1024).toFixed(2);
    },

    elementDisplay(elt, value = 'none') {
        return {
            elt,
            value
        };
    },

    changeElementsDisplay(elements) {
        elements.forEach(element => {
            const elt = element.elt;
            const value = element.value;
            elt.style.display = value;
        });
    },

    controlDisplayName(string) {
        if (string.length > 90) {
            return string.substring(0, 90) + "...";
        }

        return string;
    },

    getFilename(string, downloadType) {
        const videoName = string
            .replace(/\s+/g, '-')
            .replace(/([^\w-])+/g, "");
        const extension = downloadType === 'highest' ? '.mp4' : '.mp3';
        return videoName + extension;
    }
}

module.exports = utils;