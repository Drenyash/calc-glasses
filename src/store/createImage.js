import * as htmlToImage from "html-to-image";

export async function createImage() {
    const parentNode = document.querySelector('#final-build');

    const promiseObj = await htmlToImage.toJpeg(parentNode, {
        quality: 1,
        height: 642,
        width: 445
    })
        .then((dataUrl) => {
            return dataUrl;
        });

    return promiseObj;
}
