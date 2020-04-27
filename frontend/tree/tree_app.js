import { getSynonymList, getSynonymTree } from '../api_util.js';
import drawTree from './tree.js';

export default function(root) {
    const input = document.getElementById('word-input');

    const getListButton = document.getElementById('list');
    getListButton.addEventListener('click', () => {
        getSynonymList(input.value, res => console.log(res)); 
    });

    const getTreeButton = document.getElementById('tree');
    getTreeButton.addEventListener('click', () => {
        getSynonymTree(input.value, res => drawTree(res));
    });
}