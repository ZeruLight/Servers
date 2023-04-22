import os
import zlib
import sys
import hashlib
from multiprocessing import Pool


def sha256(file):
    with open(file.filename, 'rb') as fp:
        s = fp.read()
        h = hashlib.sha256()
        h.update(s)
    return h.hexdigest().upper()


def crc32(file):
    with open(file.filename, 'rb') as fp:
        h = 0
        while True:
            s = fp.read(65536)
            if not s:
                break
            h = zlib.crc32(s, h)
    return "%08X" % (h & 0xFFFFFFFF)


def filetime(file):
    return int((os.path.getmtime(file.filename) * 10000000) + 116444736000000000).to_bytes(8, 'big')


def fileinfo(file):
    if target == '51':
        filehash = sha256(file)
    else:
        filehash = crc32(file)
    return filehash, filetime(file), file.filename, file.size


class MhfFile:
    def __init__(self, _filename, _size):
        self.filename = _filename
        self.size = _size


target = ''
if len(sys.argv) == 2:
    target = sys.argv[1]
else:
    target = '00'

if target == '51':
    print('Targeting PS3, using SHA256')
else:
    print('Targeting PC, using CRC32')
key = set()
files = set()
for r, _, f in os.walk('mhfdat', topdown=False):
    for name in f:
        fn = os.path.join(r, name)
        fs = os.stat(fn).st_size
        if fs == 0:
            continue
        files.add(MhfFile(fn, fs))


with Pool() as pool:
    infos = pool.map(fileinfo, files)
    for crc, filetime, filename, size in infos:
        dfn = filename.replace('/', '\\')[7:]
        key.add(f'{crc},{filetime[4:8].hex().upper()},{filetime[0:4].hex().upper()},{dfn},{size},0\n')

with open(f'key{target}.txt', 'w') as fp:
    fp.write(''.join(key))
