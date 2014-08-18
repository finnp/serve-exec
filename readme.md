# serve-exec

Install with `npm install serve-exec --g`.

This is a small cli experiment with Node pipes and exec. It allows you to expose
stdout of subshell commands through a temporary server.


Now you can start a server:
```bash
$ serve-exec "echo test" "echo what"
Serving on localhost:9090
```

The endpoints look like this, they are serving `stdout` of the
subshells.
```bash
$ curl localhost:9090/0
test
$ curl localhost:9090/1
what
```

Every endpoint can be only requested once. After all endpoints have been
requested once the server is shut down.