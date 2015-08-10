# swagger-tools-valid

Try POST http://localhost:9005/users with payload

```
{"invalid":[]}
```

Or CURL command

```
curl -H "Host: localhost:9005" -H "Content-Type: application/json" -H "Accept: */*" --data-binary '{"invalid":[]}' --compressed http://localhost:9005/users
```
