import { getSynonymPath } from '../api_util.js';
import drawTree from './tree.js';

export default function() {
    const targetInput = document.getElementById('target-input');
    const sourceInput = document.getElementById('source-input');

    const getPathButton = document.getElementById('path');

    const bothEntered = () => {
        getPathButton.disabled = targetInput.value && sourceInput.value ? false : true;
    }
    targetInput.onkeyup = bothEntered;
    sourceInput.onkeyup = bothEntered;

    getPathButton.addEventListener('click', () => {
        getPathButton.disabled = true;
        getSynonymPath({ target: targetInput.value, source: sourceInput.value })
        .then(res => {
            drawTree(res);
            getPathButton.disabled = false;
        });
    });
}