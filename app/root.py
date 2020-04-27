import functools

from flask import Blueprint, render_template

bp = Blueprint('root', __name__)


@bp.route('/', methods=('GET',))
def register():
    return render_template('root.html')
