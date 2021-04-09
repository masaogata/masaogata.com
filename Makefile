.PHONY: run

run: _site/.git _site/index.html

_site/index.html:
	jekyll build

_site/.git:
	mkdir _site \
	&& cd _site \
	&& git init \
	&& git remote add origin git@github.com:masaogata/masaogata.com.git
