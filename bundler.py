import re
import rjsmin
from datetime import datetime

file_name = 'index-source.html'
out_file = 'index.html'

with open(file_name, 'r') as f:
    # Read the original file
    new_file = f.read()

    new_file = new_file.replace('\t','').replace('\n','')

    # Find javascript files
    regex = re.compile(r'<script.*? src=".*?"><\/script>')
    new_js_file = ""
    for match in regex.finditer(new_file):
        jsfile = re.findall(r'src="([^"]*)"', match.group())[0]
        if 'min' not in jsfile:
            with open(jsfile) as js:
                source_code = js.read()
                new_code = rjsmin.jsmin(source_code)
                new_file = new_file.replace(match.group(), "")
                new_js_file += new_code.replace("\t","").replace("\n","") + ";"

    # Write the new javascript file
    with open('main.js', 'w') as out:
        new_file = new_file.replace("<!--main.js-->", "<script src='main.js'></script>")
        out.write(new_js_file)

    # Find stylesheets
    regex = re.compile(r'<link rel="stylesheet" type="text/css" href=".*?">')
    for match in regex.finditer(new_file):
        with open(re.findall(r'href="([^"]*)"', match.group())[0]) as css:
            code = css.read().replace('\n','').replace('\t','')
            script_tag = '<style>' + code + '</style>'
            new_file = new_file.replace(match.group(), script_tag)

    # Write the new file
    with open(out_file, 'w') as out:
        out.write(new_file)