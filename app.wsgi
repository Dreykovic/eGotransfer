#! /usr/bin/python3

import logging
import sys
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/home/audrey/Documents/Workspace/eGo/eGotransfer')
from app import app as application
application.secret_key = 'change moi'