# cldflr

> static publishing platform fronted by cloudflare, & surge.sh

### install

```
npm install -g cldflr
```

### create/run project

```
cldflr myproj
```

### publish project

```
cldflr myproj myproj.cldflr.com
```

### help

run `cldflr help` to view the follwing output...

```
cldflr platform v0.1.0
dev server & web publishing to cldflr.io (powered by surge)

Usage:
  cldflr <source>             Starts dev server on <source> directory
  cldflr <source> <domain>    Publishes <source> directory to the web at <domain>
  cldflr <source> <output>    Compiles <source> into <output>

Global Commands:
  cldflr list                 List all projects
  cldflr whoami               Show authenticated user
  cldflr login                Authenticate and begin session
  cldflr logout               Terminate session
  cldflr help                 This help message

Project Commands:
  cldflr teardown <domain>    Removes <domain> from the web

Examples:
  cldflr .                    Serves current dir on port 9966
  cldflr . example.com        Publishes current dir to 'example.com'
  cldflr . www                Compiles current dir to 'www' directory

please visit cldflr.io for more information
```
