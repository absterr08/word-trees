import { getSynonymList, getSynonymTree } from '../api_util.js';
import drawTree from './tree.js';

export default function(root) {
    const input = document.getElementById('word-input');
    
    const getTreeButton = document.getElementById('tree');
    getTreeButton.addEventListener('click', () => {
        getSynonymTree(input.value, res => drawTree(res));
    });
}