import sys
import json


minDist = float(sys.argv[1])
minWidth = float(sys.argv[2])
voltage = float(sys.argv[3])
current = float(sys.argv[4])

k = 0.048
dt = 0.25

output = {}
output['currentRating'] = k * pow(dt, 0.44) * pow(current, 0.725)
print(json.dumps(output))
sys.stdout.flush()
exit()

