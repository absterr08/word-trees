import functools

from flask import Blueprint, request, jsonify
from . import WordTree

bp = Blueprint('synonym_path', __name__, url_prefix='/api')

@bp.route('/synonym_path', methods=('GET',))
def register():
    source = request.args.get('source')
    target = request.args.get('target')
    return jsonify(WordTree.find_path(source, target))
