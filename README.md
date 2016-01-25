superagent-defaults
===================

Forked from https://github.com/camshaft/superagent-defaults

Difference
----------

changes are made in `lib/context.js` at the end of the file

### Add Instance support

```
import {superagent} from "superagent-guten"

var request = superagent()

request
  .get("/auth")
  .use(prefix(API_URL))

var vehicle = request.new()
  .use(prefix(`${API_URL}/vehicles/${vehicle_id}`))

vehicle
  .get("/charge_state")
```

### Changes on Request instance

- `use(fn)` is using `on("request", fn)` now
- Add `get`, `post`, `put`, ... methods
