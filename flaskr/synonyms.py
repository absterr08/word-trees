import functools

from flask import Blueprint, request

bp = Blueprint('synonyms', __name__, url_prefix='/api')

@bp.route('/synonyms', methods=('GET',))
def register():
    word = request.args.get('word')
    return ''