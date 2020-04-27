import functools

from flask import Blueprint, request, jsonify
from . import WordTree

bp = Blueprint('synonym_list', __name__, url_prefix='/api')

@bp.route('/synonym_list', methods=('GET',))
def register():
    word = request.args.get('word')
    return jsonify(WordTree.show_syns(word))
