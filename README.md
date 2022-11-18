# Servers

This repository serves a few purposes:
* To host zerulight.cc/serverlist.xml
* To host zerulight.cc/launcher/
* To give templates for various APIs available to use with MHF

Please note that these services are deliberately hosted without HTTPS due to MHF not supporting connecting to such pages directly.

# Set up for 'Custom' server option
Open your `hosts` file and simply add an entry such as follows `12.34.56.78 erupe.custom`, where the IPv4 address is the server you are connecting to.

# [/serverlist.xml](/serverlist.xml)
This is a public server index file. You can submit your own public Erupe instance to this index by contacting us, or by sending a Pull Request with your server appended to the index file.

# [/launcher/en/](/launcher/en/) & [/launcher/jp/](/launcher/jp/)
This is a publicly hosted launcher server for Erupe. This is able to be connected to by using a modified mhl.dll, ensure no conflicting entries exist in your `hosts` file. The EN launcher has different scripting from JP due to the need to run translations.

# MHF Patch Server API
### Requirements
* PHP
* Python 3
### Usage
1. Create a folder named `mhfdat` and two folders inside named `dat` and `exe`.
   (Every file in `exe` goes into the root client folder, every file in `dat` goes into the dat subfolder.)
2. Put your MHF client files into the respective folders.
3. Run `genMhfKey.py` to generate the `key.txt` file.
   (This file will need to be re-generated whenever changes are made to the client files.)
4. Add the server address to the PatchServer options in your Erupe config.json file.
   (Your `mhfdat` folder can exist on a raw HTTP (PHP-less) server by specifying `PatchServerFile` to be a different address, `PatchServerManifest` requires PHP to be served.)
5. Edit [launcher.js](/launcher/en/js/launcher.js), set `updateDisabled` to false.

# MHF Screenshot BBS API
### Requirements
* PHP
* Discord Webhook URL
### Usage
1. Edit [upload.php](api/ss/bbs/upload.php), pasting your Webhook URL into the field.
2. Add the server address to the `ScreenshotAPIURL` option in your Erupe config.json file.
