import { getSynonymPath, getSynonymTree } from '../api_util.js';
import drawTree, { removeTree } from './tree.js';


export default function() {
    const getPathButton = document.getElementById('path');
    const getSynsButton = document.getElementById('synonyms');
    const sourceInput = document.getElementById('source-input');
    const targetInput = document.getElementById('target-input');
    const loader = document.getElementById('loader');
    const err = document.getElementById('err-msg');
    sourceInput.placeholder = 'fun';
    targetInput.placeholder = 'gaiety';

    sourceInput.onkeyup = () => getSynsButton.disabled = sourceInput.value ? false : true;
    targetInput.onkeyup = () => getPathButton.disabled = sourceInput.value && targetInput.value ? false : true

    function search(searchFn, args) {
        removeTree();
        err.style.display = 'none';
        loader.style.display = 'block';
        let initPathStatus = getPathButton.disabled;
        let initTreeStatus = getSynsButton.disabled;
        getPathButton.disabled = true;
        getSynsButton.disabled = true;
        searchFn(...args)
            .then(res => {
                drawTree(res);
                getPathButton.disabled = initPathStatus;
                getSynsButton.disabled = initTreeStatus;
                loader.style.display = 'none';
            })
            .catch(() => {
                err.style.display = 'flex';
                loader.style.display = 'none';
            })
    }

    getPathButton.onclick = () => { search(getSynonymPath, [sourceInput.value, targetInput.value]); };
    getSynsButton.onclick = () => { search(getSynonymTree, [sourceInput.value]); };

    // bind modal
    const infoModal = document.getElementById('info-modal');
    const info = document.getElementById('info-container');
    document.getElementById('question-button').onclick = () => infoModal.style.display = infoModal.style.display === 'flex' ? 'none' : 'flex';
    infoModal.onclick = () => infoModal.style.display = 'none';
    info.onclick = e => e.stopPropagation();

    // bind example button
    const exButton = document.getElementById('example');
    exButton.onclick = () => {
        sourceInput.value = 'fun';
        targetInput.value = 'gaiety';
        getPathButton.disabled = false;
        getSynsButton.disabled = false;
        infoModal.style.display = 'none';
        search(getSynonymPath, [sourceInput.value, targetInput.value]);
    }
}