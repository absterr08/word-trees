import { getSynonymPath, getSynonymTree } from '../api_util.js';
import drawTree from './tree.js';

function setupModal() {
    const infoModal = document.getElementById('info-modal');
    const info = document.getElementById('info-container');
    document.getElementById('question-button').onclick = () => infoModal.style.display = infoModal.style.display === 'flex' ? 'none' : 'flex';
    infoModal.onclick = () => infoModal.style.display = 'none';
    info.onclick = e => e.stopPropagation();
}

export default function() {
    setupModal();
    const getPathButton = document.getElementById('path');
    const getSynsButton = document.getElementById('synonyms');
    const sourceInput = document.getElementById('source-input');
    const targetInput = document.getElementById('target-input');
    sourceInput.placeholder = 'fun';
    targetInput.placeholder = 'gaiety';

    sourceInput.onkeyup = () => getSynsButton.disabled = sourceInput.value ? false : true;
    targetInput.onkeyup = () => getPathButton.disabled = sourceInput.value && targetInput.value ? false : true

    getPathButton.onclick = () => {
        getPathButton.disabled = true;
        getSynonymPath(sourceInput.value, targetInput.value)
        .then(res => {
            drawTree(res);
            getPathButton.disabled = false;
        });
    };
    getSynsButton.onclick = () => {
        getSynsButton.disabled = true;
        getSynonymTree(sourceInput.value)
        .then(res => {
            drawTree(res);
            getSynsButton.disabled = false;
        });
    };
}