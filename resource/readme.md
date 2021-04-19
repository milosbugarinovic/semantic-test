# get latest tag

```shell
$ git describe --tags --abbrev=0
v1.1.16
```

# check if tag exists

```shell
$ git rev-parse "v1.1.16"
50e28d3d7bf9f995ff80cefd2fb4da86b6408a66

$ git rev-parse "v1.1.17"
v1.1.17
fatal: ambiguous argument 'v1.1.17': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'

$ $?
Command '128' not found, did you mean:
  command 'x128' from deb vice (3.4.0.dfsg-3)
Try: sudo apt install <deb name>

$ git rev-parse "v1.1.16-alpha"
50e28d3d7bf9f995ff80cefd2fb4da86b6408a66
```

```shell
if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo "tag exists";
else
  echo "tag does not exist"
fi
```

# get tag from current commit

```shell
git tag --points-at HEAD
```
