import os
import zlib
from multiprocessing import Pool


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
    return crc32(file), filetime(file), file.filename, file.size


class MhfFile:
    def __init__(self, filename, size):
        self.filename = filename
        self.size = size


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

with open('key00.txt', 'w') as fp:
    fp.write(''.join(key))
