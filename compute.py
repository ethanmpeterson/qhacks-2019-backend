import sys
import json


minDist = float(sys.argv[1])
minWidth = float(sys.argv[2])
voltage = float(sys.argv[3])
current = float(sys.argv[4])

k = 0.048
dt = 5 # Temp raise tolerance in C

traceDepth = 2.0/3.0 # in mil which is thousandth of an inch

output = {}
output['currentRating'] = k * pow(dt, 0.44) * pow(traceDepth * minWidth, 0.725) # gives current rating for the PCB traces in amps
print(json.dumps(output))
sys.stdout.flush()
exit()

