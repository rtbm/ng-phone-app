# ng-phone-app

It's an attempt - unfortunately, to combine ng-material with cordova to provide multiplatform mobile app stack. At most it fails because of XWalk usage which is needed to proper render ng-material directives and its running only with Android. That's not all - despite that inconvenience some CSS styles fails in mobile chromium browser.

### Browser Preview

http://rtbm.space:8888

```
login: root@localhost
password: toor
```

### API
https://github.com/rtbm/node-rest-api

### Development

```shell
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

```shell
$ su -c'npm -g install gulp bower'
$ npm start
```

### Deploy to Device

Install Oracle JDK (http://www.oracle.com/technetwork/java/javase/downloads/index.html)

Select Oracle JDK

```shell
$ su -c'update-alternatives --config java'
```

Install Cordova (https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)
```shell
$ su -c'npm -g install cordova'
```

Install Android SDK - http://developer.android.com/sdk/index.html#Other (with API23)

Install dependencies (on Fedora 23)
```shell
su -c'dnf install glibc.i686 glibc-devel.i686 libstdc++.i686 zlib-devel.i686 ncurses-devel.i686 libX11-devel.i686 libXrender.i686 libXrandr.i686'
```

Setup ADB Device - http://developer.android.com/tools/device.html

Create `platforms` directory and add Android platform
```shell
$ mkdir platforms && cordova platform add android@5
```

Install cordova plugins
```shell
$ chmod +x install.sh && source install.sh
```

Bundle sources & run
```shell
$ npm run deploy
```

## License

The MIT License

Copyright (c) 2016 Appaya Marcin Bogusz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.