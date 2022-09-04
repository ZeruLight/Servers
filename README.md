# Servers

This repository serves two purposes:
* To host zerulight.cc/serverlist.xml
* To host zerulight.cc/launcher/

Please note that these services are deliberately hosted without HTTPS due to MHF not supporting connecting to such pages directly.

# Set up for 'Custom' server option
Open your `hosts` file and simply add an entry such as follows `12.34.56.78 erupe.custom`, where the IPv4 address is the server you are connecting to.

# [/serverlist.xml](/serverlist.xml)
This is a public server index file. You can submit your own public Erupe instance to this index by contacting us, or by sending a Pull Request with your server appended to the index file.

# [/launcher/en/](/launcher/en/) & [/launcher/jp/](/launcher/jp/)
This is a publicly hosted launcher server for Erupe. This is able to be connected to by using a modified mhl.dll, ensure no conflicting entries exist in your `hosts` file. The EN launcher has different scripting from JP due to the need to run translations.
