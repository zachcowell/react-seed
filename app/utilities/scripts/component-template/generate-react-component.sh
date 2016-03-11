#!/bin/sh

# mkdir $1
# touch $1/package.json
# touch $1/$1.js
# touch $1/style.scss
# touch $1/config.js



cat ~/Playground/work/musical-narwhal/app/utilities/scripts/component-template/example-component-template.js > $1/$1.js
# cat ~/Playground/work/musical-narwhal/app/utilities/scripts/component-template/package.json >> $1/package.json
# cat ~/Playground/work/musical-narwhal/app/utilities/scripts/component-template/config.js >> $1/config.js

sed -i.bak s/COMPONENT/$1/g $1/$1.js
sed -i.bak s/PARENT/$2/g $1/$1.js
# sed -i.bak s/COMPONENT/$1/g $1/package.json

rm $1/$1.js.bak # OS X workaround
# rm $1/package.json.bak # OS X workaround
