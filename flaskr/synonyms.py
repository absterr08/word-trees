import functools

from flask import Blueprint, request, jsonify
from . import WordTree

bp = Blueprint('synonyms', __name__, url_prefix='/api')

@bp.route('/synonyms', methods=('GET',))
def register():
    word = request.args.get('word')
    # return jsonify(WordTree.build_tree(word))
    return jsonify(WordTree.show_syns(word))
