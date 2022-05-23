try: 
  import simplejson as json
except:
  import json
out = {'key': 'value', 'key2': 4}
print json.dumps(out)