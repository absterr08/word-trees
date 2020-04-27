import functools

from flask import Blueprint, request, jsonify
from . import WordTree

bp = Blueprint('synonym_tree', __name__, url_prefix='/api')

@bp.route('/synonym_tree', methods=('GET',))
def register():
    word = request.args.get('word')
    return jsonify(WordTree.build_tree(word))
