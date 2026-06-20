from html.parser import HTMLParser
from pathlib import Path

html = Path('index.html').read_text(encoding='utf-8')

class MyParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack=[]
        self.errors=[]
    def handle_starttag(self,tag,attrs):
        if tag not in ('br','img','meta','link','input','hr','area','col','base','embed','param','source','track','wbr','iframe'):
            self.stack.append((tag,self.getpos()))
    def handle_endtag(self,tag):
        if not self.stack:
            self.errors.append(f'extraneous end tag </{tag}> at {self.getpos()}')
            return
        expected, pos = self.stack.pop()
        if expected!=tag:
            self.errors.append(f'mismatched tag </{tag}> expected </{expected}> at {self.getpos()}')

parser=MyParser()
parser.feed(html)

print('Remaining unclosed tags (top 10):', [t for t,p in parser.stack][:10])
print('Errors:', parser.errors)

import re
ids = re.findall(r'id=["\']([^"\']+)["\']', html)
from collections import Counter
print('Duplicate ids:', [k for k,v in Counter(ids).items() if v>1])
