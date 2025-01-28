## Start MyApp

    ./myapp.sh

## Redis Keys

```
./redis-cli.sh

keys *

hgetall "myapp||name"

hgetall "myapp||age"
```

## Start Demo

    ./dapr.sh

## Show Dashboard

    dapr dashboard

## Useful links

- [Dapr dashboard](http://localhost:8080/overview)
- [DNS forwarding | Consul](http://localhost:8500/ui/dc1/services)
- [Tracing system | Zipkin ](http://localhost:9411/zipkin/?lookback=15m&endTs=1738077092643&limit=10)

## Stop Dapr

    ./stop-dapr.sh
