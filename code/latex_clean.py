import glob
import os
import pdb
import re

base_dir = "C:/Users/beibinli/dev/calibration/"
bib_name = "references.bib"


def extract_figure_name(tex_name):
    f = open(tex_name, "r", encoding='utf8')

    all_figures = []
    for line in f:
        if line.find("includegraphics") < 0:
            continue
        figurename = re.findall(r"\\includegraphics\[.*?\]{(.*?)\}", line)
        print(figurename)
        if not figurename:
            figurename = re.findall(r"\\includegraphics{(.*?)\}", line)

        figurename = [
            os.path.abspath(os.path.join(base_dir, fn)) for fn in figurename
        ]
        all_figures += figurename

    return all_figures


def extract_bib(tex_name):
    f = open(tex_name, "r", encoding='utf8')

    citations = []
    for line in f:
        if line.find("cite") < 0:
            continue

        for regex in [r"\\cite{(.*?)\}", r"\\citep{(.*?)\}"]:
            cites = re.findall(regex, line)
            citations += cites

    return citations


files = glob.glob(os.path.join(base_dir, "*.tex"))

print("Tex Files:", files)

to_save_regex = [
    ".*\.bib", ".*\.bbl", ".*\.blg", ".*\.cls", "ACM.*", ".*\.tex", "\.git.*",
    ".*Makefile.*"
]

# add figures
needed_files = []
for filename in files:
    needed_files += extract_figure_name(filename)

# ignore case
needed_files = [fname.lower() for fname in needed_files]

# remove un-needed files
for root, dirs, files in os.walk(base_dir):
    for filename in files:
        filename = os.path.abspath(os.path.join(root, filename))

        if filename.lower() in needed_files:
            continue

        need = False
        for regex in to_save_regex:
            if len(re.findall(regex, filename)):
                need = True
                break

        if need:
            continue

        # Now, we know this file is not needed!
        print("To Remove:", filename)
        # pdb.set_trace()
        os.remove(filename)

# %% Handle citation

files = glob.glob(os.path.join(base_dir, "*.tex"))

citations = []
for filename in files:
    citations += extract_bib(filename)

citations = list(set(citations))

citations_split = []

for cite in citations:
    citations_split += cite.split(",")

citations = [s.strip().rstrip() for s in citations_split]
citations = list(set(citations))

# %% Handle Bib file
bib = open(os.path.join(base_dir, bib_name), "r", encoding='utf8').read()

# Remove Lines with URLs
bib = bib.split("\n")
bib = [
    line for line in bib if line.find(" url ") < 0 and line.find("www.") < 0 and
    line.find("http") < 0
]

bib = "\n".join(bib)
bib = bib.replace("\n", " ")

all_bib = bib.split("@")

needed_bib = []

# %%
for bi in all_bib:
    for cite in citations:
        if cite in bi:
            needed_bib.append(bi)
            print(cite)

            # pdb.set_trace()
            break

f = open(os.path.join(base_dir, bib_name), "w", encoding='utf8')
for bi in needed_bib:
    f.write("@" + bi + "\n\n")

f.close()
